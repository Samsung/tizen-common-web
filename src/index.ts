export enum ApplicationControlLaunchMode {
    SINGLE = 'SINGLE',
    GROUP = 'GROUP'
}

export enum ApplicationUsageMode {
    RECENTLY = 'RECENTLY',
    FREQUENTLY = 'FREQUENTLY'
}

export enum DownloadState {
    QUEUED = 'QUEUED',
    DOWNLOADING = 'DOWNLOADING',
    PAUSED = 'PAUSED',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
    FAILED = 'FAILED',
    ABANDONED = 'ABANDONED'
}

export enum DownloadNetworkType {
    CELLULAR = 'CELLULAR',
    WIFI = 'WIFI',
    ALL = 'ALL'
}

export enum FileMode {
    a = 'a',
    r = 'r',
    rw = 'rw',
    rwo = 'rwo',
    w = 'w'
}

export enum FileSystemStorageType {
    INTERNAL = 'INTERNAL',
    EXTERNAL = 'EXTERNAL'
}

export enum FileSystemStorageState {
    MOUNTED = 'MOUNTED',
    REMOVED = 'REMOVED',
    UNMOUNTABLE = 'UNMOUNTABLE'
}

export enum BaseSeekPosition {
    BEGIN = 'BEGIN',
    CURRENT = 'CURRENT',
    END = 'END'
}

export enum SystemInfoPropertyId {
    BATTERY = 'BATTERY',
    CPU = 'CPU',
    STORAGE = 'STORAGE',
    DISPLAY = 'DISPLAY',
    DEVICE_ORIENTATION = 'DEVICE_ORIENTATION',
    BUILD = 'BUILD',
    LOCALE = 'LOCALE',
    NETWORK = 'NETWORK',
    WIFI_NETWORK = 'WIFI_NETWORK',
    ETHERNET_NETWORK = 'ETHERNET_NETWORK',
    CELLULAR_NETWORK = 'CELLULAR_NETWORK',
    NET_PROXY_NETWORK = 'NET_PROXY_NETWORK',
    SIM = 'SIM',
    PERIPHERAL = 'PERIPHERAL',
    MEMORY = 'MEMORY',
    VIDEOSOURCE = 'VIDEOSOURCE',
    CAMERA_FLASH = 'CAMERA_FLASH',
    ADS = 'ADS',
    SERVICE_COUNTRY = 'SERVICE_COUNTRY',
    SOURCE_INFO = 'SOURCE_INFO',
    PANEL = 'PANEL'
}

export enum SystemInfoNetworkType {
    NONE = 'NONE',
    '2G' = '2G',
    '2.5G' = '2.5G',
    '3G' = '3G',
    '4G' = '4G',
    WIFI = 'WIFI',
    ETHERNET = 'ETHERNET',
    NET_PROXY = 'NET_PROXY',
    UNKNOWN = 'UNKNOWN'
}

export enum SystemInfoWifiSecurityMode {
    NONE = 'NONE',
    WEP = 'WEP',
    WPA_PSK = 'WPA_PSK',
    WPA2_PSK = 'WPA2_PSK',
    EAP = 'EAP'
}

export enum SystemInfoWifiEncryptionType {
    NONE = 'NONE',
    WEP = 'WEP',
    TKIP = 'TKIP',
    AES = 'AES',
    TKIP_AES_MIXED = 'TKIP_AES_MIXED'
}

export enum SystemInfoNetworkIpMode {
    NONE = 'NONE',
    STATIC = 'STATIC',
    DYNAMIC = 'DYNAMIC',
    AUTO = 'AUTO',
    FIXED = 'FIXED'
}

export enum SystemInfoProfile {
    MOBILE_FULL = 'MOBILE_FULL',
    MOBILE_WEB = 'MOBILE_WEB',
    MOBILE = 'MOBILE',
    WEARABLE = 'WEARABLE',
    TV = 'TV'
}

export enum SystemInfoLowMemoryStatus {
    NORMAL = 'NORMAL',
    WARNING = 'WARNING'
}

