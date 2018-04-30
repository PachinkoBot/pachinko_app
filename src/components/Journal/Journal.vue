<template>

	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation"
	v-on:after-enter="setActive">

	<section class="journal-page" id="journal-page">

		<div class="page-wrapper" :class="{ locked: isLocked }">

			<animated_title :class="'page-title page-section'" :id="'page-title'" :titleText="'Journal'" v-show="isActive" />

			<div class="journal-entry page-section" id="journal-entry">

				<animated_title :titleText="'Meeting 1: Project Plan'" :delay=0.5 v-show="isActive" />

				<animated_par :parText="'meeting 1 notes / project plan shit'" :delay=1 v-show="isActive" />

			</div>

			<!--<div class="page-title page-section" id="page-title">
				<span>Team</span>
			</div>-->

			<!--<div class="team-image page-section" id="team-image">

				<img src="static/images/team.jpg"></img>

			</div>-->

			<!--<div class="team-hero page-section" id="team-hero">

				<div class="team-description" id="team-description">

					<h1>A robotics team inspired to help people in emergency situations.</h1>

					<p>
            meeting 1 shit
					</p>

				</div>


				<div class="page-title" id="page-title">

					<span>Meet the team</span>

				</div>

			</div> -->

			<!--<div class="members-about page-section" id="members-description">

				<animated_title :titleText="'Meet Our Members'" :delay=2 v-show="isActive" />

				<animated_par :parText="'	We started off as five individuals with a desire to help others. As time progressed, we not only brought our ideas together, but also became a team bonded by shared passions and experiences. Here are our members and their stories.'" :delay=2.5 v-show="isActive" />

			</div>-->

			<!--div class="team-members page-section" id="team-members" v-show="isActive">

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

			</div> -->

			<!--<MemberPage :member="activeMember" :onClose="setUnlocked" ref="memberPage"/>-->


			<!--<div class="team-members page-section" id="team-members">

				<div class="members-description" id="members-description">

					<h1>Meet our members</h1>

					<p>
	We started off as five individuals with a desire to help others. As time progressed, we not only brought our ideas together, but also became a team bonded by shared passions and experiences. Here are our members and their stories.
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

<script src="./Journal.js"></script>

<style lang="scss">
@import './Journal.scss';
</style>
