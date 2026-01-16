---
name: vercel-react-best-practices
description: React and Next.js performance optimization guidelines from Vercel Engineering.
---

# Vercel React Best Practices

Comprehensive performance optimization guide for React and Next.js applications.

## Quick Reference

### 1. Eliminating Waterfalls (CRITICAL)
- `async-defer-await` - Move await into branches where actually used
- `async-parallel` - Use Promise.all() for independent operations

### 2. Bundle Size Optimization (CRITICAL)
- `bundle-barrel-imports` - Import directly, avoid barrel files
- `bundle-dynamic-imports` - Use next/dynamic for heavy components

### 3. Client-Side Data Fetching (MEDIUM-HIGH)
- `client-swr-dedup` - Use SWR for automatic request deduplication

### 5. Re-render Optimization (MEDIUM)
- `rerender-memo` - Extract expensive work into memoized components
- `rerender-derived-state` - Subscribe to derived booleans, not raw values
- `rerender-functional-setstate` - Use functional setState for stable callbacks
- `rerender-lazy-state-init` - Pass function to useState for expensive values

### 6. Rendering Performance (MEDIUM)
- `rendering-image` - Use proper image loading strategies (lazy)
- `rendering-conditional-render` - Use ternary, not && for conditionals

### 7. JavaScript Performance (LOW-MEDIUM)
- `js-early-exit` - Return early from functions
- `js-cache-function-results` - Cache function results in module-level Map

## Check Project Compliance
- [x] Functional State Updates (Header.jsx)
- [x] Conditional Rendering (App.jsx)
- [x] Lazy Loading Images (Header.jsx)
