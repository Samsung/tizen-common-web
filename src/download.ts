const { download } = window.tizen;

export const {
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
