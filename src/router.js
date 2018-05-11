import Vue from 'vue';
import Router from 'vue-router';
import Contribute from './views/Contribute.vue';
import Claims from './views/Claims.vue';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/contribute',
			name: 'contribute',
			component: Contribute
		},
		{
			path: '/claims',
			name: 'claims',
			component: Claims
		}
	]
});
