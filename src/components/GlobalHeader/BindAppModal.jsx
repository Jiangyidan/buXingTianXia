import React from 'react';
import { Modal } from 'antd';

export default ({ visible, policeNo, onCancel }) => (
  <Modal
    title="请扫码绑定App"
    visible={visible}
    footer={null}
    onCancel={onCancel}
    bodyStyle={{ textAlign: 'center' }}
  >
    <>
      <img
        src={`/api/system/user/getAppPicture?policeNo=${policeNo}`}
        alt="绑定App的二维码"
        width={256}
        height={256}
      />
      <h2 style={{ color: 'red' }}>请勿保存或外传此二维码图片，违者后果自负！</h2>
    </>
  </Modal>
);
