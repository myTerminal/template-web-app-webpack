/* global caches fetch skipWaiting */

var cacheName = '#sw-cache-string#',
    origin = '#sw-origin#';

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(
                [
                    origin,
                    origin + 'index.html',
                    origin + 'styles/styles.css',
                    origin + 'scripts/app.js',
                    origin + 'images/pencils.jpg',
                    origin + 'fonts/fontawesome-webfont.woff2',
                    origin + 'fonts/OpenSans-Light.ttf'
                ]
            );
        }).catch(function (err) {
            console.log(err);
        })
    );
});

this.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) {
            return response;
        }

        return fetch(event.request);
    }));
});

this.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(keyList => Promise.all(keyList.map(key => {
            if (key !== cacheName) {
                return caches.delete(key);
            }
        })))
    );
});

this.addEventListener('message', messageEvent => {
    if (messageEvent.data === 'skipWaiting') {
        return skipWaiting();
    } else {
        return null;
    }
});
