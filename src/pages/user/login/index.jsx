import { Row, Col } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import LoginComponents from './components/Login';
import badge from '../../../assets/badge.png';
import styles from './style.less';

const { UserName, Password, Submit } = LoginComponents;

@connect(({ login, user, loading }) => ({
  login,
  user,
  submitting: loading.effects['login/login'],
  loadingVersion: loading.effects['login/fetchVersion'],
}))
class Login extends Component {
  loginForm = undefined;

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'login/fetchVersion',
    // });
  }

  handleSubmit = (err, values) => {
    if (!err) {
      const { dispatch } = this.props;
      dispatch({
        type: 'login/login',
        payload: { ...values },
        callback: () => {
          // dispatch({
          //   type: 'user/fetchCurrent',
          // });
        },
      });
    }
  };

  render() {
    const { submitting } = this.props;
    return (
      <div className={styles.main}>
        <Row className={styles.content} type="flex" justify="space-around" align="middle">
          <Col className={styles.badge} md={6} sm={6} xs={24}>
            <img alt="badge" src={badge} />
          </Col>
          <Col md={10} sm={10} xs={24}>
            <LoginComponents
              onSubmit={this.handleSubmit}
              onCreate={form => {
                this.loginForm = form;
              }}
            >
              <UserName
                name="userName"
                placeholder="用户名"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <Password
                name="password"
                placeholder="密码"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
                onPressEnter={e => {
                  e.preventDefault();

                  if (this.loginForm) {
                    this.loginForm.validateFields(this.handleSubmit);
                  }
                }}
              />
              <Submit loading={submitting}>登录</Submit>
            </LoginComponents>
            <div className={styles.version}></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
