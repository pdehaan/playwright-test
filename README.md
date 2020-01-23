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

## devices

```
playwright@0.9.21

Blackberry PlayBook ............ {"width":600, "height":1024, "deviceScaleFactor":1, "isMobile":true}
Blackberry PlayBook landscape .. {"width":1024, "height":600, "deviceScaleFactor":1, "isMobile":true}
BlackBerry Z30 ................. {"width":360, "height":640, "deviceScaleFactor":2, "isMobile":true}
BlackBerry Z30 landscape ....... {"width":640, "height":360, "deviceScaleFactor":2, "isMobile":true}
Galaxy Note 3 .................. {"width":360, "height":640, "deviceScaleFactor":3, "isMobile":true}
Galaxy Note 3 landscape ........ {"width":640, "height":360, "deviceScaleFactor":3, "isMobile":true}
Galaxy Note II ................. {"width":360, "height":640, "deviceScaleFactor":2, "isMobile":true}
Galaxy Note II landscape ....... {"width":640, "height":360, "deviceScaleFactor":2, "isMobile":true}
Galaxy S III ................... {"width":360, "height":640, "deviceScaleFactor":2, "isMobile":true}
Galaxy S III landscape ......... {"width":640, "height":360, "deviceScaleFactor":2, "isMobile":true}
Galaxy S5 ...................... {"width":360, "height":640, "deviceScaleFactor":3, "isMobile":true}
Galaxy S5 landscape ............ {"width":640, "height":360, "deviceScaleFactor":3, "isMobile":true}
iPad (gen 6) ................... {"width":768, "height":1024, "deviceScaleFactor":2, "isMobile":true}
iPad (gen 6) landscape ......... {"width":1024, "height":768, "deviceScaleFactor":2, "isMobile":true}
iPad (gen 7) ................... {"width":810, "height":1080, "deviceScaleFactor":2, "isMobile":true}
iPad (gen 7) landscape ......... {"width":1080, "height":810, "deviceScaleFactor":2, "isMobile":true}
iPad Mini ...................... {"width":768, "height":1024, "deviceScaleFactor":2, "isMobile":true}
iPad Mini landscape ............ {"width":1024, "height":768, "deviceScaleFactor":2, "isMobile":true}
iPad Pro 11 .................... {"width":834, "height":1194, "deviceScaleFactor":2, "isMobile":true}
iPad Pro 11 landscape .......... {"width":1194, "height":834, "deviceScaleFactor":2, "isMobile":true}
iPhone 6 ....................... {"width":375, "height":667, "deviceScaleFactor":2, "isMobile":true}
iPhone 6 landscape ............. {"width":667, "height":375, "deviceScaleFactor":2, "isMobile":true}
iPhone 6 Plus .................. {"width":414, "height":736, "deviceScaleFactor":3, "isMobile":true}
iPhone 6 Plus landscape ........ {"width":736, "height":414, "deviceScaleFactor":3, "isMobile":true}
iPhone 7 ....................... {"width":375, "height":667, "deviceScaleFactor":2, "isMobile":true}
iPhone 7 landscape ............. {"width":667, "height":375, "deviceScaleFactor":2, "isMobile":true}
iPhone 7 Plus .................. {"width":414, "height":736, "deviceScaleFactor":3, "isMobile":true}
iPhone 7 Plus landscape ........ {"width":736, "height":414, "deviceScaleFactor":3, "isMobile":true}
iPhone 8 ....................... {"width":375, "height":667, "deviceScaleFactor":2, "isMobile":true}
iPhone 8 landscape ............. {"width":667, "height":375, "deviceScaleFactor":2, "isMobile":true}
iPhone 8 Plus .................. {"width":414, "height":736, "deviceScaleFactor":3, "isMobile":true}
iPhone 8 Plus landscape ........ {"width":736, "height":414, "deviceScaleFactor":3, "isMobile":true}
iPhone SE ...................... {"width":320, "height":568, "deviceScaleFactor":2, "isMobile":true}
iPhone SE landscape ............ {"width":568, "height":320, "deviceScaleFactor":2, "isMobile":true}
iPhone X ....................... {"width":375, "height":812, "deviceScaleFactor":3, "isMobile":true}
iPhone X landscape ............. {"width":812, "height":375, "deviceScaleFactor":3, "isMobile":true}
iPhone XR ...................... {"width":414, "height":896, "deviceScaleFactor":3, "isMobile":true}
iPhone XR landscape ............ {"width":896, "height":414, "deviceScaleFactor":3, "isMobile":true}
iPhone 11 ...................... {"width":414, "height":896, "deviceScaleFactor":2, "isMobile":true}
iPhone 11 Pro .................. {"width":375, "height":812, "deviceScaleFactor":3, "isMobile":true}
iPhone 11 Pro Max .............. {"width":414, "height":896, "deviceScaleFactor":3, "isMobile":true}
JioPhone 2 ..................... {"width":240, "height":320, "deviceScaleFactor":1, "isMobile":true}
JioPhone 2 landscape ........... {"width":320, "height":240, "deviceScaleFactor":1, "isMobile":true}
Kindle Fire HDX ................ {"width":800, "height":1280, "deviceScaleFactor":2, "isMobile":true}
Kindle Fire HDX landscape ...... {"width":1280, "height":800, "deviceScaleFactor":2, "isMobile":true}
LG Optimus L70 ................. {"width":384, "height":640, "deviceScaleFactor":1.25, "isMobile":true}
LG Optimus L70 landscape ....... {"width":640, "height":384, "deviceScaleFactor":1.25, "isMobile":true}
Microsoft Lumia 550 ............ {"width":640, "height":360, "deviceScaleFactor":2, "isMobile":true}
Microsoft Lumia 950 ............ {"width":360, "height":640, "deviceScaleFactor":4, "isMobile":true}
Microsoft Lumia 950 landscape .. {"width":640, "height":360, "deviceScaleFactor":4, "isMobile":true}
Nexus 10 ....................... {"width":800, "height":1280, "deviceScaleFactor":2, "isMobile":true}
Nexus 10 landscape ............. {"width":1280, "height":800, "deviceScaleFactor":2, "isMobile":true}
Nexus 4 ........................ {"width":384, "height":640, "deviceScaleFactor":2, "isMobile":true}
Nexus 4 landscape .............. {"width":640, "height":384, "deviceScaleFactor":2, "isMobile":true}
Nexus 5 ........................ {"width":360, "height":640, "deviceScaleFactor":3, "isMobile":true}
Nexus 5 landscape .............. {"width":640, "height":360, "deviceScaleFactor":3, "isMobile":true}
Nexus 5X ....................... {"width":412, "height":732, "deviceScaleFactor":2.625, "isMobile":true}
Nexus 5X landscape ............. {"width":732, "height":412, "deviceScaleFactor":2.625, "isMobile":true}
Nexus 6 ........................ {"width":412, "height":732, "deviceScaleFactor":3.5, "isMobile":true}
Nexus 6 landscape .............. {"width":732, "height":412, "deviceScaleFactor":3.5, "isMobile":true}
Nexus 6P ....................... {"width":412, "height":732, "deviceScaleFactor":3.5, "isMobile":true}
Nexus 6P landscape ............. {"width":732, "height":412, "deviceScaleFactor":3.5, "isMobile":true}
Nexus 7 ........................ {"width":600, "height":960, "deviceScaleFactor":2, "isMobile":true}
Nexus 7 landscape .............. {"width":960, "height":600, "deviceScaleFactor":2, "isMobile":true}
Nokia Lumia 520 ................ {"width":320, "height":533, "deviceScaleFactor":1.5, "isMobile":true}
Nokia Lumia 520 landscape ...... {"width":533, "height":320, "deviceScaleFactor":1.5, "isMobile":true}
Nokia N9 ....................... {"width":480, "height":854, "deviceScaleFactor":1, "isMobile":true}
Nokia N9 landscape ............. {"width":854, "height":480, "deviceScaleFactor":1, "isMobile":true}
Pixel 2 ........................ {"width":411, "height":731, "deviceScaleFactor":2.625, "isMobile":true}
Pixel 2 landscape .............. {"width":731, "height":411, "deviceScaleFactor":2.625, "isMobile":true}
Pixel 2 XL ..................... {"width":411, "height":823, "deviceScaleFactor":3.5, "isMobile":true}
Pixel 2 XL landscape ........... {"width":823, "height":411, "deviceScaleFactor":3.5, "isMobile":true}
```
