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
        <td class="text-xs-center">{{ props.item.approvalCount }}</td>
        <td class="text-xs-center">
          <v-btn icon>
            <!-- @click="editItem(props.item)" -->
          <v-icon large color="cyan">check_circle</v-icon>
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
			claims: []
		};
	},
	async created() {
		const numberOfClaims = await contractInstance.methods
			.getNumberOfClaims()
			.call();
		const firstClaim = await contractInstance.methods.insuranceClaims(0).call();
		const range = Array(+numberOfClaims).fill();
		this.claims = await Promise.all(
			range.map(async (_, i) => {
				const claim = await contractInstance.methods.insuranceClaims(i).call();
				const { claimant, reasonForClaim, id, amount, approvalCount } = claim;
				const amountInEther = web3.utils.fromWei(amount, 'ether');
				return { claimant, reasonForClaim, id, amountInEther, approvalCount };
			})
		);
	}
};
</script>
