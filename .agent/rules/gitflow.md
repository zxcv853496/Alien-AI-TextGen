---
name: gitflow-workflow
description: 定義專案的 Gitflow 開發流程，包含分支命名與合併規範。
---

# Gitflow Workflow Rules

本專案採用標準 Gitflow 工作流，請嚴格遵守以下規範：

## 1. Branching Model

### Main Branches

- **`main`**:
  - 永遠保持在與生產環境一致的穩定狀態。
  - 僅接受來自 `develop` 的合併 (Release) 或 `hotfix`。
- **`develop`**:
  - 主要開發分支，包含最新的功能功能。
  - 所有 Feature 分支完成後皆合併回此分支。

### Supporting Branches

- **`feature/*`**:
  - 用於開發新功能。
  - 命名：`feature/login-system`, `feature/user-profile`。
  - 來源：`develop`。
  - 合併回：`develop`。
  - **完成後必須刪除** (本地與遠端)。

- **`fix/*`** / **`bugfix/*`**:
  - 用於修復一般錯誤。
  - 命名：`fix/nav-alignment`, `bugfix/api-timeout`。
  - 來源：`develop`。
  - 合併回：`develop`。

- **`hotfix/*`**:
  - 用於修復生產環境的緊急錯誤。
  - 來源：`main`。
  - 合併回：`main` AND `develop`。

## 2. Commit Convention

- Format: `[Type]: Short description (50 chars)`
- Types: `Feat`, `Fix`, `Docs`, `Style`, `Refactor`, `Test`, `Chore`.

## 3. Workflow Steps (Feature)

1.  **Start**: `git checkout development` -> `git checkout -b feature/new-feature`
2.  **Work**: Commit changes.
3.  **Finish**:
    - Merge into `develop`.
    - Push `develop`.
    - Delete `feature/new-feature` (local & remote).
