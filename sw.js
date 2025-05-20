// sw.js
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('farm-gps-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
