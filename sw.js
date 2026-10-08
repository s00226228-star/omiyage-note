const CACHE_NAME = 'omiyage-note-static-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192-v4.png', './icon-512-v4.png', './icon-maskable-192-v4.png', './icon-maskable-512-v4.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', event => { const request = event.request; if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return; event.respondWith(fetch(request).catch(() => caches.match(request))); });
