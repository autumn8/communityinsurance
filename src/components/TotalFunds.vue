<template>
  <span>
    Total amount in trust: <strong>{{totalFundsInEther}} eth</strong>
  </span>
</template>

<script>
import web3 from '../../ethereum/web3';
import { getWeiAsEther } from '../utils';
import contractInstance from '../../ethereum/contractInstance';
import websocket3Instance from '../../ethereum/websocket3Instance';

export default {
	data() {
		return {
			totalFundsInEther: ''
		};
	},
	async created() {
		websocket3Instance.events.LogContributionReceived({}, (error, data) => {
			if (error) console.log('Error: ' + error);
			else {
				console.log('Log data:');
				console.log(data);
				this.totalFundsInEther = getWeiAsEther(data.returnValues.kitty, 4);
			}
		});

		const totalFunds = await contractInstance.methods.kitty().call();
		this.totalFundsInEther = getWeiAsEther(totalFunds, 4);
	}
};
</script>
