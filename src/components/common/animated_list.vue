<template>

	<ul class="js-cursor-dim" :class="{'active': isActive}">

		<li class="js-cursor-highlight js-cursor-underline" :class="itemClass" v-for="item in items" :key="item.id":id="item.id"  v-on:click="itemClick">

			<router-link v-if="item.to" :to="item.to">
				<span class="underlined"> {{ item.text }} </span>
			</router-link>

			<a v-if="item.href" :href="item.href" target="_blank">
				<span class="underlined"> {{ item.text }} </span>
			</a>

		</li>

	</ul>

</template>

<script>
export default {
	name: 'animated_list',
	props: ['items', 'itemClass', 'isActive', 'itemClick'],
}
</script>

<style lang="scss">

@import "../../style/settings.scss";

.js-cursor-dim {

	.js-cursor-underline {

		position: relative;

		overflow: hidden;

		cursor: pointer;

		transition: all .3s cubic-bezier(0, .45, .4, .99);

		z-index: 2;

		&:hover .underlined:before {

			animation: fillIn .3s;
			animation-fill-mode: forwards;

		}

		&.selected .underlined:before {

			width: 100%

		}

	}

	&:hover .js-cursor-highlight {

		opacity: 0.45;

	}

	.js-cursor-highlight:hover {

		opacity: 1;

	}

	&.active .js-cursor-underline:before {

		opacity: 1;

	}
}

</style>
