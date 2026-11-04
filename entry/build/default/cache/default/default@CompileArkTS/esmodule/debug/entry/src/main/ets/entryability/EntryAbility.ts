import type AbilityConstant from "@ohos:app.ability.AbilityConstant";
import UIAbility from "@ohos:app.ability.UIAbility";
import type Want from "@ohos:app.ability.Want";
import type window from "@ohos:window";
export default class EntryAbility extends UIAbility {
    onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
        AppStorage.setOrCreate('isFirstLaunch', true);
        const backendUrl = want.parameters?.backendUrl;
        if (typeof backendUrl === 'string' && /^http:\/\/127\.0\.0\.1:[0-9]+\/api\/v1$/.test(backendUrl)) {
            AppStorage.setOrCreate('backendUrl', backendUrl);
        }
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        windowStage.loadContent('pages/Index');
    }
}
