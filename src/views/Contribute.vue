<template>
  <v-content>
    <v-spacer></v-spacer>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <community-insurance-contribution-form></community-insurance-contribution-form>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import ContributionForm from '../components/ContributionForm';

export default {
	components: {
		'community-insurance-contribution-form': ContributionForm
	}
};
</script>
