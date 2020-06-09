import React, { cloneElement } from 'react';
import delve from 'dlv';
import { connect } from 'dva';

export default connect(({ user }) => ({ resources: user.resources, apiTable: user.apiTable }))(
  ({ children, mode, res, noMatch, resources, apiTable, dispatch, ...rest }) => {
    if (Array.isArray(res)) {
      for (let i = 0; i < res.length; i += 1) {
        const api = delve(apiTable, res[i], '').substr(4); // 去掉/api前缀
        if (mode === 'or') {
          if (resources.some(resource => resource === api)) {
            return React.Children.map(children, child => cloneElement(child, { ...rest }));
          }
        } else if (!resources.some(resource => resource === api)) {
          return noMatch || null;
        }
      }
      if (mode === 'or') {
        return noMatch || null;
      }
      return React.Children.map(children, child => cloneElement(child, { ...rest }));
    }

    if (typeof res === 'string') {
      const api = delve(apiTable, res, '').substr(4);
      if (resources.some(resource => resource === api)) {
        return React.Children.map(children, child => cloneElement(child, { ...rest }));
      }
    }
    return noMatch || null;
  },
);
