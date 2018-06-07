import Vue from 'vue';
import Vuex from 'vuex';
import web3 from '../../ethereum/web3';
import contractInstance from '../../ethereum/contractInstance';

Vue.use(Vuex);

let accounts, from;

export default new Vuex.Store({
	state: {
		isFormSending: false
	},
	mutations: {
		setFormSending: (state, value) => (state.isFormSending = value)
	},
	actions: {
		async submitClaim({ commit }, claimData) {
			const { claimAmount, etherUnit, reasonForClaim } = claimData;
			commit('setFormSending', true);
			if (!accounts) accounts = await web3.eth.getAccounts();
			const amountInWei = web3.utils.toWei(claimAmount, etherUnit);
			contractInstance.methods
				.makeClaim(amountInWei, reasonForClaim)
				.send({ from: accounts[0] })
				.once('transactionHash', function(hash) {
					console.log(`Hash ${hash}`);
				})
				.once('receipt', function(receipt) {
					console.log(`Receipt ${receipt}`);
				})
				.on('confirmation', function(confNumber, receipt) {
					console.log(`Confirmaton ${confNumber}, Receipt ${receipt}`);
				})
				.on('error', function(error) {
					console.log(`Error ${error}`);
				})
				.then(function(receipt) {
					console.log(`Mined ${receipt}`);
					//commit('setFormSending', false);
				});

			//this.clear();
		}
	}
});
