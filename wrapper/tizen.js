import * as filesystem from './filesystem';
import * as application from './application';
import * as download from './download';
import * as systeminfo from './systeminfo';
import * as websetting from './websetting';
import * as tvaudiocontrol from './tvaudiocontrol';
import * as tvdisplaycontrol from './tvdisplaycontrol';
import * as tvinfo from './tvinfo';
import * as tvinputdevice from './tvinputdevice';
import * as tvwindow from './tvwindow';
import * as pkg from './package';

const { tizen } = window;

const {
    ApplicationControl,
    ApplicationControlData,
    AttributeFilter,
    AttributeRangeFilter,
    Bundle,
    CompositeFilter,
    SortMode,
    SimpleCoordinates,
    DownloadRequest
} = tizen;

export {
    ApplicationControl,
    ApplicationControlData,
    AttributeFilter,
    AttributeRangeFilter,
    CompositeFilter,
    SortMode,
    SimpleCoordinates,
    Bundle,
    filesystem,
    application,
    download,
    systeminfo,
    websetting,
    tvaudiocontrol,
    tvdisplaycontrol,
    tvinfo,
    tvinputdevice,
    tvwindow,
    DownloadRequest,
    pkg as package
};
