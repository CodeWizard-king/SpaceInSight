import { Project, Room, Requirements, RequirementUpdate } from '../model/Models';
import { ApiClient } from '../service/ApiClient';

@Entry
@Component
struct Index {
  @State private page: string = 'spaces';
  @State private connected: boolean = false;
  @State private busy: boolean = false;
  @State private message: string = '';
  @State private projects: Project[] = [];
  @State private rooms: Room[] = [];
  @State private projectId: string = '';
  @State private projectName: string = '';
  @State private newProject: string = '';
  @State private newRoom: string = '';
  @State private baseUrl: string = 'http://127.0.0.1:8080/api/v1';
  @State private username: string = 'developer';
  @State private password: string = '';
  @State private editingRoom: string = '';
  @State private style: string = '';
  @State private needs: string = '';
  private api: ApiClient = new ApiClient();
  private generation: number = 0;

  aboutToDisappear(): void { this.generation++; this.api.clear(); this.password = ''; }

  private async connect(): Promise<void> {
    this.busy = true; this.message = '';
    const version: number = ++this.generation;
    this.connected = false; this.projects = []; this.rooms = []; this.projectId = '';
    try {
      this.api.configure(this.baseUrl, this.username, this.password);
      const projects: Project[] = await this.api.connect();
      if (version !== this.generation) { return; }
      this.projects = projects; this.connected = true; this.page = 'spaces';
      this.message = '已连接，可以开始创建空间';
      this.password = '';
    } catch (error) {
      this.api.clear(); this.message = `连接失败：${(error as Error).message}`;
    } finally { this.busy = false; }
  }

  private async addProject(): Promise<void> {
    if (this.newProject.trim().length === 0) { return; }
    this.busy = true; this.message = '';
    try {
      const project: Project = await this.api.createProject(this.newProject);
      this.projects = [project, ...this.projects]; this.newProject = '';
      this.message = '项目已保存到后端';
    } catch (error) { this.message = (error as Error).message; }
    finally { this.busy = false; }
  }

  private async openProject(project: Project): Promise<void> {
    this.busy = true; this.message = ''; this.editingRoom = '';
    try {
      this.rooms = await this.api.rooms(project.project_id);
      this.projectId = project.project_id; this.projectName = project.name; this.page = 'rooms';
    } catch (error) { this.message = (error as Error).message; }
    finally { this.busy = false; }
  }

  private async addRoom(): Promise<void> {
    if (this.newRoom.trim().length === 0) { return; }
    this.busy = true; this.message = '';
    try {
      const room: Room = await this.api.createRoom(this.projectId, this.newRoom);
      this.rooms = [...this.rooms, room]; this.newRoom = ''; this.message = '房间已保存到后端';
    } catch (error) { this.message = (error as Error).message; }
    finally { this.busy = false; }
  }

