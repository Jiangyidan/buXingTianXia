import { Carousel } from 'antd';
import React, { Component } from 'react';
import styles from './style.less';
import banner1 from '@/assets/banner1.jpg';
import banner2 from '@/assets/banner2.jpg';

export default class Container extends Component {
  state = {};

  render() {
    return (
      <div id={styles.container}>
        <Carousel effect="fade" autoplay className={styles.carousel}>
          <div className={styles.carouselItem}>
            <img src={banner1} alt="新款"></img>
          </div>
          <div className={styles.carouselItem}>
            <img src={banner2} alt="新款"></img>
          </div>
          <div className={styles.carouselItem}>
            <h3>3</h3>
          </div>
          <div className={styles.carouselItem}>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}
