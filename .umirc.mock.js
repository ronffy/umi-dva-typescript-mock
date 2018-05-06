const Mock = require('mockjs');

const app = {
  [`/api/menu`]: [
    {
      path: '/',
      title: '首页',
      id: 1,
    },
    {
      path: '/page1',
      title: '页面1',
      id: 2,
    },
  ],
};

const page1 = {
  [`/api/page1`]: Mock.mock({
    'list|11': [
      {
        'id|+1': 1,
        name: '@CNAME',
      }
    ]
  }),
};

module.exports = {
  ...app,
  ...page1,
}