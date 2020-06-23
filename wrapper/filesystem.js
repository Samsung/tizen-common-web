const { filesystem } = window.tizen;

const {
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

module.exports = {
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
};
