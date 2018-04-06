<template>
	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation">
			
	<div class="animated-image">
		<img :src="imageSrc"></img>
		<div class="animated-block" id="animated-block"> </div>
	</div>

	</transition>
</template>

<script>

export default {
	name: 'animated_image',
	props: ['imageSrc', 'delay'],
	methods: {
		beforeEnter: function() {
		},
		enterAnimation: function() {
			var el = this.$el.querySelector("#animated-block");
			var delay = 0;
			if (typeof this.delay == "number")
			{
				delay = this.delay;
			}
			TweenMax.to(
				el,
				2.5,
				{
					delay: delay,
					width: 0,
					ease: Power4.easeOut,
				}
			);
		}
	}
}

</script>

<style lang="scss">

@import "../../style/settings.scss";

.animated-image {

	position: relative;

	img {

		width: 100%;
		z-index: 1;

	}

	.animated-block {
		width: 100%;
		height: 100%;
		z-index: 2;
		background-color: $main-bg-color;
		position: absolute;
		top: 0;
		right: 0;

	}

}

</style>
