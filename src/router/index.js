'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import Active from '../pages/tasks/Active.vue'
import Archived from '../pages/tasks/Archived.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Active,
			name: 'Active'
		},
		{
			path: '/active',
			component: Active,
			name: 'Active'
		},
		{
			path: '/archived',
			component: Archived,
			name: 'Archived'
		}
	]
})