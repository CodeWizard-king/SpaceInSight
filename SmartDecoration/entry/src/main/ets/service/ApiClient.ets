import { http } from '@kit.NetworkKit';
import { util } from '@kit.ArkTS';
import { ApiEnvelope, Health, NameInput, Project, RequirementUpdate, Room } from '../model/Models';

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

  private async request<T>(path: string, method: http.RequestMethod = http.RequestMethod.GET,
                           body: string = ''): Promise<T> {
    const task: http.HttpRequest = http.createHttp();
    try {
      const options: http.HttpRequestOptions = {
        method: method,
        header: { 'Content-Type': 'application/json', 'Authorization': this.authorization },
        expectDataType: http.HttpDataType.STRING,
        connectTimeout: 10000, readTimeout: 10000
      };
      if (body.length > 0) { options.extraData = body; }
      const response: http.HttpResponse = await task.request(this.baseUrl + path, options);
      const envelope: ApiEnvelope<T> = JSON.parse(response.result as string) as ApiEnvelope<T>;
      if (envelope.error !== null) {
        throw new Error(`${envelope.error.message}（${envelope.error.code}）`);
      }
      if (response.responseCode < 200 || response.responseCode >= 300 || envelope.data === null) {
        throw new Error(`请求失败（HTTP ${response.responseCode}）`);
      }
      return envelope.data;
    } finally { task.destroy(); }
  }

  async connect(): Promise<Project[]> {
    const health: Health = await this.request<Health>('/health');
    if (health.status !== 'up') { throw new Error('后端健康检查未通过'); }
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
    return this.request<Room>(`/projects/${encodeURIComponent(projectId)}/rooms`, http.RequestMethod.POST,
      JSON.stringify(input));
  }
  async saveRequirements(projectId: string, room: Room, input: RequirementUpdate): Promise<Room> {
    return this.request<Room>(`/projects/${encodeURIComponent(projectId)}/rooms/${encodeURIComponent(room.room_id)}/requirements`,
      http.RequestMethod.PUT, JSON.stringify(input));
  }
}
