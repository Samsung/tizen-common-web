# tizen-common-web

`tizen-common-web` package is for supporting [Tizen Web Device API](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references.html) as `commonjs` style.
Now we are supporting it for Typescript developers.
Please note that, In order to use this pacakge, `@types/tizen-common-web` is required.

## Supported APIs

-   [Tizen](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tizen-api.html)
-   [Filesystem](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/filesystem-api.html)
-   [Application](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/application-api.html)
-   [Package](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/package-api.html)
-   [Download](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/download-api.html)
-   [SystemInfo](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/systeminfo-api.html)
-   [WebSetting](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/websetting-api.html)
-   [TVAudioControl](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvaudiocontrol-api.html)
-   [TVDisplayControl](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvdisplaycontrol-api.html)
-   [TVInfo](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvinfo-api.html)
-   [TVInputDevice](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvinputdevice-api.html)
-   [TVWindow](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references/tvwindow-api.html)
-   [VoiceControl](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/voicecontrol.html)
-   [Time](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/time.html)
-   [Push](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/push.html)
-   [MessagePort](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/messageport.html)
-   [MediaController](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/mediacontroller.html)
-   [KeyManager](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/keymanager.html)
-   [Iotcon](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/iotcon.html)
-   [Exif](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/exif.html)
-   [DataControl](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/datacontrol.html)
-   [Content](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/content.html)
-   [Archive](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/archive.html)
-   [Alarm](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/alarm.html)
-   [Account](https://docs.tizen.org/application/web/api/6.0/device_api/mobile/tizen/account.html)

## How to use

-   Common js

```sh
npm install tizen-common-web
```

```js
// js
const systeminfo = require('tizen-common-web');
const { getCapability } = systeminfo;

getCapability('http://tizen.org/feature/screen');
```

-   Typescript

```sh
npm install tizen-common-web
npm install @types/tizen-common-web
```

```ts
// ts
import { systeminfo } from 'tizen-common-web';
const { getCapability } = systeminfo;

getCapability('http://tizen.org/feature/screen');
```

## Samples

We offer two samples for common js and typescript.

### Common js (webpack + babel-loader)

-   Path : `/samples/commonjs`
-   How to Run

1. Move to the path
2. npm install
3. npm run wits-init (To use WITs **Live reload feature**)
4. npm run start

### typescript (webpack + ts-loader)

-   Path : `/samples/typescript`
-   How to Run

1. Move to the path
2. npm install
3. npm run wits-init (To use WITs **Live reload feature**)
4. npm run start
