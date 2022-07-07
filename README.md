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

### 書本列表(首頁)
| 功能 | 說明 |
|:----:|:----------:|
| 書本列表 | API 取回資料 |
| 搜尋 | 輸入完可按 Enter 或點擊放大鏡按鈕搜尋 |
| 圖片載入 | Skeleton 實作 |

### 新增頁面
| 功能 | 說明 |
|:----:|:----------:|
| 書名 | 必填 |
| 作者 | 必填 |
| 備註 | 限制 300 字元 |
| 字數顯示 | 使用 Throttle 監聽 input 事件計算字數 |
| 取消 button | 確認提示、返回書本列表(首頁) |
| 新增 button | 確認提示、新增成功返回書本列表(首頁) |

* 書名、作者、備註表單使用 VeeValidate v4、yup 驗證

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

* 書名、作者、備註表單使用 VeeValidate v4、yup 驗證


