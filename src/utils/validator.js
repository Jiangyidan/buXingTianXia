import idcard from 'idcard';
import { isUrl } from './utils';

// 身份证验证
export function isIdCard(data) {
  return idcard.verify(data);
}

// 手机号码验证
export function isTelphone(data) {
  return /^1(3|4|5|7|8|9)\d{9}$/.test(data);
}

// 邮编验证
export function isPostalCode(data) {
  return /^[1-9]{1}(\d+){5}$/.test(data);
}

// 图片验证
export function isImage(name) {
  if (!name) return false;
  const index = name.lastIndexOf('.');
  const ext = name.substr(index + 1);
  return (
    ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'].indexOf(
      ext.toLowerCase(),
    ) !== -1
  );
}

// url验证
export { isUrl };
