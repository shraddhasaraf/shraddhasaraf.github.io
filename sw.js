// Service Worker to handle caching and prevent image downloads
const CACHE_NAME = 'portfolio-cache-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('profile-photo.jpg')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const newHeaders = new Headers(response.headers);
          newHeaders.set('Content-Disposition', 'nostore');
          newHeaders.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
          newHeaders.set('Pragma', 'no-cache');
          newHeaders.set('Expires', '0');

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders,
          });
        })
    );
  }
});
