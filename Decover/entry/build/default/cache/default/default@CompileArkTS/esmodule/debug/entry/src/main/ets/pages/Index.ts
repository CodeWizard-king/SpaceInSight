if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    page?: Page;
    guideIndex?: number;
    activeRoom?: number;
    quality?: number;
    skipped?: boolean;
    chatChoice?: number;
    proposal?: number;
    privacyCloud?: boolean;
    privacyAI?: boolean;
    privacyImprove?: boolean;
    privacyShare?: boolean;
    exportType?: number;
    showSummary?: boolean;
    splashReady?: boolean;
}
import { COLOR } from "@bundle:com.decover.space/entry/ets/common/Tokens";
import { BottomNav, Chip, MetricCard, PrimaryButton, SectionTitle, SettingRow, TopBar } from "@bundle:com.decover.space/entry/ets/components/Common";
enum Page {
    Splash = 0,
    Login = 1,
    Home = 2,
    Create = 3,
    Guide = 4,
    Camera = 5,
    Report = 6,
    Tasks = 7,
    Viewer = 8,
    Annotate = 9,
    Chat = 10,
    Proposal = 11,
    Validation = 12,
    Export = 13,
    Floorplan = 14,
    Privacy = 15,
    Settings = 16,
    Workbench = 17
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__page = new ObservedPropertySimplePU(Page.Splash, this, "page");
        this.__guideIndex = new ObservedPropertySimplePU(0, this, "guideIndex");
        this.__activeRoom = new ObservedPropertySimplePU(0, this, "activeRoom");
        this.__quality = new ObservedPropertySimplePU(80, this, "quality");
        this.__skipped = new ObservedPropertySimplePU(false, this, "skipped");
        this.__chatChoice = new ObservedPropertySimplePU(1, this, "chatChoice");
        this.__proposal = new ObservedPropertySimplePU(0, this, "proposal");
        this.__privacyCloud = new ObservedPropertySimplePU(true, this, "privacyCloud");
        this.__privacyAI = new ObservedPropertySimplePU(true, this, "privacyAI");
        this.__privacyImprove = new ObservedPropertySimplePU(false, this, "privacyImprove");
        this.__privacyShare = new ObservedPropertySimplePU(false, this, "privacyShare");
        this.__exportType = new ObservedPropertySimplePU(0, this, "exportType");
        this.__showSummary = new ObservedPropertySimplePU(false, this, "showSummary");
        this.__splashReady = new ObservedPropertySimplePU(false, this, "splashReady");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.page !== undefined) {
            this.page = params.page;
        }
        if (params.guideIndex !== undefined) {
            this.guideIndex = params.guideIndex;
        }
        if (params.activeRoom !== undefined) {
            this.activeRoom = params.activeRoom;
        }
        if (params.quality !== undefined) {
            this.quality = params.quality;
        }
        if (params.skipped !== undefined) {
            this.skipped = params.skipped;
        }
        if (params.chatChoice !== undefined) {
            this.chatChoice = params.chatChoice;
        }
        if (params.proposal !== undefined) {
            this.proposal = params.proposal;
        }
        if (params.privacyCloud !== undefined) {
            this.privacyCloud = params.privacyCloud;
        }
        if (params.privacyAI !== undefined) {
            this.privacyAI = params.privacyAI;
        }
        if (params.privacyImprove !== undefined) {
            this.privacyImprove = params.privacyImprove;
        }
        if (params.privacyShare !== undefined) {
            this.privacyShare = params.privacyShare;
        }
        if (params.exportType !== undefined) {
            this.exportType = params.exportType;
        }
        if (params.showSummary !== undefined) {
            this.showSummary = params.showSummary;
        }
        if (params.splashReady !== undefined) {
            this.splashReady = params.splashReady;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__page.purgeDependencyOnElmtId(rmElmtId);
        this.__guideIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__activeRoom.purgeDependencyOnElmtId(rmElmtId);
        this.__quality.purgeDependencyOnElmtId(rmElmtId);
        this.__skipped.purgeDependencyOnElmtId(rmElmtId);
        this.__chatChoice.purgeDependencyOnElmtId(rmElmtId);
        this.__proposal.purgeDependencyOnElmtId(rmElmtId);
        this.__privacyCloud.purgeDependencyOnElmtId(rmElmtId);
        this.__privacyAI.purgeDependencyOnElmtId(rmElmtId);
        this.__privacyImprove.purgeDependencyOnElmtId(rmElmtId);
        this.__privacyShare.purgeDependencyOnElmtId(rmElmtId);
        this.__exportType.purgeDependencyOnElmtId(rmElmtId);
        this.__showSummary.purgeDependencyOnElmtId(rmElmtId);
        this.__splashReady.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__page.aboutToBeDeleted();
        this.__guideIndex.aboutToBeDeleted();
        this.__activeRoom.aboutToBeDeleted();
        this.__quality.aboutToBeDeleted();
        this.__skipped.aboutToBeDeleted();
        this.__chatChoice.aboutToBeDeleted();
        this.__proposal.aboutToBeDeleted();
        this.__privacyCloud.aboutToBeDeleted();
        this.__privacyAI.aboutToBeDeleted();
        this.__privacyImprove.aboutToBeDeleted();
        this.__privacyShare.aboutToBeDeleted();
        this.__exportType.aboutToBeDeleted();
        this.__showSummary.aboutToBeDeleted();
        this.__splashReady.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __page: ObservedPropertySimplePU<Page>;
    get page() {
        return this.__page.get();
    }
    set page(newValue: Page) {
        this.__page.set(newValue);
    }
    private __guideIndex: ObservedPropertySimplePU<number>;
    get guideIndex() {
        return this.__guideIndex.get();
    }
    set guideIndex(newValue: number) {
        this.__guideIndex.set(newValue);
    }
    private __activeRoom: ObservedPropertySimplePU<number>;
    get activeRoom() {
        return this.__activeRoom.get();
    }
    set activeRoom(newValue: number) {
        this.__activeRoom.set(newValue);
    }
    private __quality: ObservedPropertySimplePU<number>;
    get quality() {
        return this.__quality.get();
    }
    set quality(newValue: number) {
        this.__quality.set(newValue);
    }
    private __skipped: ObservedPropertySimplePU<boolean>;
    get skipped() {
        return this.__skipped.get();
    }
    set skipped(newValue: boolean) {
        this.__skipped.set(newValue);
    }
    private __chatChoice: ObservedPropertySimplePU<number>;
    get chatChoice() {
        return this.__chatChoice.get();
    }
    set chatChoice(newValue: number) {
        this.__chatChoice.set(newValue);
    }
    private __proposal: ObservedPropertySimplePU<number>;
    get proposal() {
        return this.__proposal.get();
    }
    set proposal(newValue: number) {
        this.__proposal.set(newValue);
    }
    private __privacyCloud: ObservedPropertySimplePU<boolean>;
    get privacyCloud() {
        return this.__privacyCloud.get();
    }
    set privacyCloud(newValue: boolean) {
        this.__privacyCloud.set(newValue);
    }
    private __privacyAI: ObservedPropertySimplePU<boolean>;
    get privacyAI() {
        return this.__privacyAI.get();
    }
    set privacyAI(newValue: boolean) {
        this.__privacyAI.set(newValue);
    }
    private __privacyImprove: ObservedPropertySimplePU<boolean>;
    get privacyImprove() {
        return this.__privacyImprove.get();
    }
    set privacyImprove(newValue: boolean) {
        this.__privacyImprove.set(newValue);
    }
    private __privacyShare: ObservedPropertySimplePU<boolean>;
    get privacyShare() {
        return this.__privacyShare.get();
    }
    set privacyShare(newValue: boolean) {
        this.__privacyShare.set(newValue);
    }
    private __exportType: ObservedPropertySimplePU<number>;
    get exportType() {
        return this.__exportType.get();
    }
    set exportType(newValue: number) {
        this.__exportType.set(newValue);
    }
    private __showSummary: ObservedPropertySimplePU<boolean>;
    get showSummary() {
        return this.__showSummary.get();
    }
    set showSummary(newValue: boolean) {
        this.__showSummary.set(newValue);
    }
    private __splashReady: ObservedPropertySimplePU<boolean>;
    get splashReady() {
        return this.__splashReady.get();
    }
    set splashReady(newValue: boolean) {
        this.__splashReady.set(newValue);
    }
    aboutToAppear(): void {
        setTimeout(() => { this.splashReady = true; }, 700);
        setTimeout(() => { this.page = Page.Home; }, 1500);
    }
    go(page: Page): void { this.page = page; }
    back(): void { this.page = Page.Home; }
    nav(index: number, parent = null) {
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new BottomNav(this, { current: index, onChange: (i: number) => {
                            if (i === 0)
                                this.go(Page.Home);
                            if (i === 1)
                                this.go(Page.Tasks);
                            if (i === 2)
                                this.go(Page.Create);
                            if (i === 3)
                                this.go(Page.Proposal);
                            if (i === 4)
                                this.go(Page.Privacy);
                        } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 36, col: 5 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            current: index,
                            onChange: (i: number) => {
                                if (i === 0)
                                    this.go(Page.Home);
                                if (i === 1)
                                    this.go(Page.Tasks);
                                if (i === 2)
                                    this.go(Page.Create);
                                if (i === 3)
                                    this.go(Page.Proposal);
                                if (i === 4)
                                    this.go(Page.Privacy);
                            }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "BottomNav" });
        }
    }
    glassButton(label: string, action: () => void, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(label);
            Button.width(44);
            Button.height(44);
            Button.fontSize(18);
            Button.fontColor(Color.White);
            Button.backgroundColor(COLOR.GLASS);
            Button.borderRadius(22);
            Button.backdropBlur(16);
            Button.onClick(action);
        }, Button);
        Button.pop();
    }
    projectCard(image: Resource, name: string, meta: string, status: string, action: () => void, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('48%');
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.clip(true);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.onClick(action);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(image);
            Image.width('100%');
            Image.height(128);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (status.indexOf('%') >= 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Progress.create({ value: 68, total: 100, type: ProgressType.Linear });
                        Progress.height(3);
                        Progress.color(COLOR.GOLD);
                    }, Progress);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.width('100%');
            Column.padding(12);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(name);
            Text.fontSize(15);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor(COLOR.INK);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(meta);
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(status);
            Text.fontSize(11);
            Text.fontColor(status.indexOf('完成') >= 0 ? COLOR.SUCCESS : COLOR.BRAND);
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    SplashPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Center });
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(COLOR.INK);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width(160);
            Stack.height(140);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇');
            Text.fontSize(116);
            Text.fontColor(COLOR.GOLD);
            Text.opacity(this.splashReady ? 1 : 0.2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('D');
            Text.fontSize(42);
            Text.fontWeight(FontWeight.Lighter);
            Text.fontColor('#F2F1EE');
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('DECOVER');
            Text.fontSize(28);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#F2F1EE');
            Text.letterSpacing(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('把真实空间，变成可推敲的方案');
            Text.fontSize(14);
            Text.fontColor('#8E9095');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.splashReady ? '空间引擎已就绪' : '正在加载空间引擎…');
            Text.fontSize(11);
            Text.fontColor('#8E9095');
            Text.position({ bottom: 36 });
        }, Text);
        Text.pop();
        Stack.pop();
    }
    LoginPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.layoutWeight(1);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇');
            Text.fontSize(92);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('让空间被看见');
            Text.fontSize(28);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('扫描重建 · AI 方案 · 数据自主');
            Text.fontSize(14);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.layoutWeight(1);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.padding(24);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '华为账号一键登录', onTap: () => this.go(Page.Home) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 90, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '华为账号一键登录',
                            onTap: () => this.go(Page.Home)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('先随便看看');
            Button.width('100%');
            Button.height(46);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(Color.Transparent);
            Button.border({ width: 1, color: COLOR.BRAND });
            Button.borderRadius(23);
            Button.onClick(() => this.go(Page.Home));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('登录即表示同意《用户协议》与《隐私政策》');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
    }
    HomePage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ left: 20, right: 20, bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.margin({ top: 18, bottom: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('下午好，Jason');
            Text.fontSize(26);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('今天有 1 个空间等待继续采集');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('J');
            Button.width(42);
            Button.height(42);
            Button.backgroundColor(COLOR.INK);
            Button.fontColor(COLOR.GOLD);
            Button.borderRadius(21);
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.width('100%');
            Row.padding(14);
            Row.backgroundColor(COLOR.GOLD_SOFT);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇');
            Text.fontSize(28);
            Text.fontColor(COLOR.BRAND);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('继续采集 · 朝阳小区三居');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor('#6B5A3E');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('客厅还差 2 个角度，约 1 分钟');
            Text.fontSize(11);
            Text.fontColor('#806F53');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('去完成');
            Button.height(34);
            Button.fontSize(12);
            Button.backgroundColor(COLOR.BRAND);
            Button.onClick(() => this.go(Page.Camera));
        }, Button);
        Button.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '我的空间', action: '全部 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 118, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的空间',
                            action: '全部 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
        }, Row);
        this.projectCard.bind(this)({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" }, '朝阳小区 · 三居', '89.6 m² · 3 房间', '重建中 68%', () => this.go(Page.Viewer));
        this.projectCard.bind(this)({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" }, '江景壹号 · 两居', '64.2 m² · 已完成', '✓ 3 个方案', () => this.go(Page.Viewer));
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ top: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('+  扫描新空间');
            Button.width('48%');
            Button.height(78);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(COLOR.CARD);
            Button.border({ width: 1, color: COLOR.HAIR });
            Button.borderRadius(8);
            Button.onClick(() => this.go(Page.Create));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('⌂  识别户型图');
            Button.width('48%');
            Button.height(78);
            Button.fontColor(COLOR.MUTED);
            Button.backgroundColor(COLOR.CARD);
            Button.border({ width: 1, color: COLOR.HAIR });
            Button.borderRadius(8);
            Button.onClick(() => this.go(Page.Floorplan));
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        this.nav.bind(this)(0);
        Column.pop();
    }
    CreatePage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '创建新空间', subtitle: '选择最适合你的建模方式', onBack: () => this.back() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 137, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '创建新空间',
                            subtitle: '选择最适合你的建模方式',
                            onBack: () => this.back()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding(20);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '我的空间 · 11月3日' });
            TextInput.height(50);
            TextInput.backgroundColor(COLOR.CARD);
            TextInput.border({ width: 1, color: COLOR.HAIR });
            TextInput.borderRadius(8);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.padding(18);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.border({ width: 1.5, color: COLOR.GOLD });
            Column.onClick(() => this.go(Page.Guide));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇');
            Text.fontSize(38);
            Text.fontColor(COLOR.BRAND);
            Text.width(54);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('扫描重建');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('用相机环绕空间，生成可浏览的 3D 场景');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('端侧极速');
            Text.fontSize(11);
            Text.fontColor(COLOR.BRAND);
            Text.padding({ left: 10, right: 10, top: 5, bottom: 5 });
            Text.backgroundColor(COLOR.GOLD_SOFT);
            Text.borderRadius(12);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('约 3–5 分钟  ›');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.padding(18);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.onClick(() => this.go(Page.Floorplan));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('⌂');
            Text.fontSize(34);
            Text.fontColor(COLOR.INFO);
            Text.width(54);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('识别户型图');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('上传清晰平面图，自动识别墙体与房间');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('云端高质量 · 需上传    约 10 分钟  ›');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '最近未完成' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 167, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '最近未完成'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◷', title: '朝阳小区 · 三居', detail: '继续采集 ›', onTap: () => this.go(Page.Camera) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 168, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◷',
                            title: '朝阳小区 · 三居',
                            detail: '继续采集 ›',
                            onTap: () => this.go(Page.Camera)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        Column.pop();
        Column.pop();
    }
    GuidePage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '采集准备', subtitle: '端侧极速模式', onBack: () => this.go(Page.Create) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 175, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集准备',
                            subtitle: '端侧极速模式',
                            onBack: () => this.go(Page.Create)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.padding({ left: 20, right: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 18 });
            Column.width('100%');
            Column.height(280);
            Column.justifyContent(FlexAlign.Center);
            Column.padding(24);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.guideIndex === 0 ? '↔' : (this.guideIndex === 1 ? '◎' : '◐'));
            Text.fontSize(78);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['缓慢、平稳地移动', '先拍全景，再补细节', '避免玻璃与强逆光'][this.guideIndex]);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['始终让墙角保持在画面内，系统会自动记录轨迹', '沿房间边缘走一圈，再靠近家具与纹理区域', '拉上纱帘或调整角度，能显著改善重建质量'][this.guideIndex]);
            Text.fontSize(13);
            Text.fontColor(COLOR.MUTED);
            Text.textAlign(TextAlign.Center);
            Text.lineHeight(21);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const i = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('');
                    Text.width(i === this.guideIndex ? 24 : 8);
                    Text.height(8);
                    Text.backgroundColor(i === this.guideIndex ? COLOR.BRAND : '#D3D1C7');
                    Text.borderRadius(4);
                    Text.onClick(() => this.guideIndex = i);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '采集前自检' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 191, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集前自检'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(14);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 4 });
                    Column.layoutWeight(1);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('✓');
                    Text.fontSize(18);
                    Text.fontColor(COLOR.SUCCESS);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.fontSize(11);
                    Text.fontColor(COLOR.MUTED);
                }, Text);
                Text.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, ['光线', '电量', '存储', '障碍物'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
            Row.padding(12);
            Row.backgroundColor('#FAEEDA');
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('!');
            Text.fontColor(COLOR.WARN);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('镜面区域可能影响精度，但仍可继续');
            Text.fontSize(12);
            Text.fontColor('#8A5A10');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(20);
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('全程约 3–5 分钟');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '开始扫描', onTap: () => this.go(Page.Camera) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 209, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '开始扫描',
                            onTap: () => this.go(Page.Camera)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Column.pop();
    }
    CameraPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(COLOR.VOID);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 18, right: 18, top: 18, bottom: 24 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(16);
            Row.backgroundColor(COLOR.GLASS);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('03:24');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已采集 · 覆盖良好');
            Text.fontSize(11);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.alignItems(HorizontalAlign.End);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('剩余约 2 分钟');
            Text.fontSize(11);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('端侧极速模式');
            Text.fontSize(11);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('←  移动有点快，慢一点');
            Text.fontSize(13);
            Text.fontColor(Color.White);
            Text.padding({ left: 18, right: 18, top: 10, bottom: 10 });
            Text.backgroundColor(COLOR.GLASS);
            Text.borderRadius(20);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.onClick(() => this.quality = Math.min(100, this.quality + 4));
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: this.quality, total: 100, type: ProgressType.Ring });
            Progress.width(90);
            Progress.height(90);
            Progress.color(COLOR.GOLD);
            Progress.style({ strokeWidth: 5 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.quality + '%');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('长按结束扫描');
            Text.fontSize(13);
            Text.fontColor(Color.White);
            Text.margin({ top: 10, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('结束并查看质量');
            Button.height(46);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor('#EEFFFFFF');
            Button.border({ width: 1.5, color: COLOR.GOLD });
            Button.borderRadius(23);
            Button.onClick(() => this.go(Page.Report));
        }, Button);
        Button.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('×');
            Button.position({ x: 16, y: 90 });
            Button.width(40);
            Button.height(40);
            Button.fontSize(22);
            Button.fontColor(Color.White);
            Button.backgroundColor(COLOR.GLASS);
            Button.onClick(() => this.go(Page.Guide));
        }, Button);
        Button.pop();
        Stack.pop();
    }
    ReportPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '采集质量报告', subtitle: '朝阳小区 · 三居', onBack: () => this.go(Page.Camera) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 247, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集质量报告',
                            subtitle: '朝阳小区 · 三居',
                            onBack: () => this.go(Page.Camera)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding({ left: 20, right: 20, bottom: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.margin({ top: 12 });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: 86, total: 100, type: ProgressType.Ring });
            Progress.width(150);
            Progress.height(150);
            Progress.color(COLOR.BRAND);
            Progress.style({ strokeWidth: 8 });
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('86');
            Text.fontSize(42);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('质量良好');
            Text.fontSize(12);
            Text.fontColor(COLOR.SUCCESS);
        }, Text);
        Text.pop();
        Column.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('有 1 项可以继续优化');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(12);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.fontSize(10);
                    Text.fontColor(COLOR.MUTED);
                    Text.layoutWeight(1);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['清晰 92', '曝光 88', '覆盖 86', '抖动 79', '纹理 84'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '问题与建议' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 263, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '问题与建议'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.width('100%');
            Row.padding(12);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
            Row.border({ width: 1, color: COLOR.HAIR });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width(88);
            Image.height(78);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(6);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('客厅西墙纹理较弱');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('建议靠近墙面补拍 2 个角度');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'skip', group: 'quality' });
            Checkbox.select(this.skipped);
            Checkbox.selectedColor(COLOR.BRAND);
            Checkbox.onChange((v: boolean) => this.skipped = v);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('跳过此项');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('补拍缺失区域');
            Button.width('100%');
            Button.height(44);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(Color.Transparent);
            Button.border({ width: 1, color: COLOR.BRAND });
            Button.borderRadius(22);
            Button.onClick(() => this.go(Page.Camera));
        }, Button);
        Button.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: this.skipped ? '接受风险并重建' : '开始重建', onTap: () => this.go(Page.Tasks) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 280, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: this.skipped ? '接受风险并重建' : '开始重建',
                            onTap: () => this.go(Page.Tasks)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Column.pop();
    }
    TasksPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding({ left: 20, right: 20, bottom: 20 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '重建任务', subtitle: '1 个进行中 · 1 个排队', back: false, action: '历史' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 289, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '重建任务',
                            subtitle: '1 个进行中 · 1 个排队',
                            back: false,
                            action: '历史'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.clip(true);
            Column.onClick(() => this.go(Page.Viewer));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Bottom });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height(190);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.padding(14);
            Row.backgroundColor('#66000000');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('朝阳小区 · 三居');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('端侧重建 · 剩余约 50 秒');
            Text.fontSize(11);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Progress.create({ value: 68, total: 100, type: ProgressType.Ring });
            Progress.width(58);
            Progress.height(58);
            Progress.color(COLOR.GOLD);
        }, Progress);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('68%');
            Text.fontSize(11);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Stack.pop();
        Row.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(14);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.fontSize(10);
                    Text.fontColor(index < 3 ? COLOR.BRAND : '#B4B2A9');
                    Text.layoutWeight(1);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['✓ 上传', '✓ 重建', '◉ 优化中', '○ 完成'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '队列' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 310, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '队列'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '☁', title: '江景壹号 · 两居', detail: '等待 · 云端' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 311, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '☁',
                            title: '江景壹号 · 两居',
                            detail: '等待 · 云端'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '需要处理' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 312, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '需要处理'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '!', title: '旧居存档 · 一居', detail: '需补拍 ›', onTap: () => this.go(Page.Report) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 313, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '!',
                            title: '旧居存档 · 一居',
                            detail: '需补拍 ›',
                            onTap: () => this.go(Page.Report)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        Column.pop();
        Scroll.pop();
        this.nav.bind(this)(1);
        Column.pop();
    }
    ViewerPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(COLOR.VOID);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 16, right: 16, top: 18 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width('100%');
        }, Row);
        this.glassButton.bind(this)('‹', () => this.go(Page.Home));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('朝阳小区 · 三居');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('3DGS 已就绪 18/18 块 · 标准');
            Text.fontSize(10);
            Text.fontColor('#D9D7D2');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
            Scroll.margin({ top: 14 });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const room = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: room, selected: this.activeRoom === index, dark: true, onTap: () => this.activeRoom = index }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 334, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: room,
                                    selected: this.activeRoom === index,
                                    dark: true,
                                    onTap: () => this.activeRoom = index
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, ['客厅', '主卧', '书房', '厨房'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
        }, Column);
        this.glassButton.bind(this)('✎', () => this.go(Page.Annotate));
        this.glassButton.bind(this)('↔', () => { });
        this.glassButton.bind(this)('⌁', () => this.go(Page.Export));
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.padding(10);
            Row.backgroundColor(COLOR.GLASS);
            Row.borderRadius(18);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('约');
            Text.fontSize(10);
            Text.fontColor(COLOR.WARN);
            Text.padding(4);
            Text.backgroundColor('#DDFFFFFF');
            Text.borderRadius(4);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('沙发墙  4.2 m');
            Text.fontSize(13);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.width('100%');
            Column.padding(16);
            Column.backgroundColor(COLOR.GLASS);
            Column.borderRadius({ topLeft: 20, topRight: 20 });
            Column.margin({ top: 14 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['客厅', '主卧', '书房', '厨房'][this.activeRoom]);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('约 28.6 m²');
            Text.fontSize(12);
            Text.fontColor('#D9D7D2');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('估算');
            Text.fontSize(10);
            Text.fontColor(COLOR.WARN);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('· 12 个语义标签 · 3 项需求');
            Text.fontSize(11);
            Text.fontColor('#D9D7D2');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 2 });
            Row.padding(6);
            Row.backgroundColor(COLOR.GLASS);
            Row.borderRadius(16);
            Row.position({ x: '36%', y: 110 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('流畅');
            Text.fontSize(10);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('标准');
            Text.fontSize(10);
            Text.fontColor(Color.White);
            Text.backgroundColor('#55FFFFFF');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('高清');
            Text.fontSize(10);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        Stack.pop();
    }
    AnnotatePage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.VOID);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.width('100%');
            Stack.height('48%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.padding(16);
        }, Row);
        this.glassButton.bind(this)('‹', () => this.go(Page.Viewer));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('语义标注');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('沙发');
            Text.fontSize(12);
            Text.fontColor(COLOR.GOLD);
            Text.padding(8);
            Text.backgroundColor(COLOR.GLASS);
            Text.border({ width: 1.5, color: COLOR.GOLD });
            Text.borderRadius(16);
            Text.position({ x: '43%', y: '54%' });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
            Scroll.backgroundColor(COLOR.CARD);
            Scroll.borderRadius({ topLeft: 20, topRight: 20 });
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('沙发');
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '家具', selected: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 383, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '家具',
                            selected: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '电器' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 384, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '电器'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '建筑结构' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 385, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '建筑结构'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: '2.18 × 0.92 × 0.84 m' });
            TextInput.height(48);
            TextInput.backgroundColor(COLOR.PAGE);
            TextInput.borderRadius(8);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('尺寸为估算值');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('输入实测值');
            Button.fontSize(12);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(Color.Transparent);
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ placeholder: '添加材质、品牌或使用备注…' });
            TextArea.height(74);
            TextArea.backgroundColor(COLOR.PAGE);
            TextArea.borderRadius(8);
        }, TextArea);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel(item);
                    Button.layoutWeight(1);
                    Button.height(40);
                    Button.fontSize(12);
                    Button.fontColor(COLOR.MUTED);
                    Button.backgroundColor(COLOR.PAGE);
                }, Button);
                Button.pop();
            };
            this.forEachUpdateFunction(elmtId, ['框选', '改色', '删除', '撤销'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '保存标注', onTap: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 399, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '保存标注',
                            onTap: () => this.go(Page.Viewer)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    ChatPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '装修需求助手', subtitle: '● 已理解你的空间数据', onBack: () => this.go(Page.Viewer), action: '摘要', onAction: () => this.showSummary = !this.showSummary }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 407, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '装修需求助手',
                            subtitle: '● 已理解你的空间数据',
                            onBack: () => this.go(Page.Viewer),
                            action: '摘要',
                            onAction: () => this.showSummary = !this.showSummary
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.showSummary) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create();
                        Row.width('100%');
                        Row.padding(12);
                        Row.backgroundColor(COLOR.GOLD_SOFT);
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('已理解 8 项需求');
                        Text.fontSize(13);
                        Text.fontColor(COLOR.BRAND);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Blank.create();
                    }, Blank);
                    Blank.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('2 项待确认');
                        Text.fontSize(12);
                        Text.fontColor(COLOR.WARN);
                    }, Text);
                    Text.pop();
                    Row.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.width('100%');
            Column.padding(20);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已理解 8 项需求 · 2 项待确认');
            Text.fontSize(11);
            Text.fontColor(COLOR.BRAND);
            Text.padding({ left: 12, right: 12, top: 7, bottom: 7 });
            Text.backgroundColor(COLOR.GOLD_SOFT);
            Text.borderRadius(14);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('88%');
            Column.padding(14);
            Column.backgroundColor(COLOR.CARD);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.borderRadius(8);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我看了你扫描的客厅：采光很好，适合亮色木地板。预算大概在什么范围？');
            Text.fontSize(14);
            Text.fontColor(COLOR.INK);
            Text.lineHeight(22);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 7 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: item, selected: this.chatChoice === index, onTap: () => this.chatChoice = index }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 423, col: 17 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: item,
                                    selected: this.chatChoice === index,
                                    onTap: () => this.chatChoice = index
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, ['15 万以内', '15–25 万', '25 万以上'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('15 到 25 万，喜欢亮色木地板，要有儿童房。');
            Text.fontSize(14);
            Text.fontColor('#4A3E2A');
            Text.lineHeight(22);
            Text.padding(14);
            Text.backgroundColor(COLOR.GOLD_SOFT);
            Text.borderRadius(8);
            Text.alignSelf(ItemAlign.End);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('好的。儿童房建议用暖一点的浅木色＋圆角家具。客厅灯光想要哪种氛围？');
            Text.fontSize(14);
            Text.fontColor(COLOR.INK);
            Text.lineHeight(22);
            Text.width('88%');
            Text.padding(14);
            Text.backgroundColor(COLOR.CARD);
            Text.border({ width: 1, color: COLOR.HAIR });
            Text.borderRadius(8);
        }, Text);
        Text.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
            Scroll.height(42);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.padding({ left: 16, right: 16 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '先看预算内' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 435, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '先看预算内'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '要有儿童房' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 436, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '要有儿童房'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '亮色木地板' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 437, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '亮色木地板'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.padding(16);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '输入需求…' });
            TextInput.layoutWeight(1);
            TextInput.height(46);
            TextInput.backgroundColor(COLOR.CARD);
            TextInput.border({ width: 1, color: COLOR.HAIR });
            TextInput.borderRadius(23);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('→');
            Button.width(46);
            Button.height(46);
            Button.backgroundColor(COLOR.BRAND);
            Button.borderRadius(23);
            Button.onClick(() => this.go(Page.Proposal));
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
    }
    ProposalPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height('100%');
            Stack.backgroundColor(COLOR.VOID);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.proposal === 0 ? { "id": 16777223, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" } : { "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.padding({ left: 16, right: 16, top: 18 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width('100%');
        }, Row);
        this.glassButton.bind(this)('‹', () => this.go(Page.Home));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('方案推荐');
            Text.fontSize(17);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('同一机位 · 同一光照');
            Text.fontSize(10);
            Text.fontColor('#D9D7D2');
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Horizontal);
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: item, selected: this.proposal === index, dark: true, onTap: () => this.proposal = index }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 463, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: item,
                                    selected: this.proposal === index,
                                    dark: true,
                                    onTap: () => this.proposal = index
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, ['北欧原木', '现代留白', '自然松弛'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.padding(18);
            Column.backgroundColor(COLOR.GLASS);
            Column.borderRadius({ topLeft: 20, topRight: 20 });
            Column.margin({ top: 12 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['北欧原木 · 稳妥版', '现代留白 · 平衡版', '自然松弛 · 品质版'][this.proposal]);
            Text.fontSize(19);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '换地板', selected: true, dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 470, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '换地板',
                            selected: true,
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '调灯光', dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 471, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '调灯光',
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '加收纳', dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 472, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '加收纳',
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('预算影响');
            Text.fontSize(12);
            Text.fontColor('#D9D7D2');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('+¥12,800 · 置信 94%');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('再调整');
            Button.layoutWeight(1);
            Button.height(44);
            Button.fontColor(Color.White);
            Button.backgroundColor('#22FFFFFF');
            Button.border({ width: 1, color: '#66FFFFFF' });
            Button.onClick(() => this.go(Page.Chat));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('采纳此方案');
            Button.layoutWeight(2);
            Button.height(44);
            Button.fontColor(COLOR.INK);
            Button.backgroundColor(COLOR.GOLD);
            Button.onClick(() => this.go(Page.Validation));
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
    }
    ValidationPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '方案校验', subtitle: '北欧原木 · 稳妥版', onBack: () => this.go(Page.Proposal), action: '导出', onAction: () => this.go(Page.Export) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 490, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '方案校验',
                            subtitle: '北欧原木 · 稳妥版',
                            onBack: () => this.go(Page.Proposal),
                            action: '导出',
                            onAction: () => this.go(Page.Export)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding({ left: 20, right: 20, bottom: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MetricCard(this, { value: '1', label: '尺寸冲突', color: COLOR.ERROR }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 494, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            value: '1',
                            label: '尺寸冲突',
                            color: COLOR.ERROR
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MetricCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MetricCard(this, { value: '+3.2%', label: '预算偏差', color: COLOR.WARN }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 495, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            value: '+3.2%',
                            label: '预算偏差',
                            color: COLOR.WARN
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MetricCard" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new MetricCard(this, { value: '✓', label: '规范风险', color: COLOR.SUCCESS }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 496, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            value: '✓',
                            label: '规范风险',
                            color: COLOR.SUCCESS
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "MetricCard" });
        }
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '校验进度' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 498, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '校验进度'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(14);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.layoutWeight(1);
                    Text.fontSize(11);
                    Text.fontColor(COLOR.SUCCESS);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['✓ 几何', '✓ 动线', '✓ 预算', '✓ 规范'], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '需要处理' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 502, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '需要处理'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding(12);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.onClick(() => this.go(Page.Viewer));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height(150);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(6);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('衣柜与门套间距 42cm');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('低于舒适开门净距，建议将衣柜向左移动 18cm。');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'fix', group: 'validation' });
            Checkbox.select(true);
            Checkbox.selectedColor(COLOR.SUCCESS);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('应用建议修复');
            Text.fontSize(12);
            Text.fontColor(COLOR.TEXT_2);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '一键应用全部修复', onTap: () => this.go(Page.Proposal) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 515, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '一键应用全部修复',
                            onTap: () => this.go(Page.Proposal)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('忽略并导出');
            Button.width('100%');
            Button.height(42);
            Button.fontColor(COLOR.MUTED);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => this.go(Page.Export));
        }, Button);
        Button.pop();
        Column.pop();
        Column.pop();
    }
    ExportPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '方案摘要与导出', subtitle: '所见即所得预览', onBack: () => this.go(Page.Validation), action: '记录' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 523, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '方案摘要与导出',
                            subtitle: '所见即所得预览',
                            onBack: () => this.go(Page.Validation),
                            action: '记录'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.backgroundColor(COLOR.CARD);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.borderRadius(6);
            Column.clip(true);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777223, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height(180);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('朝阳小区 · 三居');
            Text.fontSize(21);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('北欧原木 · 稳妥版');
            Text.fontSize(13);
            Text.fontColor(COLOR.BRAND);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color(COLOR.HAIR);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('空间 89.6 m²  ·  3 房间  ·  12 个语义对象');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('浅橡木地板 / 3000K 无主灯 / 组合收纳柜');
            Text.fontSize(11);
            Text.fontColor(COLOR.TEXT_2);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('校验结论：1 项建议已修复，其余均通过');
            Text.fontSize(11);
            Text.fontColor(COLOR.SUCCESS);
            Text.width('100%');
        }, Text);
        Text.pop();
        Column.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: item, selected: this.exportType === index, onTap: () => this.exportType = index }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 539, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: item,
                                    selected: this.exportType === index,
                                    onTap: () => this.exportType = index
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, ['PDF 方案书', '3D 场景', '图片合集'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◈', title: '隐藏门牌与业主信息', hasToggle: true, toggle: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 542, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◈',
                            title: '隐藏门牌与业主信息',
                            hasToggle: true,
                            toggle: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '生成并分享', onTap: () => this.go(Page.Home) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 545, col: 18 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '生成并分享',
                            onTap: () => this.go(Page.Home)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Column.pop();
    }
    FloorplanPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '户型图识别', subtitle: '检查识别结果后生成模型', onBack: () => this.go(Page.Create) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 551, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '户型图识别',
                            subtitle: '检查识别结果后生成模型',
                            onBack: () => this.go(Page.Create)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding({ left: 20, right: 20, bottom: 20 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height(300);
            Stack.padding(24);
            Stack.backgroundColor(COLOR.CARD);
            Stack.border({ width: 10, color: COLOR.GOLD });
            Stack.borderRadius(4);
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.layoutWeight(2);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('客厅\n28.6 m²');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(true);
            Divider.height('100%');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('主卧\n16.2 m²');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color(COLOR.GOLD);
            Divider.strokeWidth(3);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.layoutWeight(1);
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('厨房\n8.4 m²');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.vertical(true);
            Divider.height('100%');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('儿童房\n11.8 m²');
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('请确认');
            Text.fontSize(10);
            Text.fontColor(COLOR.WARN);
            Text.padding(6);
            Text.backgroundColor('#FAEEDA');
            Text.borderRadius(8);
            Text.position({ x: '62%', y: '44%' });
        }, Text);
        Text.pop();
        Stack.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '逐房间核对' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 570, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '逐房间核对'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '1', title: '客厅', detail: '28.6 m² · 朝南 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 571, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '1',
                            title: '客厅',
                            detail: '28.6 m² · 朝南 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '2', title: '主卧', detail: '16.2 m² · 朝南 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 572, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '2',
                            title: '主卧',
                            detail: '16.2 m² · 朝南 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '3', title: '儿童房', detail: '11.8 m² · 待确认 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 573, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '3',
                            title: '儿童房',
                            detail: '11.8 m² · 待确认 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
            Row.padding(12);
            Row.backgroundColor('#FAEEDA');
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('!');
            Text.fontColor(COLOR.WARN);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('1 处墙段置信度较低，请核对');
            Text.fontSize(12);
            Text.fontColor('#8A5A10');
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '确认 1 处并生成模型', onTap: () => this.go(Page.Tasks) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 582, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '确认 1 处并生成模型',
                            onTap: () => this.go(Page.Tasks)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('重拍 / 换图');
            Button.width('100%');
            Button.height(40);
            Button.fontColor(COLOR.MUTED);
            Button.backgroundColor(Color.Transparent);
        }, Button);
        Button.pop();
        Column.pop();
        Column.pop();
    }
    PrivacyPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding({ left: 20, right: 20, bottom: 24 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '我的', subtitle: '账号 · 隐私 · 设置', back: false, action: '设置', onAction: () => this.go(Page.Settings) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 592, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的',
                            subtitle: '账号 · 隐私 · 设置',
                            back: false,
                            action: '设置',
                            onAction: () => this.go(Page.Settings)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.width('100%');
            Row.padding(14);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
            Row.border({ width: 1, color: COLOR.HAIR });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('♢');
            Text.fontSize(28);
            Text.fontColor(COLOR.SUCCESS);
            Text.width(42);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 4 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('隐私状态：良好');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('云端有 1 份场景副本，可随时撤回');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '我的数据' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 600, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的数据'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◇', title: '空间场景', detail: '3 个 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 601, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◇',
                            title: '空间场景',
                            detail: '3 个 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '≡', title: '需求数据', detail: '8 项 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 602, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '≡',
                            title: '需求数据',
                            detail: '8 项 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '▤', title: '方案记录', detail: '5 份 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 603, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '▤',
                            title: '方案记录',
                            detail: '5 份 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '授权管理' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 604, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '授权管理'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '☁', title: '云端重建上传', hasToggle: true, toggle: this.privacyCloud, onTap: () => this.privacyCloud = !this.privacyCloud }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 605, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '☁',
                            title: '云端重建上传',
                            hasToggle: true,
                            toggle: this.privacyCloud,
                            onTap: () => this.privacyCloud = !this.privacyCloud
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: 'AI', title: 'AI 分析使用数据', hasToggle: true, toggle: this.privacyAI, onTap: () => this.privacyAI = !this.privacyAI }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 606, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: 'AI',
                            title: 'AI 分析使用数据',
                            hasToggle: true,
                            toggle: this.privacyAI,
                            onTap: () => this.privacyAI = !this.privacyAI
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '✦', title: '体验改进计划', hasToggle: true, toggle: this.privacyImprove, onTap: () => this.privacyImprove = !this.privacyImprove }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 607, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '✦',
                            title: '体验改进计划',
                            hasToggle: true,
                            toggle: this.privacyImprove,
                            onTap: () => this.privacyImprove = !this.privacyImprove
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◎', title: '匿名案例共享', hasToggle: true, toggle: this.privacyShare, onTap: () => this.privacyShare = !this.privacyShare }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 608, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◎',
                            title: '匿名案例共享',
                            hasToggle: true,
                            toggle: this.privacyShare,
                            onTap: () => this.privacyShare = !this.privacyShare
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('撤回全部云端数据');
            Button.width('100%');
            Button.height(50);
            Button.fontColor(COLOR.ERROR);
            Button.backgroundColor('#08C0392B');
            Button.border({ width: 1, color: '#55C0392B' });
            Button.borderRadius(8);
        }, Button);
        Button.pop();
        Column.pop();
        Scroll.pop();
        this.nav.bind(this)(4);
        Column.pop();
    }
    SettingsPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '设置与诊断', subtitle: 'Decover 1.0.0', onBack: () => this.go(Page.Privacy) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 619, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '设置与诊断',
                            subtitle: 'Decover 1.0.0',
                            onBack: () => this.go(Page.Privacy)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding({ left: 20, right: 20, bottom: 20 });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '渲染与画质' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 622, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '渲染与画质'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◐', title: '默认画质', detail: '标准 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 623, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◐',
                            title: '默认画质',
                            detail: '标准 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '⌁', title: '省电模式', hasToggle: true, toggle: false }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 624, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '⌁',
                            title: '省电模式',
                            hasToggle: true,
                            toggle: false
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '采集' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 625, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◎', title: '采集清晰度', detail: '高 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 626, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◎',
                            title: '采集清晰度',
                            detail: '高 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◖', title: '实时提示语', hasToggle: true, toggle: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 627, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◖',
                            title: '实时提示语',
                            hasToggle: true,
                            toggle: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '设备诊断' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 628, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '设备诊断'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(16);
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.layoutWeight(1);
                    Text.fontSize(11);
                    Text.fontColor(index === 3 ? COLOR.WARN : COLOR.SUCCESS);
                    Text.textAlign(TextAlign.Center);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['✓ 设备', '✓ 引擎', '✓ 网络', '! 缓存'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '一键诊断', onTap: () => { } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 634, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '一键诊断',
                            onTap: () => { }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '更多' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 635, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '更多'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '▦', title: '企业工作台', detail: '平板 / PC ›', onTap: () => this.go(Page.Workbench) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 636, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '▦',
                            title: '企业工作台',
                            detail: '平板 / PC ›',
                            onTap: () => this.go(Page.Workbench)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: 'i', title: '关于 Decover', detail: '1.0.0 ›' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 637, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: 'i',
                            title: '关于 Decover',
                            detail: '1.0.0 ›'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    WorkbenchPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height('100%');
            Row.backgroundColor(COLOR.VOID);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.width('24%');
            Column.height('100%');
            Column.padding(16);
            Column.backgroundColor('#1E2126');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('DECOVER');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor('#F2F1EE');
            Text.letterSpacing(2);
            Text.width('100%');
            Text.margin({ bottom: 16 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '搜索项目' });
            TextInput.height(38);
            TextInput.backgroundColor('#2B2E33');
            TextInput.fontColor(Color.White);
            TextInput.borderRadius(6);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('项目');
            Text.fontSize(11);
            Text.fontColor('#8E9095');
            Text.width('100%');
            Text.margin({ top: 12 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item);
                    Text.fontSize(13);
                    Text.fontColor(index === 0 ? COLOR.GOLD : '#C9C8C4');
                    Text.width('100%');
                    Text.padding(12);
                    Text.backgroundColor(index === 0 ? '#2B2E33' : Color.Transparent);
                    Text.border({ width: { left: index === 0 ? 3 : 0 }, color: COLOR.GOLD });
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, ['朝阳小区 · 三居', '江景壹号 · 两居', '旧居存档 · 一居'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('‹ 返回手机视图');
            Button.fontSize(11);
            Button.fontColor('#C9C8C4');
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => this.go(Page.Settings));
        }, Button);
        Button.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.layoutWeight(1);
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "com.decover.space", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.position({ x: 20, y: 20 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '客厅', selected: true, dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 659, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '客厅',
                            selected: true,
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '主卧', dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 660, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '主卧',
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '书房', dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 661, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '书房',
                            dark: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('来自你的 Mate · 已接续最后视角');
            Text.fontSize(11);
            Text.fontColor(Color.White);
            Text.padding(10);
            Text.backgroundColor(COLOR.GLASS);
            Text.borderRadius(16);
            Text.position({ x: 20, y: '88%' });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.width('28%');
            Column.height('100%');
            Column.padding(16);
            Column.backgroundColor(COLOR.CARD);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('属性面板');
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '语义', selected: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 668, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '语义',
                            selected: true
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '方案' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 669, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '方案'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '校验' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 670, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '校验'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color(COLOR.HAIR);
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('沙发');
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◇', title: '类型', detail: '家具' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 674, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◇',
                            title: '类型',
                            detail: '家具'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '↔', title: '尺寸', detail: '2.18 × 0.92m' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 675, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '↔',
                            title: '尺寸',
                            detail: '2.18 × 0.92m'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◐', title: '材质', detail: '浅灰织物' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 676, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◐',
                            title: '材质',
                            detail: '浅灰织物'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SettingRow" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '保存更改', onTap: () => { } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 678, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '保存更改',
                            onTap: () => { }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.page === Page.Splash) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.SplashPage.bind(this)();
                });
            }
            else if (this.page === Page.Login) {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.LoginPage.bind(this)();
                });
            }
            else if (this.page === Page.Home) {
                this.ifElseBranchUpdateFunction(2, () => {
                    this.HomePage.bind(this)();
                });
            }
            else if (this.page === Page.Create) {
                this.ifElseBranchUpdateFunction(3, () => {
                    this.CreatePage.bind(this)();
                });
            }
            else if (this.page === Page.Guide) {
                this.ifElseBranchUpdateFunction(4, () => {
                    this.GuidePage.bind(this)();
                });
            }
            else if (this.page === Page.Camera) {
                this.ifElseBranchUpdateFunction(5, () => {
                    this.CameraPage.bind(this)();
                });
            }
            else if (this.page === Page.Report) {
                this.ifElseBranchUpdateFunction(6, () => {
                    this.ReportPage.bind(this)();
                });
            }
            else if (this.page === Page.Tasks) {
                this.ifElseBranchUpdateFunction(7, () => {
                    this.TasksPage.bind(this)();
                });
            }
            else if (this.page === Page.Viewer) {
                this.ifElseBranchUpdateFunction(8, () => {
                    this.ViewerPage.bind(this)();
                });
            }
            else if (this.page === Page.Annotate) {
                this.ifElseBranchUpdateFunction(9, () => {
                    this.AnnotatePage.bind(this)();
                });
            }
            else if (this.page === Page.Chat) {
                this.ifElseBranchUpdateFunction(10, () => {
                    this.ChatPage.bind(this)();
                });
            }
            else if (this.page === Page.Proposal) {
                this.ifElseBranchUpdateFunction(11, () => {
                    this.ProposalPage.bind(this)();
                });
            }
            else if (this.page === Page.Validation) {
                this.ifElseBranchUpdateFunction(12, () => {
                    this.ValidationPage.bind(this)();
                });
            }
            else if (this.page === Page.Export) {
                this.ifElseBranchUpdateFunction(13, () => {
                    this.ExportPage.bind(this)();
                });
            }
            else if (this.page === Page.Floorplan) {
                this.ifElseBranchUpdateFunction(14, () => {
                    this.FloorplanPage.bind(this)();
                });
            }
            else if (this.page === Page.Privacy) {
                this.ifElseBranchUpdateFunction(15, () => {
                    this.PrivacyPage.bind(this)();
                });
            }
            else if (this.page === Page.Settings) {
                this.ifElseBranchUpdateFunction(16, () => {
                    this.SettingsPage.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(17, () => {
                    this.WorkbenchPage.bind(this)();
                });
            }
        }, If);
        If.pop();
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
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.decover.space", moduleName: "entry", pagePath: "pages/Index", pageFullPath: "entry/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });
