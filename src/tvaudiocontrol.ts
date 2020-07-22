const { tvaudiocontrol } = window.tizen;

export const {
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

export enum AudioOutputMode {
    PCM = 'PCM',
    DOLBY = 'DOLBY',
    DTS = 'DTS',
    AAC = 'AAC',
    DOLBY_DIGITAL_PLUS = 'DOLBY_DIGITAL_PLUS'
}

export enum AudioBeepType {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    PAGE_LEFT = 'PAGE_LEFT',
    PAGE_RIGHT = 'PAGE_RIGHT',
    BACK = 'BACK',
    SELECT = 'SELECT',
    CANCEL = 'CANCEL',
    WARNING = 'WARNING',
    KEYPAD = 'KEYPAD',
    KEYPAD_ENTER = 'KEYPAD_ENTER',
    KEYPAD_DEL = 'KEYPAD_DEL',
    MOVE = 'MOVE',
    PREPARING = 'PREPARING'
}
