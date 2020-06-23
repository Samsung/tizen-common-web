const { tvinputdevice } = window.tizen;

const {
    getSupportedKeys,
    getKey,
    registerKey,
    unregisterKey,
    registerKeyBatch,
    unregisterKeyBatch
} = tvinputdevice;

module.exports = {
    getSupportedKeys,
    getKey,
    registerKey,
    unregisterKey,
    registerKeyBatch,
    unregisterKeyBatch
};
