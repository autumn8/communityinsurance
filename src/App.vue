<template>
  <v-app>
    <v-snackbar
      :timeout="snackbar.timeout"
      :top=true
      :color="snackbar.color"
      v-model="snackbar.shouldDisplay"      
    >
      {{ snackbar.text }}
      <v-btn flat @click.native="closeSnackBar()">Close</v-btn>
    </v-snackbar>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      app>
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-btn router to="item.route" outline>
              {{item.title}}
            </v-btn>
            <!-- <v-list-tile-title router to='item.route' v-text="item.title"></v-list-tile-title> -->
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>
        <router-link to="/" tag='span' :style="{ cursor: 'pointer'}">{{title}}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <total-funds/>
      <v-btn router to="/makeclaim" flat>
        <v-icon>payment</v-icon>
        Make a Claim
      </v-btn>
      <v-btn router to="/claims" flat>
        <v-icon>assessment</v-icon>
        Approve a Claim
      </v-btn>
      <v-btn flat >
        <v-icon>get_app</v-icon>
        Withdrawal
      </v-btn>

    </v-toolbar>

      <router-view/>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import TotalFunds from './components/TotalFunds';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'App',
	components: {
		TotalFunds
	},
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			// color: 'success',
			// snackbarTimeout: 6000,
			// snackbarText: 'There was an errror processing your transaction',
			// snackbar: false,
			items: [
				{
					icon: 'bubble_chart',
					title: 'Make a Claim',
					route: '/makeclaim'
				},
				{
					icon: 'bubble_chart',
					title: 'Claims',
					route: '/claims'
				}
			],
			miniVariant: false,
			right: true,
			rightDrawer: false,
			title: 'Community Insurance'
		};
	},
	computed: mapState(['snackbar']),
	methods: mapMutations(['closeSnackBar'])
};
</script>
