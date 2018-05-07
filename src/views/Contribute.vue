<template>
  <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Contribute to fund</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                      prepend-icon="person"
                      v-model="amount"
                      :rules="amountRules"
                      label="Contribution amount"
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
export default {
	data: () => ({
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
		submit() {
			alert('hit submit');
			if (this.$refs.form.validate()) {
				alert('sending to ethereum network');
				// axios.post('/api/submit', {
				//   name: this.name,
				//   email: this.email,
				//   select: this.select,
				//   checkbox: this.checkbox
				// })
			} else {
				alert('not validated');
			}
		},
		clear() {
			this.$refs.form.reset();
		}
	}
};
</script>
