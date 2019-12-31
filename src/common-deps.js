window.SystemJS = window.System;

function insertNewImportMap(newMapJSON) {
  const newScript = document.createElement('script');
  newScript.type = 'systemjs-importmap';
  newScript.text = JSON.stringify(newMapJSON);
  const head = document.querySelector('head');

  head.appendChild(newScript);
}

const devDependencies = {
  imports: {
    vue: 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'vue-router': 'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js'
  }
};

const prodDependencies = {
  imports: {
    vue: 'https://cdn.bootcss.com/vue/2.6.10/vue.min.js',
    'vue-router': 'https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js'
  }
};

const devMode = true; // you will need to figure out a way to use a set of production dependencies instead
if (devMode) {
  insertNewImportMap(devDependencies);
} else {
  insertNewImportMap(prodDependencies);
}
