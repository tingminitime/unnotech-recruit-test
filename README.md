# unnotech-recruit-test

(Unnotech 徵才小專案)[https://tingminitime.github.io/unnotech-recruit-test/]

## IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

- **VSCode**
- **Volar**
- **ESLint**

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

---

## Framework
- **Vitawind :** v2.0.0
- **Vite :** v2.7.2
- **Vue3 :** v3.2.25
- **Tailwind CSS :** v3.x
- **Nodejs :** v16.13.1

## Features
### Header
| 功能 | 說明 |
|:----:|:----------:|
| Header文字顯示 | 依照不同頁面呈現不同文字 |
| 返回 button | Show : 詳細、新增、修改頁面 |
| 新增 button | Show : 書本列表(首頁) |
| 編輯 button | Show : 書本詳情 |

<br>

### 書本列表(首頁)
| 功能 | 說明 |
|:----:|:----------:|
| 書本列表 | API 取回資料 |
| 搜尋 | 輸入完可按 Enter 或點擊放大鏡按鈕搜尋 |
| 圖片載入 | Skeleton 實作 |
| 查看更多 | 進入書本詳情頁面 |
| 多選刪除功能 | 對 Book Card 長按 1 秒可進入多選模式 |

* 多選模式待優化 : 進入多選模式要對查看更多、圖片點選導頁 disabled，電腦版頁面改勾選方式多選。
<br>

### 書本詳情
| 功能 | 說明 |
|:----:|:----------:|
| 書本資料 | API 取回資料 |
| 複製書名 button | API 取回資料 |
| 複製作者 button | 輸入完可按 Enter 或點擊放大鏡按鈕搜尋 |
| 刪除此書 button | 確認提示、刪除成功返回書本列表(首頁) |

### 新增頁面
| 功能 | 說明 |
|:----:|:----------:|
| 書名 | 必填 |
| 作者 | 必填 |
| 備註 | 限制 300 字元 |
| 字數顯示 | 使用 Throttle 監聽 input 事件計算字數 |
| 取消 button | 確認提示、返回書本列表(首頁) |
| 新增 button | 確認提示、新增成功返回書本列表(首頁) |

* 書名、作者、備註表單使用 VeeValidate v4、yup 驗證。
<br>

### 修改頁面
| 功能 | 說明 |
|:----:|:----------:|
| 書本詳情資料 | API 取回資料 |
| 書名 | 必填 |
| 作者 | 必填 |
| 備註 | 限制 300 字元 |
| 字數顯示 | 使用 Throttle 監聽 input 事件計算字數 |
| 取消 button | 確認提示、返回書本列表(首頁) |
| 修改 button | 確認提示、修改成功返回書本詳情 |

* 書名、作者、備註表單使用 VeeValidate v4、yup 驗證。
<br>

## Third-Party Libraries
### dependencies
- vue-router :
  SPA模擬路由。

- vee-validate : 
  登入、註冊、資料更改等表單驗證。

- yup : 
  搭配 vee-validate 表單填寫規則驗證。

- axios : 
  Promise based HTTP 請求套件，用於 API 串接。

- headlessui : 
  搭配 Tailwind CSS、Vue、React 且符合基本 a11y 無障礙規範的 UI 元件庫。

- notiwind :
  基於 Vue3、Tailwind CSS 的提示套件。

- lodash :
  JavaScript 工具庫，此專案主要使用其 throttle 功能。

- tippy :
  提示工具，主要使用實作複製功能。

### devDependencies
- @tailwindcss/aspect-ratio :
  Tailwind 圖片比例語法

- @tailwindcss/line-clamp :
  Tailwind 限制文字行數語法

- eslint :
  設定 Vue 撰寫規範及 Tailwind 排序規範

<br>

## 開發困境
### Header 元件該不該在每個頁面 import 使用
原本想法是在每個頁面 import Header 元件用 props 管理狀態，但考量到 wireframe 每個頁面都有 Header，最後決定放在 LandingPage.vue 上，在用 Pinia 做共用狀態管理，但來來回回思考也花了一段時間，若 Header 往後按鈕或功能變多可能這個方法也不是最佳解。

### 多選刪除功能
第一次做多選功能，爬文大概了解可以使用 directives 實作，但在處理滑鼠點擊與觸控點擊花了一段時間，主要是長按進入多選模式後要改為短按選擇目標實作較複雜，最後將 function 功能拆的單純一些，也比較好釐清邏輯達成目標。

### 表單驗證
由於對 vee-validate 及 yup 搭配 composition API 還不是很熟悉，在實作的時候花了點時間爬文件及參考他人的 code。

<br>

## 可新增、優化功能
### 多選刪除功能
優化行動裝置、電腦裝置對應不同功能，進入多選模式對查看更多、圖片點選導頁 disabled。

### 文字 Skeleton
文字同樣加入 Skeleton 實作。

### Dark Mode
使用 Tailwind 實作 Dark Mode

<br>

## 結語
感謝 Unnotech 提供給我練功的機會，期望有機會能參與面試 !

<br>
