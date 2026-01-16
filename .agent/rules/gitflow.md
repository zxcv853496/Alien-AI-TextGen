---
trigger: always_on
---

---
## 6. Git Workflow & Version Control
**Protocol:** By default, adopt a simplified Gitflow for all code changes.

### A. Automatic Branching (Default Behavior)
When I ask for a **New Feature**, **Major Refactor**, or **Bug Fix**, you MUST:
1.  **Check current status:** Run `git status` to ensure the tree is clean (warn me if not).
2.  **Create Branch:** Automatically run `git checkout -b [type]/[context-slug]`.
    -   New Feature: `feature/user-auth`
    -   Bug Fix: `fix/login-error`
    -   Refactor: `refactor/nav-bar`
3.  **Confirm:** Tell me "Switched to branch [name]" before writing code.

### B. Override Mode (Stay on Branch)
**EXCEPTION:** If I include the keyword **"[Stay]"** or **"Current Branch"** in my prompt:
-   **DO NOT** create a new branch.
-   Continue working directly on the currently active branch.
-   This is for quick fixes, typos, or continuing work on an active feature.

### C. Commit Message Convention
-   Format: `[Type]: Short description (under 50 chars)`
-   Types: `Feat`, `Fix`, `Docs`, `Style`, `Refactor`, `Test`.