import { getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import Link from 'umi/link';
import React from 'react';
import { connect } from 'dva';
import logo from '../assets/title.png';
import styles from './UserLayout.less';
import google from '@/assets/Chrome.exe';

const UserLayout = props => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    ...props,
  });
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="logo" src={logo} />
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>

      <a
        style={{ position: 'fixed', right: 100, bottom: 20 }}
        download="谷歌浏览器安装包"
        href={google}
      >
        谷歌浏览器下载
      </a>
    </>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
