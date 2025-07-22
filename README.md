# Migraine Protection

A tiny zero-dependency script that adds a dark transparent overlay to any webpage - helpful for reducing harsh brightness or flicker triggers.

---

## Why?

This script was created to help people with migraines or light sensitivity comfortably browse pages that have harsh colours or flickering content. It’s intentionally small, portable, and non-opinionated.

---

## Features

- Add a full-page overlay with one line of code  
- Customisable `colour`, `opacity`, `z-index`, toggle key, and modifier keys  
- Colour and opacity are handled independently  
- Toggle on/off with **Alt + M** by default  
- Auto-disabled when printing  
- No dependencies, 1.29KB minified  

---

## Usage

Include the script via [jsDelivr](https://www.jsdelivr.com/):

```html
<script src="https://cdn.jsdelivr.net/gh/frillsdev/migraine-protection@v1.0.1/index.min.js"></script>
```

To customise behaviour, use any combination of the following attributes:

| Attribute         | Type    | Default   | Description                                                                 |
|------------------|---------|-----------|-----------------------------------------------------------------------------|
| `data-colour`     | string  | `#000`    | CSS background colour (e.g. `#000`, `red`, `hsl(0 0% 90%)`)                 |
| `data-opacity`    | number  | `0.5`     | Element opacity (`0.0`–`1.0`) — affects transparency of the whole overlay  |
| `data-z`          | number  | `999`     | Z-index of the overlay                                                      |
| `data-toggle`     | string  | `"m"`     | Keyboard key used to toggle the overlay                                     |
| `data-modifier`   | string  | `"alt"`   | Space-separated list of modifiers: `shift`, `ctrl`, `alt`, `meta`           |


---

## Example

This will toggle the overlay with Ctrl + Shift + X, using a soft yellow background at 40% opacity:
```html
<script
    src="https://cdn.jsdelivr.net/gh/frillsdev/migraine-protection@v1.0.1/index.min.js"
    data-colour="hsl(50 100% 85%)"
    data-opacity="0.4"
    data-z="900"
    data-toggle="x"
    data-modifier="ctrl shift"
></script>

```

---

## Keyboard Controls

| Action         | Shortcut (default) |
|----------------|--------------------|
| Toggle overlay | `Alt + M`          |

Change this using `data-toggle` and `data-modifier`.

---

## Print Behaviour

The overlay is automatically hidden when printing using a `@media print` CSS rule.

---

## Accessibility

- The overlay uses `pointer-events: none`, so it does not interfere with mouse or keyboard navigation  
- No ARIA roles or interactive content are introduced  
- Visibility can be toggled manually for user comfort  
- The script is intentionally non-intrusive and does not trap focus or alter semantics  

---

## Related Projects (non-affiliated)

- [Dark Reader](https://darkreader.org) - Full dark mode browser extension  
- [Stylus](https://add0n.com/stylus.html) - Custom CSS manager  

---

Vibe-coded by [@frillsdev](https://github.com/frillsdev) with ChatGPT and sunglasses 😎
