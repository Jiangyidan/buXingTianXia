import request from '@/utils/request';

// 这里包含登录用户信息以及资源信息（可以转换成菜单）
export async function queryCurrent() {
  return request('/api/user/menu');
}
