<template>
  <v-card class="elevation-12">
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
            :disabled="isSending"
            prepend-icon="message"
            v-model="reason"
            :rules="reasonRules"
            label="Reason for claim"
            required>
        </v-text-field>
        <v-text-field
            :disabled="isSending"
            prepend-icon="euro_symbol"
            v-model="amount"
            :rules="amountRules"
            label="Amount"
            required>
        </v-text-field>
        <v-select
          :disabled="isSending"
            prepend-icon="aspect_ratio"
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
      <p class="teal--text">{{formMsg}}</p>
      <v-btn
        primary
        :disabled="!valid"
        :loading="isSending"
        @click="submit">
      Submit Claim
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import web3 from '../../ethereum/web3';
import contractInstance from '../../ethereum/contractInstance';
export default {
	data() {
		return {
			valid: false,
			reason: '',
			reasonRules: [v => !!v || 'Reason is required'],
			formMsg: '',
			isSending: false,
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
	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				this.isSending = true;
				const accounts = await web3.eth.getAccounts();
				const from = accounts[0];
				const valueInWei = web3.utils.toWei(
					this.amount,
					this.unit.toLowerCase()
				);
				const tx = await contractInstance.methods
					.makeClaim(valueInWei, this.reason)
					.send({ from });
				console.log(tx);
				this.clear();
				this.isSending = false;
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
