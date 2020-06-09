import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class PasswordChangeModal extends Component {
  state = { confirmDirty: false };

  handleSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    const { confirmDirty } = this.state;
    this.setState({ confirmDirty: confirmDirty || !!value });
  };

  checkConfirm = (rule, value, callback) => {
    const { form } = this.props;
    if (!value) {
      callback('请确认密码！');
    }
    if (value !== form.getFieldValue('newPassword')) {
      callback('两次输入的密码不匹配！');
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      callback('请输入密码！');
    } else if (value.length < 6) {
      callback('密码长度太短！');
    } else {
      const { form } = this.props;
      const { confirmDirty } = this.state;
      if (value && confirmDirty) {
        form.validateFields(['againNewPassword'], { force: true });
      }
      callback();
    }
  };

  render() {
    const { visible, onCancel, confirmLoading } = this.props;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <Modal
        title="修改密码"
        visible={visible}
        confirmLoading={confirmLoading}
        onOk={this.handleSubmit}
        onCancel={onCancel}
        destroyOnClose
        maskClosable={false}
        okText="保存"
        cancelText="取消"
      >
        <Form onSubmit={this.handleSubmit}>
          <FormItem {...formItemLayout} label="原密码">
            {getFieldDecorator('oldPassword', {
              initialValue: '',
              rules: [{ required: true, validator: this.checkPassword }],
            })(<Input.Password placeholder="当前密码" maxLength={16} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="新密码">
            {getFieldDecorator('newPassword', {
              initialValue: '',
              rules: [
                {
                  required: true,
                  validator: this.checkPassword,
                },
              ],
            })(<Input.Password placeholder="6-16位新密码" maxLength={16} />)}
          </FormItem>
          <FormItem {...formItemLayout} label="确认">
            {getFieldDecorator('againNewPassword', {
              initialValue: '',
              rules: [
                {
                  required: true,
                  validator: this.checkConfirm,
                },
              ],
            })(
              <Input.Password
                placeholder="确认密码"
                onBlur={this.handleConfirmBlur}
                maxLength={16}
              />,
            )}
          </FormItem>
          <button type="submit" style={{ display: 'none' }} />
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(PasswordChangeModal);
