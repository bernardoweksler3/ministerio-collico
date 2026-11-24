// Service worker mínimo: permite instalar la app. No guarda copias, así que siempre se ve la versión más nueva.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
