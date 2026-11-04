if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface GaussianViewer_Params {
    api?: ApiClient;
    projectId?: string;
    roomId?: string;
    scene?: GaussianScene;
    status?: string;
    controller?: webview.WebviewController;
    loading?: boolean;
    disposed?: boolean;
    accessTimer?: number;
}
import webview from "@ohos:web.webview";
import util from "@ohos:util";
import cryptoFramework from "@ohos:security.cryptoFramework";
import { ApiClient } from "@normalized:N&&&entry/src/main/ets/service/ApiClient&";
import type { GaussianScene } from '../model/Models';
import { COLOR } from "@normalized:N&&&entry/src/main/ets/common/Tokens&";
export class GaussianViewer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.api = new ApiClient();
        this.projectId = '';
        this.roomId = '';
        this.scene = { scene_id: '', job_id: '', sha256: '', file_size: 0, gaussian_count: 0, registered_images: 0, input_images: 0, scale_status: 'uncalibrated', config_version: '', created_at: '' };
        this.__status = new ObservedPropertySimplePU('准备加载真实 3DGS 模型', this, "status");
        this.controller = new webview.WebviewController();
        this.loading = false;
        this.disposed = false;
        this.accessTimer = -1;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GaussianViewer_Params) {
        if (params.api !== undefined) {
            this.api = params.api;
        }
        if (params.projectId !== undefined) {
            this.projectId = params.projectId;
        }
        if (params.roomId !== undefined) {
            this.roomId = params.roomId;
        }
        if (params.scene !== undefined) {
            this.scene = params.scene;
        }
        if (params.status !== undefined) {
            this.status = params.status;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.loading !== undefined) {
            this.loading = params.loading;
        }
        if (params.disposed !== undefined) {
            this.disposed = params.disposed;
        }
        if (params.accessTimer !== undefined) {
            this.accessTimer = params.accessTimer;
        }
    }
    updateStateVars(params: GaussianViewer_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__status.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__status.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private api: ApiClient;
    private projectId: string;
    private roomId: string;
    private scene: GaussianScene;
    private __status: ObservedPropertySimplePU<string>;
    get status() {
        return this.__status.get();
    }
    set status(newValue: string) {
        this.__status.set(newValue);
    }
    private controller: webview.WebviewController;
    private loading: boolean;
    private disposed: boolean;
    private accessTimer: number;
    aboutToDisappear(): void { this.disposed = true; clearInterval(this.accessTimer); }
    private async verifyAccess(): Promise<void> {
        if (this.disposed)
            return;
        try {
            const scenes: GaussianScene[] = await this.api.scenes(this.projectId, this.roomId);
            if (!scenes.some((item: GaussianScene) => item.scene_id === this.scene.scene_id))
                throw new Error('模型授权已撤回或已到期');
        }
        catch (error) {
            if (!this.disposed) {
                clearInterval(this.accessTimer);
                this.status = '模型不可访问：' + (error as Error).message;
                this.controller.loadUrl('about:blank');
            }
        }
    }
    private async control(action: string): Promise<void> {
        try {
            await this.controller.runJavaScript(`if(window.gsControl)window.gsControl('${action}')`);
        }
        catch (error) {
            this.status = '操作失败：' + (error as Error).message;
        }
    }
    private async load(): Promise<void> {
        if (this.loading)
            return;
        this.loading = true;
        try {
            let ready: boolean = false;
            for (let attempt = 0; attempt < 100 && !this.disposed; attempt++) {
                const error: string = await this.controller.runJavaScript('window.gsError || ""');
                if (error && error !== '""')
                    throw new Error(error);
                if (await this.controller.runJavaScript('window.gsReady === true') === 'true') {
                    ready = true;
                    break;
                }
                await new Promise<void>((resolve) => { setTimeout(resolve, 100); });
            }
            if (this.disposed)
                return;
            if (!ready)
                throw new Error('渲染器初始化超时，请确认模拟器支持 WebGL2');
            this.status = '正在下载并校验模型…';
            const data: ArrayBuffer = await this.api.sceneBytes(this.projectId, this.scene.scene_id);
            const md: cryptoFramework.Md = cryptoFramework.createMd('SHA256');
            await md.update({ data: new Uint8Array(data) });
            const digest: cryptoFramework.DataBlob = await md.digest();
            let hash: string = '';
            for (let i = 0; i < digest.data.length; i++)
                hash += digest.data[i].toString(16).padStart(2, '0');
            if (hash !== this.scene.sha256 || data.byteLength !== this.scene.file_size)
                throw new Error('模型完整性校验失败');
            if (this.disposed)
                return;
            await this.controller.runJavaScript(`window.gs.begin(${data.byteLength})`);
            const base64: util.Base64Helper = new util.Base64Helper();
            for (let offset = 0; offset < data.byteLength; offset += 49152) {
                if (this.disposed)
                    return;
                const chunk: string = base64.encodeToStringSync(new Uint8Array(data.slice(offset, Math.min(offset + 49152, data.byteLength))));
                await this.controller.runJavaScript(`window.gs.chunk(${offset},'${chunk}')`);
            }
            await this.controller.runJavaScript('window.gs.finish().catch(e=>{window.gsError=String(e);document.querySelector("#status").textContent=String(e)})');
            for (let attempt = 0; attempt < 100 && !this.disposed; attempt++) {
                const error: string = await this.controller.runJavaScript('window.gsError || ""');
                if (error && error !== '""')
                    throw new Error(error);
                if (await this.controller.runJavaScript('window.gsLoaded === true') === 'true')
                    break;
                if (attempt === 99)
                    throw new Error('模型解析超时');
                await new Promise<void>((resolve) => { setTimeout(resolve, 100); });
            }
            if (this.disposed)
                return;
            this.status = this.scene.gaussian_count + ' 个高斯 · ' + this.scene.registered_images + '/' + this.scene.input_images + ' 个已恢复视角';
            this.accessTimer = setInterval(() => { this.verifyAccess(); }, 15000);
        }
        catch (error) {
            if (!this.disposed)
                this.status = '加载失败：' + (error as Error).message;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#191B18');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.status);
            Text.fontSize(12);
            Text.fontColor('#D5B47C');
            Text.padding(10);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.scene.config_version === 'brush-local-v1') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('旧预览模型：重新重建可启用精细模型和校准拍摄视角');
                        Text.fontSize(11);
                        Text.fontColor(COLOR.GOLD);
                        Text.padding(6);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({ src: { "id": 0, "type": 30000, params: ['gs/index.html'], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" }, controller: this.controller });
            Web.javaScriptAccess(true);
            Web.domStorageAccess(false);
            Web.fileAccess(true);
            Web.onlineImageAccess(false);
            Web.onPageEnd(() => { this.load(); });
            Web.layoutWeight(1);
            Web.onConsole((event) => { if (event)
                console.info('GaussianViewer: ' + event.message.getMessage()); return false; });
        }, Web);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
            Row.padding(10);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('左转');
            Button.backgroundColor(COLOR.BRAND);
            Button.layoutWeight(1);
            Button.onClick(() => this.control('left'));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('右转');
            Button.backgroundColor(COLOR.BRAND);
            Button.layoutWeight(1);
            Button.onClick(() => this.control('right'));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('拉近');
            Button.backgroundColor(COLOR.BRAND);
            Button.layoutWeight(1);
            Button.onClick(() => this.control('in'));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('拉远');
            Button.backgroundColor(COLOR.BRAND);
            Button.layoutWeight(1);
            Button.onClick(() => this.control('out'));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('复位');
            Button.backgroundColor(COLOR.BRAND);
            Button.layoutWeight(1);
            Button.onClick(() => this.control('reset'));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('切换拍摄视角');
            Button.fontColor(COLOR.GOLD);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => this.control('next'));
            Button.margin({ bottom: 6 });
        }, Button);
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
