const { application } = window.tizen;

const {
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

module.exports = {
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
};
