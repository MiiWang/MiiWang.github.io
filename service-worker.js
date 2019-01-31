/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2afbbb96377a5a89cb85564c5c0191bf"
  },
  {
    "url": "assets/css/0.styles.9d53ebe0.css",
    "revision": "79c51d6f5fdd3145a1fb06ee2de608c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a405b8ab.js",
    "revision": "d0b66d04393b0002cd8904881e700d33"
  },
  {
    "url": "assets/js/3.b7b7e87b.js",
    "revision": "9cbfb2e16e1abcf5f4e6442ace7fce9c"
  },
  {
    "url": "assets/js/4.52c9d1e9.js",
    "revision": "92a45db91201fdb2bab443bdab66cfe1"
  },
  {
    "url": "assets/js/app.03177dcf.js",
    "revision": "833d2bd3bc1221fc155e286fb7c5e64e"
  },
  {
    "url": "img/mimi.png",
    "revision": "eb0b2741c56ed4974be25a21c2f63706"
  },
  {
    "url": "index.html",
    "revision": "5081e95444e57c5b61031840ce3fd004"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
