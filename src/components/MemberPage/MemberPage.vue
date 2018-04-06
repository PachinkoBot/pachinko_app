<template>

	<div class="members-page" id="members-page" :class="{ active: isOpen}">

		<div class="page-wrapper">
		
			<div class="page-line" />

			<div v-if="member" class="member-about">

				<div class="member-header">

					<div class="member-title">

						<div class="member-name">
							<span>{{member.name}}</span>
						</div>

						<div class="member-position">
							<span>{{member.position}}</span>
						</div>

					</div>

					<div class="member-links">
						<animated_list :items="member.social" item-class="member-link" :is-active="true" :item-click="itemClick" class="nav-list" id="nav-list"></animated_list>

					</div>
				
				</div>

				<div class="member-description">
					<span>{{member.description}}</span>
				</div>

			</div>

			<div class="cross" v-on:click="close">
				<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
					<path d=" M 0,18.5 L 18.5, 0, L 20, 1.5, L 1.5, 20 Z m0-17 L 1.5, 0, L 20, 18.5, L 18.5, 20 Z"></path>

				</svg>
			</div>

				<!--<div class="sidebar-mid-el sticky-cross" id="sticky-cross"> 

					<div class="left"></div>
					<div class="right"></div>
					
				</div>-->

		</div>

	</div>

</template>

<script src="./MemberPage.js"></script>

<style lang="scss">
@import './MemberPage.scss';
</style>
