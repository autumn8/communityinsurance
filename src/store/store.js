import Vue from 'vue';
import Vuex from 'vuex';
import web3 from '../../ethereum/web3';
import contractInstance from '../../ethereum/contractInstance';

Vue.use(Vuex);

let accounts, from;

export default new Vuex.Store({
	state: {
		clearForm: false,
		isFormSending: false,
		formFeedbackMsg: '',
		snackbar: {
			multiline: true,
			timeout: 6000,
			text: 'There was an errror processing your transaction',
			shouldDisplay: false,
			color: 'info'
		}
	},
	mutations: {
		closeSnackBar: state => {
			state.snackbar.shouldDisplay = false;
		},
		clearForm: (state, value) => (state.clearForm = true),
		setFormSending: (state, value) => (state.isFormSending = value),
		showSnackbar(state, props) {
			state.snackbar.text = props.text;
			state.snackbar.color = props.color;
			state.snackbar.shouldDisplay = true;
		}
	},
	actions: {
		async submitClaim({ commit }, claimData) {
			const { claimAmount, etherUnit, reasonForClaim } = claimData;
			commit('setFormSending', true);
			if (!accounts || !accounts.length)
				accounts = await web3.eth.getAccounts();
			if (!accounts.length) {
				const snackbarProps = {
					text: 'No accounts found. Please create an account with metamask',
					color: 'error'
				};
				commit('setFormSending', false);
				commit('showSnackbar', snackbarProps);
				return;
			}
			const amountInWei = web3.utils.toWei(claimAmount, etherUnit);
			contractInstance.methods
				.makeClaim(amountInWei, reasonForClaim)
				.send({ from: accounts[0] })
				.on('error', function(error) {
					const snackbarProps = {
						text: 'There was an error submitting your claim.',
						color: 'error'
					};
					commit('setFormSending', false);
					commit('showSnackbar', snackbarProps);
				})
				.then(function(receipt) {
					console.log(receipt);
					const snackbarProps = {
						text: 'Claim successfully submitted.',
						color: 'success'
					};
					commit('setFormSending', false);
					commit('showSnackbar', snackbarProps);
					commit('clearForm', true);
				});

			//this.clear();
		}
	}
});
