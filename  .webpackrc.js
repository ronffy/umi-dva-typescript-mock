const alias = require('./alias.configs');

export default {
  "theme": {
    "@primary-color": "#1DA57A",
  },
  browserslist: [
    "> 1%",
    "last 2 versions"
  ],
  alias,
  // "proxy": {
  //   "/api": {
  //     "target": "http://jsonplaceholder.typicode.com/",
  //     "changeOrigin": true,
  //     "pathRewrite": { "^/api": "" }
  //   }
  // },
}