export enum SystemInfoDeviceOrientationStatus {
    PORTRAIT_PRIMARY = 'PORTRAIT_PRIMARY',
    PORTRAIT_SECONDARY = 'PORTRAIT_SECONDARY',
    LANDSCAPE_PRIMARY = 'LANDSCAPE_PRIMARY',
    LANDSCAPE_SECONDARY = 'LANDSCAPE_SECONDARY'
}

export enum SystemInfoVideoSourceType {
    TV = 'TV',
    AV = 'AV',
    SVIDEO = 'SVIDEO',
    COMP = 'COMP',
    PC = 'PC',
    HDMI = 'HDMI',
    SCART = 'SCART',
    DVI = 'DVI',
    MEDIA = 'MEDIA'
}

export enum FilterMatchFlag {
    EXACTLY = 'EXACTLY',
    FULLSTRING = 'FULLSTRING',
    CONTAINS = 'CONTAINS',
    STARTSWITH = 'STARTSWITH',
    ENDSWITH = 'ENDSWITH',
    EXISTS = 'EXISTS'
}

export enum SortModeOrder {
    ASC = 'ASC',
    DESC = 'DESC'
}

export enum CompositeFilterType {
    UNION = 'UNION',
    INTERSECTION = 'INTERSECTION'
}

export enum BundleValueType {
    STRING = 'STRING',
    STRING_ARRAY = 'STRING_ARRAY',
    BYTES = 'BYTES',
    BYTES_ARRAY = 'BYTES_ARRAY'
}

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

export enum CaptionInfoKey {
    CAPTION_ONOFF_KEY = 'CAPTION_ONOFF_KEY',
    CAPTION_MODE_KEY = 'CAPTION_MODE_KEY',
    CAPTION_FONT_SIZE_KEY = 'CAPTION_FONT_SIZE_KEY',
    CAPTION_FONT_STYLE_KEY = 'CAPTION_FONT_STYLE_KEY',
    CAPTION_FONT_COLOR_KEY = 'CAPTION_FONT_COLOR_KEY',
    CAPTION_FONT_OPACITY_KEY = 'CAPTION_FONT_OPACITY_KEY',
    CAPTION_BG_COLOR_KEY = 'CAPTION_BG_COLOR_KEY',
    CAPTION_BG_OPACITY_KEY = 'CAPTION_BG_OPACITY_KEY',
    CAPTION_EDGE_TYPE_KEY = 'CAPTION_EDGE_TYPE_KEY',
    CAPTION_EDGE_COLOR_KEY = 'CAPTION_EDGE_COLOR_KEY',
    CAPTION_WINDOW_COLOR_KEY = 'CAPTION_WINDOW_COLOR_KEY',
    CAPTION_WINDOW_OPACITY_KEY = 'CAPTION_WINDOW_OPACITY_KEY'
}

export enum CaptionState {
    CAPTION_OFF = 'CAPTION_OFF',
    CAPTION_ON = 'CAPTION_ON'
}

export enum CaptionMode {
    CAPTION_MODE_DEFAULT = 'CAPTION_MODE_DEFAULT',
    CAPTION_MODE_SERVICE1 = 'CAPTION_MODE_SERVICE1',
    CAPTION_MODE_SERVICE2 = 'CAPTION_MODE_SERVICE2',
    CAPTION_MODE_SERVICE3 = 'CAPTION_MODE_SERVICE3',
    CAPTION_MODE_SERVICE4 = 'CAPTION_MODE_SERVICE4',
    CAPTION_MODE_SERVICE5 = 'CAPTION_MODE_SERVICE5',
    CAPTION_MODE_SERVICE6 = 'CAPTION_MODE_SERVICE6',
    CAPTION_MODE_CC1 = 'CAPTION_MODE_CC1',
    CAPTION_MODE_CC2 = 'CAPTION_MODE_CC2',
    CAPTION_MODE_CC3 = 'CAPTION_MODE_CC3',
    CAPTION_MODE_CC4 = 'CAPTION_MODE_CC4',
    CAPTION_MODE_TEXT1 = 'CAPTION_MODE_TEXT1',
    CAPTION_MODE_TEXT2 = 'CAPTION_MODE_TEXT2',
    CAPTION_MODE_TEXT3 = 'CAPTION_MODE_TEXT3',
    CAPTION_MODE_TEXT4 = 'CAPTION_MODE_TEXT4'
}

