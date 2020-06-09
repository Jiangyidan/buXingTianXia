import { routerRedux } from 'dva/router';
import { stringify } from 'querystring';
import { login, logout, queryVersion } from '@/services/login';
import { getPageQuery } from '@/utils/utils';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const Model = {
  namespace: 'login',
  state: {
    status: undefined,
    version: '',
  },
  effects: {
    *login({ payload }, { call, put }) {
      yield call(login, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: { status: 'ok' },
      });

      // const urlParams = new URL(window.location.href);
      // const params = getPageQuery();
      // let { redirect } = params;

      // if (redirect) {
      //   const redirectUrlParams = new URL(redirect);

      //   if (redirectUrlParams.origin === urlParams.origin) {
      //     redirect = redirect.substr(urlParams.origin.length);

      //     if (redirect.match(/^\/.*#/)) {
      //       redirect = redirect.substr(redirect.indexOf('#') + 1);
      //     }
      //   } else {
      //     window.location.href = '/';
      //     return;
      //   }
      // }
      yield put(routerRedux.replace('/'));
    },
    logout: [
      // eslint-disable-next-line func-names
      function*(_, { put, call }) {
        const { redirect } = getPageQuery(); // redirect

        if (window.location.pathname !== '/user/login' && !redirect) {
          yield call(delay, 300);
          try {
            yield call(logout);
          } catch (e) {
            // 不管有没有调用从成功logout接口，都跳转到login界面。因为当登录超时时，logout接口会返回401
          }
          yield put(
            routerRedux.replace({
              pathname: '/user/login',
              search: stringify({
                redirect: window.location.href,
              }),
            }),
          );
        }
      },
      { type: 'takeLatest' },
    ],
    *fetchVersion(_, { put, call }) {
      const response = yield call(queryVersion);
      yield put({
        type: 'saveVersion',
        payload: {
          version: response.data,
        },
      });
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      return { ...state, status: payload.status };
    },
    saveVersion(state, { payload }) {
      state.version = payload.version;
    },
  },
};
export default Model;
