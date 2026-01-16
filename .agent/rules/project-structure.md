---
name: project-structure-react
description: React 專案目錄結構規範，定義 pages, components, layouts 等職責劃分。
---

# React Project Structure Guidelines

本專案採用功能模組化結構，請嚴格遵守以下目錄職責劃分：

## Directory Structure

### `src/pages/`

- **職責**：存放路由頁面 (Route Views)。
- **內容**：每個檔案代表一個完整頁面或路由節點。
- **範例**：`LandingPage.jsx`, `Dashboard.jsx`, `LoginPage.jsx`。
- **規則**：頁面組件負責組合 `components`，不應包含過多底層 UI 邏輯。

### `src/components/`

- **職責**：存放可重用組件。
- **子目錄**：
  - `ui/`: 存放 shadcn/ui 或基礎原子組件 (Button, Input, Card)。
  - `layout/`: 存放佈局相關組件 (Header, Footer, Sidebar)。
  - `features/`: (可選) 存放特定功能模組的組件 (及該功能專屬的邏輯)。
- **規則**：組件應盡量保持 Pure，透過 Props 接收資料。

### `src/lib/`

- **職責**：存放工具函式與設定。
- **內容**：`utils.js` (cn 函式), API 客戶端, 幫助函式。

### `src/hooks/`

- **職責**：存放自定義 React Hooks。

## Naming Convention

- **Components**: PascalCase (e.g., `Button.jsx`, `LandingPage.jsx`)
- **Utilities/Hooks**: camelCase (e.g., `useAuth.js`, `formatDate.js`)
