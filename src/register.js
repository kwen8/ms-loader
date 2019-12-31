import * as singleSpa from 'single-spa';
// 普通路径模式
export function pathPrefix(app) {
  return function(location) {
    let isShow = false;
    //如果该应用 有多个需要匹配的路劲
    if (isArray(app.path)) {
      app.path.forEach(path => {
        if (location.pathname.indexOf(`${path}`) === 0) {
          isShow = true;
        }
      });
    } else if (location.pathname.indexOf(`${app.path || app.url}`) === 0) {
      isShow = true;
    }

    return isShow;
  };
}

// hash 模式
export function hashPrefix(app) {
  return function(location) {
    let isShow = false;
    //如果该应用 有多个需要匹配的路劲
    if (isArray(app.path)) {
      app.path.forEach(path => {
        if (location.hash.startsWith(`#${path}`)) {
          isShow = true;
        }
      });
    }
    // 普通情况
    else if (location.hash.startsWith(`#${app.path || app.url}`)) {
      isShow = true;
    }
    return isShow;
  };
}

export function registerApp(params) {
  singleSpa.registerApplication(
    params.name,
    () => window.System.import(params.main),
    params.base ? () => true : pathPrefix(params)
  );
}

function isArray(path) {
  return Object.prototype.toString.call(path) === '[object Array]';
}
