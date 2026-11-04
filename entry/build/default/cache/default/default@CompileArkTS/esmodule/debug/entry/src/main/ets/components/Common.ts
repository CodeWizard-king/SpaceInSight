if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BottomNav_Params {
    current?: number;
    onChange?: (index: number) => void;
}
interface SettingRow_Params {
    icon?: string;
    title?: string;
    detail?: string;
    toggle?: boolean;
    hasToggle?: boolean;
    onTap?: () => void;
}
interface MetricCard_Params {
    value?: string;
    label?: string;
    color?: string;
}
interface Chip_Params {
    text?: string;
    selected?: boolean;
    dark?: boolean;
    onTap?: () => void;
}
interface SectionTitle_Params {
    title?: string;
    action?: string;
}
interface TopBar_Params {
    title?: string;
    subtitle?: string;
    back?: boolean;
    action?: string;
    onBack?: () => void;
    onAction?: () => void;
}
interface PrimaryButton_Params {
    text?: string;
    active?: boolean;
    onTap?: () => void;
}
import { COLOR } from "@normalized:N&&&entry/src/main/ets/common/Tokens&";
export class PrimaryButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__text = new SynchedPropertySimpleOneWayPU(params.text, this, "text");
        this.__active = new SynchedPropertySimpleOneWayPU(params.active, this, "active");
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PrimaryButton_Params) {
        if (params.text === undefined) {
            this.__text.set('继续');
        }
        if (params.active === undefined) {
            this.__active.set(true);
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: PrimaryButton_Params) {
        this.__text.reset(params.text);
        this.__active.reset(params.active);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__active.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__text.aboutToBeDeleted();
        this.__active.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __text: SynchedPropertySimpleOneWayPU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __active: SynchedPropertySimpleOneWayPU<boolean>;
    get active() {
        return this.__active.get();
    }
    set active(newValue: boolean) {
        this.__active.set(newValue);
    }
    private onTap: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel(this.text);
            Button.width('100%');
            Button.height(48);
            Button.fontSize(16);
            Button.fontWeight(FontWeight.Medium);
            Button.fontColor(Color.White);
            Button.backgroundColor(this.active ? COLOR.BRAND : '#B4B2A9');
            Button.borderRadius(24);
            Button.stateEffect(true);
            Button.enabled(this.active);
            Button.onClick(this.onTap);
        }, Button);
        Button.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class TopBar extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__title = new SynchedPropertySimpleOneWayPU(params.title, this, "title");
        this.__subtitle = new SynchedPropertySimpleOneWayPU(params.subtitle, this, "subtitle");
        this.__back = new SynchedPropertySimpleOneWayPU(params.back, this, "back");
        this.__action = new SynchedPropertySimpleOneWayPU(params.action, this, "action");
        this.onBack = () => { };
        this.onAction = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TopBar_Params) {
        if (params.title === undefined) {
            this.__title.set('');
        }
        if (params.subtitle === undefined) {
            this.__subtitle.set('');
        }
        if (params.back === undefined) {
            this.__back.set(true);
        }
        if (params.action === undefined) {
            this.__action.set('');
        }
        if (params.onBack !== undefined) {
            this.onBack = params.onBack;
        }
        if (params.onAction !== undefined) {
            this.onAction = params.onAction;
        }
    }
    updateStateVars(params: TopBar_Params) {
        this.__title.reset(params.title);
        this.__subtitle.reset(params.subtitle);
        this.__back.reset(params.back);
        this.__action.reset(params.action);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__subtitle.purgeDependencyOnElmtId(rmElmtId);
        this.__back.purgeDependencyOnElmtId(rmElmtId);
        this.__action.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        this.__subtitle.aboutToBeDeleted();
        this.__back.aboutToBeDeleted();
        this.__action.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __title: SynchedPropertySimpleOneWayPU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __subtitle: SynchedPropertySimpleOneWayPU<string>;
    get subtitle() {
        return this.__subtitle.get();
    }
    set subtitle(newValue: string) {
        this.__subtitle.set(newValue);
    }
    private __back: SynchedPropertySimpleOneWayPU<boolean>;
    get back() {
        return this.__back.get();
    }
    set back(newValue: boolean) {
        this.__back.set(newValue);
    }
    private __action: SynchedPropertySimpleOneWayPU<string>;
    get action() {
        return this.__action.get();
    }
    set action(newValue: string) {
        this.__action.set(newValue);
    }
    private onBack: () => void;
    private onAction: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ left: 12, right: 16, top: 12, bottom: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.back) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel('‹');
                        Button.width(40);
                        Button.height(40);
                        Button.fontSize(30);
                        Button.fontColor(COLOR.INK);
                        Button.backgroundColor(Color.Transparent);
                        Button.onClick(this.onBack);
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.alignItems(HorizontalAlign.Start);
            Column.layoutWeight(1);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontSize(22);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.subtitle.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.subtitle);
                        Text.fontSize(12);
                        Text.fontColor(COLOR.MUTED);
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
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.action.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Button.createWithLabel(this.action);
                        Button.height(38);
                        Button.fontSize(13);
                        Button.fontColor(COLOR.BRAND);
                        Button.backgroundColor(Color.Transparent);
                        Button.onClick(this.onAction);
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
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class SectionTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__title = new SynchedPropertySimpleOneWayPU(params.title, this, "title");
        this.__action = new SynchedPropertySimpleOneWayPU(params.action, this, "action");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SectionTitle_Params) {
        if (params.title === undefined) {
            this.__title.set('');
        }
        if (params.action === undefined) {
            this.__action.set('');
        }
    }
    updateStateVars(params: SectionTitle_Params) {
        this.__title.reset(params.title);
        this.__action.reset(params.action);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__action.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__title.aboutToBeDeleted();
        this.__action.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __title: SynchedPropertySimpleOneWayPU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __action: SynchedPropertySimpleOneWayPU<string>;
    get action() {
        return this.__action.get();
    }
    set action(newValue: string) {
        this.__action.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.margin({ top: 18, bottom: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(COLOR.INK);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.action.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.action);
                        Text.fontSize(13);
                        Text.fontColor(COLOR.MUTED);
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
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class Chip extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__text = new SynchedPropertySimpleOneWayPU(params.text, this, "text");
        this.__selected = new SynchedPropertySimpleOneWayPU(params.selected, this, "selected");
        this.__dark = new SynchedPropertySimpleOneWayPU(params.dark, this, "dark");
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Chip_Params) {
        if (params.text === undefined) {
            this.__text.set('');
        }
        if (params.selected === undefined) {
            this.__selected.set(false);
        }
        if (params.dark === undefined) {
            this.__dark.set(false);
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: Chip_Params) {
        this.__text.reset(params.text);
        this.__selected.reset(params.selected);
        this.__dark.reset(params.dark);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__text.purgeDependencyOnElmtId(rmElmtId);
        this.__selected.purgeDependencyOnElmtId(rmElmtId);
        this.__dark.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__text.aboutToBeDeleted();
        this.__selected.aboutToBeDeleted();
        this.__dark.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __text: SynchedPropertySimpleOneWayPU<string>;
    get text() {
        return this.__text.get();
    }
    set text(newValue: string) {
        this.__text.set(newValue);
    }
    private __selected: SynchedPropertySimpleOneWayPU<boolean>;
    get selected() {
        return this.__selected.get();
    }
    set selected(newValue: boolean) {
        this.__selected.set(newValue);
    }
    private __dark: SynchedPropertySimpleOneWayPU<boolean>;
    get dark() {
        return this.__dark.get();
    }
    set dark(newValue: boolean) {
        this.__dark.set(newValue);
    }
    private onTap: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.text);
            Text.fontSize(12);
            Text.fontColor(this.selected ? COLOR.GOLD : (this.dark ? '#D9D7D2' : COLOR.MUTED));
            Text.padding({ left: 14, right: 14, top: 8, bottom: 8 });
            Text.backgroundColor(this.dark ? COLOR.GLASS : COLOR.CARD);
            Text.border({ width: this.selected ? 1.5 : 1, color: this.selected ? COLOR.GOLD : (this.dark ? '#55FFFFFF' : COLOR.HAIR) });
            Text.borderRadius(18);
            Text.onClick(this.onTap);
        }, Text);
        Text.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class MetricCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__value = new SynchedPropertySimpleOneWayPU(params.value, this, "value");
        this.__label = new SynchedPropertySimpleOneWayPU(params.label, this, "label");
        this.__color = new SynchedPropertySimpleOneWayPU(params.color, this, "color");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MetricCard_Params) {
        if (params.value === undefined) {
            this.__value.set('');
        }
        if (params.label === undefined) {
            this.__label.set('');
        }
        if (params.color === undefined) {
            this.__color.set(COLOR.INK);
        }
    }
    updateStateVars(params: MetricCard_Params) {
        this.__value.reset(params.value);
        this.__label.reset(params.label);
        this.__color.reset(params.color);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__value.purgeDependencyOnElmtId(rmElmtId);
        this.__label.purgeDependencyOnElmtId(rmElmtId);
        this.__color.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__value.aboutToBeDeleted();
        this.__label.aboutToBeDeleted();
        this.__color.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __value: SynchedPropertySimpleOneWayPU<string>;
    get value() {
        return this.__value.get();
    }
    set value(newValue: string) {
        this.__value.set(newValue);
    }
    private __label: SynchedPropertySimpleOneWayPU<string>;
    get label() {
        return this.__label.get();
    }
    set label(newValue: string) {
        this.__label.set(newValue);
    }
    private __color: SynchedPropertySimpleOneWayPU<string>;
    get color() {
        return this.__color.get();
    }
    set color(newValue: string) {
        this.__color.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 6 });
            Column.layoutWeight(1);
            Column.padding(14);
            Column.backgroundColor(COLOR.CARD);
            Column.borderRadius(8);
            Column.border({ width: 1, color: COLOR.HAIR });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.value);
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.fontColor(this.color);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.label);
            Text.fontSize(11);
            Text.fontColor(COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class SettingRow extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__icon = new SynchedPropertySimpleOneWayPU(params.icon, this, "icon");
        this.__title = new SynchedPropertySimpleOneWayPU(params.title, this, "title");
        this.__detail = new SynchedPropertySimpleOneWayPU(params.detail, this, "detail");
        this.__toggle = new SynchedPropertySimpleOneWayPU(params.toggle, this, "toggle");
        this.__hasToggle = new SynchedPropertySimpleOneWayPU(params.hasToggle, this, "hasToggle");
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingRow_Params) {
        if (params.icon === undefined) {
            this.__icon.set('•');
        }
        if (params.title === undefined) {
            this.__title.set('');
        }
        if (params.detail === undefined) {
            this.__detail.set('');
        }
        if (params.toggle === undefined) {
            this.__toggle.set(false);
        }
        if (params.hasToggle === undefined) {
            this.__hasToggle.set(false);
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: SettingRow_Params) {
        this.__icon.reset(params.icon);
        this.__title.reset(params.title);
        this.__detail.reset(params.detail);
        this.__toggle.reset(params.toggle);
        this.__hasToggle.reset(params.hasToggle);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__icon.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
        this.__detail.purgeDependencyOnElmtId(rmElmtId);
        this.__toggle.purgeDependencyOnElmtId(rmElmtId);
        this.__hasToggle.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__icon.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        this.__detail.aboutToBeDeleted();
        this.__toggle.aboutToBeDeleted();
        this.__hasToggle.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __icon: SynchedPropertySimpleOneWayPU<string>;
    get icon() {
        return this.__icon.get();
    }
    set icon(newValue: string) {
        this.__icon.set(newValue);
    }
    private __title: SynchedPropertySimpleOneWayPU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private __detail: SynchedPropertySimpleOneWayPU<string>;
    get detail() {
        return this.__detail.get();
    }
    set detail(newValue: string) {
        this.__detail.set(newValue);
    }
    private __toggle: SynchedPropertySimpleOneWayPU<boolean>;
    get toggle() {
        return this.__toggle.get();
    }
    set toggle(newValue: boolean) {
        this.__toggle.set(newValue);
    }
    private __hasToggle: SynchedPropertySimpleOneWayPU<boolean>;
    get hasToggle() {
        return this.__hasToggle.get();
    }
    set hasToggle(newValue: boolean) {
        this.__hasToggle.set(newValue);
    }
    private onTap: () => void;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 12 });
            Row.width('100%');
            Row.height(58);
            Row.padding({ left: 14, right: 14 });
            Row.backgroundColor(COLOR.CARD);
            Row.borderRadius(8);
            Row.border({ width: 1, color: COLOR.HAIR });
            Row.onClick(this.hasToggle ? () => { } : this.onTap);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.icon);
            Text.fontSize(18);
            Text.fontColor(COLOR.BRAND);
            Text.width(30);
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.fontSize(14);
            Text.fontColor(COLOR.INK);
            Text.layoutWeight(1);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.hasToggle) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Toggle.create({ type: ToggleType.Switch, isOn: this.toggle });
                        Toggle.selectedColor(COLOR.BRAND);
                        Toggle.onChange(() => this.onTap());
                    }, Toggle);
                    Toggle.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(this.detail.length > 0 ? this.detail : '›');
                        Text.fontSize(13);
                        Text.fontColor(COLOR.MUTED);
                    }, Text);
                    Text.pop();
                });
            }
        }, If);
        If.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
