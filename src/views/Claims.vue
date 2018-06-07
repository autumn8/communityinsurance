<template>
  <v-content xs12 sm8 md6>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md8>

      <v-card class="elevation-12">
      <v-data-table
      :headers="headers"
      :items="claims"
      class="elevation-1"
    >
      <template slot="headerCell" slot-scope="props">
        <v-tooltip bottom>
          <span slot="activator">
            {{ props.header.text }}
          </span>
        </v-tooltip>
      </template>
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.reasonForClaim }}</td>
        <td class="text-xs-center">{{ props.item.amountInEther }}</td>
        <td class="text-xs-center">{{ props.item.claimant }}</td>
        <td class="text-xs-center">{{ props.item.approvalCount }} / {{minNumApproversRequired}}</td>
        <td class="text-xs-center">
          <v-btn icon @click="approve(props.item.id)">
          <v-icon large color="purple" >check_circle</v-icon>
        </v-btn>
</td>
      </template>
    </v-data-table>
  </v-card>
</v-flex>
</v-layout>

</v-container>

</v-content>

</template>

<script>
import { createNumberRange } from '../utils.js';
import web3 from '../../ethereum/web3';
import contractInstance from '../../ethereum/contractInstance';

export default {
	data() {
		return {
			headers: [
				{
					text: 'Reason ForClaim',
					align: 'left',
					sortable: false,
					value: 'reasonForClaim',
					width: '40%'
				},
				{ text: 'Amount', value: 'amount' },
				{ text: 'Claimant', value: 'claimant' },
				{ text: 'Approval Count', value: 'approvalCount' },
				{ text: 'Approve Claim', value: 'approveClaim' }
			],
			claims: [],
			minNumApproversRequired: ''
		};
	},
	async created() {
		const numberOfClaims = await contractInstance.methods
			.getNumberOfClaims()
			.call();
		const range = createNumberRange(numberOfClaims);
		range.forEach(async i => {
			this.minNumApproversRequired = await contractInstance.methods
				.minNumApproversRequired()
				.call();
			const claim = await contractInstance.methods.insuranceClaims(i).call();
			const { claimant, reasonForClaim, id, amount, approvalCount } = claim;
			const amountInEther = web3.utils.fromWei(amount, 'ether');
			this.claims.push({
				claimant,
				reasonForClaim,
				id,
				amountInEther,
				approvalCount
			});
		});
	},
	methods: {
		async approve(claimID) {
			const accounts = await web3.eth.getAccounts();
			const from = accounts[0];
			await contractInstance.methods
				.approveClaim(claimID)
				.send({ from })
				.on('error', error => console.log(error));
			console.log(claimID);
		}
	}
};
</script>
