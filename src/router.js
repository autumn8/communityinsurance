import Vue from 'vue';
import Router from 'vue-router';
import Contribute from './views/Contribute.vue';
import Claims from './views/Claims.vue';
import Home from './views/Home.vue';
import MakeClaim from './views/MakeClaim.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/makeclaim',
			name: 'makeclaim',
			component: MakeClaim
		},
		{
			path: '/claims',
			name: 'claims',
			component: Claims
		}
	]
});
