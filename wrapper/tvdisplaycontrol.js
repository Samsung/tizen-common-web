const { tvdisplaycontrol } = window.tizen;

const {
    get3DEffectMode,
    is3DModeEnabled,
    getSupported3DEffectModeList
} = tvdisplaycontrol;

module.exports = {
    get3DEffectMode,
    is3DModeEnabled,
    getSupported3DEffectModeList
};
