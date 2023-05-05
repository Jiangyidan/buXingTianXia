import { Form, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from '../firstArticle/style.less';
import style from './style.less';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import iconFont from '../../utils/iconfont';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont,
});
const NAMESPACE = 'firstArticle';
@Form.create()
@connect(({ [NAMESPACE]: firstArticle }) => ({
  firstArticle,
}))
class ThirdArticle extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    // const {} = this.state;

    return (
      <div className={style.thirdArticle}>
        <div className={styles.productImageWrapper}>
          <img src={pic1} alt=""></img>
        </div>
        <div className={`${styles.productPushContent} ${style.productPushContent}`}>
          <p>男士箱包</p>
          <h2>Ophidia系列GG迷你手袋</h2>
          <div>
            <IconFont type="icon-Gucci" />
          </div>
          <a>点击购买</a>
        </div>
        <div className={styles.productVignette}>
          <img src={pic2} alt=""></img>
          <p className={styles.title}>男士箱包</p>
          <p className={styles.desc}> 经典GG和织带元素融合成品牌的标志性象征</p>
          <a className={styles.more}>
            更多 <IconFont type="icon-right" />
          </a>
        </div>
      </div>
    );
  }
}

export default ThirdArticle;
