import { Form } from 'antd';
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';
import Header from '@/components/Header';

const NAMESPACE = 'equipment-manag/cabinet-manag';
@Form.create()
@connect(({ loading, [NAMESPACE]: cabinetmanag }) => ({
  cabinetmanag,
  loading: loading.effects[`${NAMESPACE}/cabinetManagList`],
  cabinetUserloading: loading.effects[`${NAMESPACE}/cabinetUser`],
}))
class CabinetManag extends PureComponent {
  state = {};

  componentDidMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: `${NAMESPACE}/cabinetManagList`,
    //   payload: {
    //     pageNum: 1,
    //     pageSize: 10,
    //   },
    // });
    // dispatch({
    //   type: `${NAMESPACE}/queryALLOrgan`,
    //   callback: res => {
    //     this.setState({
    //       treeValue: res[0].id,
    //     });
    //   },
    // });
  }

  render() {
    const {} = this.state;

    return <Header></Header>;
  }
}

export default CabinetManag;
