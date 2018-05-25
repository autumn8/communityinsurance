<template>
  <v-container fluid>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >

            <v-container grid-list-xl>
              <v-flex xs12 sm4 xs7 offset-xs5 offset-md5 offset-lg5 class="my-3">
                    <h2 class="headline">Total available pooled funds: 2.5 eth</h2>
                </v-flex>
              <v-layout row wrap align-center>

                <v-flex md10 offset-md1>
                  <v-card>
                <v-card-media
                  src="./img/people.png"
                  height="300px"
                >
                </v-card-media>
              </v-card>
           </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">No Insurance Company</div>
                    </v-card-title>
                    <v-card-text>
                      All ether paid into the fund remains available for claims - No insurance middle man eating into consumer contributions & no excess payments.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Peer approvals</div>
                    </v-card-title>
                    <v-card-text>
                      Contributors are also claim approvers. Your peers approve your claims. As soon as half of all contributors approve your claim, your money is immediately made available to you.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
              <v-layout align-center justify-center>
                <v-flex xs12 sm8 md5>
                  <contribution-form/>
                </v-flex>
              </v-layout>
            </v-container>
        </v-layout>

  </v-container>
</template>

<script>
import ContributionForm from '../components/ContributionForm';

export default {
	components: {
		ContributionForm
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
