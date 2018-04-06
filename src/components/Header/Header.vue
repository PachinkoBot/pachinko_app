<template>

	<transition appear
	appear-class="inactive"
	appear-active-class="active"
	appear-to-class="active"
	v-on:appear="appearTransition"
	v-on:after-appear="setActive" >

	<header class="site-header" id="site-header">

		<div class="site-title" id="site-title">

			<div class="title-logo" id="title-logo">

			</div>

			<div class="title-text" id="title-text">

				<router-link :to="'/'">
				<span>Pachinko Bot</span>
				</router-link>

			</div>

		</div>

		<div class="site-nav" id="site-nav">

			<animated_list :items="nav_items" item-class="nav-item" :is-active="isActive" class="nav-list" id="nav-list"></animated_list>

		</div>

	</header>

	</transition>

</template>

<script src="./Header.js"></script>

<style lang="scss">
@import './Header.scss';
</style>
