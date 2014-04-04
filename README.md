import-base64-script
====================

I was noticing issues with having a base64 encoded data URI for script tags in Chrome and Firefox. I wrote this script to help deal with that. Requires https://github.com/yckart/jquery.base64.js

Usage
===

Example: 
```Javascript
$.importBase64Script( $('#myScript'), $('body') );
```
and this will translate whatever base64 is encoded in the script's `src` attribute, then append it to your body.
