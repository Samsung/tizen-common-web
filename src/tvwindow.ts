const { tvwindow } = window.tizen;

export const {
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

export enum WindowType {
    MAIN = 'MAIN'
}

export enum MeasurementUnit {
    px = 'px',
    '%' = '%'
}

export enum AspectRatio {
    ASPECT_RATIO_1x1 = 'ASPECT_RATIO_1x1',
    ASPECT_RATIO_4x3 = 'ASPECT_RATIO_4x3',
    ASPECT_RATIO_16x9 = 'ASPECT_RATIO_16x9',
    ASPECT_RATIO_221x100 = 'ASPECT_RATIO_221x100',
    ASPECT_RATIO_UNKNOWN = 'ASPECT_RATIO_UNKNOWN'
}

export enum ZPosition {
    FRONT = 'FRONT',
    BEHIND = 'BEHIND'
}
