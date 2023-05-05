import { Form, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import style from './style.less';
import code from './assets/code.jpg';
import iconFont from '@/utils/iconfont';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont,
});
const NAMESPACE = 'foot';
@Form.create()
@connect(({ [NAMESPACE]: foot }) => ({
  foot,
}))
class Foot extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={style.foot}>
        <div className={style.content}>
          <div className={style.left}>
            <div className={style.item}>
              <h5>购物帮助</h5>
              <ul>
                <li>支付相关</li>
                <li>配送</li>
                <li>退货</li>
                <li>发票</li>
                <li>保养与维修</li>
              </ul>
            </div>
            <div className={style.item}>
              <h5>关于公司</h5>
              <ul>
                <li>关于GUCCI</li>
                <li>道德规范</li>
                <li>职业发展</li>
                <li>细则及条款</li>
                <li>企业信息</li>
              </ul>
            </div>
            <div className={style.item}>
              <h5>关于GUCCI</h5>
              <ul>
                <li>微信</li>
                <li>微博</li>
              </ul>
            </div>
            <div className={style.item}>
              <h5>需要帮助</h5>
              <ul>
                <li>常见问题</li>
                <li>联系我们</li>
              </ul>
            </div>
          </div>
          <div className={style.right}>
            <img src={code} alt=""></img>
            <img src={code} alt=""></img>
          </div>
        </div>
        <div className={style.police}>
          <div>©2020 古驰（中国）贸易有限公司 保留所有权利</div>
          <div>
            <IconFont type="icon-guohui" />
            沪公网安备 31010602001727号
          </div>
          <div>
            <IconFont type="icon-guohui" />
            上海工商
          </div>
          <div>沪ICP备13010397号-2</div>
        </div>
      </div>
    );
  }
}

export default Foot;
