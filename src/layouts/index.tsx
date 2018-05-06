import React from 'react'
import router from 'umi/router';
import { Flex, WhiteSpace, WingBlank, Tabs } from 'antd-mobile';
import styles from './index.less';
import { connect } from 'dva';

const routerToPath = ({ path }: any): void => {
  router.push(path);
}

@connect(({ app }) => ({ app }))
class Layouts extends React.Component<any> {
  render(){
    const { children, app } = this.props;
    const { menu, hasError } = app;
    return (
      <div className={styles.root}>
        <WingBlank size="lg">
          <WhiteSpace size="lg" />
          <Tabs
            tabs={menu}
            initialPage={'index'}
            animated={false}
            useOnPan={false}
            onChange={routerToPath}
          />
          <WhiteSpace size="lg" />
          <Flex>
            {hasError ? '404组件': children}
          </Flex>
          <WhiteSpace size="lg" />
          <Flex>
            <Flex.Item>
              底部
          </Flex.Item>
          </Flex>
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    )
  }
};

export default Layouts
