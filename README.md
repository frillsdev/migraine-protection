# 🧠 Migraine Overlay

A tiny zero-dependency script that adds a dark transparent overlay to any webpage — helpful for reducing harsh brightness or flicker triggers.

## Why?

This script was created to help people with migraines or light sensitivity comfortably browse pages that have harsh colours or flickering content. It’s intentionally small, portable, and non-opinionated.

---

## Features

- Add a full-page dark overlay with one line of code
- Customisable `opacity`, `z-index`, and toggle key via attributes
- Toggle on/off with `Shift + M` (default)
- Auto-disabled when printing
- No dependencies, <1KB minified

---

## Usage

Include the script via [jsDelivr](https://www.jsdelivr.com/):

```html
<script
  src="https://cdn.jsdelivr.net/gh/yourname/migraine-overlay/index.js"
></script>
```

To customise behaviour, use any combination of the following attributes:

| Attribute      | Type    | Default | Description                               |
| -------------- | ------- | ------- | ----------------------------------------- |
| `data-opacity` | number  | `0.5`   | Opacity of the overlay (`0.0`–`1.0`)      |
| `data-z`       | number  | `999`   | Z-index of the overlay                    |
| `data-toggle`  | string  | `"m"`   | Keyboard key used to toggle the overlay   |
| `data-shift`   | boolean | `true`  | Whether holding the Shift key is required |

## Example
```html
<script
  src="https://cdn.jsdelivr.net/gh/yourname/migraine-overlay/index.js"
  data-opacity="0.4"
  data-z="900"
  data-toggle="x"
  data-shift="false"
></script>
```

## Keyboard Controls

| Action         | Shortcut (default) |
| -------------- | ------------------ |
| Toggle overlay | `Shift + M`        |


If `data-toggle="x"` and `data-shift="false"` is used, pressing just x will toggle the overlay.

## Print Behaviour
The overlay is automatically hidden when printing using a @media print CSS rule.

## Accessibility

- The overlay uses `pointer-events: none`, so it does not interfere with mouse or keyboard navigation.
- No ARIA roles or interactive content are introduced.
- Visibility can be toggled manually for user comfort.
- The script is intentionally non-intrusive and does not trap focus or alter semantics.

## License
MIT — free to use, modify, and share. Be kind.

# Related Projects (non-affiliated)

- [Dark Reader](https://darkreader.org) — Full dark mode browser extension
- [Stylus](https://add0n.com/stylus.html) — Custom CSS manager


---

😎 made by [@frillsdev](https://github.com/yourusername) with care and sunglasses
