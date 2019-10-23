webpackJsonp([104],{74:function(n,e){n.exports="## Pagination\n\nPagination.\n\n## Usage\n\n```html\n<m-pagination total=\"125\" current-page=\"1\" page-size=\"5\" id=\"myPagination\">\n</m-pagination>\n\n<script>\n  var pagination = document.querySelector('#myPagination')\n  pagination.addEventListener('change', function (evt) {\n    console.log(evt.detail)\n  })\n<\/script>\n```\n\n## Usage in Omi\n\n```jsx\n<m-pagination\n  total={125}\n  currentPage={1}\n  pageSize={5}\n  onChange={this.onChange}\n/>\n```\n\n## API\n\n### Props\n\n```jsx\n{\n\ttotal: number,\n\tpageSize: number,\n\tnumDisplay: number,\n\tcurrentPage: number,\n\tnumEdge: number,\n\tlinkTo: string,\n\tprevText: string,\n\tnextText: string,\n\tellipseText: string,\n\tprevShow: boolean,\n\tnextShow: boolean\n}\n```\n\n### Default Props\n\n```jsx\n{\n  total: 0,\n  pageSize: 10,\n  numDisplay: 5,\n  currentPage: 0,\n  numEdge: 3,\n  linkTo: '#',\n  prevText: 'Prev',\n  nextText: 'Next',\n  ellipseText: '...',\n  prevShow: true,\n  nextShow: true\n}\n```\n"}});
//# sourceMappingURL=104.5ba93f9c.chunk.js.map