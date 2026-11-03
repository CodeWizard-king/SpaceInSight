import { COLOR } from '../common/Tokens';

@Component
export struct PrimaryButton {
  text: string = '继续';
  active: boolean = true;
  onTap: () => void = () => {};

  build() {
    Button(this.text)
      .width('100%')
      .height(48)
      .fontSize(16)
      .fontWeight(FontWeight.Medium)
      .fontColor(Color.White)
      .backgroundColor(this.active ? COLOR.BRAND : '#B4B2A9')
      .borderRadius(24)
      .stateEffect(true)
      .enabled(this.active)
      .onClick(this.onTap)
  }
}

@Component
export struct TopBar {
  title: string = '';
  subtitle: string = '';
  back: boolean = true;
  action: string = '';
  onBack: () => void = () => {};
  onAction: () => void = () => {};

  build() {
    Row() {
      if (this.back) {
        Button('‹')
          .width(40).height(40).fontSize(30).fontColor(COLOR.INK)
          .backgroundColor(Color.Transparent).onClick(this.onBack)
      }
      Column({ space: 2 }) {
        Text(this.title).fontSize(22).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
        if (this.subtitle.length > 0) {
          Text(this.subtitle).fontSize(12).fontColor(COLOR.MUTED)
        }
      }.alignItems(HorizontalAlign.Start).layoutWeight(1)
      if (this.action.length > 0) {
        Button(this.action).height(38).fontSize(13).fontColor(COLOR.BRAND)
          .backgroundColor(Color.Transparent).onClick(this.onAction)
      }
    }.width('100%').padding({ left: 12, right: 16, top: 12, bottom: 10 })
  }
}

@Component
export struct SectionTitle {
  title: string = '';
  action: string = '';
  build() {
    Row() {
      Text(this.title).fontSize(18).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
      Blank()
      if (this.action.length > 0) Text(this.action).fontSize(13).fontColor(COLOR.MUTED)
    }.width('100%').margin({ top: 18, bottom: 10 })
  }
}

@Component
export struct Chip {
  text: string = '';
  selected: boolean = false;
  dark: boolean = false;
  onTap: () => void = () => {};
  build() {
    Text(this.text)
      .fontSize(12)
      .fontColor(this.selected ? COLOR.GOLD : (this.dark ? '#D9D7D2' : COLOR.MUTED))
      .padding({ left: 14, right: 14, top: 8, bottom: 8 })
      .backgroundColor(this.dark ? COLOR.GLASS : COLOR.CARD)
      .border({ width: this.selected ? 1.5 : 1, color: this.selected ? COLOR.GOLD : (this.dark ? '#55FFFFFF' : COLOR.HAIR) })
      .borderRadius(18)
      .onClick(this.onTap)
  }
}

@Component
export struct MetricCard {
  value: string = '';
  label: string = '';
  color: string = COLOR.INK;
  build() {
    Column({ space: 6 }) {
      Text(this.value).fontSize(24).fontWeight(FontWeight.Bold).fontColor(this.color)
      Text(this.label).fontSize(11).fontColor(COLOR.MUTED)
    }.layoutWeight(1).padding(14).backgroundColor(COLOR.CARD).borderRadius(8)
      .border({ width: 1, color: COLOR.HAIR })
  }
}

@Component
export struct SettingRow {
  icon: string = '•';
  title: string = '';
  detail: string = '';
  toggle: boolean = false;
  hasToggle: boolean = false;
  onTap: () => void = () => {};
  build() {
    Row({ space: 12 }) {
      Text(this.icon).fontSize(18).fontColor(COLOR.BRAND).width(30).textAlign(TextAlign.Center)
      Text(this.title).fontSize(14).fontColor(COLOR.INK).layoutWeight(1)
      if (this.hasToggle) {
        Toggle({ type: ToggleType.Switch, isOn: this.toggle }).selectedColor(COLOR.BRAND).onChange(() => this.onTap())
      } else {
        Text(this.detail.length > 0 ? this.detail : '›').fontSize(13).fontColor(COLOR.MUTED)
      }
    }.width('100%').height(58).padding({ left: 14, right: 14 }).backgroundColor(COLOR.CARD)
      .borderRadius(8).border({ width: 1, color: COLOR.HAIR }).onClick(this.hasToggle ? () => {} : this.onTap)
  }
}

@Component
export struct BottomNav {
  current: number = 0;
  onChange: (index: number) => void = () => {};

  @Builder item(icon: string, label: string, index: number) {
    Column({ space: 2 }) {
      Text(icon).fontSize(19).fontColor(this.current === index ? COLOR.BRAND : COLOR.MUTED)
      Text(label).fontSize(10).fontColor(this.current === index ? COLOR.BRAND : COLOR.MUTED)
    }.width('18%').onClick(() => this.onChange(index))
  }

  build() {
    Row() {
      this.item('◇', '空间', 0)
      this.item('◷', '项目', 1)
      Button('+').width(52).height(52).fontSize(26).fontColor(COLOR.BRAND)
        .backgroundColor(COLOR.CARD).border({ width: 1.5, color: COLOR.BRAND }).borderRadius(26)
        .onClick(() => this.onChange(2))
      this.item('✦', '灵感', 3)
      this.item('○', '我的', 4)
    }.width('100%').height(72).justifyContent(FlexAlign.SpaceAround)
      .backgroundColor('#F7FFFFFF').border({ width: { top: 1 }, color: COLOR.HAIR })
  }
}
