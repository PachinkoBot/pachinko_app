<template>

	<transition appear
	v-on:before-appear="beforeLoad"
	v-on:appear="loadAnimation" 
	v-on:after-appear="setActive" >

	<div class="site-sidebar" id="site-sidebar">

		<div class="sidebar-line" id="sidebar-line"> </div>

		<div class="sidebar-extend" id="sidebar-extend">

			<div class="sidebar-top-el extend-title" id="extend-title">

				<div class="title" id="title">

					<router-link :to="'/'">
					<span>Pachinko Bot</span>
					</router-link>

				</div>

			</div>

			<div class="sidebar-mid-el sidebar-nav" id="sidebar-nav">

				<animated_list :items="navItems" item-class="nav-item" :is-active="isOpen" :item-click="burgerClickHandler" class="nav-list" id="nav-list"></animated_list>

			</div>


		</div>

		<div class="sidebar-sticky" id="sidebar-sticky">

			<div class="sidebar-top-el sticky-logo" id="sticky-logo">

				<div class="logo" id="logo">
					<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					  <circle cx="100" cy="100" r="100" fill="white"/>
					</svg>
				</div>

			</div>

			<div class="sidebar-mid-el sticky-burger" id="sticky-burger" :class="{ 'active': isActive, 'open': isOpen }" v-on:click="burgerClickHandler"> 

				<div class="patty"></div>
				<div class="patty"></div>
				<div class="patty"></div>
				
			</div>

			<!--<div class="sidebar-mid-el sticky-cross" id="sticky-cross"> 

				<div class="left"></div>
				<div class="right"></div>
				
			</div>-->
	
		</div>

	</div>

	</transition>

</template>

<script src="./Sidebar.js"></script>

<style lang="scss">
@import './Sidebar.scss';
</style>
