import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import contractInstance from '../ethereum/contractInstance';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import store from './store/store';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

(async () => {
	const numContributors = await contractInstance.methods
		.contributorCount()
		.call();
	console.log(numContributors);
})();
