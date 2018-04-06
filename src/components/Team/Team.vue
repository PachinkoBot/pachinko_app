<template>

	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation"
	v-on:after-enter="setActive">

	<section class="team-page" id="team-page">

		<div class="page-wrapper" :class="{ locked: isLocked }">
			
			<animated_title :class="'page-title page-section'" :id="'page-title'" :titleText="'Team'" v-show="isActive" />

			<div class="team-about page-section" id="team-about">
				
				<animated_title :titleText="'We are a team of blah blah blah working on Lorem I mean its not ibsen...'" :delay=0.5 v-show="isActive" />
			
				<animated_par :parText="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.'" :delay=1 v-show="isActive" />

			</div>

		
			<animated_image :class="'team-image page-section'" :id="'team-image'" :imageSrc="'static/images/team.jpg'" :delay="1" v-show="isActive"/>

			<!--<div class="page-title page-section" id="page-title">
				<span>Team</span>
			</div>-->

			<!--<div class="team-image page-section" id="team-image">
				
				<img src="static/images/team.jpg"></img>

			</div>-->

			<!--<div class="team-hero page-section" id="team-hero">

				<div class="team-description" id="team-description">

					<h1>We are a team of blah blah blah working on Lorem I mean its not ibsen...</h1>
				
					<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.
					</p>

				</div>

				<div class="team-image" id="team-image">
					
					<img src="static/images/team.jpg"></img>

				</div>

				<div class="page-title" id="page-title">

					<span>Meet the team</span>

				</div>

			</div> -->

			<div class="members-about page-section" id="members-description">
				
				<animated_title :titleText="'Meet our memebrs'" :delay=2 v-show="isActive" />

				<animated_par :parText="'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.'" :delay=2.5 v-show="isActive" />

			</div>

			<div class="team-members page-section" id="team-members" v-show="isActive">

				<ul class="member-list" id="member-list">
					<li class="team-member" v-for="(member, index) in team_members" :key="member.id" :id="member.id" :class="{'mid': isMid(index), 'right': isEven(index), 'last': isLast(index) }" v-on:click="memberClick(member)">
						<div class="member-image">
							<img :src="member.image" />
						</div>
						<div class="member-title">
							<div class="member-name">
								<span class="underlined">{{member.name}}</span>
							</div>
							<div class="member-position">
								<span>{{member.position}}</span>
							</div>
						</div>
					</li>
				</ul>

			</div>

			<MemberPage :member="activeMember" :onClose="setUnlocked" ref="memberPage"/>


			<!--<div class="team-members page-section" id="team-members">

				<div class="members-description" id="members-description">

					<h1>Meet our members</h1>

					<p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.
					</p>

				</div>

				<ul class="member-list" id="member-list">
					<li class="team-member" v-for="(member, index) in team_members" :key="member.id" :id="member.id" :class="{'mid': isMid(index), 'right': isEven(index), 'last': isLast(index) }">
						<div class="member-image">
							<img :src="member.image" />
						</div>
						<div class="member-name">
							<span>{{member.name}}</span>
						</div>
					</li>
				</ul>

			</div>-->

		</div>
	
	</section>

	</transition>

</template>

<script src="./Team.js"></script>

<style lang="scss">
@import './Team.scss';
</style>
