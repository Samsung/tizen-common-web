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

export {
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
    pkg
};

export const {
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
