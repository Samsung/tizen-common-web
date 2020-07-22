const { filesystem } = window.tizen;

export const {
    openFile,
    createDirectory,
    deleteFile,
    deleteDirectory,
    copyFile,
    copyDirectory,
    moveFile,
    moveDirectory,
    rename,
    listDirectory,
    toURI,
    isFile,
    isDirectory,
    pathExists,
    getDirName,
    resolve,
    getStorage,
    listStorages,
    addStorageStateChangeListener,
    removeStorageStateChangeListener
} = filesystem;

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
