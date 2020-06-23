const { tvwindow } = window.tizen;

const {
    getAvailableWindows,
    setSource,
    getSource,
    show,
    hide,
    getRect,
    getVideoResolution,
    addVideoResolutionChangeListener,
    removeVideoResolutionChangeListener
} = tvwindow;

module.exports = {
    getAvailableWindows,
    setSource,
    getSource,
    show,
    hide,
    getRect,
    getVideoResolution,
    addVideoResolutionChangeListener,
    removeVideoResolutionChangeListener
};
