<template>
	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation">
			
	<div class="animated-title-container" id="animated-title-container">
		<h1 class="animated-title" id="animated-title">
				<span>{{titleText}}</span>
		</h1>
	</div>

	</transition>
</template>

<script>

export default {
	name: 'animated_title',
	props: ['titleText', 'delay'],
	methods: {
		beforeEnter: function() {
		},
		enterAnimation: function() {
			var el = this.$el.querySelector("#animated-title");
			var delay = 0;
			if (typeof this.delay == "number")
			{
				delay = this.delay;
			}

			TweenMax.fromTo(
				el,
				2,
				{
					opacity: 0,
					yPercent: 25
				},
				{
					delay: delay,
					yPercent: 0,
					opacity: 1,
					ease: Power4.easeOut,
					clearProps: "all"
				}
			);
		}
	}
}

</script>

<style lang="scss">

@import "../../style/settings.scss";

.animated-title {
	margin: 0;

}

</style>
