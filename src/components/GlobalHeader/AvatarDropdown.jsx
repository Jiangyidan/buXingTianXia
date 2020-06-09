import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import HeaderDropdown from '../HeaderDropdown';
import BindAppModal from './BindAppModal';
import PasswordChangeModal from './PasswordChangeModal';
import OpenPwd from './OpenPwd';
import styles from './index.less';
import head from '../../assets/head.png';

@connect(({ user, loading }) => ({
  currentUser: user.currentUser,
  userPwd: user.userPwd,
  passwordChangeConfirmLoading: loading.effects['user/changePassword'],
  openPwdConfirmLoading: loading.effects['user/changeOpenPwd'],
}))
class AvatarDropdown extends React.Component {
  state = { appBindVisible: false, passwordChangeVisible: false };

  onMenuClick = event => {
    const { key } = event;
    if (key === 'openPwd') {
      const { dispatch } = this.props;
      if (dispatch) {
        this.setState({ openPwdVisible: true });
        dispatch({
          type: 'user/getUserCode',
        });
      }
      return;
    }
    if (key === 'password') {
      const { dispatch } = this.props;
      if (dispatch) {
        this.setState({ passwordChangeVisible: true });
      }
      return;
    }
    if (key === 'binding') {
      this.setState({ appBindVisible: true });
      return;
    }
    // if (key === 'logout') {
    //   const { dispatch } = this.props;

    //   if (dispatch) {
    //     dispatch({
    //       type: 'login/logout',
    //     });
    //   }
    //   return;
    // }

    router.push(`/account/${key}`);
  };

  /* 修改密码 */
  handlePasswordChange = values => {
    const { dispatch, currentUser } = this.props;
    const { policeNo } = currentUser;
    dispatch({
      type: 'user/changePassword',
      payload: {
        policeNo,
        ...values,
      },
      callback: () => {
        this.setState({ passwordChangeVisible: false });
      },
    });
  };

  /* 修改枪柜密码 */
  handleOpenPwdChange = values => {
    this.props.dispatch({
      type: 'user/changeOpenPwd',
      payload: values,
      callback: () => {
        this.setState({ openPwdVisible: false });
      },
    });
  };

  handleCancel = () => {
    this.setState({
      appBindVisible: false,
      passwordChangeVisible: false,
      openPwdVisible: false,
    });
  };

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
        roleList: [],
      },
      userPwd,
      passwordChangeConfirmLoading,
      openPwdConfirmLoading,
    } = this.props;
    const { appBindVisible, appBindErrorText, passwordChangeVisible, openPwdVisible } = this.state;
    // const menuHeaderDropdown = (
    //   <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
    //     {/* <Menu.Item key="password"> */}
    //     {/* <Icon type="key" /> */}
    //     {/*   修改密码
    //     </Menu.Item>
    //     <Menu.Item key="binding">
    //       绑定App
    //     </Menu.Item>
    //     {delve(currentUser.roleList[0], 'isUseGun') === 1 && (
    //       <Menu.Item key="openPwd">
    //         设置开柜密码
    //       </Menu.Item>
    //     )} */}
    //     {/* <Menu.Divider />
    //     <Menu.Item key="logout">
    //       <Icon type="logout" />
    //       退出登录
    //     </Menu.Item> */}
    //   </Menu>
    // );
    return currentUser && currentUser.name ? (
      <>
        {/* <HeaderDropdown overlay={menuHeaderDropdown}> */}
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar
            size="small"
            className={styles.avatar}
            src={currentUser.avatar || head}
            alt="avatar"
          />
          <span className={styles.name}>{currentUser.name}</span>
        </span>
        {/* </HeaderDropdown> */}
        <BindAppModal
          visible={appBindVisible}
          policeNo={currentUser.policeNo}
          error={appBindErrorText}
          onCancel={this.handleCancel}
        />
        <PasswordChangeModal
          visible={passwordChangeVisible}
          confirmLoading={passwordChangeConfirmLoading}
          onOk={this.handlePasswordChange}
          onCancel={this.handleCancel}
        />
        <OpenPwd
          visible={openPwdVisible}
          confirmLoading={openPwdConfirmLoading}
          onOk={this.handleOpenPwdChange}
          onCancel={this.handleCancel}
          userPwd={userPwd ? userPwd[0] : null}
        />
      </>
    ) : (
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    );
  }
}

export default AvatarDropdown;
