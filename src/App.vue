<template>
  <v-app>
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

      <v-btn router to="/contribute" flat>
        <v-icon>payment</v-icon>
        Contribute
      </v-btn>
      <v-btn router to="/claims" flat>
        <v-icon>assessment</v-icon>
        Claims
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
export default {
	name: 'App',
	data() {
		return {
			clipped: false,
			drawer: false,
			fixed: false,
			items: [
				{
					icon: 'bubble_chart',
					title: 'Contribute',
					route: '/contribute'
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
	}
};
</script>
