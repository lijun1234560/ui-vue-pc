import Vue from 'vue';
import Router from 'vue-router';
import Doc from '../doc/doc';
import Http from '../test/http';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Doc
    },
    {
      path: '/doc',
      name: 'Doc',
      component: Doc
    },
    {
      path: '/api',
      name: 'Http',
      component: Http
    }
  ]
});
