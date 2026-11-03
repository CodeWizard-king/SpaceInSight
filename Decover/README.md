# Decover HarmonyOS 前端

这是基于《App高保真视觉稿》和《前端实现设计方案 V2.0》落地的 ArkTS / ArkUI Stage 工程。

## 打开与运行

1. 用 DevEco Studio 打开 `E:\Decover`。
2. 选择 HarmonyOS SDK 6.1.1(24) 或更高版本。
3. 连接模拟器或真机后运行 `entry` 模块。

本机已验证构建命令：

```powershell
$env:DEVECO_SDK_HOME='D:\software\DevEco Studio\sdk'
& 'D:\software\DevEco Studio\tools\node\node.exe' 'D:\software\DevEco Studio\tools\hvigor\bin\hvigorw.js' --mode module -p product=default -p module=entry@default assembleHap --no-daemon
```

产物位于 `entry/build/default/outputs/default/entry-default-unsigned.hap`。当前为未签名调试产物，真机安装前需要在 DevEco Studio 配置签名。

## 页面入口

`entry/src/main/ets/pages/Index.ets` 内实现 P01-P18 页面状态切换。首页可进入新建项目、采集引导、相机、质量报告、任务中心、3D 浏览、语义标注、AI 需求对话、方案推荐、校验报告、导出、户型图识别、隐私、设置与平板工作台。

场景素材位于 `entry/src/main/resources/base/media/room_scan.png` 和 `room_design.png`，设计令牌集中在 `entry/src/main/ets/common/Tokens.ets`。
