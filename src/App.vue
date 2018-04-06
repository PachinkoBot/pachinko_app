<template>
  <div id="app">
	<Sidebar :navItems="pages" :onLoad="setLoaded" :beforeClose="setUnloaded" :onClose="setLoaded" />
    <router-view v-if="loaded"/>
  </div>
</template>

<script>
/* import Header from './components/Header/Header.vue' */
import Sidebar from './components/Sidebar/Sidebar.vue'

export default {
	name: 'App',
	components: {
		Sidebar
	},
	data: function() {
		return {
			pages: [
				{text: "Mission", id:'mission-nav', to:'/'},
				{text:"Journal", id:'journal-nav', to:'journal'}, 
				{text: "Team", id:'team-nav', to:'team'},
			],
			loaded: false
		}
	},
	methods: {
		setLoaded: function() {
			this.loaded = true;
		},
		setUnloaded: function() {
			this.loaded = false;
		}
	}
}
</script>

<style lang="scss">
@import './main.scss';
</style>
