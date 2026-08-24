/* Deasa service worker — makes the app work offline. */
const CACHE = "deasa-v8";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  // Runtime-cache Google Fonts (CSS + font files) so type works offline after first visit.
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(
      caches.open(CACHE).then(async (c) => {
        const hit = await c.match(e.request);
        const fetching = fetch(e.request).then((res) => {
          if (res && res.status === 200) c.put(e.request, res.clone());
          return res;
        }).catch(() => hit);
        return hit || fetching;
      })
    );
    return;
  }
  if (url.origin !== location.origin) return;
  // App shell: cache-first, fall back to network, then to cached index for navigations.
  e.respondWith(
    caches.match(e.request).then((hit) =>
      hit ||
      fetch(e.request).then((res) => {
        if (res && res.status === 200 && e.request.method === "GET") {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      }).catch(() => (e.request.mode === "navigate" ? caches.match("./index.html") : undefined))
    )
  );
});
