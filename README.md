# **playright** test

Messing around with [**playwright**](https://www.npmjs.com/package/playwright); "a Node library to automate the Chromium, WebKit and Firefox browsers."

## node_modules

Looks like the Chromium, Firefox, and WebKit binaries incur about 630 MB of downloads:

```sh
npm install

Downloading chromium 733125 - 119.2 Mb
chromium downloaded to ./node_modules/playwright-core/.local-chromium/mac-733125
Downloading firefox 1016 - 67.2 Mb
firefox downloaded to ./node_modules/playwright-core/.local-firefox/mac-1016
Downloading webkit 1106 - 45.1 Mb
webkit downloaded to ./node_modules/playwright-core/.local-webkit/mac-1106

du -sh ./node_modules/playwright-core # 631M

du -sh ./node_modules/playwright-core/.local-chromium # 272M
du -sh ./node_modules/playwright-core/.local-firefox # 183M
du -sh ./node_modules/playwright-core/.local-webkit # 174M
```
