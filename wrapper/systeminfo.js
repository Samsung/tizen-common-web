const { systeminfo } = window.tizen;

const {
    getTotalMemory,
    getAvailableMemory,
    getCapabilities,
    getCapability,
    getCount,
    getPropertyValue,
    getPropertyValueArray,
    addPropertyValueChangeListener,
    addPropertyValueArrayChangeListener,
    removePropertyValueChangeListener
} = systeminfo;

module.exports = {
    getTotalMemory,
    getAvailableMemory,
    getCapabilities,
    getCapability,
    getCount,
    getPropertyValue,
    getPropertyValueArray,
    addPropertyValueChangeListener,
    addPropertyValueArrayChangeListener,
    removePropertyValueChangeListener
};
