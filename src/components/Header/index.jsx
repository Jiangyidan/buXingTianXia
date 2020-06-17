import { Icon } from 'antd';
import React, { Component } from 'react';
import { EnvironmentOutlined, PhoneOutlined, HeartOutlined } from '@ant-design/icons';
import styles from './style.less';
import iconFont from '../../utils/iconfont';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont,
});
export default class Header extends Component {
  state = {
    searchDisplay: 'none',
  };

  clickSearch = e => {
    e.preventDefault();
    this.setState({
      searchDisplay: 'block',
    });
  };

  clickClose = e => {
    e.preventDefault();
    this.setState({
      searchDisplay: 'none',
    });
  };

  render() {
    const { isScroll } = this.props;
    const { searchDisplay } = this.state;
    return (
      <div
        className={`${styles.headerTransparent}  ${styles.headerContainer} ${
          isScroll ? styles.isScroll : null
        }`}
      >
        <div className={styles.headerLogo}>
          <img src="https://res.gucci.cn/images/common/gucci-logo@2x.png" alt="GUCCI"></img>
        </div>
        <div className={styles.headerMenu}>
          <ul className={styles.headerMenuUl}>
            <li className={styles.headerMenuLi}>
              <a>全新资讯</a>
            </li>
            <li>
              <a>女士</a>
            </li>
            <li>
              <a>男士</a>
            </li>
            <li>
              <a>童装</a>
            </li>
            <li>
              <a>礼品</a>
            </li>
            <li>
              <a>珠宝和腕表</a>
            </li>
            <li>
              <a>美妆</a>
            </li>
            <li>
              <a>家饰</a>
            </li>
            <li>
              <a>古驰故事</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.headerLeftNav} ${isScroll ? styles.isScrollLeft : null}`}>
          <ul className={styles.headerMenuUl}>
            <li>
              <EnvironmentOutlined style={{ color: '#e5dfd9', width: 15, height: 15 }} />
              <a className={` ${isScroll ? styles.isScrollLocat : null}`}>浙江绍兴</a>
            </li>
            <li>
              <a className={` ${isScroll ? styles.isScrollLocat : null}`}>客户服务</a>
            </li>
            <li>
              <PhoneOutlined style={{ color: '#e5dfd9', width: 15, height: 15 }} />
              <a>18767184086</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.headerRightNav} ${isScroll ? styles.isScrollRight : null}`}>
          <ul className={styles.headerMenuUl}>
            <li>
              <a className={` ${isScroll ? styles.isScrollLocat : null}`}>登录</a>
            </li>
            <li>
              <HeartOutlined
                style={{ color: '#e5dfd9', width: 15, height: 15, cursor: 'pointer', opacity: 0.5 }}
              />
            </li>
            <li>
              <IconFont type="icon-gouwu" style={{ opacity: 0.5 }} />
              <a className={`${isScroll ? styles.isScrollLocat : null}`}>购物袋</a>
            </li>
          </ul>
          <div className={`${styles.headerSearchIcon} ${isScroll ? styles.isScrollIcon : null} `}>
            <IconFont
              type="icon-sousuo-tianchong"
              className={styles.headerSearchsearch}
              onClick={this.clickSearch}
            />
          </div>
        </div>
        <div className={styles.headerSearch} style={{ display: searchDisplay }}>
          <IconFont type="icon-sousuo" style={{ opacity: 0.5, fontSize: 20, padding: 5 }} />
          <input placeholder="520 GG印记精选"></input>
          <IconFont
            type="icon-sousuoquxiao"
            className={styles.headerSearchClose}
            onClick={this.clickClose}
          />
        </div>
      </div>
    );
  }
}
