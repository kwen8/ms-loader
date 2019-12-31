export default {
  projects: [
    {
      name: 'master',
      main: 'http://localhost:8080/app.js',
      url: '/',
      base: true,
      path: '/'
    },
    {
      name: 'submodule',
      main: 'http://localhost:8081/app.js',
      url: '/sub',
      base: false,
      path: '/sub'
    }
  ]
};
