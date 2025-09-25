// Translation Service Worker for offline caching
const CACHE_NAME = 'marnfah-translations-v1'
const TRANSLATION_CACHE_NAME = 'marnfah-translations-data-v1'

// Cache translation requests
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url)

  // Cache translation-related requests
  if (url.pathname.includes('translation') || url.pathname.includes('locale')) {
    event.respondWith(
      caches.open(TRANSLATION_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(response => {
          if (response) {
            // Return cached version
            return response
          }

          // Fetch and cache
          return fetch(event.request).then(fetchResponse => {
            if (fetchResponse.ok) {
              cache.put(event.request, fetchResponse.clone())
            }
            return fetchResponse
          }).catch(() => {
            // Return fallback for offline scenario
            return new Response(JSON.stringify({
              error: 'Translation not available offline',
              fallback: true
            }), {
              headers: { 'Content-Type': 'application/json' }
            })
          })
        })
      })
    )
  }
})

// Cleanup old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName.startsWith('marnfah-translations-') &&
              cacheName !== CACHE_NAME &&
              cacheName !== TRANSLATION_CACHE_NAME) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
