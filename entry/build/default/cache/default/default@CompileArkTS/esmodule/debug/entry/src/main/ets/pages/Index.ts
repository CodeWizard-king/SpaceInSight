if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    page?: Page;
    connected?: boolean;
    busy?: boolean;
    splashReady?: boolean;
    userName?: string;
    cards?: ProjectCard[];
    projectId?: string;
    projectName?: string;
    rooms?: Room[];
    activeRoom?: number;
    projectDraft?: string;
    roomDraft?: string;
    guideIndex?: number;
    url?: string;
    account?: string;
    password?: string;
    annotations?: Annotation[];
    annotationId?: string;
    annotationVersion?: number;
    objectName?: string;
    category?: string;
    objectWidth?: string;
    objectDepth?: string;
    objectHeight?: string;
    dimensionStatus?: string;
    dimensionSource?: string;
    material?: string;
    objectNote?: string;
    messages?: Message[];
    chatText?: string;
    budgetMin?: string;
    budgetMax?: string;
    style?: string;
    needs?: string;
    showSummary?: boolean;
    proposals?: Proposal[];
    proposal?: number;
    validation?: Validation | null;
    consents?: Consent[];
    captures?: Capture[];
    captureId?: string;
    qualityReport?: Quality | null;
    uploadAccepted?: boolean;
    previewUri?: string;
    exportType?: number;
    exportAccepted?: boolean;
    exportFile?: ExportFile | null;
    exportFiles?: ExportFile[];
    floorRoomName?: string;
    floorArea?: string;
    floorOrientation?: string;
    floorplans?: Floorplan[];
    tasks?: Task[];
    scenes?: GaussianScene[];
    reconAccepted?: boolean;
    reconReady?: boolean;
    settingsView?: SettingsView;
    diagnostics?: Diagnostics | null;
    api?: ApiClient;
    pendingPage?: Page;
    timers?: number[];
}
import type common from "@ohos:app.ability.common";
import photoAccessHelper from "@ohos:file.photoAccessHelper";
import fileIo from "@ohos:file.fs";
import picker from "@ohos:file.picker";
import { COLOR } from "@normalized:N&&&entry/src/main/ets/common/Tokens&";
import { BottomNav, Chip, MetricCard, PrimaryButton, SectionTitle, SettingRow, TopBar } from "@normalized:N&&&entry/src/main/ets/components/Common&";
import { ApiClient } from "@normalized:N&&&entry/src/main/ets/service/ApiClient&";
import { GaussianViewer } from "@normalized:N&&&entry/src/main/ets/components/GaussianViewer&";
import type { GaussianScene, CostInput, ReconSubmit } from '../model/Models';
import type { Dashboard, ProjectCard, Room, Requirements, RequirementUpdate, Settings, SettingsView, SettingsInput, Annotation, AnnotationInput, Message, Proposal, ProposalAction, Validation, Finding, Consent, Capture, Quality, ConfirmInput, ExportInput, ExportFile, FloorRoom, FloorplanInput, Floorplan, Task, Diagnostics, CapturedImage } from '../model/Models';
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
    Workbench = 17,
    Scene = 18
}
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__page = new ObservedPropertySimplePU(Page.Splash, this, "page");
        this.__connected = new ObservedPropertySimplePU(false, this, "connected");
        this.__busy = new ObservedPropertySimplePU(false, this, "busy");
        this.__splashReady = new ObservedPropertySimplePU(false, this, "splashReady");
        this.__userName = new ObservedPropertySimplePU('', this, "userName");
        this.__cards = new ObservedPropertyObjectPU([], this, "cards");
        this.__projectId = new ObservedPropertySimplePU('', this, "projectId");
        this.__projectName = new ObservedPropertySimplePU('', this, "projectName");
        this.__rooms = new ObservedPropertyObjectPU([], this, "rooms");
        this.__activeRoom = new ObservedPropertySimplePU(0, this, "activeRoom");
        this.__projectDraft = new ObservedPropertySimplePU('', this, "projectDraft");
        this.__roomDraft = new ObservedPropertySimplePU('客厅', this, "roomDraft");
        this.__guideIndex = new ObservedPropertySimplePU(0, this, "guideIndex");
        this.__url = this.createStorageLink('backendUrl', 'http://127.0.0.1:18081/api/v1', "url");
        this.__account = new ObservedPropertySimplePU('developer', this, "account");
        this.__password = new ObservedPropertySimplePU('', this, "password");
        this.__annotations = new ObservedPropertyObjectPU([], this, "annotations");
        this.__annotationId = new ObservedPropertySimplePU('', this, "annotationId");
        this.__annotationVersion = new ObservedPropertySimplePU(0, this, "annotationVersion");
        this.__objectName = new ObservedPropertySimplePU('', this, "objectName");
        this.__category = new ObservedPropertySimplePU('furniture', this, "category");
        this.__objectWidth = new ObservedPropertySimplePU('', this, "objectWidth");
        this.__objectDepth = new ObservedPropertySimplePU('', this, "objectDepth");
        this.__objectHeight = new ObservedPropertySimplePU('', this, "objectHeight");
        this.__dimensionStatus = new ObservedPropertySimplePU('unknown', this, "dimensionStatus");
        this.__dimensionSource = new ObservedPropertySimplePU('', this, "dimensionSource");
        this.__material = new ObservedPropertySimplePU('', this, "material");
        this.__objectNote = new ObservedPropertySimplePU('', this, "objectNote");
        this.__messages = new ObservedPropertyObjectPU([], this, "messages");
        this.__chatText = new ObservedPropertySimplePU('', this, "chatText");
        this.__budgetMin = new ObservedPropertySimplePU('', this, "budgetMin");
        this.__budgetMax = new ObservedPropertySimplePU('', this, "budgetMax");
        this.__style = new ObservedPropertySimplePU('', this, "style");
        this.__needs = new ObservedPropertySimplePU('', this, "needs");
        this.__showSummary = new ObservedPropertySimplePU(false, this, "showSummary");
        this.__proposals = new ObservedPropertyObjectPU([], this, "proposals");
        this.__proposal = new ObservedPropertySimplePU(0, this, "proposal");
        this.__validation = new ObservedPropertyObjectPU(null, this, "validation");
        this.__consents = new ObservedPropertyObjectPU([], this, "consents");
        this.__captures = new ObservedPropertyObjectPU([], this, "captures");
        this.__captureId = new ObservedPropertySimplePU('', this, "captureId");
        this.__qualityReport = new ObservedPropertyObjectPU(null, this, "qualityReport");
        this.__uploadAccepted = new ObservedPropertySimplePU(false, this, "uploadAccepted");
        this.__previewUri = new ObservedPropertySimplePU('', this, "previewUri");
        this.__exportType = new ObservedPropertySimplePU(0, this, "exportType");
        this.__exportAccepted = new ObservedPropertySimplePU(false, this, "exportAccepted");
        this.__exportFile = new ObservedPropertyObjectPU(null, this, "exportFile");
        this.__exportFiles = new ObservedPropertyObjectPU([], this, "exportFiles");
        this.__floorRoomName = new ObservedPropertySimplePU('', this, "floorRoomName");
        this.__floorArea = new ObservedPropertySimplePU('', this, "floorArea");
        this.__floorOrientation = new ObservedPropertySimplePU('', this, "floorOrientation");
        this.__floorplans = new ObservedPropertyObjectPU([], this, "floorplans");
        this.__tasks = new ObservedPropertyObjectPU([], this, "tasks");
        this.__scenes = new ObservedPropertyObjectPU([], this, "scenes");
        this.__reconAccepted = new ObservedPropertySimplePU(false, this, "reconAccepted");
        this.__reconReady = new ObservedPropertySimplePU(false, this, "reconReady");
        this.__settingsView = new ObservedPropertyObjectPU({ version: 0, settings: { quality: 'standard', power_saving: false,
                capture_resolution: 'high', hints: true, improvement_opt_in: false, anonymous_share_opt_in: false } }, this, "settingsView");
        this.__diagnostics = new ObservedPropertyObjectPU(null, this, "diagnostics");
        this.api = new ApiClient();
        this.pendingPage = Page.Home;
        this.timers = [];
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
        if (params.splashReady !== undefined) {
            this.splashReady = params.splashReady;
        }
        if (params.userName !== undefined) {
            this.userName = params.userName;
        }
        if (params.cards !== undefined) {
            this.cards = params.cards;
        }
        if (params.projectId !== undefined) {
            this.projectId = params.projectId;
        }
        if (params.projectName !== undefined) {
            this.projectName = params.projectName;
        }
        if (params.rooms !== undefined) {
            this.rooms = params.rooms;
        }
        if (params.activeRoom !== undefined) {
            this.activeRoom = params.activeRoom;
        }
        if (params.projectDraft !== undefined) {
            this.projectDraft = params.projectDraft;
        }
        if (params.roomDraft !== undefined) {
            this.roomDraft = params.roomDraft;
        }
        if (params.guideIndex !== undefined) {
            this.guideIndex = params.guideIndex;
        }
        if (params.account !== undefined) {
            this.account = params.account;
        }
        if (params.password !== undefined) {
            this.password = params.password;
        }
        if (params.annotations !== undefined) {
            this.annotations = params.annotations;
        }
        if (params.annotationId !== undefined) {
            this.annotationId = params.annotationId;
        }
        if (params.annotationVersion !== undefined) {
            this.annotationVersion = params.annotationVersion;
        }
        if (params.objectName !== undefined) {
            this.objectName = params.objectName;
        }
        if (params.category !== undefined) {
            this.category = params.category;
        }
        if (params.objectWidth !== undefined) {
            this.objectWidth = params.objectWidth;
        }
        if (params.objectDepth !== undefined) {
            this.objectDepth = params.objectDepth;
        }
        if (params.objectHeight !== undefined) {
            this.objectHeight = params.objectHeight;
        }
        if (params.dimensionStatus !== undefined) {
            this.dimensionStatus = params.dimensionStatus;
        }
        if (params.dimensionSource !== undefined) {
            this.dimensionSource = params.dimensionSource;
        }
        if (params.material !== undefined) {
            this.material = params.material;
        }
        if (params.objectNote !== undefined) {
            this.objectNote = params.objectNote;
        }
        if (params.messages !== undefined) {
            this.messages = params.messages;
        }
        if (params.chatText !== undefined) {
            this.chatText = params.chatText;
        }
        if (params.budgetMin !== undefined) {
            this.budgetMin = params.budgetMin;
        }
        if (params.budgetMax !== undefined) {
            this.budgetMax = params.budgetMax;
        }
        if (params.style !== undefined) {
            this.style = params.style;
        }
        if (params.needs !== undefined) {
            this.needs = params.needs;
        }
        if (params.showSummary !== undefined) {
            this.showSummary = params.showSummary;
        }
        if (params.proposals !== undefined) {
            this.proposals = params.proposals;
        }
        if (params.proposal !== undefined) {
            this.proposal = params.proposal;
        }
        if (params.validation !== undefined) {
            this.validation = params.validation;
        }
        if (params.consents !== undefined) {
            this.consents = params.consents;
        }
        if (params.captures !== undefined) {
            this.captures = params.captures;
        }
        if (params.captureId !== undefined) {
            this.captureId = params.captureId;
        }
        if (params.qualityReport !== undefined) {
            this.qualityReport = params.qualityReport;
        }
        if (params.uploadAccepted !== undefined) {
            this.uploadAccepted = params.uploadAccepted;
        }
        if (params.previewUri !== undefined) {
            this.previewUri = params.previewUri;
        }
        if (params.exportType !== undefined) {
            this.exportType = params.exportType;
        }
        if (params.exportAccepted !== undefined) {
            this.exportAccepted = params.exportAccepted;
        }
        if (params.exportFile !== undefined) {
            this.exportFile = params.exportFile;
        }
        if (params.exportFiles !== undefined) {
            this.exportFiles = params.exportFiles;
        }
        if (params.floorRoomName !== undefined) {
            this.floorRoomName = params.floorRoomName;
        }
        if (params.floorArea !== undefined) {
            this.floorArea = params.floorArea;
        }
        if (params.floorOrientation !== undefined) {
            this.floorOrientation = params.floorOrientation;
        }
        if (params.floorplans !== undefined) {
            this.floorplans = params.floorplans;
        }
        if (params.tasks !== undefined) {
            this.tasks = params.tasks;
        }
        if (params.scenes !== undefined) {
            this.scenes = params.scenes;
        }
        if (params.reconAccepted !== undefined) {
            this.reconAccepted = params.reconAccepted;
        }
        if (params.reconReady !== undefined) {
            this.reconReady = params.reconReady;
        }
        if (params.settingsView !== undefined) {
            this.settingsView = params.settingsView;
        }
        if (params.diagnostics !== undefined) {
            this.diagnostics = params.diagnostics;
        }
        if (params.api !== undefined) {
            this.api = params.api;
        }
        if (params.pendingPage !== undefined) {
            this.pendingPage = params.pendingPage;
        }
        if (params.timers !== undefined) {
            this.timers = params.timers;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__page.purgeDependencyOnElmtId(rmElmtId);
        this.__connected.purgeDependencyOnElmtId(rmElmtId);
        this.__busy.purgeDependencyOnElmtId(rmElmtId);
        this.__splashReady.purgeDependencyOnElmtId(rmElmtId);
        this.__userName.purgeDependencyOnElmtId(rmElmtId);
        this.__cards.purgeDependencyOnElmtId(rmElmtId);
        this.__projectId.purgeDependencyOnElmtId(rmElmtId);
        this.__projectName.purgeDependencyOnElmtId(rmElmtId);
        this.__rooms.purgeDependencyOnElmtId(rmElmtId);
        this.__activeRoom.purgeDependencyOnElmtId(rmElmtId);
        this.__projectDraft.purgeDependencyOnElmtId(rmElmtId);
        this.__roomDraft.purgeDependencyOnElmtId(rmElmtId);
        this.__guideIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__url.purgeDependencyOnElmtId(rmElmtId);
        this.__account.purgeDependencyOnElmtId(rmElmtId);
        this.__password.purgeDependencyOnElmtId(rmElmtId);
        this.__annotations.purgeDependencyOnElmtId(rmElmtId);
        this.__annotationId.purgeDependencyOnElmtId(rmElmtId);
        this.__annotationVersion.purgeDependencyOnElmtId(rmElmtId);
        this.__objectName.purgeDependencyOnElmtId(rmElmtId);
        this.__category.purgeDependencyOnElmtId(rmElmtId);
        this.__objectWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__objectDepth.purgeDependencyOnElmtId(rmElmtId);
        this.__objectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__dimensionStatus.purgeDependencyOnElmtId(rmElmtId);
        this.__dimensionSource.purgeDependencyOnElmtId(rmElmtId);
        this.__material.purgeDependencyOnElmtId(rmElmtId);
        this.__objectNote.purgeDependencyOnElmtId(rmElmtId);
        this.__messages.purgeDependencyOnElmtId(rmElmtId);
        this.__chatText.purgeDependencyOnElmtId(rmElmtId);
        this.__budgetMin.purgeDependencyOnElmtId(rmElmtId);
        this.__budgetMax.purgeDependencyOnElmtId(rmElmtId);
        this.__style.purgeDependencyOnElmtId(rmElmtId);
        this.__needs.purgeDependencyOnElmtId(rmElmtId);
        this.__showSummary.purgeDependencyOnElmtId(rmElmtId);
        this.__proposals.purgeDependencyOnElmtId(rmElmtId);
        this.__proposal.purgeDependencyOnElmtId(rmElmtId);
        this.__validation.purgeDependencyOnElmtId(rmElmtId);
        this.__consents.purgeDependencyOnElmtId(rmElmtId);
        this.__captures.purgeDependencyOnElmtId(rmElmtId);
        this.__captureId.purgeDependencyOnElmtId(rmElmtId);
        this.__qualityReport.purgeDependencyOnElmtId(rmElmtId);
        this.__uploadAccepted.purgeDependencyOnElmtId(rmElmtId);
        this.__previewUri.purgeDependencyOnElmtId(rmElmtId);
        this.__exportType.purgeDependencyOnElmtId(rmElmtId);
        this.__exportAccepted.purgeDependencyOnElmtId(rmElmtId);
        this.__exportFile.purgeDependencyOnElmtId(rmElmtId);
        this.__exportFiles.purgeDependencyOnElmtId(rmElmtId);
        this.__floorRoomName.purgeDependencyOnElmtId(rmElmtId);
        this.__floorArea.purgeDependencyOnElmtId(rmElmtId);
        this.__floorOrientation.purgeDependencyOnElmtId(rmElmtId);
        this.__floorplans.purgeDependencyOnElmtId(rmElmtId);
        this.__tasks.purgeDependencyOnElmtId(rmElmtId);
        this.__scenes.purgeDependencyOnElmtId(rmElmtId);
        this.__reconAccepted.purgeDependencyOnElmtId(rmElmtId);
        this.__reconReady.purgeDependencyOnElmtId(rmElmtId);
        this.__settingsView.purgeDependencyOnElmtId(rmElmtId);
        this.__diagnostics.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__page.aboutToBeDeleted();
        this.__connected.aboutToBeDeleted();
        this.__busy.aboutToBeDeleted();
        this.__splashReady.aboutToBeDeleted();
        this.__userName.aboutToBeDeleted();
        this.__cards.aboutToBeDeleted();
        this.__projectId.aboutToBeDeleted();
        this.__projectName.aboutToBeDeleted();
        this.__rooms.aboutToBeDeleted();
        this.__activeRoom.aboutToBeDeleted();
        this.__projectDraft.aboutToBeDeleted();
        this.__roomDraft.aboutToBeDeleted();
        this.__guideIndex.aboutToBeDeleted();
        this.__url.aboutToBeDeleted();
        this.__account.aboutToBeDeleted();
        this.__password.aboutToBeDeleted();
        this.__annotations.aboutToBeDeleted();
        this.__annotationId.aboutToBeDeleted();
        this.__annotationVersion.aboutToBeDeleted();
        this.__objectName.aboutToBeDeleted();
        this.__category.aboutToBeDeleted();
        this.__objectWidth.aboutToBeDeleted();
        this.__objectDepth.aboutToBeDeleted();
        this.__objectHeight.aboutToBeDeleted();
        this.__dimensionStatus.aboutToBeDeleted();
        this.__dimensionSource.aboutToBeDeleted();
        this.__material.aboutToBeDeleted();
        this.__objectNote.aboutToBeDeleted();
        this.__messages.aboutToBeDeleted();
        this.__chatText.aboutToBeDeleted();
        this.__budgetMin.aboutToBeDeleted();
        this.__budgetMax.aboutToBeDeleted();
        this.__style.aboutToBeDeleted();
        this.__needs.aboutToBeDeleted();
        this.__showSummary.aboutToBeDeleted();
        this.__proposals.aboutToBeDeleted();
        this.__proposal.aboutToBeDeleted();
        this.__validation.aboutToBeDeleted();
        this.__consents.aboutToBeDeleted();
        this.__captures.aboutToBeDeleted();
        this.__captureId.aboutToBeDeleted();
        this.__qualityReport.aboutToBeDeleted();
        this.__uploadAccepted.aboutToBeDeleted();
        this.__previewUri.aboutToBeDeleted();
        this.__exportType.aboutToBeDeleted();
        this.__exportAccepted.aboutToBeDeleted();
        this.__exportFile.aboutToBeDeleted();
        this.__exportFiles.aboutToBeDeleted();
        this.__floorRoomName.aboutToBeDeleted();
        this.__floorArea.aboutToBeDeleted();
        this.__floorOrientation.aboutToBeDeleted();
        this.__floorplans.aboutToBeDeleted();
        this.__tasks.aboutToBeDeleted();
        this.__scenes.aboutToBeDeleted();
        this.__reconAccepted.aboutToBeDeleted();
        this.__reconReady.aboutToBeDeleted();
        this.__settingsView.aboutToBeDeleted();
        this.__diagnostics.aboutToBeDeleted();
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
    private __splashReady: ObservedPropertySimplePU<boolean>;
    get splashReady() {
        return this.__splashReady.get();
    }
    set splashReady(newValue: boolean) {
        this.__splashReady.set(newValue);
    }
    private __userName: ObservedPropertySimplePU<string>;
    get userName() {
        return this.__userName.get();
    }
    set userName(newValue: string) {
        this.__userName.set(newValue);
    }
    private __cards: ObservedPropertyObjectPU<ProjectCard[]>;
    get cards() {
        return this.__cards.get();
    }
    set cards(newValue: ProjectCard[]) {
        this.__cards.set(newValue);
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
    private __rooms: ObservedPropertyObjectPU<Room[]>;
    get rooms() {
        return this.__rooms.get();
    }
    set rooms(newValue: Room[]) {
        this.__rooms.set(newValue);
    }
    private __activeRoom: ObservedPropertySimplePU<number>;
    get activeRoom() {
        return this.__activeRoom.get();
    }
    set activeRoom(newValue: number) {
        this.__activeRoom.set(newValue);
    }
    private __projectDraft: ObservedPropertySimplePU<string>;
    get projectDraft() {
        return this.__projectDraft.get();
    }
    set projectDraft(newValue: string) {
        this.__projectDraft.set(newValue);
    }
    private __roomDraft: ObservedPropertySimplePU<string>;
    get roomDraft() {
        return this.__roomDraft.get();
    }
    set roomDraft(newValue: string) {
        this.__roomDraft.set(newValue);
    }
    private __guideIndex: ObservedPropertySimplePU<number>;
    get guideIndex() {
        return this.__guideIndex.get();
    }
    set guideIndex(newValue: number) {
        this.__guideIndex.set(newValue);
    }
    private __url: ObservedPropertyAbstractPU<string>;
    get url() {
        return this.__url.get();
    }
    set url(newValue: string) {
        this.__url.set(newValue);
    }
    private __account: ObservedPropertySimplePU<string>;
    get account() {
        return this.__account.get();
    }
    set account(newValue: string) {
        this.__account.set(newValue);
    }
    private __password: ObservedPropertySimplePU<string>;
    get password() {
        return this.__password.get();
    }
    set password(newValue: string) {
        this.__password.set(newValue);
    }
    private __annotations: ObservedPropertyObjectPU<Annotation[]>;
    get annotations() {
        return this.__annotations.get();
    }
    set annotations(newValue: Annotation[]) {
        this.__annotations.set(newValue);
    }
    private __annotationId: ObservedPropertySimplePU<string>;
    get annotationId() {
        return this.__annotationId.get();
    }
    set annotationId(newValue: string) {
        this.__annotationId.set(newValue);
    }
    private __annotationVersion: ObservedPropertySimplePU<number>;
    get annotationVersion() {
        return this.__annotationVersion.get();
    }
    set annotationVersion(newValue: number) {
        this.__annotationVersion.set(newValue);
    }
    private __objectName: ObservedPropertySimplePU<string>;
    get objectName() {
        return this.__objectName.get();
    }
    set objectName(newValue: string) {
        this.__objectName.set(newValue);
    }
    private __category: ObservedPropertySimplePU<string>;
    get category() {
        return this.__category.get();
    }
    set category(newValue: string) {
        this.__category.set(newValue);
    }
    private __objectWidth: ObservedPropertySimplePU<string>;
    get objectWidth() {
        return this.__objectWidth.get();
    }
    set objectWidth(newValue: string) {
        this.__objectWidth.set(newValue);
    }
    private __objectDepth: ObservedPropertySimplePU<string>;
    get objectDepth() {
        return this.__objectDepth.get();
    }
    set objectDepth(newValue: string) {
        this.__objectDepth.set(newValue);
    }
    private __objectHeight: ObservedPropertySimplePU<string>;
    get objectHeight() {
        return this.__objectHeight.get();
    }
    set objectHeight(newValue: string) {
        this.__objectHeight.set(newValue);
    }
    private __dimensionStatus: ObservedPropertySimplePU<string>;
    get dimensionStatus() {
        return this.__dimensionStatus.get();
    }
    set dimensionStatus(newValue: string) {
        this.__dimensionStatus.set(newValue);
    }
    private __dimensionSource: ObservedPropertySimplePU<string>;
    get dimensionSource() {
        return this.__dimensionSource.get();
    }
    set dimensionSource(newValue: string) {
        this.__dimensionSource.set(newValue);
    }
    private __material: ObservedPropertySimplePU<string>;
    get material() {
        return this.__material.get();
    }
    set material(newValue: string) {
        this.__material.set(newValue);
    }
    private __objectNote: ObservedPropertySimplePU<string>;
    get objectNote() {
        return this.__objectNote.get();
    }
    set objectNote(newValue: string) {
        this.__objectNote.set(newValue);
    }
    private __messages: ObservedPropertyObjectPU<Message[]>;
    get messages() {
        return this.__messages.get();
    }
    set messages(newValue: Message[]) {
        this.__messages.set(newValue);
    }
    private __chatText: ObservedPropertySimplePU<string>;
    get chatText() {
        return this.__chatText.get();
    }
    set chatText(newValue: string) {
        this.__chatText.set(newValue);
    }
    private __budgetMin: ObservedPropertySimplePU<string>;
    get budgetMin() {
        return this.__budgetMin.get();
    }
    set budgetMin(newValue: string) {
        this.__budgetMin.set(newValue);
    }
    private __budgetMax: ObservedPropertySimplePU<string>;
    get budgetMax() {
        return this.__budgetMax.get();
    }
    set budgetMax(newValue: string) {
        this.__budgetMax.set(newValue);
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
    private __showSummary: ObservedPropertySimplePU<boolean>;
    get showSummary() {
        return this.__showSummary.get();
    }
    set showSummary(newValue: boolean) {
        this.__showSummary.set(newValue);
    }
    private __proposals: ObservedPropertyObjectPU<Proposal[]>;
    get proposals() {
        return this.__proposals.get();
    }
    set proposals(newValue: Proposal[]) {
        this.__proposals.set(newValue);
    }
    private __proposal: ObservedPropertySimplePU<number>;
    get proposal() {
        return this.__proposal.get();
    }
    set proposal(newValue: number) {
        this.__proposal.set(newValue);
    }
    private __validation: ObservedPropertyObjectPU<Validation | null>;
    get validation() {
        return this.__validation.get();
    }
    set validation(newValue: Validation | null) {
        this.__validation.set(newValue);
    }
    private __consents: ObservedPropertyObjectPU<Consent[]>;
    get consents() {
        return this.__consents.get();
    }
    set consents(newValue: Consent[]) {
        this.__consents.set(newValue);
    }
    private __captures: ObservedPropertyObjectPU<Capture[]>;
    get captures() {
        return this.__captures.get();
    }
    set captures(newValue: Capture[]) {
        this.__captures.set(newValue);
    }
    private __captureId: ObservedPropertySimplePU<string>;
    get captureId() {
        return this.__captureId.get();
    }
    set captureId(newValue: string) {
        this.__captureId.set(newValue);
    }
    private __qualityReport: ObservedPropertyObjectPU<Quality | null>;
    get qualityReport() {
        return this.__qualityReport.get();
    }
    set qualityReport(newValue: Quality | null) {
        this.__qualityReport.set(newValue);
    }
    private __uploadAccepted: ObservedPropertySimplePU<boolean>;
    get uploadAccepted() {
        return this.__uploadAccepted.get();
    }
    set uploadAccepted(newValue: boolean) {
        this.__uploadAccepted.set(newValue);
    }
    private __previewUri: ObservedPropertySimplePU<string>;
    get previewUri() {
        return this.__previewUri.get();
    }
    set previewUri(newValue: string) {
        this.__previewUri.set(newValue);
    }
    private __exportType: ObservedPropertySimplePU<number>;
    get exportType() {
        return this.__exportType.get();
    }
    set exportType(newValue: number) {
        this.__exportType.set(newValue);
    }
    private __exportAccepted: ObservedPropertySimplePU<boolean>;
    get exportAccepted() {
        return this.__exportAccepted.get();
    }
    set exportAccepted(newValue: boolean) {
        this.__exportAccepted.set(newValue);
    }
    private __exportFile: ObservedPropertyObjectPU<ExportFile | null>;
    get exportFile() {
        return this.__exportFile.get();
    }
    set exportFile(newValue: ExportFile | null) {
        this.__exportFile.set(newValue);
    }
    private __exportFiles: ObservedPropertyObjectPU<ExportFile[]>;
    get exportFiles() {
        return this.__exportFiles.get();
    }
    set exportFiles(newValue: ExportFile[]) {
        this.__exportFiles.set(newValue);
    }
    private __floorRoomName: ObservedPropertySimplePU<string>;
    get floorRoomName() {
        return this.__floorRoomName.get();
    }
    set floorRoomName(newValue: string) {
        this.__floorRoomName.set(newValue);
    }
    private __floorArea: ObservedPropertySimplePU<string>;
    get floorArea() {
        return this.__floorArea.get();
    }
    set floorArea(newValue: string) {
        this.__floorArea.set(newValue);
    }
    private __floorOrientation: ObservedPropertySimplePU<string>;
    get floorOrientation() {
        return this.__floorOrientation.get();
    }
    set floorOrientation(newValue: string) {
        this.__floorOrientation.set(newValue);
    }
    private __floorplans: ObservedPropertyObjectPU<Floorplan[]>;
    get floorplans() {
        return this.__floorplans.get();
    }
    set floorplans(newValue: Floorplan[]) {
        this.__floorplans.set(newValue);
    }
    private __tasks: ObservedPropertyObjectPU<Task[]>;
    get tasks() {
        return this.__tasks.get();
    }
    set tasks(newValue: Task[]) {
        this.__tasks.set(newValue);
    }
    private __scenes: ObservedPropertyObjectPU<GaussianScene[]>;
    get scenes() {
        return this.__scenes.get();
    }
    set scenes(newValue: GaussianScene[]) {
        this.__scenes.set(newValue);
    }
    private __reconAccepted: ObservedPropertySimplePU<boolean>;
    get reconAccepted() {
        return this.__reconAccepted.get();
    }
    set reconAccepted(newValue: boolean) {
        this.__reconAccepted.set(newValue);
    }
    private __reconReady: ObservedPropertySimplePU<boolean>;
    get reconReady() {
        return this.__reconReady.get();
    }
    set reconReady(newValue: boolean) {
        this.__reconReady.set(newValue);
    }
    private __settingsView: ObservedPropertyObjectPU<SettingsView>;
    get settingsView() {
        return this.__settingsView.get();
    }
    set settingsView(newValue: SettingsView) {
        this.__settingsView.set(newValue);
    }
    private __diagnostics: ObservedPropertyObjectPU<Diagnostics | null>;
    get diagnostics() {
        return this.__diagnostics.get();
    }
    set diagnostics(newValue: Diagnostics | null) {
        this.__diagnostics.set(newValue);
    }
    private api: ApiClient;
    private pendingPage: Page;
    private timers: number[];
    aboutToAppear(): void {
        this.timers.push(setTimeout(() => { this.splashReady = true; }, 500));
        this.timers.push(setTimeout(() => { this.page = Page.Home; }, 1000));
        this.timers.push(setInterval(() => { if (this.connected && this.page === Page.Tasks && !this.busy)
            this.refreshRecon(); }, 5000));
    }
    aboutToDisappear(): void { this.timers.forEach((timer: number) => clearTimeout(timer)); this.api.clear(); this.password = ''; }
    onBackPress(): boolean { if (this.page !== Page.Home) {
        this.page = Page.Home;
        return true;
    } return false; }
    private notify(text: string): void { this.getUIContext().getPromptAction().showToast({ message: text, duration: 3500 }); }
    private async run(action: () => Promise<void>): Promise<void> {
        if (this.busy)
            return;
        this.busy = true;
        try {
            await action();
        }
        catch (error) {
            this.notify((error as Error).message || '操作失败，请检查网络');
        }
        finally {
            this.busy = false;
        }
    }
    private roomId(): string { return this.rooms.length > this.activeRoom ? this.rooms[this.activeRoom].room_id : ''; }
    private roomName(): string { return this.rooms.length > this.activeRoom ? this.rooms[this.activeRoom].name : '未选择房间'; }
    private requireRoom(): void { if (!this.projectId || !this.roomId())
        throw new Error('请先创建或选择项目和房间'); }
    private async refreshHome(): Promise<void> {
        const dashboard: Dashboard = await this.api.dashboard();
        this.cards = dashboard.projects;
        this.userName = dashboard.user_name;
        this.reconReady = dashboard.capabilities.reconstruction;
    }
    private async loadRoom(): Promise<void> {
        this.requireRoom();
        this.annotations = await this.api.annotations(this.projectId, this.roomId());
        this.messages = await this.api.messages(this.projectId, this.roomId());
        this.proposals = await this.api.proposals(this.projectId, this.roomId());
        this.proposal = Math.max(0, this.proposals.length - 3);
        this.captures = await this.api.captures(this.projectId, this.roomId());
        this.captureId = this.captures.length ? this.captures[this.captures.length - 1].capture_id : '';
        this.consents = await this.api.consents(this.projectId);
        this.tasks = await this.api.tasks(this.projectId);
        this.scenes = await this.api.scenes(this.projectId, this.roomId());
        this.exportFiles = await this.api.exports(this.projectId);
        this.floorplans = await this.api.floorplans(this.projectId, this.roomId());
        const req: Requirements = this.rooms[this.activeRoom].requirements;
        this.style = req.style || '';
        this.needs = req.household_needs || '';
        this.budgetMin = req.budget_min === null ? '' : String(req.budget_min);
        this.budgetMax = req.budget_max === null ? '' : String(req.budget_max);
        this.validation = null;
        this.exportFile = null;
        this.exportAccepted = false;
    }
    private async login(): Promise<void> {
        await this.run(async () => {
            this.api.configure(this.url, this.account, this.password);
            await this.refreshHome();
            this.settingsView = await this.api.settings();
            this.connected = true;
            this.password = '';
            this.page = this.pendingPage === Page.Create ? Page.Create : Page.Home;
        });
    }
    go(target: Page): void {
        if (!this.connected && target !== Page.Home && target !== Page.Login) {
            this.pendingPage = target;
            this.page = Page.Login;
            return;
        }
        if (target === Page.Home) {
            this.page = target;
            if (this.connected)
                this.run(async () => { await this.refreshHome(); });
            return;
        }
        if ([Page.Viewer, Page.Annotate, Page.Chat, Page.Proposal, Page.Report, Page.Export, Page.Validation, Page.Floorplan, Page.Camera, Page.Guide].includes(target)
            && !this.roomId() && target !== Page.Create) {
            this.notify('请先选择空间或创建新项目');
            this.page = this.cards.length ? Page.Home : Page.Create;
            return;
        }
        this.page = target;
        if (target === Page.Privacy && this.projectId)
            this.run(async () => { this.consents = await this.api.consents(this.projectId); this.exportFiles = await this.api.exports(this.projectId); });
        if (target === Page.Tasks && this.projectId)
            this.run(async () => { this.tasks = await this.api.tasks(this.projectId); });
    }
    back(): void { this.go(Page.Home); }
    private async selectProject(card: ProjectCard): Promise<void> {
        await this.run(async () => {
            this.projectId = card.project_id;
            this.projectName = card.name;
            this.rooms = await this.api.rooms(this.projectId);
            this.activeRoom = 0;
            if (!this.rooms.length) {
                this.roomDraft = '客厅';
                this.page = Page.Viewer;
                return;
            }
            await this.loadRoom();
            this.page = Page.Viewer;
        });
    }
    private async createSpace(floorplan: boolean = false): Promise<void> {
        await this.run(async () => {
            if (!this.projectDraft.trim() || !this.roomDraft.trim())
                throw new Error('请输入项目名称和首个房间名称');
            const project = await this.api.createProject(this.projectDraft.trim());
            this.projectId = project.project_id;
            this.projectName = project.name;
            await this.api.createRoom(this.projectId, this.roomDraft.trim());
            this.rooms = await this.api.rooms(this.projectId);
            this.activeRoom = 0;
            await this.loadRoom();
            await this.refreshHome();
            this.projectDraft = '';
            this.page = floorplan ? Page.Floorplan : Page.Guide;
        });
    }
    private async switchRoom(index: number): Promise<void> { await this.run(async () => { this.activeRoom = index; this.previewUri = ''; this.qualityReport = null; await this.loadRoom(); }); }
    private async addRoom(): Promise<void> {
        await this.run(async () => {
            if (!this.projectId || !this.roomDraft.trim())
                throw new Error('请输入房间名称');
            const created = await this.api.createRoom(this.projectId, this.roomDraft.trim());
            this.rooms = await this.api.rooms(this.projectId);
            this.activeRoom = this.rooms.findIndex((room: Room) => room.room_id === created.room_id);
            await this.loadRoom();
            this.roomDraft = '';
            this.notify('房间已保存');
        });
    }
    private number(text: string): number | null {
        if (!text.trim())
            return null;
        const value: number = Number(text);
        if (!Number.isFinite(value) || value < 0)
            throw new Error('请输入有效的非负数值');
        return value;
    }
    private editAnnotation(item: Annotation): void {
        this.annotationId = item.annotation_id;
        this.annotationVersion = item.version;
        this.objectName = item.name;
        this.category = item.category;
        this.objectWidth = item.width === null ? '' : String(item.width);
        this.objectDepth = item.depth === null ? '' : String(item.depth);
        this.objectHeight = item.height === null ? '' : String(item.height);
        this.dimensionStatus = item.status;
        this.dimensionSource = item.source || '';
        this.material = item.material;
        this.objectNote = item.note;
        this.page = Page.Annotate;
    }
    private async saveAnnotation(): Promise<void> {
        await this.run(async () => {
            this.requireRoom();
            const input: AnnotationInput = { expected_version: this.annotationVersion, name: this.objectName.trim(), category: this.category,
                width: this.number(this.objectWidth), depth: this.number(this.objectDepth), height: this.number(this.objectHeight),
                status: this.dimensionStatus, source: this.dimensionSource || null, material: this.material, note: this.objectNote };
            await this.api.saveAnnotation(this.projectId, this.roomId(), this.annotationId, input);
            this.rooms = await this.api.rooms(this.projectId);
            await this.loadRoom();
            this.page = Page.Viewer;
            this.notify('标注已保存，相关旧方案需要重新校验');
        });
    }
    private async sendMessage(): Promise<void> {
        await this.run(async () => { this.requireRoom(); if (!this.chatText.trim())
            return; this.messages = await this.api.send(this.projectId, this.roomId(), this.chatText.trim()); this.chatText = ''; });
    }
    private async confirmRequirements(): Promise<void> {
        await this.run(async () => {
            this.requireRoom();
            const req: Requirements = { budget_min: this.number(this.budgetMin), budget_max: this.number(this.budgetMax),
                style: this.style || null, household_needs: this.needs || null,
                retain_items: this.rooms[this.activeRoom].requirements.retain_items, confirmed: true };
            const input: RequirementUpdate = { expected_version: this.rooms[this.activeRoom].requirement_version, requirements: req };
            await this.api.saveRequirements(this.projectId, this.rooms[this.activeRoom], input);
            this.rooms = await this.api.rooms(this.projectId);
            this.proposals = await this.api.generate(this.projectId, this.roomId());
            this.proposal = 0;
            this.validation = null;
            this.exportFile = null;
            this.page = Page.Proposal;
        });
    }
    private async validateProposal(): Promise<void> {
        await this.run(async () => {
            if (!this.proposals.length)
                throw new Error('请先确认需求并生成候选');
            this.validation = await this.api.validate(this.projectId, this.proposals[this.proposal].proposal_id);
            this.exportAccepted = false;
            this.exportFile = null;
            this.page = Page.Validation;
        });
    }
    private activeConsent(scope: string): Consent | undefined {
        return this.consents.find((item: Consent) => item.scope === scope && item.revoked_at === null && Date.parse(item.expires_at) > Date.now());
    }
    private async toggleConsent(scope: string): Promise<void> {
        await this.run(async () => {
            if (!this.projectId)
                throw new Error('请先在空间中选择一个项目');
            const current: Consent | undefined = this.activeConsent(scope);
            if (current) {
                const cleanup = await this.api.revoke(this.projectId, current.consent_id);
                this.notify('已撤回，清理状态：' + cleanup.state);
            }
            else
                await this.api.grant(this.projectId, scope);
            this.consents = await this.api.consents(this.projectId);
            this.validation = null;
            this.exportFile = null;
        });
    }
    private async revokeAll(): Promise<void> {
        await this.run(async () => {
            if (!this.projectId)
                throw new Error('请先选择项目');
            for (const item of this.consents)
                if (item.revoked_at === null)
                    await this.api.revoke(this.projectId, item.consent_id);
            this.consents = await this.api.consents(this.projectId);
            this.validation = null;
            this.exportFile = null;
            this.notify('已撤回当前项目授权；删除待办已创建，尚未声明文件已删除');
        });
    }
    private async choosePhotos(kind: string = 'photos'): Promise<void> {
        await this.run(async () => {
            this.requireRoom();
            if (!this.uploadAccepted)
                throw new Error('请先确认所选图片上传用途');
            const options = new photoAccessHelper.PhotoSelectOptions();
            options.MIMEType = photoAccessHelper.PhotoViewMIMETypes.IMAGE_TYPE;
            options.maxSelectNumber = kind === 'floorplan' ? 1 : 50;
            const selected = await new photoAccessHelper.PhotoViewPicker().select(options);
            if (!selected.photoUris.length)
                return;
            let consent: Consent | undefined = this.activeConsent('cloud_upload');
            if (!consent) {
                consent = await this.api.grant(this.projectId, 'cloud_upload');
                this.consents = await this.api.consents(this.projectId);
            }
            const capture = await this.api.capture(this.projectId, this.roomId(), kind, consent.consent_id);
            this.captureId = capture.capture_id;
            for (const uri of selected.photoUris) {
                const file = fileIo.openSync(uri, fileIo.OpenMode.READ_ONLY);
                try {
                    const size: number = fileIo.statSync(file.fd).size;
                    if (size > 12 * 1024 * 1024)
                        throw new Error('单张图片不能超过 12 MiB');
                    const bytes = new ArrayBuffer(size);
                    fileIo.readSync(file.fd, bytes);
                    await this.api.upload(this.projectId, this.captureId, bytes, 'capture.jpg');
                }
                finally {
                    fileIo.closeSync(file);
                }
            }
            this.previewUri = selected.photoUris[0];
            this.qualityReport = await this.api.check(this.projectId, this.captureId);
            this.captures = await this.api.captures(this.projectId, this.roomId());
            this.page = kind === 'floorplan' ? Page.Floorplan : Page.Report;
            this.notify('图片已保存并完成基础检查');
        });
    }
    private async loadReport(): Promise<void> {
        await this.run(async () => { if (!this.captureId)
            throw new Error('当前房间还没有上传素材'); this.qualityReport = await this.api.check(this.projectId, this.captureId); this.page = Page.Report; });
    }
    private async startRecon(): Promise<void> {
        await this.run(async () => {
            this.requireRoom();
            if (!this.reconAccepted)
                throw new Error('请先确认本机训练用途和覆盖限制');
            const capture: Capture | undefined = this.captures.find((item: Capture) => item.capture_id === this.captureId);
            if (!capture || !capture.asset_version_id || !capture.check_id)
                throw new Error('请先完成当前照片的质量检查');
            const quality: Quality = await this.api.check(this.projectId, this.captureId);
            if (quality.image_count < 8)
                throw new Error('至少选择 8 张不同多视角照片，建议一次选择 30–50 张');
            let processing: Consent | undefined = this.activeConsent('cloud_reconstruction');
            if (!processing) {
                processing = await this.api.grant(this.projectId, 'cloud_reconstruction');
                this.consents = await this.api.consents(this.projectId);
            }
            const costInput: CostInput = { asset_version_id: capture.asset_version_id, config_version: 'brush-local-v2', max_cost: 0.01 };
            const cost = await this.api.cost(this.projectId, costInput);
            const attempt: string = 'local_' + Date.now().toString();
            const capabilities: Record<string, string> = {};
            capabilities['provider'] = 'local-colmap-brush';
            capabilities['billing'] = 'no-external-charge';
            const input: ReconSubmit = { project_id: this.projectId, room_id: this.roomId(), asset_version_id: capture.asset_version_id, check_id: capture.check_id,
                route: 'cloud', config_version: 'brush-local-v2', upload_consent_id: capture.consent_id, processing_consent_id: processing.consent_id,
                cost_confirmation_id: cost.cost_confirmation_id, attempt_id: attempt, parent_job_id: null, accept_partial_coverage: true,
                reason_codes: ['USER_REQUESTED_LOCAL_GPU'], capability_snapshot: capabilities };
            await this.api.submitRecon(input, attempt);
            this.tasks = await this.api.tasks(this.projectId);
            this.page = Page.Tasks;
            this.reconAccepted = false;
        });
    }
    private async refreshRecon(): Promise<void> { await this.run(async () => { this.tasks = await this.api.tasks(this.projectId); if (this.roomId())
        this.scenes = await this.api.scenes(this.projectId, this.roomId()); }); }
    private async cancelRecon(task: Task): Promise<void> { await this.run(async () => { await this.api.cancelRecon(this.projectId, task.job_id, task.revision); this.tasks = await this.api.tasks(this.projectId); }); }
    private stageName(stage: string | null): string {
        if (stage === 'features')
            return '提取图像特征';
        if (stage === 'matching')
            return '匹配照片';
        if (stage === 'poses')
            return '恢复相机位姿';
        if (stage === 'undistorting')
            return '校正图像';
        if (stage === 'training')
            return '训练高斯模型';
        if (stage === 'publishing')
            return '校验发布';
        if (stage === 'ready')
            return '模型可浏览';
        return stage || '等待处理';
    }
    private async saveFloorplan(): Promise<void> {
        await this.run(async () => {
            this.requireRoom();
            if (!this.floorRoomName.trim())
                throw new Error('请输入已人工核对的房间名称');
            const room: FloorRoom = { name: this.floorRoomName.trim(), area_sqm: this.number(this.floorArea), orientation: this.floorOrientation };
            const input: FloorplanInput = { expected_version: this.floorplans.length, rooms: [room] };
            const previousRoom = this.roomId();
            await this.api.floorplan(this.projectId, previousRoom, input);
            this.rooms = await this.api.rooms(this.projectId);
            this.activeRoom = this.rooms.findIndex((room: Room) => room.room_id === previousRoom);
            this.floorplans = await this.api.floorplans(this.projectId, previousRoom);
            this.floorRoomName = '';
            this.notify('人工核对记录和房间已保存，面积不等于三维模型尺度');
        });
    }
    private async createExport(): Promise<void> {
        await this.run(async () => {
            if (!this.validation || !this.proposals.length)
                throw new Error('请先完成方案校验');
            if (!this.exportAccepted)
                throw new Error('请明确确认待核验沟通草稿');
            const input: ConfirmInput = { proposal_id: this.proposals[this.proposal].proposal_id,
                validation_id: this.validation.validation_id, export_kind: 'review_draft' };
            const confirmation = await this.api.confirm(this.projectId, input);
            const request: ExportInput = { confirmation_token: confirmation.confirmation_token, format: this.exportType === 0 ? 'pdf' : 'images' };
            this.exportFile = await this.api.export(this.projectId, request);
            this.exportFiles = await this.api.exports(this.projectId);
            this.notify('导出文件已生成，可保存到本机文件');
        });
    }
    private async saveExport(): Promise<void> {
        await this.run(async () => {
            if (!this.exportFile)
                return;
            const target = this.exportFile;
            const context = this.getUIContext().getHostContext() as common.UIAbilityContext;
            const uris: string[] = await new picker.DocumentViewPicker(context).save({ newFileNames: [target.file_name] });
            if (!uris.length)
                return;
            const bytes: ArrayBuffer = await this.api.download(this.projectId, target.export_id);
            const file = fileIo.openSync(uris[0], fileIo.OpenMode.READ_WRITE | fileIo.OpenMode.CREATE);
            try {
                fileIo.writeSync(file.fd, bytes);
            }
            finally {
                fileIo.closeSync(file);
            }
            this.notify('文件已保存');
        });
    }
    private async changeSetting(key: string): Promise<void> {
        await this.run(async () => {
            const current: Settings = this.settingsView.settings;
            const qualities: string[] = ['fluent', 'standard', 'high'];
            const value: Settings = { quality: key === 'quality' ? qualities[(qualities.indexOf(current.quality) + 1) % 3] : current.quality,
                power_saving: key === 'power' ? !current.power_saving : current.power_saving,
                capture_resolution: key === 'resolution' ? (current.capture_resolution === 'high' ? 'standard' : 'high') : current.capture_resolution,
                hints: key === 'hints' ? !current.hints : current.hints,
                improvement_opt_in: key === 'improve' ? !current.improvement_opt_in : current.improvement_opt_in,
                anonymous_share_opt_in: current.anonymous_share_opt_in };
            const input: SettingsInput = { expected_version: this.settingsView.version, settings: value };
            this.settingsView = await this.api.saveSettings(input);
        });
    }
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
                        } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 339, col: 5 });
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
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        current: index
                    });
                }
            }, { name: "BottomNav" });
        }
    }
    hint(text: string, parent = null) { this.observeComponentCreation2((elmtId, isInitialRender) => {
        Text.create(text);
        Text.fontSize(12);
        Text.fontColor(COLOR.MUTED);
        Text.lineHeight(21);
        Text.width('100%');
        Text.padding(12);
        Text.backgroundColor(COLOR.GOLD_SOFT);
        Text.borderRadius(8);
    }, Text); Text.pop(); }
    glassButton(label: string, action: () => void, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(label);
            Button.width(44);
            Button.height(44);
            Button.fontSize(18);
            Button.fontColor(Color.White);
            Button.backgroundColor(COLOR.GLASS);
            Button.borderRadius(22);
            Button.onClick(action);
        }, Button);
        Button.pop();
    }
    projectCard(card: ProjectCard, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('48%');
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.clip(true);
            Column.border({ width: 1, color: COLOR.HAIR });
            Column.onClick(() => this.selectProject(card));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(index % 2 === 0 ? { "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" } : { "id": 16777224, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height(128);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 5 });
            Column.width('100%');
            Column.padding(12);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(card.name);
            Text.fontSize(15);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor(COLOR.INK);
            Text.maxLines(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(card.room_count + ' 房间 · ' + card.capture_count + ' 次素材记录');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(card.proposal_count + ' 份候选 · 封面为示例');
            Text.fontSize(11);
            Text.fontColor(COLOR.BRAND);
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
            Text.create('◇');
            Text.fontSize(110);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
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
            Text.create(this.splashReady ? '界面已就绪' : '正在准备应用…');
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
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '连接 Decover', subtitle: '本机 Java 后端', onBack: () => this.back() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 373, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '连接 Decover',
                            subtitle: '本机 Java 后端',
                            onBack: () => this.back()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '连接 Decover', subtitle: '本机 Java 后端'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 16 });
            Column.padding(24);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇');
            Text.fontSize(76);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('让空间被看见');
            Text.fontSize(28);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.hint.bind(this)('使用本机开发账号连接。华为账号及云端 AI 登录尚未接入。密码只保留在当前应用会话。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.url, placeholder: '后端服务地址' });
            TextInput.id('serverUrlInput');
            TextInput.onChange((v: string) => this.url = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.account, placeholder: '开发账号' });
            TextInput.id('usernameInput');
            TextInput.onChange((v: string) => this.account = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.password, placeholder: '开发密码' });
            TextInput.id('passwordInput');
            TextInput.type(InputType.Password);
            TextInput.onChange((v: string) => this.password = v);
        }, TextInput);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '连接并进入空间', onTap: () => this.login() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 382, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '连接并进入空间',
                            onTap: () => this.login()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '连接并进入空间'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('先随便看看');
            Button.backgroundColor(Color.Transparent);
            Button.fontColor(COLOR.BRAND);
            Button.onClick(() => this.back());
        }, Button);
        Button.pop();
        Column.pop();
        Scroll.pop();
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
            Text.create(this.connected ? '你好，' + this.userName : '欢迎来到 Decover');
            Text.fontSize(26);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.connected ? '已有 ' + this.cards.length + ' 个项目' : '连接服务，开始记录你的空间');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.connected ? '●' : '○');
            Button.width(42);
            Button.height(42);
            Button.backgroundColor(COLOR.INK);
            Button.fontColor(COLOR.GOLD);
            Button.onClick(() => this.go(Page.Login));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
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
            Text.create(this.projectName ? '当前项目 · ' + this.projectName : '从一个房间开始');
            Text.fontSize(14);
            Text.fontWeight(FontWeight.Medium);
            Text.fontColor('#6B5A3E');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('采集、标注、需求与方案版本统一管理');
            Text.fontSize(11);
            Text.fontColor('#806F53');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.projectId ? '继续' : '连接');
            Button.height(34);
            Button.fontSize(12);
            Button.backgroundColor(COLOR.BRAND);
            Button.onClick(() => this.go(this.projectId ? Page.Viewer : Page.Login));
        }, Button);
        Button.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '我的空间', action: '下拉以外请点击空间刷新' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 407, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的空间',
                            action: '下拉以外请点击空间刷新'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '我的空间', action: '下拉以外请点击空间刷新'
                    });
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.cards.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.hint.bind(this)('还没有项目。点击“扫描新空间”创建第一个项目，或先连接本机服务。');
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
            const forEachItemGenFunction = (_item, index: number) => {
                const card = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.width('100%');
                    Row.justifyContent(FlexAlign.SpaceBetween);
                    Row.margin({ bottom: 12 });
                }, Row);
                this.projectCard.bind(this)(card, index * 2);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (index * 2 + 1 < this.cards.length) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.projectCard.bind(this)(this.cards[index * 2 + 1], index * 2 + 1);
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Row.pop();
            };
            this.forEachUpdateFunction(elmtId, this.cards.filter((item: ProjectCard, index: number) => index % 2 === 0), forEachItemGenFunction, (card: ProjectCard) => card.project_id, true, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.margin({ top: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('+ 扫描新空间');
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
            Button.createWithLabel('⌂ 户型图核对');
            Button.width('48%');
            Button.height(78);
            Button.fontColor(COLOR.MUTED);
            Button.backgroundColor(COLOR.CARD);
            Button.border({ width: 1, color: COLOR.HAIR });
            Button.borderRadius(8);
            Button.onClick(() => this.go(this.roomId() ? Page.Floorplan : Page.Create));
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
                    let componentCall = new TopBar(this, { title: '创建新空间', subtitle: '项目与首个房间将保存到后端', onBack: () => this.back() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 426, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '创建新空间',
                            subtitle: '项目与首个房间将保存到后端',
                            onBack: () => this.back()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '创建新空间', subtitle: '项目与首个房间将保存到后端'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '项目名称', text: this.projectDraft });
            TextInput.id('projectNameInput');
            TextInput.maxLength(120);
            TextInput.onChange((v: string) => this.projectDraft = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ placeholder: '首个房间名称', text: this.roomDraft });
            TextInput.id('roomNameInput');
            TextInput.maxLength(120);
            TextInput.onChange((v: string) => this.roomDraft = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding(20);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.border({ width: 1.5, color: COLOR.GOLD });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('◇ 扫描与素材建档');
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('先记录房间与照片，保留原有采集引导。真实三维重建服务待接入。');
            Text.fontSize(13);
            Text.fontColor(COLOR.MUTED);
            Text.lineHeight(22);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '创建并进入采集引导', onTap: () => this.createSpace() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 434, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '创建并进入采集引导',
                            onTap: () => this.createSpace()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '创建并进入采集引导'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding(20);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('⌂ 户型图辅助');
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('选择户型图片，人工核对房间和尺寸。OCR 服务尚未接入。');
            Text.fontSize(13);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '创建并核对户型图', onTap: () => this.createSpace(true) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 439, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '创建并核对户型图',
                            onTap: () => this.createSpace(true)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '创建并核对户型图'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Column.pop();
        Scroll.pop();
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
                    let componentCall = new TopBar(this, { title: '采集准备', subtitle: this.projectName + ' · ' + this.roomName(), onBack: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 447, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集准备',
                            subtitle: this.projectName + ' · ' + this.roomName(),
                            onBack: () => this.go(Page.Viewer)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '采集准备', subtitle: this.projectName + ' · ' + this.roomName()
                    });
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
            Column.create({ space: 18 });
            Column.padding(24);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['↔', '◎', '◐'][this.guideIndex]);
            Text.fontSize(78);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['缓慢、平稳地移动', '先拍全景，再补细节', '避免玻璃与强逆光'][this.guideIndex]);
            Text.fontSize(20);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(['围绕房间拍摄多角度照片，注意保护家庭隐私。', '保留角落、门窗与家具之间的共同纹理。', '尽量保持曝光稳定，避免人员进入拍摄画面。'][this.guideIndex]);
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
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: String(i + 1), selected: i === this.guideIndex, onTap: () => this.guideIndex = i }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 454, col: 60 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: String(i + 1),
                                    selected: i === this.guideIndex,
                                    onTap: () => this.guideIndex = i
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: String(i + 1), selected: i === this.guideIndex
                            });
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, [0, 1, 2], forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Column.pop();
        this.hint.bind(this)('当前采用系统照片选择器导入照片。相机实时轨迹、覆盖检测与端侧重建均未接入，不显示虚构的通过状态。');
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◎', title: '采集清晰度偏好', detail: this.settingsView.settings.capture_resolution }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 457, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◎',
                            title: '采集清晰度偏好',
                            detail: this.settingsView.settings.capture_resolution
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◎', title: '采集清晰度偏好', detail: this.settingsView.settings.capture_resolution
                    });
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
                    let componentCall = new PrimaryButton(this, { text: '选择采集照片', onTap: () => this.go(Page.Camera) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 460, col: 16 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '选择采集照片',
                            onTap: () => this.go(Page.Camera)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '选择采集照片'
                    });
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
            Image.create(this.previewUri ? this.previewUri : { "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.width('100%');
            Column.height('100%');
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.glassButton.bind(this)('‹', () => this.go(Page.Guide));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.roomName());
            Text.fontSize(18);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.previewUri ? '所选图片预览' : '示例底图 · 尚未连接相机');
            Text.fontSize(12);
            Text.fontColor(Color.White);
            Text.padding(10);
            Text.backgroundColor(COLOR.GLASS);
            Text.borderRadius(16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('选择照片，完成素材建档');
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('沿房间多角度拍摄 30–50 张，相邻画面重叠约 70%；保持光线稳定，避开镜面和移动物体');
            Text.fontSize(12);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.padding(12);
            Row.backgroundColor(COLOR.GLASS);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'upload', group: 'capture' });
            Checkbox.select(this.uploadAccepted);
            Checkbox.selectedColor(COLOR.GOLD);
            Checkbox.onChange((v: boolean) => this.uploadAccepted = v);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('同意将所选图片上传本机后端，用于保存和基础质量检查');
            Text.fontSize(12);
            Text.fontColor(Color.White);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '选择照片并上传', active: this.uploadAccepted, onTap: () => this.choosePhotos() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 476, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '选择照片并上传',
                            active: this.uploadAccepted,
                            onTap: () => this.choosePhotos()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '选择照片并上传', active: this.uploadAccepted
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('查看最近质量报告');
            Button.fontColor(COLOR.GOLD);
            Button.backgroundColor(COLOR.GLASS);
            Button.onClick(() => this.loadReport());
        }, Button);
        Button.pop();
        Column.pop();
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
                    let componentCall = new TopBar(this, { title: '采集质量报告', subtitle: this.projectName + ' · ' + this.roomName(), onBack: () => this.go(Page.Camera) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 483, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '采集质量报告',
                            subtitle: this.projectName + ' · ' + this.roomName(),
                            onBack: () => this.go(Page.Camera)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '采集质量报告', subtitle: this.projectName + ' · ' + this.roomName()
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.qualityReport ? this.qualityReport.image_count + ' 张图片' : '暂无检查报告');
            Text.fontSize(32);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.BRAND);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.qualityReport ? ('结论：' + this.qualityReport.result) : '请先上传真实图片');
            Text.fontSize(16);
            Text.fontColor(COLOR.WARN);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.qualityReport) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                    }, Row);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: String(this.qualityReport.image_count), label: '图片数量' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 489, col: 30 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: String(this.qualityReport.image_count),
                                        label: '图片数量'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: String(this.qualityReport.image_count), label: '图片数量'
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: '—', label: '表面覆盖' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 489, col: 102 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: '—',
                                        label: '表面覆盖'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: '—', label: '表面覆盖'
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: this.reconReady ? '本机 GPU' : '不可用', label: '重建服务' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 489, col: 139 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: this.reconReady ? '本机 GPU' : '不可用',
                                        label: '重建服务'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: this.reconReady ? '本机 GPU' : '不可用', label: '重建服务'
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const image = _item;
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new SettingRow(this, { icon: '▧', title: image.width + ' × ' + image.height, detail: '平均亮度 ' + Math.round(image.brightness * 100) + '%' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 491, col: 15 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                icon: '▧',
                                                title: image.width + ' × ' + image.height,
                                                detail: '平均亮度 ' + Math.round(image.brightness * 100) + '%'
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            icon: '▧', title: image.width + ' × ' + image.height, detail: '平均亮度 ' + Math.round(image.brightness * 100) + '%'
                                        });
                                    }
                                }, { name: "SettingRow" });
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.qualityReport.images, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const issue = _item;
                            this.hint.bind(this)(issue);
                        };
                        this.forEachUpdateFunction(elmtId, this.qualityReport.issues, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '读取最近检查结果', onTap: () => this.loadReport() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 495, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '读取最近检查结果',
                            onTap: () => this.loadReport()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '读取最近检查结果'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'recon', group: 'recon' });
            Checkbox.select(this.reconAccepted);
            Checkbox.onChange((v: boolean) => this.reconAccepted = v);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('同意使用本机算力训练，接受覆盖可能不完整及尺度未标定。无外部服务费用。');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '开始本机 3DGS 重建', active: this.reconReady && this.reconAccepted, onTap: () => this.startRecon() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 503, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '开始本机 3DGS 重建',
                            active: this.reconReady && this.reconAccepted,
                            onTap: () => this.startRecon()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '开始本机 3DGS 重建', active: this.reconReady && this.reconAccepted
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('补充拍摄与上传');
            Button.onClick(() => this.go(Page.Camera));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('查看任务中心');
            Button.width('100%');
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(Color.Transparent);
            Button.onClick(() => this.go(Page.Tasks));
        }, Button);
        Button.pop();
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
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '重建任务', subtitle: this.projectName || '先选择一个项目', back: false, action: '空间', onAction: () => this.back() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 511, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '重建任务',
                            subtitle: this.projectName || '先选择一个项目',
                            back: false,
                            action: '空间',
                            onAction: () => this.back()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '重建任务', subtitle: this.projectName || '先选择一个项目', back: false, action: '空间'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.hint.bind(this)('本机 COLMAP + Brush 训练。首次匹配与训练可能持续数分钟；失败可查看错误码并补拍。');
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '刷新任务与模型', onTap: () => this.refreshRecon() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 515, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '刷新任务与模型',
                            onTap: () => this.refreshRecon()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '刷新任务与模型'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.scenes.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new PrimaryButton(this, { text: '浏览当前房间的 3DGS 模型', onTap: () => this.go(Page.Scene) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 516, col: 34 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        text: '浏览当前房间的 3DGS 模型',
                                        onTap: () => this.go(Page.Scene)
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    text: '浏览当前房间的 3DGS 模型'
                                });
                            }
                        }, { name: "PrimaryButton" });
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
            if (!this.tasks.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('当前没有重建任务');
                        Text.fontColor(COLOR.MUTED);
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
                const task = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create({ space: 8 });
                    Column.width('100%');
                    Column.padding(16);
                    Column.backgroundColor(COLOR.CARD);
                    Column.borderRadius(8);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(task.job_id);
                    Text.fontSize(12);
                    Text.fontColor(COLOR.MUTED);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(task.state + ' · ' + this.stageName(task.stage));
                    Text.fontSize(18);
                    Text.fontColor(COLOR.BRAND);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    If.create();
                    if (task.error_code) {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Text.create(task.error_code as string);
                                Text.fontSize(12);
                                Text.fontColor(COLOR.WARN);
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
                    If.create();
                    if (task.state === 'queued' || task.state === 'running') {
                        this.ifElseBranchUpdateFunction(0, () => {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                Button.createWithLabel('取消任务');
                                Button.onClick(() => this.cancelRecon(task));
                            }, Button);
                            Button.pop();
                        });
                    }
                    else {
                        this.ifElseBranchUpdateFunction(1, () => {
                        });
                    }
                }, If);
                If.pop();
                Column.pop();
            };
            this.forEachUpdateFunction(elmtId, this.tasks, forEachItemGenFunction, (task: Task) => task.job_id + '_' + task.revision, false, false);
        }, ForEach);
        ForEach.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '选择项目' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 526, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '选择项目'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '选择项目'
                    });
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const card = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SettingRow(this, { icon: '◇', title: card.name, detail: card.room_count + ' 房间 ›', onTap: () => this.selectProject(card) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 527, col: 51 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    icon: '◇',
                                    title: card.name,
                                    detail: card.room_count + ' 房间 ›',
                                    onTap: () => this.selectProject(card)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                icon: '◇', title: card.name, detail: card.room_count + ' 房间 ›'
                            });
                        }
                    }, { name: "SettingRow" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.cards, forEachItemGenFunction, (card: ProjectCard) => card.project_id, false, false);
        }, ForEach);
        ForEach.pop();
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
            Image.create(this.previewUri ? this.previewUri : { "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.height('100%');
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width('100%');
        }, Row);
        this.glassButton.bind(this)('‹', () => this.back());
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 3 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.projectName);
            Text.fontSize(18);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('空间素材与模型');
            Text.fontSize(11);
            Text.fontColor(COLOR.GOLD);
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
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
                const room = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: room.name, selected: index === this.activeRoom, dark: true, onTap: () => this.switchRoom(index) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 538, col: 79 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: room.name,
                                    selected: index === this.activeRoom,
                                    dark: true,
                                    onTap: () => this.switchRoom(index)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: room.name, selected: index === this.activeRoom, dark: true
                            });
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.rooms, forEachItemGenFunction, (room: Room) => room.room_id, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.scenes.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new PrimaryButton(this, { text: '打开真实 3DGS 模型', onTap: () => this.go(Page.Scene) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 540, col: 32 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        text: '打开真实 3DGS 模型',
                                        onTap: () => this.go(Page.Scene)
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    text: '打开真实 3DGS 模型'
                                });
                            }
                        }, { name: "PrimaryButton" });
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
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('语义标注');
            Button.layoutWeight(1);
            Button.backgroundColor(COLOR.GLASS);
            Button.fontColor(Color.White);
            Button.onClick(() => { this.annotationId = ''; this.annotationVersion = 0; this.objectName = ''; this.objectWidth = ''; this.objectDepth = ''; this.objectHeight = ''; this.dimensionStatus = 'unknown'; this.go(Page.Annotate); });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('需求助手');
            Button.layoutWeight(1);
            Button.backgroundColor(COLOR.GLASS);
            Button.fontColor(Color.White);
            Button.onClick(() => this.go(Page.Chat));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('方案候选');
            Button.layoutWeight(1);
            Button.backgroundColor(COLOR.GLASS);
            Button.fontColor(Color.White);
            Button.onClick(() => this.go(Page.Proposal));
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding(16);
            Column.backgroundColor(COLOR.GLASS);
            Column.borderRadius(18);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.roomName());
            Text.fontSize(22);
            Text.fontColor(Color.White);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('尺寸待实测 · ' + this.annotations.length + ' 个标注 · ' + this.captures.length + ' 次素材记录');
            Text.fontSize(12);
            Text.fontColor('#D9D7D2');
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.roomDraft, placeholder: '新增房间名称' });
            TextInput.id('addRoomNameInput');
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.roomDraft = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('添加');
            Button.backgroundColor(COLOR.BRAND);
            Button.onClick(() => this.addRoom());
        }, Button);
        Button.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('采集照片');
            Button.layoutWeight(1);
            Button.backgroundColor(COLOR.BRAND);
            Button.onClick(() => this.go(Page.Guide));
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('户型核对');
            Button.layoutWeight(1);
            Button.backgroundColor(COLOR.GLASS);
            Button.fontColor(COLOR.GOLD);
            Button.onClick(() => this.go(Page.Floorplan));
        }, Button);
        Button.pop();
        Row.pop();
        Column.pop();
        Column.pop();
        Stack.pop();
    }
    AnnotatePage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '语义标注', subtitle: this.roomName() + ' · 与三维锚点独立记录', onBack: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 563, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '语义标注',
                            subtitle: this.roomName() + ' · 与三维锚点独立记录',
                            onBack: () => this.go(Page.Viewer)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '语义标注', subtitle: this.roomName() + ' · 与三维锚点独立记录'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height(140);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.objectName, placeholder: '对象名称，如：沙发' });
            TextInput.id('annotationNameInput');
            TextInput.maxLength(80);
            TextInput.onChange((v: string) => this.objectName = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '家具', selected: this.category === 'furniture', onTap: () => this.category = 'furniture' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 569, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '家具',
                            selected: this.category === 'furniture',
                            onTap: () => this.category = 'furniture'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '家具', selected: this.category === 'furniture'
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '电器', selected: this.category === 'appliance', onTap: () => this.category = 'appliance' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 570, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '电器',
                            selected: this.category === 'appliance',
                            onTap: () => this.category = 'appliance'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '电器', selected: this.category === 'appliance'
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '建筑结构', selected: this.category === 'structure', onTap: () => this.category = 'structure' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 571, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '建筑结构',
                            selected: this.category === 'structure',
                            onTap: () => this.category = 'structure'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '建筑结构', selected: this.category === 'structure'
                    });
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.objectWidth, placeholder: '宽 / 米' });
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.objectWidth = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.objectDepth, placeholder: '深 / 米' });
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.objectDepth = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.objectHeight, placeholder: '高 / 米' });
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.objectHeight = v);
        }, TextInput);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '未知', selected: this.dimensionStatus === 'unknown', onTap: () => this.dimensionStatus = 'unknown' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 578, col: 26 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '未知',
                            selected: this.dimensionStatus === 'unknown',
                            onTap: () => this.dimensionStatus = 'unknown'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '未知', selected: this.dimensionStatus === 'unknown'
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '估算', selected: this.dimensionStatus === 'estimated', onTap: () => this.dimensionStatus = 'estimated' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 578, col: 127 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '估算',
                            selected: this.dimensionStatus === 'estimated',
                            onTap: () => this.dimensionStatus = 'estimated'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '估算', selected: this.dimensionStatus === 'estimated'
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '实测', selected: this.dimensionStatus === 'measured', onTap: () => this.dimensionStatus = 'measured' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 578, col: 232 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '实测',
                            selected: this.dimensionStatus === 'measured',
                            onTap: () => this.dimensionStatus = 'measured'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '实测', selected: this.dimensionStatus === 'measured'
                    });
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.dimensionSource, placeholder: '尺寸来源，例如：卷尺手工实测' });
            TextInput.onChange((v: string) => this.dimensionSource = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.material, placeholder: '材质 / 品牌（可选）' });
            TextInput.maxLength(300);
            TextInput.onChange((v: string) => this.material = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ text: this.objectNote, placeholder: '使用备注…' });
            TextArea.height(80);
            TextArea.maxLength(2000);
            TextArea.onChange((v: string) => this.objectNote = v);
        }, TextArea);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '保存标注', onTap: () => this.saveAnnotation() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 582, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '保存标注',
                            onTap: () => this.saveAnnotation()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '保存标注'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.hint.bind(this)('底图为示例。未绑定经验证的空间坐标，不提供伪测距、区域删除或改色效果。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SettingRow(this, { icon: '◇', title: item.name, detail: '版本 ' + item.version + ' ›', onTap: () => this.editAnnotation(item) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 584, col: 56 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    icon: '◇',
                                    title: item.name,
                                    detail: '版本 ' + item.version + ' ›',
                                    onTap: () => this.editAnnotation(item)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                icon: '◇', title: item.name, detail: '版本 ' + item.version + ' ›'
                            });
                        }
                    }, { name: "SettingRow" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.annotations, forEachItemGenFunction, (item: Annotation) => item.annotation_id, false, false);
        }, ForEach);
        ForEach.pop();
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
                    let componentCall = new TopBar(this, { title: '装修需求助手', subtitle: '固定澄清流程 · 云端 AI 未接入', onBack: () => this.go(Page.Viewer), action: '需求卡', onAction: () => this.showSummary = !this.showSummary }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 591, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '装修需求助手',
                            subtitle: '固定澄清流程 · 云端 AI 未接入',
                            onBack: () => this.go(Page.Viewer),
                            action: '需求卡',
                            onAction: () => this.showSummary = !this.showSummary
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '装修需求助手', subtitle: '固定澄清流程 · 云端 AI 未接入', action: '需求卡'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.width('100%');
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.messages.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.hint.bind(this)('说说希望改善的地方。消息会保存到当前房间；预算与风格需要在需求卡中人工确认。');
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
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(item.text);
                    Text.fontSize(14);
                    Text.fontColor(COLOR.INK);
                    Text.lineHeight(22);
                    Text.width('92%');
                    Text.padding(14);
                    Text.backgroundColor(item.role === 'user' ? COLOR.GOLD_SOFT : COLOR.CARD);
                    Text.borderRadius(8);
                    Text.alignSelf(item.role === 'user' ? ItemAlign.End : ItemAlign.Start);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.messages, forEachItemGenFunction, (item: Message) => item.message_id, false, false);
        }, ForEach);
        ForEach.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '确认需求卡' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 599, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '确认需求卡'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '确认需求卡'
                    });
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.budgetMin, placeholder: '预算下限 / 元' });
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.budgetMin = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.budgetMax, placeholder: '预算上限 / 元' });
            TextInput.layoutWeight(1);
            TextInput.onChange((v: string) => this.budgetMax = v);
        }, TextInput);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 6 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const label = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Chip(this, { text: label, onTap: () => { this.budgetMin = String([0, 150000, 250000][index]); this.budgetMax = String([150000, 250000, 500000][index]); } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 604, col: 91 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    text: label,
                                    onTap: () => { this.budgetMin = String([0, 150000, 250000][index]); this.budgetMax = String([150000, 250000, 500000][index]); }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                text: label
                            });
                        }
                    }, { name: "Chip" });
                }
            };
            this.forEachUpdateFunction(elmtId, ['15万以内', '15–25万', '25万以上'], forEachItemGenFunction, undefined, true, false);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.style, placeholder: '偏好风格' });
            TextInput.id('styleInput');
            TextInput.maxLength(100);
            TextInput.onChange((v: string) => this.style = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextArea.create({ text: this.needs, placeholder: '家庭需求、希望保留的使用习惯…' });
            TextArea.id('needsInput');
            TextArea.height(100);
            TextArea.maxLength(2000);
            TextArea.onChange((v: string) => this.needs = v);
        }, TextArea);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '确认需求并生成沟通候选', onTap: () => this.confirmRequirements() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 607, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '确认需求并生成沟通候选',
                            onTap: () => this.confirmRequirements()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '确认需求并生成沟通候选'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.padding(16);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.chatText, placeholder: '输入需求…' });
            TextInput.id('chatInput');
            TextInput.layoutWeight(1);
            TextInput.maxLength(4000);
            TextInput.onChange((v: string) => this.chatText = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('→');
            Button.width(46);
            Button.height(46);
            Button.backgroundColor(COLOR.BRAND);
            Button.onClick(() => this.sendMessage());
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
            Image.create(this.proposal % 2 === 0 ? { "id": 16777224, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" } : { "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('100%');
            Column.height('100%');
            Column.padding(16);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.width('100%');
        }, Row);
        this.glassButton.bind(this)('‹', () => this.back());
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('方案推荐');
            Text.fontSize(18);
            Text.fontColor(Color.White);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('规则生成的沟通候选 · 配图为示例');
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
            If.create();
            if (this.proposals.length) {
                this.ifElseBranchUpdateFunction(0, () => {
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
                                        let componentCall = new Chip(this, { text: item.style, selected: this.proposal === index, dark: true, onTap: () => { this.proposal = index; this.validation = null; this.exportFile = null; } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 623, col: 89 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                text: item.style,
                                                selected: this.proposal === index,
                                                dark: true,
                                                onTap: () => { this.proposal = index; this.validation = null; this.exportFile = null; }
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            text: item.style, selected: this.proposal === index, dark: true
                                        });
                                    }
                                }, { name: "Chip" });
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.proposals, forEachItemGenFunction, (item: Proposal) => item.proposal_id, true, false);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
                    Scroll.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 12 });
                        Column.padding(18);
                        Column.backgroundColor(COLOR.GLASS);
                        Column.borderRadius(18);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.proposals[this.proposal].title);
                        Text.fontSize(20);
                        Text.fontWeight(FontWeight.Bold);
                        Text.fontColor(Color.White);
                        Text.width('100%');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('预算影响：待真实报价 · 技术依据待补充');
                        Text.fontSize(13);
                        Text.fontColor(COLOR.GOLD);
                        Text.width('100%');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.proposals[this.proposal].summary);
                        Text.fontSize(12);
                        Text.fontColor(Color.White);
                        Text.maxLines(3);
                        Text.width('100%');
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new Chip(this, { text: item.title, dark: true }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 628, col: 98 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                text: item.title,
                                                dark: true
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            text: item.title, dark: true
                                        });
                                    }
                                }, { name: "Chip" });
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.proposals[this.proposal].actions, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    Row.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 10 });
                        Row.width('100%');
                    }, Row);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('再调整');
                        Button.layoutWeight(1);
                        Button.backgroundColor('#22FFFFFF');
                        Button.fontColor(Color.White);
                        Button.onClick(() => this.go(Page.Chat));
                    }, Button);
                    Button.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('查看校验');
                        Button.layoutWeight(2);
                        Button.backgroundColor(COLOR.GOLD);
                        Button.fontColor(COLOR.INK);
                        Button.onClick(() => this.validateProposal());
                    }, Button);
                    Button.pop();
                    Row.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create({ space: 12 });
                        Column.padding(20);
                        Column.backgroundColor(COLOR.GLASS);
                        Column.borderRadius(18);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('尚未生成方案候选');
                        Text.fontSize(22);
                        Text.fontColor(Color.White);
                    }, Text);
                    Text.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('先确认预算、风格和家庭需求，再生成三套沟通候选。');
                        Text.fontSize(13);
                        Text.fontColor(Color.White);
                    }, Text);
                    Text.pop();
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new PrimaryButton(this, { text: '记录并确认需求', onTap: () => this.go(Page.Chat) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 638, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        text: '记录并确认需求',
                                        onTap: () => this.go(Page.Chat)
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    text: '记录并确认需求'
                                });
                            }
                        }, { name: "PrimaryButton" });
                    }
                    Column.pop();
                });
            }
        }, If);
        If.pop();
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
                    let componentCall = new TopBar(this, { title: '方案校验', subtitle: this.validation ? this.validation.decision : '尚未校验', onBack: () => this.go(Page.Proposal) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 646, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '方案校验',
                            subtitle: this.validation ? this.validation.decision : '尚未校验',
                            onBack: () => this.go(Page.Proposal)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '方案校验', subtitle: this.validation ? this.validation.decision : '尚未校验'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.validation) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Row.create({ space: 8 });
                    }, Row);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: String(this.validation.conflicts.length), label: '硬冲突', color: COLOR.ERROR }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 650, col: 28 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: String(this.validation.conflicts.length),
                                        label: '硬冲突',
                                        color: COLOR.ERROR
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: String(this.validation.conflicts.length), label: '硬冲突', color: COLOR.ERROR
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: String(this.validation.unknowns.length), label: '待核验', color: COLOR.WARN }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 650, col: 119 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: String(this.validation.unknowns.length),
                                        label: '待核验',
                                        color: COLOR.WARN
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: String(this.validation.unknowns.length), label: '待核验', color: COLOR.WARN
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new MetricCard(this, { value: String(this.validation.missing_evidence.length), label: '证据缺口', color: COLOR.WARN }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 650, col: 208 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        value: String(this.validation.missing_evidence.length),
                                        label: '证据缺口',
                                        color: COLOR.WARN
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    value: String(this.validation.missing_evidence.length), label: '证据缺口', color: COLOR.WARN
                                });
                            }
                        }, { name: "MetricCard" });
                    }
                    Row.pop();
                    this.hint.bind(this)('缺少依据和实测条件时保留 unknown，不能因未发现冲突就宣称通过。');
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new SettingRow(this, { icon: '!', title: item.message, detail: '待核验' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 652, col: 63 });
                                        ViewPU.create(componentCall);
                                        let paramsLambda = () => {
                                            return {
                                                icon: '!',
                                                title: item.message,
                                                detail: '待核验'
                                            };
                                        };
                                        componentCall.paramsGenerator_ = paramsLambda;
                                    }
                                    else {
                                        this.updateStateVarsOfChildByElmtId(elmtId, {
                                            icon: '!', title: item.message, detail: '待核验'
                                        });
                                    }
                                }, { name: "SettingRow" });
                            }
                        };
                        this.forEachUpdateFunction(elmtId, this.validation.unknowns, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        ForEach.create();
                        const forEachItemGenFunction = _item => {
                            const item = _item;
                            this.hint.bind(this)(item.message);
                        };
                        this.forEachUpdateFunction(elmtId, this.validation.conflicts, forEachItemGenFunction);
                    }, ForEach);
                    ForEach.pop();
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create('规则版本：' + this.validation.rule_set_version);
                        Text.fontSize(11);
                        Text.fontColor(COLOR.MUTED);
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new PrimaryButton(this, { text: '执行确定性校验', onTap: () => this.validateProposal() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 655, col: 18 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        text: '执行确定性校验',
                                        onTap: () => this.validateProposal()
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    text: '执行确定性校验'
                                });
                            }
                        }, { name: "PrimaryButton" });
                    }
                });
            }
        }, If);
        If.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 8 });
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '补充需求与实测信息', onTap: () => this.go(Page.Chat) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 659, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '补充需求与实测信息',
                            onTap: () => this.go(Page.Chat)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '补充需求与实测信息'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('导出待核验沟通草稿');
            Button.width('100%');
            Button.fontColor(COLOR.BRAND);
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
                    let componentCall = new TopBar(this, { title: '方案摘要与导出', subtitle: '固定版本 · 待核验沟通草稿', onBack: () => this.go(Page.Validation) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 666, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '方案摘要与导出',
                            subtitle: '固定版本 · 待核验沟通草稿',
                            onBack: () => this.go(Page.Validation)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '方案摘要与导出', subtitle: '固定版本 · 待核验沟通草稿'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777224, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height(160);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius(8);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.projectName + ' · ' + this.roomName());
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.proposals.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.proposals[this.proposal].title);
                        Text.fontSize(15);
                        Text.fontColor(COLOR.BRAND);
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
        this.hint.bind(this)('配图为示例。导出包含实际需求、候选动作、来源、版本和待核验项。请检查需求自由文本，避免写入不希望分享的隐私内容。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: 'PDF 方案书', selected: this.exportType === 0, onTap: () => this.exportType = 0 }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 674, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: 'PDF 方案书',
                            selected: this.exportType === 0,
                            onTap: () => this.exportType = 0
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: 'PDF 方案书', selected: this.exportType === 0
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '3D 模型浏览', onTap: () => { if (this.scenes.length)
                            this.go(Page.Scene);
                        else
                            this.notify('请先完成当前房间的重建'); } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 675, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '3D 模型浏览',
                            onTap: () => { if (this.scenes.length)
                                this.go(Page.Scene);
                            else
                                this.notify('请先完成当前房间的重建'); }
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '3D 模型浏览'
                    });
                }
            }, { name: "Chip" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Chip(this, { text: '图片合集', selected: this.exportType === 2, onTap: () => this.exportType = 2 }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 676, col: 13 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '图片合集',
                            selected: this.exportType === 2,
                            onTap: () => this.exportType = 2
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '图片合集', selected: this.exportType === 2
                    });
                }
            }, { name: "Chip" });
        }
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'draft', group: 'export' });
            Checkbox.select(this.exportAccepted);
            Checkbox.selectedColor(COLOR.BRAND);
            Checkbox.onChange((v: boolean) => this.exportAccepted = v);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('我确认导出待核验沟通草稿，不作为施工或可实施依据');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.exportFile) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SettingRow(this, { icon: '▤', title: this.exportFile.file_name, detail: Math.ceil(this.exportFile.file_size / 1024) + ' KB' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 680, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        icon: '▤',
                                        title: this.exportFile.file_name,
                                        detail: Math.ceil(this.exportFile.file_size / 1024) + ' KB'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    icon: '▤', title: this.exportFile.file_name, detail: Math.ceil(this.exportFile.file_size / 1024) + ' KB'
                                });
                            }
                        }, { name: "SettingRow" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new PrimaryButton(this, { text: '保存到文件', onTap: () => this.saveExport() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 681, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        text: '保存到文件',
                                        onTap: () => this.saveExport()
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    text: '保存到文件'
                                });
                            }
                        }, { name: "PrimaryButton" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '导出记录' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 683, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '导出记录'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '导出记录'
                    });
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const file = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SettingRow(this, { icon: '▤', title: file.file_name, detail: '保存 ›', onTap: () => { this.exportFile = file; this.saveExport(); } }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 684, col: 56 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    icon: '▤',
                                    title: file.file_name,
                                    detail: '保存 ›',
                                    onTap: () => { this.exportFile = file; this.saveExport(); }
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                icon: '▤', title: file.file_name, detail: '保存 ›'
                            });
                        }
                    }, { name: "SettingRow" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.exportFiles, forEachItemGenFunction, (file: ExportFile) => file.export_id, false, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '生成沟通草稿文件', active: this.exportAccepted, onTap: () => this.createExport() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 687, col: 16 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '生成沟通草稿文件',
                            active: this.exportAccepted,
                            onTap: () => this.createExport()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '生成沟通草稿文件', active: this.exportAccepted
                    });
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
                    let componentCall = new TopBar(this, { title: '户型图核对', subtitle: 'OCR 未接入 · 支持人工核对', onBack: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 692, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '户型图核对',
                            subtitle: 'OCR 未接入 · 支持人工核对',
                            onBack: () => this.go(Page.Viewer)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '户型图核对', subtitle: 'OCR 未接入 · 支持人工核对'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 14 });
            Column.padding(20);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Checkbox.create({ name: 'floor-upload', group: 'floor' });
            Checkbox.select(this.uploadAccepted);
            Checkbox.onChange((v: boolean) => this.uploadAccepted = v);
        }, Checkbox);
        Checkbox.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('允许将所选户型图片上传本机后端保存');
            Text.fontSize(12);
            Text.fontColor(COLOR.MUTED);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '选择并保存户型图片', active: this.uploadAccepted, onTap: () => this.choosePhotos('floorplan') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 696, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '选择并保存户型图片',
                            active: this.uploadAccepted,
                            onTap: () => this.choosePhotos('floorplan')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '选择并保存户型图片', active: this.uploadAccepted
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.hint.bind(this)('请根据实际户型图逐房间填写。此处保存人工核对结果，不把示意当作真实重建，也不自动建立三维尺度。');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.height(100);
            Row.backgroundColor(COLOR.CARD);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const room = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(room.name);
                    Text.fontSize(13);
                    Text.fontColor(COLOR.BRAND);
                    Text.padding(12);
                    Text.border({ width: 2, color: COLOR.GOLD });
                    Text.layoutWeight(1);
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.rooms, forEachItemGenFunction);
        }, ForEach);
        ForEach.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.floorRoomName, placeholder: '核对后新增房间名称' });
            TextInput.maxLength(120);
            TextInput.onChange((v: string) => this.floorRoomName = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.floorArea, placeholder: '图纸面积 / 平方米（可留空）' });
            TextInput.onChange((v: string) => this.floorArea = v);
        }, TextInput);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TextInput.create({ text: this.floorOrientation, placeholder: '朝向（可留空）' });
            TextInput.maxLength(20);
            TextInput.onChange((v: string) => this.floorOrientation = v);
        }, TextInput);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '确认并保存房间记录', onTap: () => this.saveFloorplan() }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 702, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '确认并保存房间记录',
                            onTap: () => this.saveFloorplan()
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '确认并保存房间记录'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const plan = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const room = _item;
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new SettingRow(this, { icon: '⌂', title: room.name, detail: room.area_sqm === null ? '面积未知' : room.area_sqm + ' m² · 人工录入' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 703, col: 92 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            icon: '⌂',
                                            title: room.name,
                                            detail: room.area_sqm === null ? '面积未知' : room.area_sqm + ' m² · 人工录入'
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        icon: '⌂', title: room.name, detail: room.area_sqm === null ? '面积未知' : room.area_sqm + ' m² · 人工录入'
                                    });
                                }
                            }, { name: "SettingRow" });
                        }
                    };
                    this.forEachUpdateFunction(elmtId, plan.rooms, forEachItemGenFunction);
                }, ForEach);
                ForEach.pop();
            };
            this.forEachUpdateFunction(elmtId, this.floorplans, forEachItemGenFunction, (plan: Floorplan) => plan.floorplan_id, false, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
    PrivacyPage(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(COLOR.PAGE);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TopBar(this, { title: '我的', subtitle: this.userName + ' · ' + (this.projectName || '未选择项目'), back: false, action: '设置', onAction: () => this.go(Page.Settings) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 710, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的',
                            subtitle: this.userName + ' · ' + (this.projectName || '未选择项目'),
                            back: false,
                            action: '设置',
                            onAction: () => this.go(Page.Settings)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '我的', subtitle: this.userName + ' · ' + (this.projectName || '未选择项目'), back: false, action: '设置'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding(20);
        }, Column);
        this.hint.bind(this)('用途授权按项目管理。撤回先阻断访问与新处理；清理任务仍可能为 pending，不能声明所有副本已删除。');
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '我的数据' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 714, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '我的数据'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '我的数据'
                    });
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◇', title: '空间场景', detail: this.scenes.length + ' 个已发布模型', onTap: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 715, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◇',
                            title: '空间场景',
                            detail: this.scenes.length + ' 个已发布模型',
                            onTap: () => this.go(Page.Viewer)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◇', title: '空间场景', detail: this.scenes.length + ' 个已发布模型'
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '≡', title: '需求数据', detail: this.roomId() ? '查看 ›' : '先选择项目', onTap: () => this.go(Page.Chat) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 716, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '≡',
                            title: '需求数据',
                            detail: this.roomId() ? '查看 ›' : '先选择项目',
                            onTap: () => this.go(Page.Chat)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '≡', title: '需求数据', detail: this.roomId() ? '查看 ›' : '先选择项目'
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '▤', title: '导出记录', detail: this.exportFiles.length + ' 份', onTap: () => this.go(Page.Export) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 717, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '▤',
                            title: '导出记录',
                            detail: this.exportFiles.length + ' 份',
                            onTap: () => this.go(Page.Export)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '▤', title: '导出记录', detail: this.exportFiles.length + ' 份'
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '当前项目用途授权' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 718, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '当前项目用途授权'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '当前项目用途授权'
                    });
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '☁', title: '素材上传与保存', hasToggle: true, toggle: !!this.activeConsent('cloud_upload'), onTap: () => this.toggleConsent('cloud_upload') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 719, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '☁',
                            title: '素材上传与保存',
                            hasToggle: true,
                            toggle: !!this.activeConsent('cloud_upload'),
                            onTap: () => this.toggleConsent('cloud_upload')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '☁', title: '素材上传与保存', hasToggle: true, toggle: !!this.activeConsent('cloud_upload')
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◇', title: '本机重建处理', hasToggle: true, toggle: !!this.activeConsent('cloud_reconstruction'), onTap: () => this.toggleConsent('cloud_reconstruction') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 720, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◇',
                            title: '本机重建处理',
                            hasToggle: true,
                            toggle: !!this.activeConsent('cloud_reconstruction'),
                            onTap: () => this.toggleConsent('cloud_reconstruction')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◇', title: '本机重建处理', hasToggle: true, toggle: !!this.activeConsent('cloud_reconstruction')
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: 'AI', title: '云端 AI（未接入）', hasToggle: true, toggle: !!this.activeConsent('cloud_agent'), onTap: () => this.toggleConsent('cloud_agent') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 721, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: 'AI',
                            title: '云端 AI（未接入）',
                            hasToggle: true,
                            toggle: !!this.activeConsent('cloud_agent'),
                            onTap: () => this.toggleConsent('cloud_agent')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: 'AI', title: '云端 AI（未接入）', hasToggle: true, toggle: !!this.activeConsent('cloud_agent')
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◎', title: '外部分享授权', hasToggle: true, toggle: !!this.activeConsent('external_share'), onTap: () => this.toggleConsent('external_share') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 722, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◎',
                            title: '外部分享授权',
                            hasToggle: true,
                            toggle: !!this.activeConsent('external_share'),
                            onTap: () => this.toggleConsent('external_share')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◎', title: '外部分享授权', hasToggle: true, toggle: !!this.activeConsent('external_share')
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '✦', title: '体验改进偏好', hasToggle: true, toggle: this.settingsView.settings.improvement_opt_in, onTap: () => this.changeSetting('improve') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 723, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '✦',
                            title: '体验改进偏好',
                            hasToggle: true,
                            toggle: this.settingsView.settings.improvement_opt_in,
                            onTap: () => this.changeSetting('improve')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '✦', title: '体验改进偏好', hasToggle: true, toggle: this.settingsView.settings.improvement_opt_in
                    });
                }
            }, { name: "SettingRow" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('当前仅保存体验偏好，不采集使用遥测。');
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('撤回当前项目全部授权');
            Button.width('100%');
            Button.height(50);
            Button.fontColor(COLOR.ERROR);
            Button.backgroundColor('#08C0392B');
            Button.border({ width: 1, color: '#55C0392B' });
            Button.borderRadius(8);
            Button.onClick(() => this.revokeAll());
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
                    let componentCall = new TopBar(this, { title: '设置与诊断', subtitle: 'DECOVER · 前后端整合版', onBack: () => this.go(Page.Privacy) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 733, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '设置与诊断',
                            subtitle: 'DECOVER · 前后端整合版',
                            onBack: () => this.go(Page.Privacy)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '设置与诊断', subtitle: 'DECOVER · 前后端整合版'
                    });
                }
            }, { name: "TopBar" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.layoutWeight(1);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 10 });
            Column.padding(20);
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '画质与采集偏好' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 736, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '画质与采集偏好'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '画质与采集偏好'
                    });
                }
            }, { name: "SectionTitle" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◐', title: '默认画质', detail: this.settingsView.settings.quality, onTap: () => this.changeSetting('quality') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 737, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◐',
                            title: '默认画质',
                            detail: this.settingsView.settings.quality,
                            onTap: () => this.changeSetting('quality')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◐', title: '默认画质', detail: this.settingsView.settings.quality
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '⌁', title: '省电模式', hasToggle: true, toggle: this.settingsView.settings.power_saving, onTap: () => this.changeSetting('power') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 738, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '⌁',
                            title: '省电模式',
                            hasToggle: true,
                            toggle: this.settingsView.settings.power_saving,
                            onTap: () => this.changeSetting('power')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '⌁', title: '省电模式', hasToggle: true, toggle: this.settingsView.settings.power_saving
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◎', title: '采集清晰度', detail: this.settingsView.settings.capture_resolution, onTap: () => this.changeSetting('resolution') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 739, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◎',
                            title: '采集清晰度',
                            detail: this.settingsView.settings.capture_resolution,
                            onTap: () => this.changeSetting('resolution')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◎', title: '采集清晰度', detail: this.settingsView.settings.capture_resolution
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '◖', title: '提示语', hasToggle: true, toggle: this.settingsView.settings.hints, onTap: () => this.changeSetting('hints') }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 740, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '◖',
                            title: '提示语',
                            hasToggle: true,
                            toggle: this.settingsView.settings.hints,
                            onTap: () => this.changeSetting('hints')
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '◖', title: '提示语', hasToggle: true, toggle: this.settingsView.settings.hints
                    });
                }
            }, { name: "SettingRow" });
        }
        this.hint.bind(this)('偏好会保存到账号。当前本机重建采用固定训练配置，渲染器会按设备能力选择 GPU 或软件预览。');
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SectionTitle(this, { title: '设备与服务诊断' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 742, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            title: '设备与服务诊断'
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        title: '设备与服务诊断'
                    });
                }
            }, { name: "SectionTitle" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.diagnostics) {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SettingRow(this, { icon: '✓', title: '后端服务', detail: this.diagnostics.backend }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 744, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        icon: '✓',
                                        title: '后端服务',
                                        detail: this.diagnostics.backend
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    icon: '✓', title: '后端服务', detail: this.diagnostics.backend
                                });
                            }
                        }, { name: "SettingRow" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SettingRow(this, { icon: '✓', title: '数据库', detail: this.diagnostics.database }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 745, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        icon: '✓',
                                        title: '数据库',
                                        detail: this.diagnostics.database
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    icon: '✓', title: '数据库', detail: this.diagnostics.database
                                });
                            }
                        }, { name: "SettingRow" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SettingRow(this, { icon: '!', title: '本机重建', detail: this.diagnostics.capabilities.reconstruction ? '可用' : '不可用' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 746, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        icon: '!',
                                        title: '本机重建',
                                        detail: this.diagnostics.capabilities.reconstruction ? '可用' : '不可用'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    icon: '!', title: '本机重建', detail: this.diagnostics.capabilities.reconstruction ? '可用' : '不可用'
                                });
                            }
                        }, { name: "SettingRow" });
                    }
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new SettingRow(this, { icon: '!', title: '云端 AI / OCR', detail: '未接入' }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 747, col: 13 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        icon: '!',
                                        title: '云端 AI / OCR',
                                        detail: '未接入'
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    icon: '!', title: '云端 AI / OCR', detail: '未接入'
                                });
                            }
                        }, { name: "SettingRow" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '执行实际服务诊断', onTap: () => this.run(async () => { this.diagnostics = await this.api.diagnostics(); }) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 749, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '执行实际服务诊断',
                            onTap: () => this.run(async () => { this.diagnostics = await this.api.diagnostics(); })
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '执行实际服务诊断'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '▦', title: '工作台', detail: '项目与标注 ›', onTap: () => this.go(Page.Workbench) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 750, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '▦',
                            title: '工作台',
                            detail: '项目与标注 ›',
                            onTap: () => this.go(Page.Workbench)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '▦', title: '工作台', detail: '项目与标注 ›'
                    });
                }
            }, { name: "SettingRow" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new SettingRow(this, { icon: '○', title: '重新连接后端', detail: '本机开发账号 ›', onTap: () => this.go(Page.Login) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 751, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            icon: '○',
                            title: '重新连接后端',
                            detail: '本机开发账号 ›',
                            onTap: () => this.go(Page.Login)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        icon: '○', title: '重新连接后端', detail: '本机开发账号 ›'
                    });
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
            Column.create({ space: 12 });
            Column.width('25%');
            Column.height('100%');
            Column.padding(12);
            Column.backgroundColor('#1E2126');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('DECOVER');
            Text.fontSize(17);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.GOLD);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const card = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(card.name);
                    Text.fontSize(12);
                    Text.fontColor(Color.White);
                    Text.padding(10);
                    Text.onClick(() => this.selectProject(card));
                }, Text);
                Text.pop();
            };
            this.forEachUpdateFunction(elmtId, this.cards, forEachItemGenFunction, (card: ProjectCard) => card.project_id, false, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('‹ 返回');
            Button.fontColor(COLOR.GOLD);
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
            Image.create({ "id": 16777225, "type": 20000, params: [], "bundleName": "cn.smartdecoration.app", "moduleName": "entry" });
            Image.width('100%');
            Image.height('100%');
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('参考底图 · 三维接续未接入');
            Text.fontSize(11);
            Text.fontColor(Color.White);
            Text.padding(10);
            Text.backgroundColor(COLOR.GLASS);
            Text.position({ bottom: 20, left: 10 });
        }, Text);
        Text.pop();
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 12 });
            Column.width('32%');
            Column.height('100%');
            Column.padding(12);
            Column.backgroundColor(COLOR.CARD);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('属性面板');
            Text.fontSize(17);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new SettingRow(this, { icon: '◇', title: item.name, detail: item.status, onTap: () => this.editAnnotation(item) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 770, col: 54 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    icon: '◇',
                                    title: item.name,
                                    detail: item.status,
                                    onTap: () => this.editAnnotation(item)
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                icon: '◇', title: item.name, detail: item.status
                            });
                        }
                    }, { name: "SettingRow" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.annotations, forEachItemGenFunction, (item: Annotation) => item.annotation_id, false, false);
        }, ForEach);
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.annotations.length) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.hint.bind(this)('当前房间暂无标注');
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new PrimaryButton(this, { text: '编辑需求', onTap: () => this.go(Page.Chat) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 773, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            text: '编辑需求',
                            onTap: () => this.go(Page.Chat)
                        };
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        text: '编辑需求'
                    });
                }
            }, { name: "PrimaryButton" });
        }
        Column.pop();
        Row.pop();
    }
    content(parent = null) {
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
            else if (this.page === Page.Scene) {
                this.ifElseBranchUpdateFunction(9, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.width('100%');
                        Column.height('100%');
                        Column.backgroundColor(COLOR.PAGE);
                    }, Column);
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new TopBar(this, { title: '3DGS 空间', subtitle: this.roomName() + ' · 尺度未标定', onBack: () => this.go(Page.Viewer) }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 789, col: 9 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {
                                        title: '3DGS 空间',
                                        subtitle: this.roomName() + ' · 尺度未标定',
                                        onBack: () => this.go(Page.Viewer)
                                    };
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    title: '3DGS 空间', subtitle: this.roomName() + ' · 尺度未标定'
                                });
                            }
                        }, { name: "TopBar" });
                    }
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        If.create();
                        if (this.scenes.length) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    __Common__.create();
                                    __Common__.layoutWeight(1);
                                }, __Common__);
                                {
                                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                                        if (isInitialRender) {
                                            let componentCall = new GaussianViewer(this, { api: this.api, projectId: this.projectId, roomId: this.roomId(), scene: this.scenes[0] }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/Index.ets", line: 790, col: 32 });
                                            ViewPU.create(componentCall);
                                            let paramsLambda = () => {
                                                return {
                                                    api: this.api,
                                                    projectId: this.projectId,
                                                    roomId: this.roomId(),
                                                    scene: this.scenes[0]
                                                };
                                            };
                                            componentCall.paramsGenerator_ = paramsLambda;
                                        }
                                        else {
                                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                                        }
                                    }, { name: "GaussianViewer" });
                                }
                                __Common__.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                            });
                        }
                    }, If);
                    If.pop();
                    Column.pop();
                });
            }
            else if (this.page === Page.Annotate) {
                this.ifElseBranchUpdateFunction(10, () => {
                    this.AnnotatePage.bind(this)();
                });
            }
            else if (this.page === Page.Chat) {
                this.ifElseBranchUpdateFunction(11, () => {
                    this.ChatPage.bind(this)();
                });
            }
            else if (this.page === Page.Proposal) {
                this.ifElseBranchUpdateFunction(12, () => {
                    this.ProposalPage.bind(this)();
                });
            }
            else if (this.page === Page.Validation) {
                this.ifElseBranchUpdateFunction(13, () => {
                    this.ValidationPage.bind(this)();
                });
            }
            else if (this.page === Page.Export) {
                this.ifElseBranchUpdateFunction(14, () => {
                    this.ExportPage.bind(this)();
                });
            }
            else if (this.page === Page.Floorplan) {
                this.ifElseBranchUpdateFunction(15, () => {
                    this.FloorplanPage.bind(this)();
                });
            }
            else if (this.page === Page.Privacy) {
                this.ifElseBranchUpdateFunction(16, () => {
                    this.PrivacyPage.bind(this)();
                });
            }
            else if (this.page === Page.Settings) {
                this.ifElseBranchUpdateFunction(17, () => {
                    this.SettingsPage.bind(this)();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(18, () => {
                    this.WorkbenchPage.bind(this)();
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create();
            Stack.width('100%');
            Stack.height('100%');
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.height('100%');
            Column.enabled(!this.busy);
        }, Column);
        this.content.bind(this)();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.busy) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        LoadingProgress.create();
                        LoadingProgress.width(42);
                        LoadingProgress.height(42);
                        LoadingProgress.color(COLOR.GOLD);
                        LoadingProgress.position({ top: 60, right: 20 });
                    }, LoadingProgress);
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Stack.pop();
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
