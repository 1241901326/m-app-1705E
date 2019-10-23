webpackJsonp([112],{66:function(l,d){l.exports='## Layout Grid\n\nMaterial design\u2019s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.\n\n## Usage \n\n```js\nimport * as css from \'omim/layout-grid\'\n```\n\nThen using class in HTML:\n\n```html\n<div>\n    <h3 class="mdc-typography--subtitle1">Columns</h3>\n    <div class="mdc-layout-grid demo-grid">\n        <div class="mdc-layout-grid__inner">\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-3 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-1 demo-cell"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8 demo-cell"></div>\n        </div>\n    </div>\n    <h3 class="mdc-typography--subtitle1">Grid Left Alignment</h3>\n    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>\n    <div class="mdc-layout-grid mdc-layout-grid--align-left demo-grid demo-grid--alignment">\n        <div class="mdc-layout-grid__inner">\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n        </div>\n    </div>\n    <h3 class="mdc-typography--subtitle1">Right Alignment</h3>\n    <p class="mdc-typography--body2">This requires a max-width on the top-level grid element.</p>\n    <div class="mdc-layout-grid mdc-layout-grid--align-right demo-grid demo-grid--alignment">\n        <div class="mdc-layout-grid__inner">\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n            <div class="mdc-layout-grid__cell demo-cell"></div>\n        </div>\n    </div>\n    <h3 class="mdc-typography--subtitle1">Cell Alignment</h3>\n    <p class="mdc-typography--body2">Cell alignment requires a cell height smaller than the inner height of the\n        grid.</p>\n    <div class="mdc-layout-grid demo-grid demo-grid--cell-alignment">\n        <div class="mdc-layout-grid__inner demo-inner">\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-top demo-cell demo-cell--alignment"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-middle demo-cell demo-cell--alignment"></div>\n            <div class="mdc-layout-grid__cell mdc-layout-grid__cell--align-bottom demo-cell demo-cell--alignment"></div>\n        </div>\n    </div>\n</div>\n```'}});
//# sourceMappingURL=112.1f2ffdaa.chunk.js.map