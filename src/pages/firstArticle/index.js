import { Form, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './style.less';
import product from './assets/bag1.jpg';
import bag2 from './assets/bag2.jpg';
import iconFont from '../../utils/iconfont';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont,
});
const NAMESPACE = 'firstArticle';
@Form.create()
@connect(({ [NAMESPACE]: firstArticle }) => ({
  firstArticle,
}))
class FirstArticle extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    // const {} = this.state;

    return (
      <div className={styles.firstArticle}>
        <div className={styles.productImageWrapper}>
          <img src={product} alt=""></img>
        </div>
        <div className={styles.productPushContent}>
          <p>手袋</p>
          <h2>Gucci 1955马衔扣肩背包</h2>
          <div>
            <IconFont type="icon-Gucci" />
          </div>
          <a>点击购买</a>
        </div>
        <div className={styles.productVignette}>
          <img src={bag2} alt=""></img>
          <p className={styles.title}>手袋</p>
          <p className={styles.desc}>GG图案为Gucci 1955马衔扣系列注入生动鲜活的魅力</p>
          <a className={styles.more}>
            更多 <IconFont type="icon-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default FirstArticle;
