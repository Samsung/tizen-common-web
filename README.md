# @tizentv/tizen-common-web

`@tizentv/tizen-common-web` package is for supporting [Tizen Web Device API](https://developer.samsung.com/smarttv/develop/api-references/tizen-web-device-api-references.html) as `commonjs` style.
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

## How to use

-   Common js

```sh
npm install @tizentv/tizen-common-web
```

```js
// js
import { systeminfo } from '@tizentv/tizen-common-web';
const { getCapability } = systeminfo;

getCapability('http://tizen.org/feature/screen');
```

-   Typescript

```sh
npm install @tizentv/tizen-common-web
npm install @types/tizen-common-web
```

```ts
// ts
import { systeminfo } from '@tizentv/tizen-common-web';
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
