<template>
	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation">
			
	<div class="animated-par-container">
		<p class="animated-par" id="animated-par">
			<span>{{parText}}</span>
		</p>
	</div>

	</transition>
</template>

<script>

export default {
	name: 'animated_par',
	props: ['parText', 'delay'],
	methods: {
		beforeEnter: function() {
		},
		enterAnimation: function() {
			var el = this.$el.querySelector("#animated-par");
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
					opacity: 1,
					yPercent: 0,
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

.animated-par {
	margin: 0;
	padding: 0;
}

</style>
