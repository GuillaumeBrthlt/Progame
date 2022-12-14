var cacheName = 'hello-pwa';
var filesToCache = [
  '../index.html',
  '../scss/styles.css',
  './main.js',
  './Home.js',
  './PageDetail.js',
  './PageList.js',
  './routes.js'
];

// Met en cache le contenu de ton application
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Code executé lorsque tu es offline
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});