if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    page?: string;
    connected?: boolean;
    busy?: boolean;
    message?: string;
    projects?: Project[];
    rooms?: Room[];
    projectId?: string;
    projectName?: string;
    newProject?: string;
    newRoom?: string;
    baseUrl?: string;
    username?: string;
    password?: string;
    editingRoom?: string;
    style?: string;
    needs?: string;
    api?: ApiClient;
    generation?: number;
}
import type { Project, Room, Requirements, RequirementUpdate } from '../model/Models';
import { ApiClient } from "@normalized:N&&&entry/src/main/ets/service/ApiClient&";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__page = new ObservedPropertySimplePU('spaces', this, "page");
        this.__connected = new ObservedPropertySimplePU(false, this, "connected");
        this.__busy = new ObservedPropertySimplePU(false, this, "busy");
        this.__message = new ObservedPropertySimplePU('', this, "message");
        this.__projects = new ObservedPropertyObjectPU([], this, "projects");
        this.__rooms = new ObservedPropertyObjectPU([], this, "rooms");
        this.__projectId = new ObservedPropertySimplePU('', this, "projectId");
        this.__projectName = new ObservedPropertySimplePU('', this, "projectName");
        this.__newProject = new ObservedPropertySimplePU('', this, "newProject");
        this.__newRoom = new ObservedPropertySimplePU('', this, "newRoom");
        this.__baseUrl = new ObservedPropertySimplePU('http://127.0.0.1:8080/api/v1', this, "baseUrl");
        this.__username = new ObservedPropertySimplePU('developer', this, "username");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__editingRoom = new ObservedPropertySimplePU('', this, "editingRoom");
        this.__style = new ObservedPropertySimplePU('', this, "style");
        this.__needs = new ObservedPropertySimplePU('', this, "needs");
        this.api = new ApiClient();
        this.generation = 0;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.page !== undefined) {
            this.page = params.page;
        }
        if (params.connected !== undefined) {
            this.connected = params.connected;
        }
        if (params.busy !== undefined) {
            this.busy = params.busy;
        }
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.projects !== undefined) {
            this.projects = params.projects;
        }
        if (params.rooms !== undefined) {
            this.rooms = params.rooms;
        }
        if (params.projectId !== undefined) {
            this.projectId = params.projectId;
        }
        if (params.projectName !== undefined) {
            this.projectName = params.projectName;
        }
        if (params.newProject !== undefined) {
            this.newProject = params.newProject;
        }
        if (params.newRoom !== undefined) {
            this.newRoom = params.newRoom;
        }
        if (params.baseUrl !== undefined) {
            this.baseUrl = params.baseUrl;
        }
        if (params.username !== undefined) {
            this.username = params.username;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.editingRoom !== undefined) {
            this.editingRoom = params.editingRoom;
        }
        if (params.style !== undefined) {
            this.style = params.style;
        }
        if (params.needs !== undefined) {
            this.needs = params.needs;
        }
        if (params.api !== undefined) {
            this.api = params.api;
        }
        if (params.generation !== undefined) {
            this.generation = params.generation;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__page.purgeDependencyOnElmtId(rmElmtId);
        this.__connected.purgeDependencyOnElmtId(rmElmtId);
        this.__busy.purgeDependencyOnElmtId(rmElmtId);
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__projects.purgeDependencyOnElmtId(rmElmtId);
        this.__rooms.purgeDependencyOnElmtId(rmElmtId);
        this.__projectId.purgeDependencyOnElmtId(rmElmtId);
        this.__projectName.purgeDependencyOnElmtId(rmElmtId);
        this.__newProject.purgeDependencyOnElmtId(rmElmtId);
        this.__newRoom.purgeDependencyOnElmtId(rmElmtId);
        this.__baseUrl.purgeDependencyOnElmtId(rmElmtId);
        this.__username.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__editingRoom.purgeDependencyOnElmtId(rmElmtId);
        this.__style.purgeDependencyOnElmtId(rmElmtId);
        this.__needs.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__page.aboutToBeDeleted();
        this.__connected.aboutToBeDeleted();
        this.__busy.aboutToBeDeleted();
        this.__message.aboutToBeDeleted();
        this.__projects.aboutToBeDeleted();
        this.__rooms.aboutToBeDeleted();
        this.__projectId.aboutToBeDeleted();
        this.__projectName.aboutToBeDeleted();
        this.__newProject.aboutToBeDeleted();
        this.__newRoom.aboutToBeDeleted();
        this.__baseUrl.aboutToBeDeleted();
        this.__username.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__editingRoom.aboutToBeDeleted();
        this.__style.aboutToBeDeleted();
        this.__needs.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __page: ObservedPropertySimplePU<string>;
    get page() {
        return this.__page.get();
    }
    set page(newValue: string) {
        this.__page.set(newValue);
    }
    private __connected: ObservedPropertySimplePU<boolean>;
    get connected() {
        return this.__connected.get();
    }
    set connected(newValue: boolean) {
        this.__connected.set(newValue);
    }
    private __busy: ObservedPropertySimplePU<boolean>;
    get busy() {
        return this.__busy.get();
    }
    set busy(newValue: boolean) {
        this.__busy.set(newValue);
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __projects: ObservedPropertyObjectPU<Project[]>;
    get projects() {
        return this.__projects.get();
    }
    set projects(newValue: Project[]) {
        this.__projects.set(newValue);
    }
    private __rooms: ObservedPropertyObjectPU<Room[]>;
    get rooms() {
        return this.__rooms.get();
    }
    set rooms(newValue: Room[]) {
        this.__rooms.set(newValue);
    }
    private __projectId: ObservedPropertySimplePU<string>;
    get projectId() {
        return this.__projectId.get();
    }
    set projectId(newValue: string) {
        this.__projectId.set(newValue);
    }
    private __projectName: ObservedPropertySimplePU<string>;
    get projectName() {
        return this.__projectName.get();
    }
    set projectName(newValue: string) {
        this.__projectName.set(newValue);
    }
    private __newProject: ObservedPropertySimplePU<string>;
    get newProject() {
        return this.__newProject.get();
    }
    set newProject(newValue: string) {
        this.__newProject.set(newValue);
    }
    private __newRoom: ObservedPropertySimplePU<string>;
    get newRoom() {
        return this.__newRoom.get();
    }
    set newRoom(newValue: string) {
        this.__newRoom.set(newValue);
    }
    private __baseUrl: ObservedPropertySimplePU<string>;
    get baseUrl() {
        return this.__baseUrl.get();
    }
    set baseUrl(newValue: string) {
        this.__baseUrl.set(newValue);
    }
    private __username: ObservedPropertySimplePU<string>;
    get username() {
        return this.__username.get();
    }
    set username(newValue: string) {
        this.__username.set(newValue);
    }
    private __password: ObservedPropertySimplePU<string>;
    get password() {
        return this.__password.get();
    }
    set password(newValue: string) {
        this.__password.set(newValue);
    }
    private __editingRoom: ObservedPropertySimplePU<string>;
    get editingRoom() {
        return this.__editingRoom.get();
    }
    set editingRoom(newValue: string) {
        this.__editingRoom.set(newValue);
    }
    private __style: ObservedPropertySimplePU<string>;
    get style() {
        return this.__style.get();
    }
    set style(newValue: string) {
        this.__style.set(newValue);
    }
    private __needs: ObservedPropertySimplePU<string>;
    get needs() {
        return this.__needs.get();
    }
    set needs(newValue: string) {
        this.__needs.set(newValue);
    }
    private api: ApiClient;
    private generation: number;
    aboutToDisappear(): void { this.generation++; this.api.clear(); this.password = ''; }
    private async connect(): Promise<void> {
        this.busy = true;
        this.message = '';
        const version: number = ++this.generation;
        this.connected = false;
        this.projects = [];
        this.rooms = [];
        this.projectId = '';
        try {
            this.api.configure(this.baseUrl, this.username, this.password);
            const projects: Project[] = await this.api.connect();
            if (version !== this.generation) {
                return;
            }
            this.projects = projects;
            this.connected = true;
            this.page = 'spaces';
            this.message = '已连接，可以开始创建空间';
            this.password = '';
        }
        catch (error) {
            this.api.clear();
            this.message = `连接失败：${(error as Error).message}`;
        }
        finally {
            this.busy = false;
        }
    }
    private async addProject(): Promise<void> {
        if (this.newProject.trim().length === 0) {
            return;
        }
        this.busy = true;
        this.message = '';
        try {
            const project: Project = await this.api.createProject(this.newProject);
            this.projects = [project, ...this.projects];
            this.newProject = '';
            this.message = '项目已保存到后端';
        }
        catch (error) {
            this.message = (error as Error).message;
        }
        finally {
            this.busy = false;
        }
    }
    private async openProject(project: Project): Promise<void> {
        this.busy = true;
        this.message = '';
        this.editingRoom = '';
        try {
            this.rooms = await this.api.rooms(project.project_id);
            this.projectId = project.project_id;
            this.projectName = project.name;
            this.page = 'rooms';
        }
        catch (error) {
            this.message = (error as Error).message;
        }
        finally {
            this.busy = false;
        }
    }
    private async addRoom(): Promise<void> {
        if (this.newRoom.trim().length === 0) {
            return;
        }
        this.busy = true;
        this.message = '';
        try {
            const room: Room = await this.api.createRoom(this.projectId, this.newRoom);
            this.rooms = [...this.rooms, room];
            this.newRoom = '';
            this.message = '房间已保存到后端';
        }
        catch (error) {
            this.message = (error as Error).message;
        }
        finally {
            this.busy = false;
        }
    }
    private async saveRoom(room: Room): Promise<void> {
        this.busy = true;
        this.message = '';
        const projectId: string = this.projectId;
        try {
            const requirements: Requirements = {
                budget_min: room.requirements.budget_min, budget_max: room.requirements.budget_max,
                style: this.style.trim().length > 0 ? this.style.trim() : null,
                household_needs: this.needs.trim().length > 0 ? this.needs.trim() : null,
                retain_items: room.requirements.retain_items, confirmed: true
            };
            const input: RequirementUpdate = { expected_version: room.requirement_version, requirements: requirements };
            await this.api.saveRequirements(projectId, room, input);
            this.rooms = await this.api.rooms(projectId);
            this.editingRoom = '';
            this.message = '需求已确认并保存';
        }
        catch (error) {
            this.message = (error as Error).message;
            // A 409 requires fresh versions before another confirmation; never overwrite silently.
            try {
                this.rooms = await this.api.rooms(projectId);
            }
            catch (_) { }
            this.editingRoom = '';
        }
        finally {
            this.busy = false;
        }
    }
    private intro(title: string, subtitle: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.alignItems(HorizontalAlign.Start);
            Column.width('100%');
            Column.margin({ top: 20, bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.fontSize(30);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#183B34');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(subtitle);
            Text.fontSize(14);
            Text.fontColor('#6E7A72');
            Text.lineHeight(22);
        }, Text);
        Text.pop();
        Column.pop();
    }
    private spaces(parent = null) {
        this.intro.bind(this)('从一个房间开始', '记录家的现状，让每一次装修决定都有依据。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding(20);
            Column.width('100%');
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我的空间');
            Text.fontSize(19);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor('#183B34');
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.connected) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('连接本机服务后，即可创建项目、添加房间和记录需求。');
                        Text.fontSize(15);
                        Text.fontColor('#6E7A72');
                        Text.lineHeight(24);
                    }, Text);
                    Text.pop();
                    if (!If.canRetake('connectSettings')) {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Button.createWithLabel('连接后端服务');
                            Button.id('connectSettings');
                            Button.width('100%');
                            Button.height(48);
                            Button.backgroundColor('#176B58');
                            Button.onClick(() => { this.page = 'settings'; this.message = ''; });
                        }, Button);
                        Button.pop();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        TextInput.create({ placeholder: '项目名称，如：我的新家', text: this.newProject });
                        TextInput.id('projectNameInput');
                        TextInput.onChange((value: string) => { this.newProject = value; });
                        TextInput.layoutWeight(1);
                        TextInput.maxLength(120);
                    }, TextInput);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('创建');
                        Button.id('createProject');
                        Button.height(48);
                        Button.backgroundColor('#176B58');
                        Button.enabled(!this.busy && this.newProject.trim().length > 0);
                        Button.onClick(() => { this.addProject(); });
                    }, Button);
                    Button.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.projects.length === 0) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create('还没有空间，先创建第一个项目。');
                                    Text.fontSize(14);
                                    Text.fontColor('#6E7A72');
                                    Text.margin({ top: 16, bottom: 16 });
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
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const project = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Row.create({ space: 12 });
                                Row.width('100%');
                                Row.padding(16);
                                Row.backgroundColor('#F1F5EF');
                                Row.borderRadius(16);
                                Row.enabled(!this.busy);
                                Row.onClick(() => { this.openProject(project); });
                            }, Row);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('⌂');
                                Text.fontSize(30);
                                Text.fontColor('#176B58');
                                Text.width(42);
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Column.create({ space: 5 });
                                Column.alignItems(HorizontalAlign.Start);
                                Column.layoutWeight(1);
                            }, Column);
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(project.name);
                                Text.fontSize(18);
                                Text.fontWeight(FontWeight.Medium);
                                Text.fontColor('#183B34');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('查看房间与装修需求');
                                Text.fontSize(12);
                                Text.fontColor('#7B827D');
                            }, Text);
                            Text.pop();
                            Column.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create('›');
                                Text.fontSize(26);
                                Text.fontColor('#176B58');
                            }, Text);
                            Text.pop();
                            Row.pop();
                        };
                        this.forEachUpdateFunction(elmtId, this.projects, forEachItemGenFunction, (project: Project) => project.project_id, false, false);
                    }, ForEach);
                    ForEach.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.alignItems(HorizontalAlign.Start);
            Column.padding(20);
            Column.margin({ top: 16 });
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('关于当前版本');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor('#183B34');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('现在可以管理空间和需求。采集重建、三维浏览与智能建议将在后续版本接入。');
            Text.fontSize(13);
            Text.fontColor('#6E7A72');
            Text.lineHeight(22);
        }, Text);
        Text.pop();
        Column.pop();
    }
    private roomList(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('‹ 返回我的空间');
            Button.backgroundColor(Color.Transparent);
            Button.fontColor('#176B58');
            Button.padding(0);
            Button.enabled(!this.busy);
            Button.onClick(() => { this.page = 'spaces'; this.message = ''; this.editingRoom = ''; });
        }, Button);
        Button.pop();
        this.intro.bind(this)(this.projectName, '添加房间，逐一记录每个空间的装修需求。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.margin({ bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '房间名称，如：客厅', text: this.newRoom });
            TextInput.id('roomNameInput');
            TextInput.maxLength(120);
            TextInput.layoutWeight(1);
            TextInput.onChange((value: string) => { this.newRoom = value; });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('添加');
            Button.id('createRoom');
            Button.height(48);
            Button.backgroundColor('#176B58');
            Button.enabled(!this.busy && this.newRoom.trim().length > 0);
            Button.onClick(() => { this.addRoom(); });
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.rooms.length === 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('项目中还没有房间。');
                        Text.fontColor('#6E7A72');
                        Text.padding(24);
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
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const room = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 12 });
                    Column.padding(20);
                    Column.backgroundColor(Color.White);
                    Column.borderRadius(20);
                    Column.margin({ bottom: 14 });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(room.name);
                    Text.fontSize(22);
                    Text.fontWeight(FontWeight.Medium);
                    Text.fontColor('#183B34');
                    Text.width('100%');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`需求版本 ${room.requirement_version} · ${room.requirements.confirmed ? '已确认' : '待记录'}`);
                    Text.fontSize(12);
                    Text.fontColor('#6E7A72');
                    Text.width('100%');
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (this.editingRoom === room.room_id) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            if (!If.canRetake('styleInput')) {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    TextInput.create({ placeholder: '喜欢的风格', text: this.style });
                                    TextInput.id('styleInput');
                                    TextInput.maxLength(100);
                                    TextInput.onChange((value: string) => { this.style = value; });
                                }, TextInput);
                            }
                            if (!If.canRetake('needsInput')) {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    TextArea.create({ placeholder: '家庭需求、使用习惯或希望改善的地方', text: this.needs });
                                    TextArea.id('needsInput');
                                    TextArea.height(110);
                                    TextArea.maxLength(2000);
                                    TextArea.onChange((value: string) => { this.needs = value; });
                                }, TextArea);
                            }
                            if (!If.canRetake('saveRequirements')) {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Button.createWithLabel('确认并保存需求');
                                    Button.id('saveRequirements');
                                    Button.width('100%');
                                    Button.backgroundColor('#176B58');
                                    Button.enabled(!this.busy);
                                    Button.onClick(() => { this.saveRoom(room); });
                                }, Button);
                                Button.pop();
                            }
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(room.requirements.style || '尚未记录风格');
                                Text.fontSize(15);
                                Text.fontColor('#183B34');
                                Text.width('100%');
                            }, Text);
                            Text.pop();
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                If.create();
                                if (room.requirements.household_needs) {
                                    this.ifElseBranchUpdateFunction(0, () => {
                                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                                            Text.create(room.requirements.household_needs as string);
                                            Text.fontSize(14);
                                            Text.fontColor('#6E7A72');
                                            Text.width('100%');
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
                            if (!If.canRetake('editRequirements')) {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Button.createWithLabel('记录装修需求');
                                    Button.id('editRequirements');
                                    Button.width('100%');
                                    Button.backgroundColor('#E7F0E8');
                                    Button.fontColor('#176B58');
                                    Button.enabled(!this.busy);
                                    Button.onClick(() => {
                                        this.style = room.requirements.style || '';
                                        this.needs = room.requirements.household_needs || '';
                                        this.editingRoom = room.room_id;
                                    });
                                }, Button);
                                Button.pop();
                            }
                        });
                    }
                }, If);
                If.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('尺寸待实测 · 承重属性待专业核验');
                    Text.fontSize(12);
                    Text.fontColor('#8A7756');
                    Text.width('100%');
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.rooms, forEachItemGenFunction, (room: Room) => `${room.room_id}-${room.requirement_version}`, false, false);
        }, ForEach);
        ForEach.pop();
    }
    private settings(parent = null) {
        this.intro.bind(this)('连接开发服务', '将模拟器中的空间管理，连接到本机 Java 后端。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.padding(22);
            Column.backgroundColor(Color.White);
            Column.borderRadius(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('服务地址');
            Text.fontSize(14);
            Text.fontColor('#6E7A72');
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.baseUrl });
            TextInput.id('serverUrlInput');
            TextInput.enabled(!this.busy);
            TextInput.onChange((value: string) => { this.baseUrl = value; });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('开发账号');
            Text.fontSize(14);
            Text.fontColor('#6E7A72');
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.username });
            TextInput.id('usernameInput');
            TextInput.enabled(!this.busy);
            TextInput.onChange((value: string) => { this.username = value; });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('开发密码');
            Text.fontSize(14);
            Text.fontColor('#6E7A72');
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '输入启动后端时设置的密码', text: this.password });
            TextInput.id('passwordInput');
            TextInput.type(InputType.Password);
            TextInput.enabled(!this.busy);
            TextInput.onChange((value: string) => { this.password = value; });
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.busy ? '正在连接…' : '连接并进入空间');
            Button.id('connectBackend');
            Button.width('100%');
            Button.height(50);
            Button.backgroundColor('#176B58');
            Button.enabled(!this.busy);
            Button.onClick(() => { this.connect(); });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('开发凭证仅保留在当前应用会话中。退出后需要重新连接。');
            Text.fontSize(12);
            Text.fontColor('#7B827D');
            Text.lineHeight(20);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.padding({ top: 32, bottom: 24 });
            Column.backgroundColor('#F5F3ED');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ left: 24, right: 24, top: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('智能装修');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#183B34');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.connected ? '● 服务已连接' : '○ 尚未连接');
            Text.fontSize(12);
            Text.fontColor(this.connected ? '#176B58' : '#8B8678');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
            Scroll.width('100%');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.padding({ left: 24, right: 24, bottom: 24 });
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.page === 'settings') {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.settings.bind(this)();
                });
            }
            else if (this.page === 'rooms') {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.roomList.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.spaces.bind(this)();
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.message.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    if (!If.canRetake('statusMessage')) {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(this.message);
                            Text.id('statusMessage');
                            Text.fontSize(13);
                            Text.fontColor('#755B35');
                            Text.lineHeight(22);
                            Text.width('100%');
                            Text.margin({ top: 16, bottom: 16 });
                        }, Text);
                        Text.pop();
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.busy) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        LoadingProgress.create();
                        LoadingProgress.width(28);
                        LoadingProgress.height(28);
                        LoadingProgress.color('#176B58');
                        LoadingProgress.margin(12);
                    }, LoadingProgress);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(64);
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('我的空间');
            Button.id('spacesTab');
            Button.layoutWeight(1);
            Button.backgroundColor(Color.Transparent);
            Button.fontColor(this.page !== 'settings' ? '#176B58' : '#8B8678');
            Button.enabled(!this.busy);
            Button.onClick(() => { this.page = 'spaces'; this.message = ''; });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('连接设置');
            Button.id('settingsTab');
            Button.layoutWeight(1);
            Button.backgroundColor(Color.Transparent);
            Button.fontColor(this.page === 'settings' ? '#176B58' : '#8B8678');
            Button.enabled(!this.busy);
            Button.onClick(() => { this.page = 'settings'; this.message = ''; });
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "cn.smartdecoration.app", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
