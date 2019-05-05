import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

let app = dva({
  history: window.g_history,
  ...((require('/Users/apple/Desktop/WHR/WEB/dva/umi-dva-typescript-mock/src/dva.ts').config || (() => ({})))()),
});

window.g_app = app;
app.use(createLoading());

app.model({ ...(require('/Users/apple/Desktop/WHR/WEB/dva/umi-dva-typescript-mock/src/models/app.ts').default) });
app.model({ ...(require('/Users/apple/Desktop/WHR/WEB/dva/umi-dva-typescript-mock/src/pages/page1/models/index.ts').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
