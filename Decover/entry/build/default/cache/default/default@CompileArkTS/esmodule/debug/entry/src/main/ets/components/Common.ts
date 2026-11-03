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
import { COLOR } from "@bundle:com.decover.space/entry/ets/common/Tokens";
export class PrimaryButton extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.text = '继续';
        this.active = true;
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: PrimaryButton_Params) {
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.active !== undefined) {
            this.active = params.active;
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: PrimaryButton_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private text: string;
    private active: boolean;
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
        this.title = '';
        this.subtitle = '';
        this.back = true;
        this.action = '';
        this.onBack = () => { };
        this.onAction = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: TopBar_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.subtitle !== undefined) {
            this.subtitle = params.subtitle;
        }
        if (params.back !== undefined) {
            this.back = params.back;
        }
        if (params.action !== undefined) {
            this.action = params.action;
        }
        if (params.onBack !== undefined) {
            this.onBack = params.onBack;
        }
        if (params.onAction !== undefined) {
            this.onAction = params.onAction;
        }
    }
    updateStateVars(params: TopBar_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private subtitle: string;
    private back: boolean;
    private action: string;
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
        this.title = '';
        this.action = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SectionTitle_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.action !== undefined) {
            this.action = params.action;
        }
    }
    updateStateVars(params: SectionTitle_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private title: string;
    private action: string;
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
        this.text = '';
        this.selected = false;
        this.dark = false;
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Chip_Params) {
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.selected !== undefined) {
            this.selected = params.selected;
        }
        if (params.dark !== undefined) {
            this.dark = params.dark;
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: Chip_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private text: string;
    private selected: boolean;
    private dark: boolean;
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
        this.value = '';
        this.label = '';
        this.color = COLOR.INK;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: MetricCard_Params) {
        if (params.value !== undefined) {
            this.value = params.value;
        }
        if (params.label !== undefined) {
            this.label = params.label;
        }
        if (params.color !== undefined) {
            this.color = params.color;
        }
    }
    updateStateVars(params: MetricCard_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private value: string;
    private label: string;
    private color: string;
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
        this.icon = '•';
        this.title = '';
        this.detail = '';
        this.toggle = false;
        this.hasToggle = false;
        this.onTap = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SettingRow_Params) {
        if (params.icon !== undefined) {
            this.icon = params.icon;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.detail !== undefined) {
            this.detail = params.detail;
        }
        if (params.toggle !== undefined) {
            this.toggle = params.toggle;
        }
        if (params.hasToggle !== undefined) {
            this.hasToggle = params.hasToggle;
        }
        if (params.onTap !== undefined) {
            this.onTap = params.onTap;
        }
    }
    updateStateVars(params: SettingRow_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private icon: string;
    private title: string;
    private detail: string;
    private toggle: boolean;
    private hasToggle: boolean;
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
        this.current = 0;
        this.onChange = () => { };
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BottomNav_Params) {
        if (params.current !== undefined) {
            this.current = params.current;
        }
        if (params.onChange !== undefined) {
            this.onChange = params.onChange;
        }
    }
    updateStateVars(params: BottomNav_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private current: number;
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
