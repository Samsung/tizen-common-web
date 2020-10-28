const { tvdisplaycontrol } = window.tizen;

export const {
    get3DEffectMode,
    is3DModeEnabled,
    getSupported3DEffectModeList
} = tvdisplaycontrol;

export enum Display3DEffectMode {
    OFF = 'OFF',
    TOP_BOTTOM = 'TOP_BOTTOM',
    SIDE_BY_SIDE = 'SIDE_BY_SIDE',
    LINE_BY_LINE = 'LINE_BY_LINE',
    VERTICAL_STRIPE = 'VERTICAL_STRIPE',
    FRAME_SEQUENCE = 'FRAME_SEQUENCE',
    CHECKER_BD = 'CHECKER_BD',
    FROM_2D_TO_3D = 'FROM_2D_TO_3D'
}

export enum Display3DModeState {
    NOT_CONNECTED = 'NOT_CONNECTED',
    NOT_SUPPORTED = 'NOT_SUPPORTED',
    READY = 'READY'
}
