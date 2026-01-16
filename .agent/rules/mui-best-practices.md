---
trigger: always_on
---

# Material UI (MUI) Best Practices

## Layout & Structure
- **No `<div>`:** Avoid using `<div>` or `<span>`. Use MUI primitives:
  - `<Box>` for generic containers.
  - `<Stack>` for 1D layouts (flex-column/row).
  - `<Grid>` (Grid v2) for 2D layouts.
  - `<Container>` for page width constraints.
- **Responsiveness:** Use the object syntax in `sx` for responsive values.
  - Example: `sx={{ width: { xs: '100%', md: '50%' } }}`.

## Styling & Theming
- **The `sx` Prop:** Use the `sx` prop for one-off styles. Do not use `makeStyles` or `styled-components` for simple layout tweaks.
- **Use Theme Variables:** NEVER hardcode hex colors or pixel values.
  - Bad: `color: '#ff0000'`, `padding: '20px'`
  - Good: `color: 'error.main'`, `p: 2.5` (uses theme spacing)
- **Typography:** Always use the `<Typography>` component with `variant` prop. Do not use `<h1>`, `<p>`, etc., directly.

## Icons
- Use `@mui/icons-material`. Import strictly what you need to avoid bundle bloat.

## Form Components
- Use fully controlled components. Combine with `react-hook-form` using the `Controller` wrapper for best performance.