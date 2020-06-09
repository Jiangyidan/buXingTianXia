import request from '@/utils/request';

export async function login(params) {
  return request('/api/user/login', {
    method: 'POST',
    data: params,
  });
}

export async function logout(params) {
  return request('/api/system/login/logout', {
    method: 'POST',
    data: params,
  });
}

export async function queryVersion() {
  return request('/api/system/login/version');
}
