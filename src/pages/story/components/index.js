import { Form, Icon } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import style from './style.less';
import iconFont from '@/utils/iconfont';

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
    const { img, text1, text2 } = this.props;
    return (
      <div className={style.storyItem}>
        <img src={img} alt=""></img>
        <div className={style.itemTitle}>{text1}</div>
        <a>
          {text2}
          <IconFont type="icon-right" />
        </a>
      </div>
    );
  }
}

export default ThirdArticle;