export enum CaptionFontSize {
    CAPTION_SIZE_DEFAULT = 'CAPTION_SIZE_DEFAULT',
    CAPTION_SIZE_SMALL = 'CAPTION_SIZE_SMALL',
    CAPTION_SIZE_STANDARD = 'CAPTION_SIZE_STANDARD',
    CAPTION_SIZE_LARGE = 'CAPTION_SIZE_LARGE',
    CAPTION_SIZE_EXTRA_LARGE = 'CAPTION_SIZE_EXTRA_LARGE'
}

export enum CaptionFontStyle {
    CAPTION_FONT_DEFAULT = 'CAPTION_FONT_DEFAULT',
    CAPTION_FONT_STYLE0 = 'CAPTION_FONT_STYLE0',
    CAPTION_FONT_STYLE1 = 'CAPTION_FONT_STYLE1',
    CAPTION_FONT_STYLE2 = 'CAPTION_FONT_STYLE2',
    CAPTION_FONT_STYLE3 = 'CAPTION_FONT_STYLE3',
    CAPTION_FONT_STYLE4 = 'CAPTION_FONT_STYLE4',
    CAPTION_FONT_STYLE5 = 'CAPTION_FONT_STYLE5',
    CAPTION_FONT_STYLE6 = 'CAPTION_FONT_STYLE6',
    CAPTION_FONT_STYLE7 = 'CAPTION_FONT_STYLE7'
}

export enum CaptionColor {
    CAPTION_COLOR_DEFAULT = 'CAPTION_COLOR_DEFAULT',
    CAPTION_COLOR_WHITE = 'CAPTION_COLOR_WHITE',
    CAPTION_COLOR_BLACK = 'CAPTION_COLOR_BLACK',
    CAPTION_COLOR_RED = 'CAPTION_COLOR_RED',
    CAPTION_COLOR_GREEN = 'CAPTION_COLOR_GREEN',
    CAPTION_COLOR_BLUE = 'CAPTION_COLOR_BLUE',
    CAPTION_COLOR_YELLOW = 'CAPTION_COLOR_YELLOW',
    CAPTION_COLOR_MAGENTA = 'CAPTION_COLOR_MAGENTA',
    CAPTION_COLOR_CYAN = 'CAPTION_COLOR_CYAN'
}

export enum CaptionOpacity {
    CAPTION_OPACITY_SOLID = 'CAPTION_OPACITY_SOLID',
    CAPTION_OPACITY_FLASHING = 'CAPTION_OPACITY_FLASHING',
    CAPTION_OPACITY_TRANSLUCENT = 'CAPTION_OPACITY_TRANSLUCENT',
    CAPTION_OPACITY_TRANSPARENT = 'CAPTION_OPACITY_TRANSPARENT',
    CAPTION_OPACITY_DEFAULT = 'CAPTION_OPACITY_DEFAULT'
}

export enum CaptionEdge {
    CAPTION_EDGE_NONE = 'CAPTION_EDGE_NONE',
    CAPTION_EDGE_RAISED = 'CAPTION_EDGE_RAISED',
    CAPTION_EDGE_DEPRESSED = 'CAPTION_EDGE_DEPRESSED',
    CAPTION_EDGE_UNIFORM = 'CAPTION_EDGE_UNIFORM',
    CAPTION_EDGE_DROP_SHADOWED = 'CAPTION_EDGE_DROP_SHADOWED'
}

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
export const {
    tizen,
    account,
    alarm,
    application,
    archive,
    content,
    datacontrol,
    download,
    exif,
    filesystem,
    iotcon,
    keymanager,
    mediacontroller,
    messageport,
    push,
    systeminfo,
    time,
    tvaudiocontrol,
    tvdisplaycontrol,
    tvinfo,
    tvinputdevice,
    tvwindow,
    voicecontrol,
    websetting,
    ApplicationControl,
    ApplicationControlData,
    AttributeFilter,
    AttributeRangeFilter,
    Bundle,
    CompositeFilter,
    SimpleCoordinates,
    SortMode
} = window.tizen;

const pkg = window.tizen.package;
export { pkg as package };
