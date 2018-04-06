<template>

	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation"
	v-on:after-enter="setActive">

	<section class="mission-page" id="mission-page">

		<animated_title :class="'page-title'" :id="'page-title'" :titleText="'Pachinko Bot'" v-show="isActive" />

	</section>
	
	</transition>

</template>

<script>

import animated_title from '../common/animated_title.vue'

export default {
	name: 'Mission',
	components: {
		animated_title
	},
	data: function() {
		return {
			isActive: false
		}
	},
	methods: {
		beforeEnter: function(el, done) {
		},
		enterAnimation: function(el, done) {
			done();
		},
		setActive: function(el, done) { this.isActive = true; },
	}
}
</script>

<style lang="scss">

@import "../../style/settings.scss";

.mission-page {
	height: 100%;
	
	.page-title {
		width: 100%;
		text-align: center;
		font-size: 100px;
		position: absolute;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}
}


</style>
