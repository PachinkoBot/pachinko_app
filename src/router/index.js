import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Team from '@/components/Team/Team.vue'
import Mission from '@/components/Mission/Mission.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Mission',
			component: Mission
		},
		{
			path: '/team',
			name: 'Team',
			component: Team
		},
	]
})
