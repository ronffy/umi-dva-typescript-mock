import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.tsx').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('../404.tsx').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.tsx').default
      },
      {
        "path": "/page1",
        "exact": true,
        "component": require('../page1/index.tsx').default
      },
      {
        "component": () => React.createElement(require('/Users/apple/Desktop/WHR/WEB/dva/umi-dva-typescript-mock/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', routes: '[{"path":"/","component":"./src/layouts/index.tsx","routes":[{"path":"/404","exact":true,"component":"./src/pages/404.tsx"},{"path":"/","exact":true,"component":"./src/pages/index.tsx"},{"path":"/page1","exact":true,"component":"./src/pages/page1/index.tsx"},{"path":"/page1/models","exact":true,"component":"./src/pages/page1/models/index.ts"},{"path":"/page1/services","exact":true,"component":"./src/pages/page1/services/index.js"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
