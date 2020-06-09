/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import Link from 'umi/link';
import { connect } from 'dva';
import { Result, Button, Modal } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getAuthorityFromRouter } from '@/utils/utils';
// import logo from '../assets/logo.svg';
import logo from '../assets/LOGO.png';

const { confirm } = Modal;
const noMatch = (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);

const defaultFooterDom = (
  <DefaultFooter links={false} copyright="2019 北京东华宏泰科技股份有限公司" />
);
const footerRender = () => defaultFooterDom;
const BasicLayout = props => {
  const {
    dispatch,
    children,
    settings,
    menuData,
    location = {
      pathname: '/',
    },
  } = props;
  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'settings/getSetting',
      });
    }
  }, []);
  /**
   * init variables
   */

  const logout = () => {
    if (dispatch) {
      confirm({
        title: '提示',
        content: '确认退出系统吗？',
        okText: '确定',
        cancelText: '取消',
        onOk() {
          dispatch({
            type: 'login/logout',
          });
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  };
  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };

  return (
    <ProLayout
      logo={logo}
      onCollapse={handleMenuCollapse}
      menuDataRender={() => menuData}
      menuItemRender={(menuItemProps, defaultDom) => {
        // if (menuItemProps.isUrl) {
        if (menuItemProps.isUrl || menuItemProps.children) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: '首页',
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={footerRender}
      rightContentRender={rightProps => <RightContent {...rightProps} logout={logout} />}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ global, user, settings }) => ({
  collapsed: global.collapsed,
  menuData: user.menuData,
  settings,
}))(BasicLayout);
