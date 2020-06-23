const { tvaudiocontrol } = window.tizen;

const {
    setMute,
    isMute,
    setVolume,
    setVolumeUp,
    setVolumeDown,
    getVolume,
    setVolumeChangeListener,
    unsetVolumeChangeListener,
    getOutputMode,
    playSound
} = tvaudiocontrol;

module.exports = {
    setMute,
    isMute,
    setVolume,
    setVolumeUp,
    setVolumeDown,
    getVolume,
    setVolumeChangeListener,
    unsetVolumeChangeListener,
    getOutputMode,
    playSound
};
