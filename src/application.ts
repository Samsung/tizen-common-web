const { application } = window.tizen;

export const {
    getCurrentApplication,
    kill,
    launch,
    launchAppControl,
    findAppControl,
    getAppsContext,
    getAppContext,
    getAppsInfo,
    getAppInfo,
    getAppCerts,
    getAppSharedURI,
    getAppMetaData,
    addAppInfoEventListener,
    removeAppInfoEventListener,
    addAppStatusChangeListener,
    removeAppStatusChangeListener
} = application;

export enum ApplicationControlLaunchMode {
    SINGLE = 'SINGLE',
    GROUP = 'GROUP'
}
export enum ApplicationUsageMode {
    RECENTLY = 'RECENTLY',
    FREQUENTLY = 'FREQUENTLY'
}

// export {
//     getCurrentApplication,
//     kill,
//     launch,
//     launchAppControl,
//     findAppControl,
//     getAppsContext,
//     getAppContext,
//     getAppsInfo,
//     getAppInfo,
//     getAppCerts,
//     getAppSharedURI,
//     getAppMetaData,
//     addAppInfoEventListener,
//     removeAppInfoEventListener,
//     addAppStatusChangeListener,
//     removeAppStatusChangeListener
// };
