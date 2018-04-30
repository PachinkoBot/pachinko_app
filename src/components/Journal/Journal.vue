<template>

	<transition
	v-on:before-enter="beforeEnter"
	v-on:enter="enterAnimation"
	v-on:after-enter="setActive">

	<section class="journal-page" id="journal-page">

		<div class="page-wrapper" :class="{ locked: isLocked }">

			<animated_title :class="'page-title page-section'" :id="'page-title'" :titleText="'Journal'" v-show="isActive" />

			<!-- <div class="journal-entry page-section" id="journal-entry">

				<animated_title :titleText="'Meeting 1: Brainstorming'" :delay=0.5 v-show="isActive" />

				<animated_par :parText="'meeting 1 notes / project plan shit'" :delay=1 v-show="isActive" />

			</div> -->

			<!--<div class="page-title page-section" id="page-title">
				<span>Team</span>
			</div>-->

			<div class="team-hero page-section" id="team-hero">

				<div class="team-description" id="team-description">

					<h1>Meeting 1: Brainstorming</h1>
						<h2>Objectives</h2>
							<p>
		            <ul>
									<li>Create team profiles and team name</li>
									<li>Discuss problems and solutions</li>
									<li>Decide on problem and prompt</li>
									<li>Discuss meeting times and schedules</li>
									<li>Assign tasks for next meeting</li>
									<li>Wordpress and communication</li>
								</ul><br>
								Our objectives this meeting consisted of figuring out logistics as well as getting started with project ideas. Figuring out the logistical side of things and spending time ironing out those details will allow our next meetings to run more smoothly and more project orientated. We also wanted to begin brainstorming ideas about the project.
							</p>
						<h2>Problems</h2>
						<p>
							<ul>
								<li><strong>People trapped in rubble (NASA solution):</strong> This has always been an issue after natural disasters. Due to recent strides in technology, NASA has been able to detect the heartbeats of people 20 feet below concrete. However, this has not been widely used and is quite costly, therefore has not been employed in many areas which it is needed.</li>
								<li><strong>Excess clothing/supplies (conversion to a market) (Tom's):</strong> People tend to send clothes during humanitarian crisis, and despite their good intentions, the reality is that most victims need medicine or hygiene products, over a new set of clothes. The wave of clothes that are donated is commonly dubbed "the second disaster". One problem with Tom's buy one send one policy, was the fact that it hurt small businesses by pushing them out of the market with free and better quality products.</li>
								<li><strong>Agriculture/loss of land (Easier to set up vertical farming):</strong> The loss of land/agriculture is a consistent issue for farmers during crisis. Vertical farming has been used as a method during humanitarian crisis to grow crops as it is more effective during times where water is not easily accessible. However, current methods aren't as cost efficient or effective, and do not allow production anywhere near where they were prior to a disaster.</li>
								<li><strong>Drones payload (Tons of current research):</strong>Despite the convenience of drones, payload has been a big issue and the topic of much research since the rise of drones. The issue stems that while there are drones such as octopods, which can deliver heavier loads, they are extremely costly. Companies such as Zipline have moved away from the conventional drone and into robotic planes, which is used to carry 1kg of blood to places in need.</li>
								<li><strong>Tons of garbage (What else can you do?)</strong> The garbage issue exist as a bigger issue than simply as a humanitarian crisis. While tackling the entire garbage problem is out of our scope, we must considered ways waste is generated, specifically during a humanitarian crisis, and whether or not we have the capacity to reduce, reuse, and convert the waste into something useful.</li>
								<li><strong>What can Robotics do?:</strong> While all these problems undeniably have a solution, an important aspect of this is how we can apply robotics to it, and while this does come with limitations, it also opens the scope for greater possibilities.</li>
							</ul><br>
							Figuring out the problem is the first step in this project, and is usually just as difficult as finding a solution. Members were asked to do research prior to coming to the meetings and give a short presentation on their findings. We discussed the existing solutions to such problems and possible ways to improve upon them. What we found to be the most difficult part was implementation of robotics, as some of these issues had solutions that were not robotics related. However, the team was still able to successfully identify possible solutions to these problems, incorporating robotics.
						</p>

				</div>


				<!-- <div class="page-title" id="page-title">

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
				</ul>-->

			</div>

		</div>

	</section>

	</transition>

</template>

<script src="./Journal.js"></script>

<style lang="scss">
@import './Journal.scss';
</style>
