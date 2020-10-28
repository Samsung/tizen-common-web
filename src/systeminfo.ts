const { systeminfo } = window.tizen;

export const {
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
