---
trigger: always_on
---

## UI & Styling (Tailwind CSS)

- **Styling Engine:** Tailwind CSS (Utility-first).
- **Core Principles:**
  - **Mobile-First:** Write styles for mobile by default (no prefix). Use `md:`, `lg:` only for larger screens overrides.
    - ❌ Bad: `hidden md:block` (hiding on mobile usually means you started wrong)
    - ✅ Good: `hidden md:block` (actually this is fine, but prefers: `flex flex-col md:flex-row`)
  - **No Arbitrary Values:** STRICTLY AVOID square bracket notation (e.g., `w-[123px]`, `bg-[#ff0000]`) unless absolutely necessary. Use standard utility classes (e.g., `w-32`, `bg-red-500`) or theme variables.

- **Class Management:**
  - **The `cn` Utility:** MUST use `clsx` + `tailwind-merge` (usually named `cn()`) for ALL conditional classes and component props.
    - ❌ Bad: ``className={`btn ${isActive ? 'active' : ''} ${className}`}``
    - ✅ Good: `className={cn("btn-base", isActive && "bg-blue-500", className)}`
  - **Ordering:** Follow a logical order: Layout (flex/grid) -> Box Model (spacing/size) -> Visuals (color/shadow) -> Interactive.

- **Component Integration:**
  - **Shadcn/UI Compatibility:** If using Shadcn/UI, ALWAYS prefer semantic colors over raw colors.
    - ❌ Bad: `text-gray-500`
    - ✅ Good: `text-muted-foreground`
  - **No `@apply`:** Avoid using `@apply` in CSS files. Keep styles in the JSX/TSX to maintain locality of behavior.
