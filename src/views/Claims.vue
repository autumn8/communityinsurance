<template>
  <v-content>
  <v-container grid-list-md text-xs-center>
    <v-spacer></v-spacer>
      <v-layout>
    <v-flex xs12 sm10 md8>
      <v-card class="elevation-12">
        <h1 class="text-md-left">Active Claims</h1>
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
        <td class="text-xs-left">{{ props.item.amount }}</td>
        <td class="text-xs-left">{{ props.item.claimant }}</td>
        <td class="text-xs-left">{{ props.item.approvalCount }}</td>
        <td class="text-xs-left"><v-btn outline color="teal">Approve</v-btn></td>
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
		//const claims = await Array.from(numberOfClaims).fill().map(_=> await contractInstance.methods.get)
		console.log(`number of claims ${numberOfClaims}`);
		const { claimant, reasonForClaim, amount, approvalCount } = firstClaim;
		this.claims = [{ claimant, reasonForClaim, amount, approvalCount }];
		console.log(`firstClaim ${reasonForClaim}`);
	}
};
</script>
