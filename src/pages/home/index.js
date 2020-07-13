import { Form } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import styles from './style.less';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Foot from '@/components/Foot';
import FirstArticle from '../firstArticle';
import SecondArticle from '../secondArticle';
import ThirdArticle from '../thirdArticle';
import Story from '../story';

const NAMESPACE = 'home';
// let background = '';
@Form.create()
@connect(({ [NAMESPACE]: home }) => ({
  home,
}))
class Home extends PureComponent {
  state = {
    isScroll: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.debounce(this.onScroll.bind(this), 100));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      this.setState({
        isScroll: true,
      });
    } else {
      this.setState({
        isScroll: false,
      });
    }
  };

  debounce = (...args) => {
    let t;
    return function() {
      const context = this;
      // const args = arguments;
      if (t) clearTimeout(t);
      t = setTimeout(() => {
        args[0].apply(context, args);
      }, args[1]);
    };
  };

  render() {
    const { isScroll } = this.state;

    return (
      <div id="page">
        <Header isScroll={isScroll}></Header>
        <Container></Container>
        <div id={styles.content}>
          <FirstArticle></FirstArticle>
          <SecondArticle></SecondArticle>
          <ThirdArticle></ThirdArticle>
          <Story></Story>
        </div>
        <h3>123</h3>
        <Foot></Foot>
      </div>
    );
  }
}

export default Home;
