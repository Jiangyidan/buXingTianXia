import request from '@/utils/request';

// 这里包含登录用户信息以及资源信息（可以转换成菜单）
export async function queryCurrent() {
  return request('/api/system/login/menu');
}

export async function changePassword(params) {
  return request('/api/system/user/updatePwd', {
    method: 'POST',
    data: params,
  });
}
/*
  修改柜门密码
*/
export async function changeOpenPwd(params) {
  return request('/api/system/userCode/saveUserCode', {
    method: 'POST',
    data: params,
  });
}
