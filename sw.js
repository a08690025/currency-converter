// 更新網站檔案時請提高這個版本，讓已安裝的 PWA 取得新版快取。
const CACHE_NAME = 'currency-converter-v10';
const CACHE_NAMES_TO_RESET = ['currency-converter-v10', 'currency-converter-v11'];
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icon.jpg'
];

// 安裝 Service Worker 並快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    // 原生貼上強制覆蓋測試版：保留 v10 名稱，重新建立快取以取得最新 app.js。
    Promise.all(CACHE_NAMES_TO_RESET.map((name) => caches.delete(name)))
      .then(() => caches.open(CACHE_NAME))
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// 啟用 Service Worker 並清理舊快取
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 攔截網路請求，優先回傳快取內容（離線存取）
self.addEventListener('fetch', (e) => {
  // 只攔截同源的 GET 請求，API 等外部請求不強制快取
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(e.request);
    })
  );
});
