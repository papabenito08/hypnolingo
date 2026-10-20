// Service worker : met en cache l'appli pour qu'elle fonctionne hors ligne
const CACHE = 'hypnolingo-v11';
const FILES = ['./', './index.html', './i18n.js', './library.js', './phrases.js', './manifest.json', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' })))));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))));
  self.clients.claim();
});

// Avec connexion : on prend la dernière version (et on la garde en cache).
// Sans connexion (ou réseau trop lent) : on sert la copie en cache.
// Les appels à l'IA (autre site) ne passent pas par ici.
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request, { cache: 'no-cache' }).then((r) => {
      if (r && r.ok) cache.put(e.request, r.clone());
      return r;
    });
    if (!cached) return net;
    const timeout = new Promise((res) => setTimeout(() => res(cached), 3000));
    try { return await Promise.race([net.catch(() => cached), timeout]); } catch (err) { return cached; }
  })());
});
