import { COLOR } from '../common/Tokens';
import { BottomNav, Chip, MetricCard, PrimaryButton, SectionTitle, SettingRow, TopBar } from '../components/Common';

enum Page {
  Splash, Login, Home, Create, Guide, Camera, Report, Tasks, Viewer,
  Annotate, Chat, Proposal, Validation, Export, Floorplan, Privacy, Settings, Workbench
}

@Entry
@Component
struct Index {
  @State page: Page = Page.Splash;
  @State guideIndex: number = 0;
  @State activeRoom: number = 0;
  @State quality: number = 80;
  @State skipped: boolean = false;
  @State chatChoice: number = 1;
  @State proposal: number = 0;
  @State privacyCloud: boolean = true;
  @State privacyAI: boolean = true;
  @State privacyImprove: boolean = false;
  @State privacyShare: boolean = false;
  @State exportType: number = 0;
  @State showSummary: boolean = false;
  @State splashReady: boolean = false;

  aboutToAppear(): void {
    setTimeout(() => { this.splashReady = true; }, 700)
    setTimeout(() => { this.page = Page.Home; }, 1500)
  }

  go(page: Page): void { this.page = page }
  back(): void { this.page = Page.Home }

  @Builder nav(index: number) {
    BottomNav({ current: index, onChange: (i: number) => {
      if (i === 0) this.go(Page.Home)
      if (i === 1) this.go(Page.Tasks)
      if (i === 2) this.go(Page.Create)
      if (i === 3) this.go(Page.Proposal)
      if (i === 4) this.go(Page.Privacy)
    }})
  }

  @Builder glassButton(label: string, action: () => void) {
    Button(label).width(44).height(44).fontSize(18).fontColor(Color.White)
      .backgroundColor(COLOR.GLASS).borderRadius(22).backdropBlur(16).onClick(action)
  }

  @Builder projectCard(image: Resource, name: string, meta: string, status: string, action: () => void) {
    Column() {
      Stack({ alignContent: Alignment.Bottom }) {
        Image(image).width('100%').height(128).objectFit(ImageFit.Cover)
        if (status.indexOf('%') >= 0) {
          Progress({ value: 68, total: 100, type: ProgressType.Linear }).height(3).color(COLOR.GOLD)
        }
      }
      Column({ space: 5 }) {
        Text(name).fontSize(15).fontWeight(FontWeight.Medium).fontColor(COLOR.INK).maxLines(1)
        Text(meta).fontSize(11).fontColor(COLOR.MUTED)
        Text(status).fontSize(11).fontColor(status.indexOf('完成') >= 0 ? COLOR.SUCCESS : COLOR.BRAND)
      }.width('100%').padding(12).alignItems(HorizontalAlign.Start)
    }.width('48%').backgroundColor(COLOR.CARD).borderRadius(8).clip(true)
      .border({ width: 1, color: COLOR.HAIR }).onClick(action)
  }

  @Builder SplashPage() {
    Stack({ alignContent: Alignment.Center }) {
      Column({ space: 20 }) {
        Stack() {
          Text('◇').fontSize(116).fontColor(COLOR.GOLD).opacity(this.splashReady ? 1 : 0.2)
          Text('D').fontSize(42).fontWeight(FontWeight.Lighter).fontColor('#F2F1EE')
        }.width(160).height(140)
        Text('DECOVER').fontSize(28).fontWeight(FontWeight.Bold).fontColor('#F2F1EE').letterSpacing(5)
        Text('把真实空间，变成可推敲的方案').fontSize(14).fontColor('#8E9095')
      }
      Text(this.splashReady ? '空间引擎已就绪' : '正在加载空间引擎…')
        .fontSize(11).fontColor('#8E9095').position({ bottom: 36 })
    }.width('100%').height('100%').backgroundColor(COLOR.INK)
  }

