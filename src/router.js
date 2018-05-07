import Vue from 'vue';
import Router from 'vue-router';
import Contribute from './views/Contribute.vue';
import Claims from './views/Claims.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
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
