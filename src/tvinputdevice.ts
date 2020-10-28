const { tvinputdevice } = window.tizen;

export const {
    getSupportedKeys,
    getKey,
    registerKey,
    unregisterKey,
    registerKeyBatch,
    unregisterKeyBatch
} = tvinputdevice;
