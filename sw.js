// 更新網站檔案時請提高這個版本，讓已安裝的 PWA 取得新版快取。
const CACHE_NAME = 'currency-converter-v10';
const RELEASE_REVISION = '20260919-paste-follow-touch';
const CACHE_NAMES_TO_RESET = ['currency-converter-v10', 'currency-converter-v11'];
const ASSETS = [
  './',
  './index.html',
  `./style.css?rev=${RELEASE_REVISION}`,
  `./app.js?rev=${RELEASE_REVISION}`,
  './manifest.json',
  './icon.jpg'
];

// 安裝 Service Worker 並快取資源
self.addEventListener('install', (e) => {
  e.waitUntil(
    // 插入或覆蓋貼上分流版：保留 v10 名稱，重新建立快取以取得最新 app.js。
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

// 首頁優先從網路更新，其他資源保留快取以支援離線使用。
self.addEventListener('fetch', (e) => {
  // 只攔截同源的 GET 請求，API 等外部請求不強制快取
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match('./'))
    );
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
