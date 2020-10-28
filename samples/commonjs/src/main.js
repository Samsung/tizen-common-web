import { productinfo } from '@tizentv/tizen-tv-webapis';
import { systeminfo } from 'tizen-common-web';

const { getFirmware, getDuid, getModelCode } = productinfo;
const { getCapability } = systeminfo;

window.onload = () => {
    updateInformation('firmware', getFirmware());
    updateInformation('duid', getDuid());
    updateInformation('modelcode', getModelCode());
    updateInformation('screen', getCapability('http://tizen.org/feature/screen'))
};

function updateInformation(id, content) {
    if (typeof id !== 'string' && typeof content !== 'string') {
        return;
    }
    document.getElementById(id).innerText = content;
    console.log(content);
}
