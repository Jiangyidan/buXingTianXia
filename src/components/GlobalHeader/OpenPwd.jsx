import React, { Component } from 'react';
import { Modal, Form, Input, Row, Col, Button } from 'antd';

const FormItem = Form.Item;

class OpenPwd extends Component {
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onOk(values);
      }
    });
  };

  render() {
    const { visible, onCancel, confirmLoading, userPwd } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Modal
        width={750}
        title="开柜密码"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={this.handleFormSubmit}
        onCancel={onCancel}
        destroyOnClose
        maskClosable={false}
        footer={[
          <Button key="back" onClick={onCancel}>
            关闭
          </Button>,
          <Button key="sure" onClick={this.handleFormSubmit}>
            确认
          </Button>,
        ]}
      >
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码1">
                {getFieldDecorator('openCode1', {
                  initialValue: userPwd ? userPwd.openCode1 : '',
                })(<Input.Password placeholder="开柜密码1" maxLength={10} />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码6">
                {getFieldDecorator('openCode6', {
                  initialValue: userPwd ? userPwd.openCode6 : '',
                })(<Input.Password placeholder="开柜密码6" maxLength={10} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码2">
                {getFieldDecorator('openCode2', {
                  initialValue: userPwd ? userPwd.openCode2 : '',
                })(<Input.Password placeholder="开柜密码2" maxLength={10} />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码7">
                {getFieldDecorator('openCode7', {
                  initialValue: userPwd ? userPwd.openCode7 : '',
                })(<Input.Password placeholder="开柜密码7" maxLength={10} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码3">
                {getFieldDecorator('openCode3', {
                  initialValue: userPwd ? userPwd.openCode3 : '',
                })(<Input.Password placeholder="开柜密码3" maxLength={10} />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码8">
                {getFieldDecorator('openCode8', {
                  initialValue: userPwd ? userPwd.openCode8 : '',
                })(<Input.Password placeholder="开柜密码8" maxLength={10} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码4">
                {getFieldDecorator('openCode4', {
                  initialValue: userPwd ? userPwd.openCode4 : '',
                })(<Input.Password placeholder="开柜密码4" maxLength={10} />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码9">
                {getFieldDecorator('openCode9', {
                  initialValue: userPwd ? userPwd.openCode9 : '',
                })(<Input.Password placeholder="开柜密码9" maxLength={10} />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码5">
                {getFieldDecorator('openCode5', {
                  initialValue: userPwd ? userPwd.openCode5 : '',
                })(<Input.Password span={12} placeholder="开柜密码5" maxLength={10} />)}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem {...formItemLayout} label="开柜密码10">
                {getFieldDecorator('openCode10', {
                  initialValue: userPwd ? userPwd.openCode10 : '',
                })(<Input.Password placeholder="开柜密码10" maxLength={10} />)}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(OpenPwd);