  @Builder LoginPage() {
    Column() {
      Blank().layoutWeight(1)
      Text('◇').fontSize(92).fontColor(COLOR.GOLD)
      Text('让空间被看见').fontSize(28).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).margin({ bottom: 8 })
      Text('扫描重建 · AI 方案 · 数据自主').fontSize(14).fontColor(COLOR.MUTED)
      Blank().layoutWeight(1)
      Column({ space: 12 }) {
        PrimaryButton({ text: '华为账号一键登录', onTap: () => this.go(Page.Home) })
        Button('先随便看看').width('100%').height(46).fontColor(COLOR.BRAND)
          .backgroundColor(Color.Transparent).border({ width: 1, color: COLOR.BRAND }).borderRadius(23)
          .onClick(() => this.go(Page.Home))
        Text('登录即表示同意《用户协议》与《隐私政策》').fontSize(11).fontColor(COLOR.MUTED)
      }.width('100%').padding(24)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder HomePage() {
    Column() {
      Scroll() {
        Column() {
          Row() {
            Column({ space: 4 }) {
              Text('下午好，Jason').fontSize(26).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
              Text('今天有 1 个空间等待继续采集').fontSize(12).fontColor(COLOR.MUTED)
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
            Button('J').width(42).height(42).backgroundColor(COLOR.INK).fontColor(COLOR.GOLD).borderRadius(21)
          }.width('100%').margin({ top: 18, bottom: 16 })
          Row({ space: 12 }) {
            Text('◇').fontSize(28).fontColor(COLOR.BRAND)
            Column({ space: 3 }) {
              Text('继续采集 · 朝阳小区三居').fontSize(14).fontWeight(FontWeight.Medium).fontColor('#6B5A3E')
              Text('客厅还差 2 个角度，约 1 分钟').fontSize(11).fontColor('#806F53')
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
            Button('去完成').height(34).fontSize(12).backgroundColor(COLOR.BRAND).onClick(() => this.go(Page.Camera))
          }.width('100%').padding(14).backgroundColor(COLOR.GOLD_SOFT).borderRadius(8)
          SectionTitle({ title: '我的空间', action: '全部 ›' })
          Row() {
            this.projectCard($r('app.media.room_scan'), '朝阳小区 · 三居', '89.6 m² · 3 房间', '重建中 68%', () => this.go(Page.Viewer))
            this.projectCard($r('app.media.room_design'), '江景壹号 · 两居', '64.2 m² · 已完成', '✓ 3 个方案', () => this.go(Page.Viewer))
          }.width('100%').justifyContent(FlexAlign.SpaceBetween)
          Row() {
            Button('+  扫描新空间').width('48%').height(78).fontColor(COLOR.BRAND).backgroundColor(COLOR.CARD)
              .border({ width: 1, color: COLOR.HAIR }).borderRadius(8).onClick(() => this.go(Page.Create))
            Button('⌂  识别户型图').width('48%').height(78).fontColor(COLOR.MUTED).backgroundColor(COLOR.CARD)
              .border({ width: 1, color: COLOR.HAIR }).borderRadius(8).onClick(() => this.go(Page.Floorplan))
          }.width('100%').justifyContent(FlexAlign.SpaceBetween).margin({ top: 12 })
        }.padding({ left: 20, right: 20, bottom: 24 })
      }.layoutWeight(1).scrollBar(BarState.Off)
      this.nav(0)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder CreatePage() {
    Column() {
      TopBar({ title: '创建新空间', subtitle: '选择最适合你的建模方式', onBack: () => this.back() })
      Column({ space: 12 }) {
        TextInput({ placeholder: '我的空间 · 11月3日' }).height(50).backgroundColor(COLOR.CARD)
          .border({ width: 1, color: COLOR.HAIR }).borderRadius(8)
        Column({ space: 12 }) {
          Row() {
            Text('◇').fontSize(38).fontColor(COLOR.BRAND).width(54)
            Column({ space: 5 }) {
              Text('扫描重建').fontSize(20).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
              Text('用相机环绕空间，生成可浏览的 3D 场景').fontSize(12).fontColor(COLOR.MUTED)
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
          }
          Row() {
            Text('端侧极速').fontSize(11).fontColor(COLOR.BRAND).padding({ left: 10, right: 10, top: 5, bottom: 5 }).backgroundColor(COLOR.GOLD_SOFT).borderRadius(12)
            Blank()
            Text('约 3–5 分钟  ›').fontSize(12).fontColor(COLOR.MUTED)
          }
        }.width('100%').padding(18).backgroundColor(COLOR.CARD).borderRadius(8)
          .border({ width: 1.5, color: COLOR.GOLD }).onClick(() => this.go(Page.Guide))
        Column({ space: 12 }) {
          Row() {
            Text('⌂').fontSize(34).fontColor(COLOR.INFO).width(54)
            Column({ space: 5 }) {
              Text('识别户型图').fontSize(20).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
              Text('上传清晰平面图，自动识别墙体与房间').fontSize(12).fontColor(COLOR.MUTED)
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
          }
          Text('云端高质量 · 需上传    约 10 分钟  ›').fontSize(12).fontColor(COLOR.MUTED).width('100%')
        }.width('100%').padding(18).backgroundColor(COLOR.CARD).borderRadius(8)
          .border({ width: 1, color: COLOR.HAIR }).onClick(() => this.go(Page.Floorplan))
        SectionTitle({ title: '最近未完成' })
        SettingRow({ icon: '◷', title: '朝阳小区 · 三居', detail: '继续采集 ›', onTap: () => this.go(Page.Camera) })
      }.padding(20).layoutWeight(1)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder GuidePage() {
    Column() {
      TopBar({ title: '采集准备', subtitle: '端侧极速模式', onBack: () => this.go(Page.Create) })
      Scroll() {
        Column({ space: 16 }) {
          Column({ space: 18 }) {
            Text(this.guideIndex === 0 ? '↔' : (this.guideIndex === 1 ? '◎' : '◐')).fontSize(78).fontColor(COLOR.GOLD)
            Text(['缓慢、平稳地移动', '先拍全景，再补细节', '避免玻璃与强逆光'][this.guideIndex])
              .fontSize(20).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
            Text(['始终让墙角保持在画面内，系统会自动记录轨迹', '沿房间边缘走一圈，再靠近家具与纹理区域', '拉上纱帘或调整角度，能显著改善重建质量'][this.guideIndex])
              .fontSize(13).fontColor(COLOR.MUTED).textAlign(TextAlign.Center).lineHeight(21)
            Row({ space: 8 }) {
              ForEach([0, 1, 2], (i: number) => {
                Text('').width(i === this.guideIndex ? 24 : 8).height(8).backgroundColor(i === this.guideIndex ? COLOR.BRAND : '#D3D1C7')
                  .borderRadius(4).onClick(() => this.guideIndex = i)
              })
            }
          }.width('100%').height(280).justifyContent(FlexAlign.Center).padding(24).backgroundColor(COLOR.CARD).borderRadius(8)
          SectionTitle({ title: '采集前自检' })
          Row() {
            ForEach(['光线', '电量', '存储', '障碍物'], (item: string) => {
              Column({ space: 4 }) {
                Text('✓').fontSize(18).fontColor(COLOR.SUCCESS)
                Text(item).fontSize(11).fontColor(COLOR.MUTED)
              }.layoutWeight(1)
            })
          }.width('100%').padding(14).backgroundColor(COLOR.CARD).borderRadius(8)
          Row({ space: 8 }) {
            Text('!').fontColor(COLOR.WARN)
            Text('镜面区域可能影响精度，但仍可继续').fontSize(12).fontColor('#8A5A10')
          }
            .width('100%').padding(12).backgroundColor('#FAEEDA').borderRadius(8)
        }.padding({ left: 20, right: 20 })
      }.layoutWeight(1)
      Column({ space: 8 }) {
        Text('全程约 3–5 分钟').fontSize(11).fontColor(COLOR.MUTED)
        PrimaryButton({ text: '开始扫描', onTap: () => this.go(Page.Camera) })
      }.padding(20).backgroundColor(COLOR.PAGE)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder CameraPage() {
    Stack() {
      Image($r('app.media.room_scan')).width('100%').height('100%').objectFit(ImageFit.Cover)
      Column() {
        Row() {
          Column({ space: 3 }) {
            Text('03:24').fontSize(18).fontWeight(FontWeight.Bold).fontColor(Color.White)
            Text('已采集 · 覆盖良好').fontSize(11).fontColor(Color.White)
          }.alignItems(HorizontalAlign.Start)
          Blank()
          Column({ space: 3 }) {
            Text('剩余约 2 分钟').fontSize(11).fontColor(Color.White)
            Text('端侧极速模式').fontSize(11).fontColor(COLOR.GOLD)
          }.alignItems(HorizontalAlign.End)
        }.width('100%').padding(16).backgroundColor(COLOR.GLASS).borderRadius(8)
        Blank()
        Text('←  移动有点快，慢一点').fontSize(13).fontColor(Color.White).padding({ left: 18, right: 18, top: 10, bottom: 10 })
          .backgroundColor(COLOR.GLASS).borderRadius(20)
        Blank()
        Stack() {
          Progress({ value: this.quality, total: 100, type: ProgressType.Ring }).width(90).height(90).color(COLOR.GOLD).style({ strokeWidth: 5 })
          Text(this.quality + '%').fontSize(16).fontWeight(FontWeight.Bold).fontColor(Color.White)
        }.onClick(() => this.quality = Math.min(100, this.quality + 4))
        Text('长按结束扫描').fontSize(13).fontColor(Color.White).margin({ top: 10, bottom: 10 })
        Button('结束并查看质量').height(46).fontColor(COLOR.BRAND).backgroundColor('#EEFFFFFF')
          .border({ width: 1.5, color: COLOR.GOLD }).borderRadius(23).onClick(() => this.go(Page.Report))
      }.width('100%').height('100%').padding({ left: 18, right: 18, top: 18, bottom: 24 })
      Button('×').position({ x: 16, y: 90 }).width(40).height(40).fontSize(22).fontColor(Color.White).backgroundColor(COLOR.GLASS).onClick(() => this.go(Page.Guide))
    }.width('100%').height('100%').backgroundColor(COLOR.VOID)
  }

  @Builder ReportPage() {
    Column() {
      TopBar({ title: '采集质量报告', subtitle: '朝阳小区 · 三居', onBack: () => this.go(Page.Camera) })
      Scroll() {
        Column({ space: 14 }) {
          Stack() {
            Progress({ value: 86, total: 100, type: ProgressType.Ring }).width(150).height(150).color(COLOR.BRAND).style({ strokeWidth: 8 })
            Column({ space: 2 }) {
              Text('86').fontSize(42).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
              Text('质量良好').fontSize(12).fontColor(COLOR.SUCCESS)
            }
          }.margin({ top: 12 })
          Text('有 1 项可以继续优化').fontSize(18).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
          Row() {
            ForEach(['清晰 92', '曝光 88', '覆盖 86', '抖动 79', '纹理 84'], (item: string) => {
              Text(item).fontSize(10).fontColor(COLOR.MUTED).layoutWeight(1).textAlign(TextAlign.Center)
            })
          }.width('100%').padding(12).backgroundColor(COLOR.CARD).borderRadius(8)
          SectionTitle({ title: '问题与建议' })
          Row({ space: 12 }) {
            Image($r('app.media.room_scan')).width(88).height(78).objectFit(ImageFit.Cover).borderRadius(6)
            Column({ space: 5 }) {
              Text('客厅西墙纹理较弱').fontSize(14).fontWeight(FontWeight.Medium).fontColor(COLOR.INK)
              Text('建议靠近墙面补拍 2 个角度').fontSize(11).fontColor(COLOR.MUTED)
              Row({ space: 6 }) {
                Checkbox({ name: 'skip', group: 'quality' }).select(this.skipped).selectedColor(COLOR.BRAND).onChange((v: boolean) => this.skipped = v)
                Text('跳过此项').fontSize(11).fontColor(COLOR.MUTED)
              }
            }.alignItems(HorizontalAlign.Start).layoutWeight(1)
          }.width('100%').padding(12).backgroundColor(COLOR.CARD).borderRadius(8).border({ width: 1, color: COLOR.HAIR })
        }.padding({ left: 20, right: 20, bottom: 20 })
      }.layoutWeight(1)
      Column({ space: 10 }) {
        Button('补拍缺失区域').width('100%').height(44).fontColor(COLOR.BRAND).backgroundColor(Color.Transparent)
          .border({ width: 1, color: COLOR.BRAND }).borderRadius(22).onClick(() => this.go(Page.Camera))
        PrimaryButton({ text: this.skipped ? '接受风险并重建' : '开始重建', onTap: () => this.go(Page.Tasks) })
      }.padding(20)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder TasksPage() {
    Column() {
      Scroll() {
        Column() {
          TopBar({ title: '重建任务', subtitle: '1 个进行中 · 1 个排队', back: false, action: '历史' })
          Column() {
            Stack({ alignContent: Alignment.Bottom }) {
              Image($r('app.media.room_scan')).width('100%').height(190).objectFit(ImageFit.Cover)
              Row() {
                Column({ space: 3 }) {
                  Text('朝阳小区 · 三居').fontSize(16).fontWeight(FontWeight.Bold).fontColor(Color.White)
                  Text('端侧重建 · 剩余约 50 秒').fontSize(11).fontColor(Color.White)
                }.alignItems(HorizontalAlign.Start).layoutWeight(1)
                Stack() {
                  Progress({ value: 68, total: 100, type: ProgressType.Ring }).width(58).height(58).color(COLOR.GOLD)
                  Text('68%').fontSize(11).fontColor(Color.White)
                }
              }.padding(14).backgroundColor('#66000000')
            }
            Row() {
              ForEach(['✓ 上传', '✓ 重建', '◉ 优化中', '○ 完成'], (item: string, index: number) => {
                Text(item).fontSize(10).fontColor(index < 3 ? COLOR.BRAND : '#B4B2A9').layoutWeight(1).textAlign(TextAlign.Center)
              })
            }.width('100%').padding(14)
          }.width('100%').backgroundColor(COLOR.CARD).borderRadius(8).clip(true).onClick(() => this.go(Page.Viewer))
          SectionTitle({ title: '队列' })
          SettingRow({ icon: '☁', title: '江景壹号 · 两居', detail: '等待 · 云端' })
          SectionTitle({ title: '需要处理' })
          SettingRow({ icon: '!', title: '旧居存档 · 一居', detail: '需补拍 ›', onTap: () => this.go(Page.Report) })
        }.padding({ left: 20, right: 20, bottom: 20 })
      }.layoutWeight(1)
      this.nav(1)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder ViewerPage() {
    Stack() {
      Image($r('app.media.room_scan')).width('100%').height('100%').objectFit(ImageFit.Cover)
      Column() {
        Row({ space: 10 }) {
          this.glassButton('‹', () => this.go(Page.Home))
          Column({ space: 2 }) {
            Text('朝阳小区 · 三居').fontSize(16).fontWeight(FontWeight.Bold).fontColor(Color.White)
            Text('3DGS 已就绪 18/18 块 · 标准').fontSize(10).fontColor('#D9D7D2')
          }.alignItems(HorizontalAlign.Start)
        }.width('100%')
        Scroll() {
          Row({ space: 8 }) {
            ForEach(['客厅', '主卧', '书房', '厨房'], (room: string, index: number) => {
              Chip({ text: room, selected: this.activeRoom === index, dark: true, onTap: () => this.activeRoom = index })
            })
          }
        }.scrollable(ScrollDirection.Horizontal).scrollBar(BarState.Off).margin({ top: 14 })
        Blank()
        Row() {
          Blank()
          Column({ space: 10 }) {
            this.glassButton('✎', () => this.go(Page.Annotate))
            this.glassButton('↔', () => {})
            this.glassButton('⌁', () => this.go(Page.Export))
          }
        }.width('100%')
        Row({ space: 8 }) {
          Text('约').fontSize(10).fontColor(COLOR.WARN).padding(4).backgroundColor('#DDFFFFFF').borderRadius(4)
          Text('沙发墙  4.2 m').fontSize(13).fontColor(Color.White)
        }.padding(10).backgroundColor(COLOR.GLASS).borderRadius(18)
        Column({ space: 8 }) {
          Text(['客厅', '主卧', '书房', '厨房'][this.activeRoom]).fontSize(20).fontWeight(FontWeight.Bold).fontColor(Color.White).width('100%')
          Row({ space: 8 }) {
            Text('约 28.6 m²').fontSize(12).fontColor('#D9D7D2')
            Text('估算').fontSize(10).fontColor(COLOR.WARN)
            Text('· 12 个语义标签 · 3 项需求').fontSize(11).fontColor('#D9D7D2')
          }
        }.width('100%').padding(16).backgroundColor(COLOR.GLASS).borderRadius({ topLeft: 20, topRight: 20 }).margin({ top: 14 })
      }.width('100%').height('100%').padding({ left: 16, right: 16, top: 18 })
      Row({ space: 2 }) {
        Text('流畅').fontSize(10).fontColor(Color.White)
        Text('标准').fontSize(10).fontColor(Color.White).backgroundColor('#55FFFFFF')
        Text('高清').fontSize(10).fontColor(Color.White)
      }.padding(6).backgroundColor(COLOR.GLASS).borderRadius(16).position({ x: '36%', y: 110 })
    }.width('100%').height('100%').backgroundColor(COLOR.VOID)
  }

  @Builder AnnotatePage() {
    Column() {
      Stack({ alignContent: Alignment.TopStart }) {
        Image($r('app.media.room_scan')).width('100%').height('100%').objectFit(ImageFit.Cover)
        Row({ space: 10 }) {
          this.glassButton('‹', () => this.go(Page.Viewer))
          Text('语义标注').fontSize(18).fontWeight(FontWeight.Bold).fontColor(Color.White)
        }.padding(16)
        Text('沙发').fontSize(12).fontColor(COLOR.GOLD).padding(8).backgroundColor(COLOR.GLASS)
          .border({ width: 1.5, color: COLOR.GOLD }).borderRadius(16).position({ x: '43%', y: '54%' })
      }.width('100%').height('48%')
      Scroll() {
        Column({ space: 14 }) {
          Text('沙发').fontSize(22).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).width('100%')
          Row({ space: 8 }) {
            Chip({ text: '家具', selected: true })
            Chip({ text: '电器' })
            Chip({ text: '建筑结构' })
          }.width('100%')
          TextInput({ text: '2.18 × 0.92 × 0.84 m' }).height(48).backgroundColor(COLOR.PAGE).borderRadius(8)
          Row() {
            Text('尺寸为估算值').fontSize(11).fontColor(COLOR.MUTED)
            Blank()
            Button('输入实测值').fontSize(12).fontColor(COLOR.BRAND).backgroundColor(Color.Transparent)
          }.width('100%')
          TextArea({ placeholder: '添加材质、品牌或使用备注…' }).height(74).backgroundColor(COLOR.PAGE).borderRadius(8)
          Row({ space: 8 }) {
            ForEach(['框选', '改色', '删除', '撤销'], (item: string) => {
              Button(item).layoutWeight(1).height(40).fontSize(12).fontColor(COLOR.MUTED).backgroundColor(COLOR.PAGE)
            })
          }.width('100%')
          PrimaryButton({ text: '保存标注', onTap: () => this.go(Page.Viewer) })
        }.padding(20)
      }.layoutWeight(1).backgroundColor(COLOR.CARD).borderRadius({ topLeft: 20, topRight: 20 })
    }.width('100%').height('100%').backgroundColor(COLOR.VOID)
  }

  @Builder ChatPage() {
    Column() {
      TopBar({ title: '装修需求助手', subtitle: '● 已理解你的空间数据', onBack: () => this.go(Page.Viewer), action: '摘要', onAction: () => this.showSummary = !this.showSummary })
      if (this.showSummary) {
        Row() {
          Text('已理解 8 项需求').fontSize(13).fontColor(COLOR.BRAND)
          Blank()
          Text('2 项待确认').fontSize(12).fontColor(COLOR.WARN)
        }
          .width('100%').padding(12).backgroundColor(COLOR.GOLD_SOFT)
      }
      Scroll() {
        Column({ space: 14 }) {
          Text('已理解 8 项需求 · 2 项待确认').fontSize(11).fontColor(COLOR.BRAND).padding({ left: 12, right: 12, top: 7, bottom: 7 }).backgroundColor(COLOR.GOLD_SOFT).borderRadius(14)
          Column({ space: 12 }) {
            Text('我看了你扫描的客厅：采光很好，适合亮色木地板。预算大概在什么范围？').fontSize(14).fontColor(COLOR.INK).lineHeight(22)
            Row({ space: 7 }) {
              ForEach(['15 万以内', '15–25 万', '25 万以上'], (item: string, index: number) => {
                Chip({ text: item, selected: this.chatChoice === index, onTap: () => this.chatChoice = index })
              })
            }
          }.width('88%').padding(14).backgroundColor(COLOR.CARD).border({ width: 1, color: COLOR.HAIR }).borderRadius(8).alignItems(HorizontalAlign.Start)
          Text('15 到 25 万，喜欢亮色木地板，要有儿童房。').fontSize(14).fontColor('#4A3E2A').lineHeight(22)
            .padding(14).backgroundColor(COLOR.GOLD_SOFT).borderRadius(8).alignSelf(ItemAlign.End)
          Text('好的。儿童房建议用暖一点的浅木色＋圆角家具。客厅灯光想要哪种氛围？').fontSize(14).fontColor(COLOR.INK).lineHeight(22)
            .width('88%').padding(14).backgroundColor(COLOR.CARD).border({ width: 1, color: COLOR.HAIR }).borderRadius(8)
        }.width('100%').padding(20).alignItems(HorizontalAlign.Start)
      }.layoutWeight(1)
      Scroll() {
        Row({ space: 8 }) {
          Chip({ text: '先看预算内' })
          Chip({ text: '要有儿童房' })
          Chip({ text: '亮色木地板' })
        }.padding({ left: 16, right: 16 })
      }
        .scrollable(ScrollDirection.Horizontal).scrollBar(BarState.Off).height(42)
      Row({ space: 10 }) {
        TextInput({ placeholder: '输入需求…' }).layoutWeight(1).height(46).backgroundColor(COLOR.CARD).border({ width: 1, color: COLOR.HAIR }).borderRadius(23)
        Button('→').width(46).height(46).backgroundColor(COLOR.BRAND).borderRadius(23).onClick(() => this.go(Page.Proposal))
      }.padding(16)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder ProposalPage() {
    Stack() {
      Image(this.proposal === 0 ? $r('app.media.room_design') : $r('app.media.room_scan')).width('100%').height('100%').objectFit(ImageFit.Cover)
      Column() {
        Row({ space: 10 }) {
          this.glassButton('‹', () => this.go(Page.Home))
          Column() {
            Text('方案推荐').fontSize(17).fontWeight(FontWeight.Bold).fontColor(Color.White)
            Text('同一机位 · 同一光照').fontSize(10).fontColor('#D9D7D2')
          }.alignItems(HorizontalAlign.Start)
        }.width('100%')
        Blank()
        Scroll() {
          Row({ space: 8 }) {
            ForEach(['北欧原木', '现代留白', '自然松弛'], (item: string, index: number) => {
              Chip({ text: item, selected: this.proposal === index, dark: true, onTap: () => this.proposal = index })
            })
          }
        }.scrollable(ScrollDirection.Horizontal).scrollBar(BarState.Off)
        Column({ space: 12 }) {
          Text(['北欧原木 · 稳妥版', '现代留白 · 平衡版', '自然松弛 · 品质版'][this.proposal]).fontSize(19).fontWeight(FontWeight.Bold).fontColor(Color.White).width('100%')
          Row({ space: 8 }) {
            Chip({ text: '换地板', selected: true, dark: true })
            Chip({ text: '调灯光', dark: true })
            Chip({ text: '加收纳', dark: true })
          }.width('100%')
          Row() {
            Text('预算影响').fontSize(12).fontColor('#D9D7D2')
            Blank()
            Text('+¥12,800 · 置信 94%').fontSize(14).fontWeight(FontWeight.Bold).fontColor(COLOR.GOLD)
          }.width('100%')
          Row({ space: 10 }) {
            Button('再调整').layoutWeight(1).height(44).fontColor(Color.White).backgroundColor('#22FFFFFF').border({ width: 1, color: '#66FFFFFF' }).onClick(() => this.go(Page.Chat))
            Button('采纳此方案').layoutWeight(2).height(44).fontColor(COLOR.INK).backgroundColor(COLOR.GOLD).onClick(() => this.go(Page.Validation))
          }.width('100%')
        }.width('100%').padding(18).backgroundColor(COLOR.GLASS).borderRadius({ topLeft: 20, topRight: 20 }).margin({ top: 12 })
      }.width('100%').height('100%').padding({ left: 16, right: 16, top: 18 })
    }.width('100%').height('100%').backgroundColor(COLOR.VOID)
  }

  @Builder ValidationPage() {
    Column() {
      TopBar({ title: '方案校验', subtitle: '北欧原木 · 稳妥版', onBack: () => this.go(Page.Proposal), action: '导出', onAction: () => this.go(Page.Export) })
      Scroll() {
        Column({ space: 14 }) {
          Row({ space: 8 }) {
            MetricCard({ value: '1', label: '尺寸冲突', color: COLOR.ERROR })
            MetricCard({ value: '+3.2%', label: '预算偏差', color: COLOR.WARN })
            MetricCard({ value: '✓', label: '规范风险', color: COLOR.SUCCESS })
          }.width('100%')
          SectionTitle({ title: '校验进度' })
          Row() {
            ForEach(['✓ 几何', '✓ 动线', '✓ 预算', '✓ 规范'], (item: string) => { Text(item).layoutWeight(1).fontSize(11).fontColor(COLOR.SUCCESS).textAlign(TextAlign.Center) })
          }.width('100%').padding(14).backgroundColor(COLOR.CARD).borderRadius(8)
          SectionTitle({ title: '需要处理' })
          Column({ space: 10 }) {
            Image($r('app.media.room_design')).width('100%').height(150).objectFit(ImageFit.Cover).borderRadius(6)
            Text('衣柜与门套间距 42cm').fontSize(16).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).width('100%')
            Text('低于舒适开门净距，建议将衣柜向左移动 18cm。').fontSize(12).fontColor(COLOR.MUTED).width('100%')
            Row({ space: 8 }) {
              Checkbox({ name: 'fix', group: 'validation' }).select(true).selectedColor(COLOR.SUCCESS)
              Text('应用建议修复').fontSize(12).fontColor(COLOR.TEXT_2)
            }.width('100%')
          }.padding(12).backgroundColor(COLOR.CARD).borderRadius(8).border({ width: 1, color: COLOR.HAIR }).onClick(() => this.go(Page.Viewer))
        }.padding({ left: 20, right: 20, bottom: 20 })
      }.layoutWeight(1)
      Column({ space: 8 }) {
        PrimaryButton({ text: '一键应用全部修复', onTap: () => this.go(Page.Proposal) })
        Button('忽略并导出').width('100%').height(42).fontColor(COLOR.MUTED).backgroundColor(Color.Transparent).onClick(() => this.go(Page.Export))
      }.padding(20)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder ExportPage() {
    Column() {
      TopBar({ title: '方案摘要与导出', subtitle: '所见即所得预览', onBack: () => this.go(Page.Validation), action: '记录' })
      Scroll() {
        Column({ space: 16 }) {
          Column() {
            Image($r('app.media.room_design')).width('100%').height(180).objectFit(ImageFit.Cover)
            Column({ space: 8 }) {
              Text('朝阳小区 · 三居').fontSize(21).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).width('100%')
              Text('北欧原木 · 稳妥版').fontSize(13).fontColor(COLOR.BRAND).width('100%')
              Divider().color(COLOR.HAIR)
              Text('空间 89.6 m²  ·  3 房间  ·  12 个语义对象').fontSize(11).fontColor(COLOR.MUTED).width('100%')
              Text('浅橡木地板 / 3000K 无主灯 / 组合收纳柜').fontSize(11).fontColor(COLOR.TEXT_2).width('100%')
              Text('校验结论：1 项建议已修复，其余均通过').fontSize(11).fontColor(COLOR.SUCCESS).width('100%')
            }.padding(16)
          }.backgroundColor(COLOR.CARD).border({ width: 1, color: COLOR.HAIR }).borderRadius(6).clip(true)
          Row({ space: 8 }) {
            ForEach(['PDF 方案书', '3D 场景', '图片合集'], (item: string, index: number) => {
              Chip({ text: item, selected: this.exportType === index, onTap: () => this.exportType = index })
            })
          }.width('100%')
          SettingRow({ icon: '◈', title: '隐藏门牌与业主信息', hasToggle: true, toggle: true })
        }.padding(20)
      }.layoutWeight(1)
      Column() { PrimaryButton({ text: '生成并分享', onTap: () => this.go(Page.Home) }) }.padding(20)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder FloorplanPage() {
    Column() {
      TopBar({ title: '户型图识别', subtitle: '检查识别结果后生成模型', onBack: () => this.go(Page.Create) })
      Scroll() {
        Column({ space: 14 }) {
          Stack() {
            Column() {
              Row() {
                Text('客厅\n28.6 m²').textAlign(TextAlign.Center)
                Divider().vertical(true).height('100%')
                Text('主卧\n16.2 m²').textAlign(TextAlign.Center)
              }.layoutWeight(2).width('100%')
              Divider().color(COLOR.GOLD).strokeWidth(3)
              Row() {
                Text('厨房\n8.4 m²').textAlign(TextAlign.Center)
                Divider().vertical(true).height('100%')
                Text('儿童房\n11.8 m²').textAlign(TextAlign.Center)
              }.layoutWeight(1).width('100%')
            }.width('100%').height('100%')
            Text('请确认').fontSize(10).fontColor(COLOR.WARN).padding(6).backgroundColor('#FAEEDA').borderRadius(8).position({ x: '62%', y: '44%' })
          }.width('100%').height(300).padding(24).backgroundColor(COLOR.CARD).border({ width: 10, color: COLOR.GOLD }).borderRadius(4)
          SectionTitle({ title: '逐房间核对' })
          SettingRow({ icon: '1', title: '客厅', detail: '28.6 m² · 朝南 ›' })
          SettingRow({ icon: '2', title: '主卧', detail: '16.2 m² · 朝南 ›' })
          SettingRow({ icon: '3', title: '儿童房', detail: '11.8 m² · 待确认 ›' })
          Row({ space: 8 }) {
            Text('!').fontColor(COLOR.WARN)
            Text('1 处墙段置信度较低，请核对').fontSize(12).fontColor('#8A5A10')
          }
            .width('100%').padding(12).backgroundColor('#FAEEDA').borderRadius(8)
        }.padding({ left: 20, right: 20, bottom: 20 })
      }.layoutWeight(1)
      Column({ space: 8 }) {
        PrimaryButton({ text: '确认 1 处并生成模型', onTap: () => this.go(Page.Tasks) })
        Button('重拍 / 换图').width('100%').height(40).fontColor(COLOR.MUTED).backgroundColor(Color.Transparent)
      }.padding(20)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder PrivacyPage() {
    Column() {
      Scroll() {
        Column({ space: 10 }) {
          TopBar({ title: '我的', subtitle: '账号 · 隐私 · 设置', back: false, action: '设置', onAction: () => this.go(Page.Settings) })
          Row({ space: 12 }) {
            Text('♢').fontSize(28).fontColor(COLOR.SUCCESS).width(42)
            Column({ space: 4 }) {
              Text('隐私状态：良好').fontSize(14).fontWeight(FontWeight.Bold).fontColor(COLOR.INK)
              Text('云端有 1 份场景副本，可随时撤回').fontSize(11).fontColor(COLOR.MUTED)
            }.alignItems(HorizontalAlign.Start)
          }.width('100%').padding(14).backgroundColor(COLOR.CARD).borderRadius(8).border({ width: 1, color: COLOR.HAIR })
          SectionTitle({ title: '我的数据' })
          SettingRow({ icon: '◇', title: '空间场景', detail: '3 个 ›' })
          SettingRow({ icon: '≡', title: '需求数据', detail: '8 项 ›' })
          SettingRow({ icon: '▤', title: '方案记录', detail: '5 份 ›' })
          SectionTitle({ title: '授权管理' })
          SettingRow({ icon: '☁', title: '云端重建上传', hasToggle: true, toggle: this.privacyCloud, onTap: () => this.privacyCloud = !this.privacyCloud })
          SettingRow({ icon: 'AI', title: 'AI 分析使用数据', hasToggle: true, toggle: this.privacyAI, onTap: () => this.privacyAI = !this.privacyAI })
          SettingRow({ icon: '✦', title: '体验改进计划', hasToggle: true, toggle: this.privacyImprove, onTap: () => this.privacyImprove = !this.privacyImprove })
          SettingRow({ icon: '◎', title: '匿名案例共享', hasToggle: true, toggle: this.privacyShare, onTap: () => this.privacyShare = !this.privacyShare })
          Button('撤回全部云端数据').width('100%').height(50).fontColor(COLOR.ERROR).backgroundColor('#08C0392B')
            .border({ width: 1, color: '#55C0392B' }).borderRadius(8)
        }.padding({ left: 20, right: 20, bottom: 24 })
      }.layoutWeight(1)
      this.nav(4)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder SettingsPage() {
    Column() {
      TopBar({ title: '设置与诊断', subtitle: 'Decover 1.0.0', onBack: () => this.go(Page.Privacy) })
      Scroll() {
        Column({ space: 10 }) {
          SectionTitle({ title: '渲染与画质' })
          SettingRow({ icon: '◐', title: '默认画质', detail: '标准 ›' })
          SettingRow({ icon: '⌁', title: '省电模式', hasToggle: true, toggle: false })
          SectionTitle({ title: '采集' })
          SettingRow({ icon: '◎', title: '采集清晰度', detail: '高 ›' })
          SettingRow({ icon: '◖', title: '实时提示语', hasToggle: true, toggle: true })
          SectionTitle({ title: '设备诊断' })
          Row() {
            ForEach(['✓ 设备', '✓ 引擎', '✓ 网络', '! 缓存'], (item: string, index: number) => {
              Text(item).layoutWeight(1).fontSize(11).fontColor(index === 3 ? COLOR.WARN : COLOR.SUCCESS).textAlign(TextAlign.Center)
            })
          }.width('100%').padding(16).backgroundColor(COLOR.CARD).borderRadius(8)
          PrimaryButton({ text: '一键诊断', onTap: () => {} })
          SectionTitle({ title: '更多' })
          SettingRow({ icon: '▦', title: '企业工作台', detail: '平板 / PC ›', onTap: () => this.go(Page.Workbench) })
          SettingRow({ icon: 'i', title: '关于 Decover', detail: '1.0.0 ›' })
        }.padding({ left: 20, right: 20, bottom: 20 })
      }.layoutWeight(1)
    }.width('100%').height('100%').backgroundColor(COLOR.PAGE)
  }

  @Builder WorkbenchPage() {
    Row() {
      Column({ space: 10 }) {
        Text('DECOVER').fontSize(18).fontWeight(FontWeight.Bold).fontColor('#F2F1EE').letterSpacing(2).width('100%').margin({ bottom: 16 })
        TextInput({ placeholder: '搜索项目' }).height(38).backgroundColor('#2B2E33').fontColor(Color.White).borderRadius(6)
        Text('项目').fontSize(11).fontColor('#8E9095').width('100%').margin({ top: 12 })
        ForEach(['朝阳小区 · 三居', '江景壹号 · 两居', '旧居存档 · 一居'], (item: string, index: number) => {
          Text(item).fontSize(13).fontColor(index === 0 ? COLOR.GOLD : '#C9C8C4').width('100%').padding(12)
            .backgroundColor(index === 0 ? '#2B2E33' : Color.Transparent).border({ width: { left: index === 0 ? 3 : 0 }, color: COLOR.GOLD })
        })
        Blank()
        Button('‹ 返回手机视图').fontSize(11).fontColor('#C9C8C4').backgroundColor(Color.Transparent).onClick(() => this.go(Page.Settings))
      }.width('24%').height('100%').padding(16).backgroundColor('#1E2126')
      Stack() {
        Image($r('app.media.room_scan')).width('100%').height('100%').objectFit(ImageFit.Cover)
        Row({ space: 8 }) {
          Chip({ text: '客厅', selected: true, dark: true })
          Chip({ text: '主卧', dark: true })
          Chip({ text: '书房', dark: true })
        }.position({ x: 20, y: 20 })
        Text('来自你的 Mate · 已接续最后视角').fontSize(11).fontColor(Color.White).padding(10).backgroundColor(COLOR.GLASS).borderRadius(16).position({ x: 20, y: '88%' })
      }.layoutWeight(1).height('100%')
      Column({ space: 14 }) {
        Text('属性面板').fontSize(18).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).width('100%')
        Row({ space: 6 }) {
          Chip({ text: '语义', selected: true })
          Chip({ text: '方案' })
          Chip({ text: '校验' })
        }
        Divider().color(COLOR.HAIR)
        Text('沙发').fontSize(20).fontWeight(FontWeight.Bold).fontColor(COLOR.INK).width('100%')
        SettingRow({ icon: '◇', title: '类型', detail: '家具' })
        SettingRow({ icon: '↔', title: '尺寸', detail: '2.18 × 0.92m' })
        SettingRow({ icon: '◐', title: '材质', detail: '浅灰织物' })
        Blank()
        PrimaryButton({ text: '保存更改', onTap: () => {} })
      }.width('28%').height('100%').padding(16).backgroundColor(COLOR.CARD)
    }.width('100%').height('100%').backgroundColor(COLOR.VOID)
  }

  build() {
    if (this.page === Page.Splash) this.SplashPage()
    else if (this.page === Page.Login) this.LoginPage()
    else if (this.page === Page.Home) this.HomePage()
    else if (this.page === Page.Create) this.CreatePage()
    else if (this.page === Page.Guide) this.GuidePage()
    else if (this.page === Page.Camera) this.CameraPage()
    else if (this.page === Page.Report) this.ReportPage()
    else if (this.page === Page.Tasks) this.TasksPage()
    else if (this.page === Page.Viewer) this.ViewerPage()
    else if (this.page === Page.Annotate) this.AnnotatePage()
    else if (this.page === Page.Chat) this.ChatPage()
    else if (this.page === Page.Proposal) this.ProposalPage()
    else if (this.page === Page.Validation) this.ValidationPage()
    else if (this.page === Page.Export) this.ExportPage()
    else if (this.page === Page.Floorplan) this.FloorplanPage()
    else if (this.page === Page.Privacy) this.PrivacyPage()
    else if (this.page === Page.Settings) this.SettingsPage()
    else this.WorkbenchPage()
  }
}
