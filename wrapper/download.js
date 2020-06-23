const { download } = window.tizen;

const {
    start,
    cancel,
    pause,
    abandon,
    resume,
    getState,
    getDownloadRequest,
    getMIMEType,
    setListener
} = download;

module.exports = {
    start,
    cancel,
    pause,
    abandon,
    resume,
    getState,
    getDownloadRequest,
    getMIMEType,
    setListener
};
