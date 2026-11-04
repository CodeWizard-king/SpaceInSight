import http from "@ohos:net.http";
import util from "@ohos:util";
import type { GaussianScene, CostInput, CostConfirmation, ReconSubmit } from '../model/Models';
import type { ApiEnvelope, Health, NameInput, Project, RequirementUpdate, Room } from '../model/Models';
import type { Dashboard, SettingsView, SettingsInput, Annotation, AnnotationInput, Message, MessageInput, Proposal, Validation, Consent, ConsentInput, Cleanup, Capture, CaptureInput, CapturedImage, Quality, ConfirmInput, ExportConfirmation, ExportInput, ExportFile, FloorplanInput, Floorplan, Task, Diagnostics } from '../model/Models';
export class ApiClient {
    private baseUrl: string = 'http://127.0.0.1:8080/api/v1';
    private authorization: string = '';
    configure(url: string, username: string, password: string): void {
        const normalized: string = url.trim().replace(/\/+$/, '');
        if (!/^http:\/\/(127\.0\.0\.1|localhost):[0-9]+\/api\/v1$/.test(normalized)) {
            throw new Error('本地调试请使用 http://127.0.0.1:端口/api/v1');
        }
        if (username.trim().length === 0 || username.includes(':') || password.length === 0) {
            throw new Error('请输入有效的开发账号和密码');
        }
        this.baseUrl = normalized;
        const bytes: Uint8Array = new util.TextEncoder().encodeInto(`${username}:${password}`);
        this.authorization = 'Basic ' + new util.Base64Helper().encodeToStringSync(bytes);
    }
    clear(): void { this.authorization = ''; }
    private async request<T>(path: string, method: http.RequestMethod = http.RequestMethod.GET, body: string = '', key: string = ''): Promise<T> {
        const task: http.HttpRequest = http.createHttp();
        try {
            const options: http.HttpRequestOptions = {
                method: method,
                header: { 'Content-Type': 'application/json', 'Authorization': this.authorization, 'Idempotency-Key': key },
                expectDataType: http.HttpDataType.STRING,
                connectTimeout: 10000, readTimeout: 10000
            };
            if (body.length > 0) {
                options.extraData = body;
            }
            const response: http.HttpResponse = await task.request(this.baseUrl + path, options);
            const envelope: ApiEnvelope<T> = JSON.parse(response.result as string) as ApiEnvelope<T>;
            if (envelope.error !== null) {
                throw new Error(`${envelope.error.message}（${envelope.error.code}）`);
            }
            if (response.responseCode < 200 || response.responseCode >= 300 || envelope.data === null) {
                throw new Error(`请求失败（HTTP ${response.responseCode}）`);
            }
            return envelope.data;
        }
        catch (error) {
            throw new Error((error as Error).message || '网络不可用，请检查本机服务与端口转发');
        }
        finally {
            task.destroy();
        }
    }
    async connect(): Promise<Project[]> {
        const health: Health = await this.request<Health>('/health');
        if (health.status !== 'up') {
            throw new Error('后端健康检查未通过');
        }
        return this.projects();
    }
    async projects(): Promise<Project[]> { return this.request<Project[]>('/projects?limit=100'); }
    async createProject(name: string): Promise<Project> {
        const input: NameInput = { name: name.trim() };
        return this.request<Project>('/projects', http.RequestMethod.POST, JSON.stringify(input));
    }
    async rooms(projectId: string): Promise<Room[]> {
        return this.request<Room[]>(`/projects/${encodeURIComponent(projectId)}/rooms?limit=100`);
    }
    async createRoom(projectId: string, name: string): Promise<Room> {
        const input: NameInput = { name: name.trim() };
        return this.request<Room>(`/projects/${encodeURIComponent(projectId)}/rooms`, http.RequestMethod.POST, JSON.stringify(input));
    }
    async saveRequirements(projectId: string, room: Room, input: RequirementUpdate): Promise<Room> {
        return this.request<Room>(`/projects/${encodeURIComponent(projectId)}/rooms/${encodeURIComponent(room.room_id)}/requirements`, http.RequestMethod.PUT, JSON.stringify(input));
    }
    private path(p: string, r: string): string { return `/projects/${encodeURIComponent(p)}/rooms/${encodeURIComponent(r)}`; }
    dashboard(): Promise<Dashboard> { return this.request<Dashboard>('/app/dashboard'); }
    settings(): Promise<SettingsView> { return this.request<SettingsView>('/account/settings'); }
    saveSettings(input: SettingsInput): Promise<SettingsView> { return this.request<SettingsView>('/account/settings', http.RequestMethod.PUT, JSON.stringify(input)); }
    annotations(p: string, r: string): Promise<Annotation[]> { return this.request<Annotation[]>(this.path(p, r) + '/annotations'); }
    saveAnnotation(p: string, r: string, id: string, input: AnnotationInput): Promise<Annotation> { return this.request<Annotation>(this.path(p, r) + '/annotations' + (id ? '/' + id : ''), id ? http.RequestMethod.PUT : http.RequestMethod.POST, JSON.stringify(input)); }
    messages(p: string, r: string): Promise<Message[]> { return this.request<Message[]>(this.path(p, r) + '/messages'); }
    send(p: string, r: string, text: string): Promise<Message[]> { const input: MessageInput = { text: text }; return this.request<Message[]>(this.path(p, r) + '/messages', http.RequestMethod.POST, JSON.stringify(input)); }
    proposals(p: string, r: string): Promise<Proposal[]> { return this.request<Proposal[]>(this.path(p, r) + '/proposals'); }
    generate(p: string, r: string): Promise<Proposal[]> { return this.request<Proposal[]>(this.path(p, r) + '/proposals', http.RequestMethod.POST); }
    validate(p: string, id: string): Promise<Validation> { return this.request<Validation>(`/projects/${p}/proposals/${id}/validate`, http.RequestMethod.POST); }
    consents(p: string): Promise<Consent[]> { return this.request<Consent[]>(`/projects/${p}/consents`); }
    grant(p: string, scope: string): Promise<Consent> { const input: ConsentInput = { scope: scope, notice_version: 'decover-local-v1', expires_at: new Date(Date.now() + 30 * 86400000).toISOString() }; return this.request<Consent>(`/projects/${p}/consents`, http.RequestMethod.POST, JSON.stringify(input)); }
    revoke(p: string, id: string): Promise<Cleanup> { return this.request<Cleanup>(`/projects/${p}/consents/${id}/revoke`, http.RequestMethod.POST); }
    captures(p: string, r: string): Promise<Capture[]> { return this.request<Capture[]>(this.path(p, r) + '/captures'); }
    capture(p: string, r: string, kind: string, consent: string): Promise<Capture> { const input: CaptureInput = { kind: kind, consent_id: consent }; return this.request<Capture>(this.path(p, r) + '/captures', http.RequestMethod.POST, JSON.stringify(input)); }
    async upload(p: string, id: string, bytes: ArrayBuffer, name: string): Promise<CapturedImage> {
        const task: http.HttpRequest = http.createHttp();
        try {
            const response: http.HttpResponse = await task.request(`${this.baseUrl}/projects/${p}/captures/${id}/images`, {
                method: http.RequestMethod.POST, header: { 'Authorization': this.authorization }, expectDataType: http.HttpDataType.STRING,
                readTimeout: 30000, multiFormDataList: [{ name: 'file', contentType: 'application/octet-stream', remoteFileName: name, data: bytes }]
            });
            const value: ApiEnvelope<CapturedImage> = JSON.parse(response.result as string) as ApiEnvelope<CapturedImage>;
            if (value.error !== null)
                throw new Error(value.error.message);
            if (value.data === null)
                throw new Error('图片上传失败');
            return value.data;
        }
        catch (error) {
            throw new Error((error as Error).message);
        }
        finally {
            task.destroy();
        }
    }
    check(p: string, id: string): Promise<Quality> { return this.request<Quality>(`/projects/${p}/captures/${id}/check`, http.RequestMethod.POST); }
    confirm(p: string, input: ConfirmInput): Promise<ExportConfirmation> { return this.request<ExportConfirmation>(`/projects/${p}/export-confirmations`, http.RequestMethod.POST, JSON.stringify(input)); }
    export(p: string, input: ExportInput): Promise<ExportFile> { return this.request<ExportFile>(`/projects/${p}/exports`, http.RequestMethod.POST, JSON.stringify(input)); }
    exports(p: string): Promise<ExportFile[]> { return this.request<ExportFile[]>(`/projects/${p}/exports`); }
    async download(p: string, id: string): Promise<ArrayBuffer> {
        const task: http.HttpRequest = http.createHttp();
        try {
            const result: http.HttpResponse = await task.request(`${this.baseUrl}/projects/${p}/exports/${id}/file`, { header: { 'Authorization': this.authorization }, expectDataType: http.HttpDataType.ARRAY_BUFFER });
            if (result.responseCode !== 200)
                throw new Error('文件下载失败');
            return result.result as ArrayBuffer;
        }
        finally {
            task.destroy();
        }
    }
    floorplans(p: string, r: string): Promise<Floorplan[]> { return this.request<Floorplan[]>(this.path(p, r) + '/floorplan-confirmations'); }
    floorplan(p: string, r: string, input: FloorplanInput): Promise<Floorplan> { return this.request<Floorplan>(this.path(p, r) + '/floorplan-confirmations', http.RequestMethod.POST, JSON.stringify(input)); }
    tasks(p: string): Promise<Task[]> { return this.request<Task[]>(`/projects/${p}/tasks`); }
    scenes(p: string, r: string): Promise<GaussianScene[]> { return this.request<GaussianScene[]>(this.path(p, r) + '/scenes'); }
    cost(p: string, input: CostInput): Promise<CostConfirmation> { return this.request<CostConfirmation>(`/projects/${p}/cost-confirmations`, http.RequestMethod.POST, JSON.stringify(input)); }
    submitRecon(input: ReconSubmit, key: string): Promise<Task> { return this.request<Task>('/recon/jobs', http.RequestMethod.POST, JSON.stringify(input), key); }
    cancelRecon(p: string, id: string, revision: number): Promise<Task> { return this.request<Task>(`/recon/jobs/${id}/cancel?project_id=${p}`, http.RequestMethod.POST, `{"expected_revision":${revision}}`); }
    async sceneBytes(p: string, id: string): Promise<ArrayBuffer> {
        const task: http.HttpRequest = http.createHttp();
        try {
            const response: http.HttpResponse = await task.request(`${this.baseUrl}/projects/${p}/scenes/${id}/file`, { header: { 'Authorization': this.authorization }, expectDataType: http.HttpDataType.ARRAY_BUFFER, readTimeout: 120000, maxLimit: 150 * 1024 * 1024 });
            if (response.responseCode !== 200)
                throw new Error('模型不可用或授权已撤回');
            return response.result as ArrayBuffer;
        }
        finally {
            task.destroy();
        }
    }
    diagnostics(): Promise<Diagnostics> { return this.request<Diagnostics>('/app/diagnostics'); }
}
