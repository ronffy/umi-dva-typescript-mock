import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


const routes = [
  {
    "component": require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/src/layouts/index.tsx').default,
    "routes": [
      {
        "path": "/index.html",
        "exact": true,
        "component": () => React.createElement(require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/node_modules/_umi-build-dev@0.17.2@umi-build-dev/lib/Compiling.js').default, { route: '/index.html' })
      },
      {
        "path": "/",
        "exact": true,
        "component": () => React.createElement(require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/node_modules/_umi-build-dev@0.17.2@umi-build-dev/lib/Compiling.js').default, { route: '/' })
      },
      {
        "path": "/404",
        "exact": true,
        "component": () => React.createElement(require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/node_modules/_umi-build-dev@0.17.2@umi-build-dev/lib/Compiling.js').default, { route: '/404' })
      },
      {
        "path": "/page1/",
        "exact": true,
        "component": require('../page1/index.tsx').default
      },
      {
        "path": "/page1/models/page1",
        "exact": true,
        "component": () => React.createElement(require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/node_modules/_umi-build-dev@0.17.2@umi-build-dev/lib/Compiling.js').default, { route: '/page1/models/page1' })
      },
      {
        "path": "/page1/services/page1",
        "exact": true,
        "component": () => React.createElement(require('/Users/apple/Desktop/whr/web/umi/umi-dva-typescript-mock/node_modules/_umi-build-dev@0.17.2@umi-build-dev/lib/Compiling.js').default, { route: '/page1/services/page1' })
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
