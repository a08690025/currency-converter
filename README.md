# 即時貨幣轉換器

可直接部署到 GitHub Pages 的靜態網站與 PWA。無須 Node.js、資料庫或後端。

## 網站結構

| 檔案 | 用途 |
| --- | --- |
| `index.html` | 網頁入口與介面結構 |
| `style.css` | 版面與深色外觀 |
| `app.js` | 計算、貨幣選擇、匯率更新與本機設定 |
| `manifest.json` | PWA 安裝資訊 |
| `sw.js` | 離線快取；更新網站內容後請調高 `CACHE_NAME` |
| `icon.jpg` | PWA 圖示 |

匯率會由瀏覽器直接向公開服務取得，依序使用 exchangerate.fun、ExchangeRate-API 與 Frankfurter；不使用 API 金鑰。成功取得的資料會在瀏覽器保留一小時。若網路與 API 都不可用，程式會以內建備用匯率運作，該備援資料僅供參考。

## 發布到 GitHub Pages（推薦）

1. 登入 GitHub，按右上角 **+ → New repository**。
2. Repository name 輸入 `currency-converter`，選 **Public**，然後按 **Create repository**。不要初始化 README，因為本資料夾已有 README。
3. 在新儲存庫畫面按 **uploading an existing file**，把本資料夾內的所有檔案拖入（包含 `.nojekyll`；若 GitHub 網頁沒有顯示隱藏檔，可改用下方 Git 指令）。按 **Commit changes**。
4. 到儲存庫的 **Settings → Pages**。在 **Build and deployment** 將 Source 選 **Deploy from a branch**，Branch 選 `main`、資料夾選 `/(root)`，按 **Save**。
5. 等待約 1–3 分鐘，重新進入 **Settings → Pages**，頁面會顯示網站網址：`https://你的帳號.github.io/currency-converter/`。

之後只要更新並推送 `main` 分支，GitHub Pages 會自動重新發布。網址末尾的 `/currency-converter/` 必須保留，因為這是專案網站的路徑。

## 使用 Git 上傳（較可靠）

在此資料夾開啟 PowerShell，將帳號與儲存庫名稱換成自己的：

```powershell
git init
git add .
git commit -m "Initial GitHub Pages site"
git branch -M main
git remote add origin https://github.com/你的帳號/currency-converter.git
git push -u origin main
```

第一次推送後，依前一節第 4 步開啟 GitHub Pages。

## 更新與驗證

- 本機可直接雙擊 `index.html` 預覽；要驗證 PWA 離線功能，請透過 GitHub Pages 網址或本機 HTTP 伺服器開啟。
- 更新 `index.html`、`style.css` 或 `app.js` 後，請同步把 `sw.js` 的 `CACHE_NAME` 從 `v4` 改為更大的版本，例如 `v5`，避免使用者繼續看到舊快取。
- GitHub Pages 提供 HTTPS，因此 Service Worker 與「加入主畫面」PWA 功能可正常使用。

## 注意事項

- 這是靜態網站，GitHub Pages 不會替網站保存使用者資料；本程式的設定和匯率快取只存在使用者自己的瀏覽器。
- 公開匯率 API 可能更改、限流或暫時無法連線，因此程式已設三個來源及離線備援，但備援匯率不應用於交易或付款決策。
- 請不要把 APK、簽章檔 `.jks` 或 Android `scratch` 建置資料上傳到這個網站儲存庫；它們不是網頁部署所需內容。
