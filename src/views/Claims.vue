<template>
  <v-content>
  <v-container grid-list-md text-xs-center>
    <v-spacer></v-spacer>
      <v-layout>
    <v-flex xs12 sm10 md8>
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
        <td class="text-xs-center"><v-btn outline color="teal">Approve</v-btn></td>
      </template>
    </v-data-table>
  </v-card>
  </v-flex>
  <v-flex xs12 sm12 md4>
    <v-card class="elevation-12">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Make a Claim</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
              prepend-icon="person"
              v-model="amount"
              :rules="amountRules"
              label="Reason for claim"
              required>
          </v-text-field>
          <v-text-field
              prepend-icon="person"
              v-model="amount"
              :rules="amountRules"
              label="Amount"
              required>
          </v-text-field>
          <v-select
              prepend-icon="person"
              v-model="unit"
              :rules="unitRules"
              :items="items"
              label="Curreny Unit"
              required>
          </v-select>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          :loading="true"
          primary
          :disabled="!valid"
          @click="submit">
        Send
        </v-btn>
      </v-card-actions>
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
			claims: [],
			valid: false,
			amount: '',
			amountRules: [
				v => !!v || 'Amount is required',
				v => !isNaN(v) || 'Amount must be a number',
				v => v > 0 || 'Amount must be greater than 0'
			],
			items: ['Wei', 'Ether'],
			unit: '',
			unitRules: [v => !!v || 'Currency unit is required'],
			select: null
		};
	},
	async created() {
		const numberOfClaims = await contractInstance.methods
			.getNumberOfClaims()
			.call();
		const firstClaim = await contractInstance.methods.insuranceClaims(0).call();
		//const claims = await Array.from(numberOfClaims).fill().map(_=> await contractInstance.methods.get)
		console.log(`number of claims ${numberOfClaims}`);
		const { claimant, reasonForClaim, amount, approvalCount } = firstClaim;
		const amountInEther = web3.utils.fromWei(amount, 'ether');
		console.log(amountInEther);
		this.claims = [{ claimant, reasonForClaim, amountInEther, approvalCount }];
		console.log(`firstClaim ${reasonForClaim}`);
	},
	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				const accounts = await web3.eth.getAccounts();
				const from = accounts[0];
				const value = web3.utils.toWei(this.amount, this.unit.toLowerCase());
				const tx = await contractInstance.methods
					.contribute()
					.send({ from, value });
				console.log(tx);
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
