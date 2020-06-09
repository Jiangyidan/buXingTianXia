import { queryCurrent } from '@/services/user';

import { routerRedux } from 'dva/router';

const apiTable = {};

const resourceToMenu = data =>
  data.map(item => {
    const result = {
      path: item.url,
      name: item.resourceName,
    };
    if (item.iconCls) {
      result.icon = item.iconCls;
    }
    if (item.children && item.level === 0) {
      result.children = resourceToMenu(item.children);
    }
    return result;
  });

const genOperateResource = (data, r) =>
  data.forEach(item => {
    if (item.level === 2) {
      r.push(item.url);
    }
    if (item.children) {
      genOperateResource(item.children, r);
    }
  });

const UserModel = {
  namespace: 'user',
  state: {
    currentUser: {},
    menuData: [],
    resources: [], // 所有新增、编辑、删除等资源列表，用于配合Auth组件是否显示操作按钮
    apiTable, // Auth组件里res指定的key与具体接口url的映射
    userPwd: [],
  },
  effects: {
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      const { resourceList } = response.data;
      const menuData = resourceToMenu(resourceList);
      const resources = [];
      genOperateResource(resourceList, resources);
      // resources.push('/system/userfingerpt/getByUserId');
      yield put({
        type: 'saveCurrentUser',
        payload: {
          currentUser: {
            ...response.data,
            name: response.data.policeName,
          },
          menuData,
          resources,
        },
      });
      yield put(routerRedux.replace('/'));
      // callback();
    },
  },
  reducers: {
    saveCurrentUser(state, { payload }) {
      state.currentUser = payload.currentUser;
      state.menuData = payload.menuData;
      state.resources = payload.resources;
    },
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default UserModel;
