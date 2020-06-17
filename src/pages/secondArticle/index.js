import { Form, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../firstArticle/style.less';
import style from './style.less';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import iconFont from '../../utils/iconfont';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont,
});
const NAMESPACE = 'firstArticle';
@Form.create()
@connect(({ [NAMESPACE]: firstArticle }) => ({
  firstArticle,
}))
class SecondArticle extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    // const {} = this.state;

    return (
      <div className={style.secondArticle}>
        <div className={styles.productImageWrapper}>
          <img src={pic1} alt=""></img>
        </div>
        <div className={`${styles.productPushContent} ${style.productPushContent}`}>
          <p>女士服饰</p>
          <h2>Look No.38</h2>
          <div>
            <IconFont type="icon-Gucci" />
          </div>
          <a>点击购买</a>
        </div>
        <div className={styles.productVignette}>
          <img src={pic2} alt=""></img>
          <p className={styles.title}>上衣&衬衫</p>
          <p className={styles.desc}> 手工钩织细节塑就柔和质感和惊艳的对比效果</p>
          <a className={styles.more}>
            更多 <IconFont type="icon-right" />
          </a>
        </div>
        <div className={`${styles.productVignette} ${style.productVignette}`}>
          <img src={pic3} alt=""></img>
          <p className={styles.title}>牛仔装</p>
          <p className={styles.desc}> 最新系列通过多种不同造型和处理方式赋予这款风靡面料全新活力</p>
          <a className={styles.more}>
            更多 <IconFont type="icon-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default SecondArticle;
