import { productinfo, appcommon } from '@tizentv/tizen-tv-webapis';
import { systeminfo } from '@tizentv/tizen-common-web';

const { getFirmware, getDuid, getModelCode } = productinfo;
const { setScreenSaver, AppCommonScreenSaverState } = appcommon;
const { getCapability } = systeminfo;

window.onload = () => {
    updateInformation('firmware', getFirmware());
    updateInformation('duid', getDuid());
    updateInformation('modelcode', getModelCode());
    updateInformation('screen', getCapability('http://tizen.org/feature/screen'))

    setScreenSaver(AppCommonScreenSaverState.SCREEN_SAVER_ON, () => {
        updateInformation(
            'screensaver',
            `ScreenSaver has turned on, parameter value is ${AppCommonScreenSaverState.SCREEN_SAVER_ON}`
        );
    });
};

function updateInformation(id: string, content: string) {
    const valueElement = document.getElementById(id);
    if (!valueElement) {
        return;
    }
    valueElement.innerHTML = content;
    console.log(content);
}
