<p align="center">
  <a href="https://getbootstrap.com">
    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>

  <h3 align="center">Bootstrap RTL</h3>
  <p align="center">
  based on version 4.6.2
  </p>
  <p align="center">
    Sleek, intuitive, and powerful front-end framework for faster and easier web development.
    <br>
    <a href="https://getbootstrap.com"><strong>Explore Bootstrap docs &raquo;</strong></a>
    <br>
  </p>
</p>

<br>

## Install

Install with npm:

`npm i bootstrap-v4-rtl`

## Quick start

Add the `rtl` class (or `dir="rtl"`) to any element and everything inside it turns into an RTL layout. Put it on `<html>` or `<body>` to flip the whole page.

**NOTE:** This package is designed for multilanguage projects to change all page direction just with adding `rtl` class, so all left and right classes is reversed when you are in rtl

### What flips

Inside `.rtl` / `[dir="rtl"]` the layout is an exact mirror of Bootstrap 4.6.2:

- Components: forms and validation icons, custom controls and switches, custom select and file input, input groups and button groups (including `sm`/`lg` corner radii), dropdowns (`dropleft`/`dropright` and their carets), navs and navbars, cards and card groups, breadcrumb, pagination, list groups (also horizontal), alerts, modals, progress stripes and the carousel.
- Grid offsets.
- Utilities: `.mr-*`/`.ml-*`/`.pr-*`/`.pl-*` (including negative and `auto`), `.text-left`/`.text-right`, `.float-left`/`.float-right`, `.border-left`/`.border-right` (and `-0`), `.rounded-left`/`.rounded-right`, `.dropdown-menu-left`/`.dropdown-menu-right`. Responsive variants flip too.

The JavaScript is RTL-aware as well. It checks the computed `direction` of the component, so both `.rtl` and `dir="rtl"` work:

- Dropdowns: Popper placements are mirrored, so `.dropdown-menu-right` aligns to the left edge and `.dropright` opens to the left.
- Tooltips and popovers: `placement: 'left'`/`'right'` flip. The arrow classes (`.bs-tooltip-*`) stay physical, because they describe where the tip actually is.
- Carousel: the arrow keys and swipe directions follow the slide direction.

### Limitations

- Tooltips and popovers are appended to `<body>` by default. Put `.rtl` on `<html>`/`<body>`, or set the `container` option to an element inside `.rtl`, so they get RTL text.
- An LTR island (`dir="ltr"`) inside an `.rtl` element is still styled as RTL.
- A directional utility zeroes the opposite side in RTL. For example `.pl-0` on `.nav-link` removes its natural padding on both sides.
- `.border-left-0`/`.border-right-0` restore the other side with the default border color (or the component's own, for `.form-control`, `.custom-select`, `.input-group-text` and `.card`). Focus and validation colors don't apply to that side.

## Demo

Open `index.html` for the interactive demo: every component is plain Bootstrap 4 markup with live LTR/RTL and English/Persian switches, side-by-side direction comparison, and a copyable source view per component. Its assets live in `demo/demo.css` and `demo/demo.js`.

You can link to a specific view with query parameters, e.g. `index.html?dir=rtl&lang=fa`.

The previous Persian-only page is still available as `index-fa.html`.

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap-rtl.css
│   ├── bootstrap-rtl.css.map
│   ├── bootstrap-rtl.min.css
│   └── bootstrap-rtl.min.css.map
└── js/
    ├── bootstrap.js
    └── bootstrap.min.js
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools.

## Contributors

Mahdi Majidzadeh [twitter](https://twitter.com/mahdimajidzadeh) - [github](https://github.com/mahdimajidzadeh)

Dmitry Polyanovsky [github](https://github.com/danikp)

Morteza Karimi [github](https://github.com/mortezakarimi)
