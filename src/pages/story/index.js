import { Form } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import style from './style.less';
import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpg';
import pic5 from './assets/pic5.jpg';
import StoryItem from './components';

const NAMESPACE = 'firstArticle';
@Form.create()
@connect(({ [NAMESPACE]: firstArticle }) => ({
  firstArticle,
}))
class ThirdArticle extends PureComponent {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div className={style.story}>
        <div className={style.storyHead}>
          <h2>古驰故事</h2>
          <i></i>
        </div>
        <div className={style.storyContent}>
          <div className={style.contentLeft}>
            <StoryItem
              img={pic1}
              text1="Emma Allegretti通过插画描绘Gucci美妆"
              text2="#GucciCommunity "
            ></StoryItem>
            <StoryItem img={pic2} text1='"异想空间，方寸乾坤"' text2="关于展览"></StoryItem>
          </div>
          <div>
            <StoryItem img={pic5} text1="Gucci 2020早秋系列" text2="早秋型录"></StoryItem>
          </div>
          <div className={style.contentRight}>
            <StoryItem
              img={pic3}
              text1="#GucciCommunity呼吁各方共同抗疫"
              text2="请与我们携手"
            ></StoryItem>
            <StoryItem img={pic4} text1="樋口裕子创造的奇幻世界" text2="童装系列"></StoryItem>
          </div>
        </div>
        <div className={style.more}>
          <a>欣赏更多故事</a>
        </div>
      </div>
    );
  }
}

export default ThirdArticle;