export class BottomNav extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__current = new SynchedPropertySimpleOneWayPU(params.current, this, "current");
        this.onChange = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BottomNav_Params) {
        if (params.current === undefined) {
            this.__current.set(0);
        }
        if (params.onChange !== undefined) {
            this.onChange = params.onChange;
        }
    }
    updateStateVars(params: BottomNav_Params) {
        this.__current.reset(params.current);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__current.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__current.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __current: SynchedPropertySimpleOneWayPU<number>;
    get current() {
        return this.__current.get();
    }
    set current(newValue: number) {
        this.__current.set(newValue);
    }
    private onChange: (index: number) => void;
    item(icon: string, label: string, index: number, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.width('18%');
            Column.onClick(() => this.onChange(index));
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(icon);
            Text.fontSize(19);
            Text.fontColor(this.current === index ? COLOR.BRAND : COLOR.MUTED);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(label);
            Text.fontSize(10);
            Text.fontColor(this.current === index ? COLOR.BRAND : COLOR.MUTED);
        }, Text);
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.height(72);
            Row.justifyContent(FlexAlign.SpaceAround);
            Row.backgroundColor('#F7FFFFFF');
            Row.border({ width: { top: 1 }, color: COLOR.HAIR });
        }, Row);
        this.item.bind(this)('◇', '空间', 0);
        this.item.bind(this)('◷', '项目', 1);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('+');
            Button.width(52);
            Button.height(52);
            Button.fontSize(26);
            Button.fontColor(COLOR.BRAND);
            Button.backgroundColor(COLOR.CARD);
            Button.border({ width: 1.5, color: COLOR.BRAND });
            Button.borderRadius(26);
            Button.onClick(() => this.onChange(2));
        }, Button);
        Button.pop();
        this.item.bind(this)('✦', '灵感', 3);
        this.item.bind(this)('○', '我的', 4);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    public __resetStateVarsOnReuse__Internal(params: Object): void {
    }
}