  private async saveRoom(room: Room): Promise<void> {
    this.busy = true; this.message = '';
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
      this.rooms = await this.api.rooms(projectId); this.editingRoom = '';
      this.message = '需求已确认并保存';
    } catch (error) {
      this.message = (error as Error).message;
      // A 409 requires fresh versions before another confirmation; never overwrite silently.
      try { this.rooms = await this.api.rooms(projectId); } catch (_) {}
      this.editingRoom = '';
    } finally { this.busy = false; }
  }

  @Builder
  private intro(title: string, subtitle: string) {
    Column({ space: 8 }) {
      Text(title).fontSize(30).fontWeight(FontWeight.Bold).fontColor('#183B34')
      Text(subtitle).fontSize(14).fontColor('#6E7A72').lineHeight(22)
    }.alignItems(HorizontalAlign.Start).width('100%').margin({ top: 20, bottom: 24 })
  }

  @Builder
  private spaces() {
    this.intro('从一个房间开始', '记录家的现状，让每一次装修决定都有依据。')
    Column({ space: 12 }) {
      Text('我的空间').fontSize(19).fontWeight(FontWeight.Medium).fontColor('#183B34').width('100%')
      if (!this.connected) {
        Text('连接本机服务后，即可创建项目、添加房间和记录需求。')
          .fontSize(15).fontColor('#6E7A72').lineHeight(24)
        Button('连接后端服务').id('connectSettings').width('100%').height(48).backgroundColor('#176B58')
          .onClick(() => { this.page = 'settings'; this.message = ''; })
      } else {
        Row({ space: 8 }) {
          TextInput({ placeholder: '项目名称，如：我的新家', text: this.newProject }).id('projectNameInput')
            .onChange((value: string) => { this.newProject = value; }).layoutWeight(1).maxLength(120)
          Button('创建').id('createProject').height(48).backgroundColor('#176B58')
            .enabled(!this.busy && this.newProject.trim().length > 0).onClick(() => { this.addProject(); })
        }
        if (this.projects.length === 0) {
          Text('还没有空间，先创建第一个项目。').fontSize(14).fontColor('#6E7A72').margin({ top: 16, bottom: 16 })
        }
        ForEach(this.projects, (project: Project) => {
          Row({ space: 12 }) {
            Text('⌂').fontSize(30).fontColor('#176B58').width(42)
            Column({ space: 5 }) {
              Text(project.name).fontSize(18).fontWeight(FontWeight.Medium).fontColor('#183B34')
              Text('查看房间与装修需求').fontSize(12).fontColor('#7B827D')
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
            Text('›').fontSize(26).fontColor('#176B58')
          }.width('100%').padding(16).backgroundColor('#F1F5EF').borderRadius(16)
            .enabled(!this.busy).onClick(() => { this.openProject(project); })
        }, (project: Project) => project.project_id)
      }
    }.padding(20).width('100%').backgroundColor(Color.White).borderRadius(24).alignItems(HorizontalAlign.Start)
    Column({ space: 8 }) {
      Text('关于当前版本').fontSize(16).fontWeight(FontWeight.Medium).fontColor('#183B34')
      Text('现在可以管理空间和需求。采集重建、三维浏览与智能建议将在后续版本接入。')
        .fontSize(13).fontColor('#6E7A72').lineHeight(22)
    }.alignItems(HorizontalAlign.Start).padding(20).margin({ top: 16 }).width('100%')
  }

  @Builder
  private roomList() {
    Button('‹ 返回我的空间').backgroundColor(Color.Transparent).fontColor('#176B58').padding(0)
      .enabled(!this.busy).onClick(() => { this.page = 'spaces'; this.message = ''; this.editingRoom = ''; })
    this.intro(this.projectName, '添加房间，逐一记录每个空间的装修需求。')
    Row({ space: 8 }) {
      TextInput({ placeholder: '房间名称，如：客厅', text: this.newRoom }).id('roomNameInput')
        .maxLength(120).layoutWeight(1).onChange((value: string) => { this.newRoom = value; })
      Button('添加').id('createRoom').height(48).backgroundColor('#176B58')
        .enabled(!this.busy && this.newRoom.trim().length > 0).onClick(() => { this.addRoom(); })
    }.margin({ bottom: 16 })
    if (this.rooms.length === 0) {
      Text('项目中还没有房间。').fontColor('#6E7A72').padding(24)
    }
    ForEach(this.rooms, (room: Room) => {
      Column({ space: 12 }) {
        Text(room.name).fontSize(22).fontWeight(FontWeight.Medium).fontColor('#183B34').width('100%')
        Text(`需求版本 ${room.requirement_version} · ${room.requirements.confirmed ? '已确认' : '待记录'}`)
          .fontSize(12).fontColor('#6E7A72').width('100%')
        if (this.editingRoom === room.room_id) {
          TextInput({ placeholder: '喜欢的风格', text: this.style }).id('styleInput').maxLength(100)
            .onChange((value: string) => { this.style = value; })
          TextArea({ placeholder: '家庭需求、使用习惯或希望改善的地方', text: this.needs }).id('needsInput')
            .height(110).maxLength(2000).onChange((value: string) => { this.needs = value; })
          Button('确认并保存需求').id('saveRequirements').width('100%').backgroundColor('#176B58')
            .enabled(!this.busy).onClick(() => { this.saveRoom(room); })
        } else {
          Text(room.requirements.style || '尚未记录风格').fontSize(15).fontColor('#183B34').width('100%')
          if (room.requirements.household_needs) {
            Text(room.requirements.household_needs as string).fontSize(14).fontColor('#6E7A72').width('100%')
          }
          Button('记录装修需求').id('editRequirements').width('100%').backgroundColor('#E7F0E8').fontColor('#176B58')
            .enabled(!this.busy).onClick(() => {
              this.style = room.requirements.style || ''; this.needs = room.requirements.household_needs || '';
              this.editingRoom = room.room_id;
            })
        }
        Text('尺寸待实测 · 承重属性待专业核验').fontSize(12).fontColor('#8A7756').width('100%')
      }.padding(20).backgroundColor(Color.White).borderRadius(20).margin({ bottom: 14 })
    }, (room: Room) => `${room.room_id}-${room.requirement_version}`)
  }

  @Builder
  private settings() {
    this.intro('连接开发服务', '将模拟器中的空间管理，连接到本机 Java 后端。')
    Column({ space: 16 }) {
      Text('服务地址').fontSize(14).fontColor('#6E7A72').width('100%')
      TextInput({ text: this.baseUrl }).id('serverUrlInput').enabled(!this.busy)
        .onChange((value: string) => { this.baseUrl = value; })
      Text('开发账号').fontSize(14).fontColor('#6E7A72').width('100%')
      TextInput({ text: this.username }).id('usernameInput').enabled(!this.busy)
        .onChange((value: string) => { this.username = value; })
      Text('开发密码').fontSize(14).fontColor('#6E7A72').width('100%')
      TextInput({ placeholder: '输入启动后端时设置的密码', text: this.password }).id('passwordInput')
        .type(InputType.Password).enabled(!this.busy).onChange((value: string) => { this.password = value; })
      Button(this.busy ? '正在连接…' : '连接并进入空间').id('connectBackend').width('100%').height(50)
        .backgroundColor('#176B58').enabled(!this.busy).onClick(() => { this.connect(); })
      Text('开发凭证仅保留在当前应用会话中。退出后需要重新连接。')
        .fontSize(12).fontColor('#7B827D').lineHeight(20)
    }.padding(22).backgroundColor(Color.White).borderRadius(24)
  }

  build() {
    Column() {
      Row() {
        Text('智能装修').fontSize(20).fontWeight(FontWeight.Bold).fontColor('#183B34')
        Blank()
        Text(this.connected ? '● 服务已连接' : '○ 尚未连接').fontSize(12)
          .fontColor(this.connected ? '#176B58' : '#8B8678')
      }.width('100%').padding({ left: 24, right: 24, top: 16, bottom: 8 })
      Scroll() {
        Column() {
          if (this.page === 'settings') { this.settings(); }
          else if (this.page === 'rooms') { this.roomList(); }
          else { this.spaces(); }
          if (this.message.length > 0) {
            Text(this.message).id('statusMessage').fontSize(13).fontColor('#755B35').lineHeight(22)
              .width('100%').margin({ top: 16, bottom: 16 })
          }
          if (this.busy) { LoadingProgress().width(28).height(28).color('#176B58').margin(12); }
        }.alignItems(HorizontalAlign.Start).padding({ left: 24, right: 24, bottom: 24 }).width('100%')
      }.layoutWeight(1).width('100%')
      Row() {
        Button('我的空间').id('spacesTab').layoutWeight(1).backgroundColor(Color.Transparent)
          .fontColor(this.page !== 'settings' ? '#176B58' : '#8B8678').enabled(!this.busy)
          .onClick(() => { this.page = 'spaces'; this.message = ''; })
        Button('连接设置').id('settingsTab').layoutWeight(1).backgroundColor(Color.Transparent)
          .fontColor(this.page === 'settings' ? '#176B58' : '#8B8678').enabled(!this.busy)
          .onClick(() => { this.page = 'settings'; this.message = ''; })
      }.width('100%').height(64).backgroundColor(Color.White)
    }.width('100%').height('100%').padding({ top: 32, bottom: 24 }).backgroundColor('#F5F3ED')
  }
}
