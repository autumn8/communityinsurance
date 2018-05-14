<template>
  <v-content>
    <v-spacer></v-spacer>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark flat color="primary">
                <v-toolbar-title>Contribute to fund</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                      :disabled="isSending"
                      prepend-icon="person"
                      v-model="amount"
                      :rules="amountRules"
                      label="Contribution amount"
                      required>
                  </v-text-field>
                  <v-select
                      :disabled="isSending"
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
                <p class="teal--text">{{formMsg}}</p>
                <v-btn
                  primary
                  :disabled="!valid"
                  :loading="isSending"
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
	data: () => ({
		formMsgStates: {
			default: '',
			sending: 'Sending transaction. This will take a minute',
			failedTransaction: 'Something went wrong while sending your transaction',
			success: 'Transaction was successful'
		},
		formMsg: '',
		isSending: false,
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
	}),

	methods: {
		async submit() {
			if (this.$refs.form.validate()) {
				this.isSending = true;
				const accounts = await web3.eth.getAccounts();
				const from = accounts[0];
				const value = web3.utils.toWei(this.amount, this.unit.toLowerCase());
				const tx = await contractInstance.methods
					.contribute()
					.send({ from, value });
				this.isSending = false;
				console.log(tx);
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
