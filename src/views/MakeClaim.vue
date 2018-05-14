<template>
  <v-content>
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm10 md8>
          <claim-form/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>

</template>

<script>
import ClaimForm from '../components/ClaimForm';

export default {
	components: {
		ClaimForm
	}
};
</script>

<style lang="css">
</style>
