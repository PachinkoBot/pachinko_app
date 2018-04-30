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
							</p><br>
						<h2>Problems</h2>
							<p>
								<ul>
									<li><strong>People trapped in rubble (NASA solution):</strong> This has always been an issue after natural disasters. Due to recent strides in technology, NASA has been able to detect the heartbeats of people 20 feet below concrete. However, this has not been widely used and is quite costly, therefore has not been employed in many areas which it is needed.</li>
									<li><strong>Excess clothing/supplies (conversion to a market) (Tom's):</strong> People tend to send clothes during humanitarian crisis, and despite their good intentions, the reality is that most victims need medicine or hygiene products, over a new set of clothes. The wave of clothes that are donated is commonly dubbed "the second disaster". One problem with Tom's buy one send one policy, was the fact that it hurt small businesses by pushing them out of the market with free and better quality products.</li>
									<li><strong>Agriculture/loss of land (Easier to set up vertical farming):</strong> The loss of land/agriculture is a consistent issue for farmers during crisis. Vertical farming has been used as a method during humanitarian crisis to grow crops as it is more effective during times where water is not easily accessible. However, current methods aren't as cost efficient or effective, and do not allow production anywhere near where they were prior to a disaster.</li>
									<li><strong>Drones payload:</strong> Despite the convenience of drones, payload has been a big issue and the topic of much research since the rise of drones. The issue stems that while there are drones such as octopods, which can deliver heavier loads, they are extremely costly. Companies such as Zipline have moved away from the conventional drone and into robotic planes, which is used to carry 1kg of blood to places in need.</li>
									<li><strong>Tons of garbage:</strong> The garbage issue exist as a bigger issue than simply as a humanitarian crisis. While tackling the entire garbage problem is out of our scope, we must considered ways waste is generated, specifically during a humanitarian crisis, and whether or not we have the capacity to reduce, reuse, and convert the waste into something useful.</li>
									<li><strong>What can we do with robotics?</strong> While all these problems undeniably have a solution, an important aspect of this is how we can apply robotics to it, and while this does come with limitations, it also opens the scope for greater possibilities.</li>
								</ul><br>
								Figuring out the problem is the first step in this project, and is usually just as difficult as finding a solution. Members were asked to do research prior to coming to the meetings and give a short presentation on their findings. We discussed the existing solutions to such problems and possible ways to improve upon them. What we found to be the most difficult part was implementation of robotics, as some of these issues had solutions that were not robotics related. However, the team was still able to successfully identify possible solutions to these problems, incorporating robotics.
							</p><br>
						<h2>Discussed Robotic Solutions</h2>
							<p>
								<ul>
									<li><strong>Sensor that detects fertile soil (farming):</strong> Loss of agriculture and destruction of land makes farming very difficult for people who rely on it as a source of income and food. A device that helps people detect fertile soil, would allow those in need to have a easier and more successful time farming. </li>
									<li><strong>Detecting harmful chemicals on the road (trash):</strong> A big issue during humanitarian crisis is transportation, whether that be supplies or people. However, it is not always clear whether or not debris on the road is safe to be removed in the presence of humans. Such a sensor would allow humanitarian workers and others to traverse roads with peace of mind, and allow for the quicker clearing of roads.</li>
									<li><strong>Sensor that detects live people in rubble/Identifying people:</strong> Identifying people trapped below buildings has always been an issue. A bigger issue is when time is spent finding those who are already deceased. As unfortunate as it is, a humanitarian worker's time is precious and should be spent on trying to help those still alive. Although NASA has created a device that satisfies some of these needs, it still lacks mobility as well as wide range usage.</li>
									<li><strong>Convert excess clothes to something useful (Economic stability):</strong> Many small businesses are completely devastated after natural disasters or wartime conflicts. Such a tragedy not only strip a family of their income, but a market of its supplies. Because of that mass amounts of excess clothing that is shipped to those in need, so much so that most of it is simply burned or tossed aside, it holds opportunity to be recycled. Not only that if disaster victims could use a device that converts the clothing to something useful that was also marketable, it could also help them financially.</li>
								</ul><br>
								Simplifying the different humanitarian issues allowed us to come up with more specific and applicable problems that could potentially scaled upward. Each member was given two topics to do continued research on. Next week we hope to be better versed on the discussed solutions which will allow us to make a better decision moving forward in deciding what kind of project we want to pursue.
							</p>

							<br><br>

							<h1>Meeting 2: Design and Rubble Research</h1>
								<h2>Hexapods</h2>
									<p>
										We looked at <a href="http://scholarworks.rit.edu/cgi/viewcontent.cgi?article=9761&context=theses">this</a> design for hexapods. For the movement of the hexapod, we looked to <a href="https://mitpress.mit.edu/sites/default/files/titles/content/ecal13/978-0-262-31709-2-ch147.pdf">this document</a> for the creation of a MNN that controls the movement of the robot. Additionally, <a href="http://www.wseas.org/multimedia/journals/circuits/2015/a3072609-151.pdf">this paper</a> explains how to miniaturize a hexapod. Unfortunately, this method of fabrication isn’t feasible as it’s mostly done in research labs at the moment. As such, as hexapods seem to require a lot of motors and the like, it seems as if we should focus not on miniaturizing the robot but making it move autonomously. We also looked into a <a href="https://www2.eecs.berkeley.edu/Courses/EE147/">class</a> at UC Berkeley that teaches MEMS fabrication, and what we got from this is that we could move away from miniaturizing and instead focus on the control and movement of these robots (autonomously and in communication with other robots). <br><br>After looking at this more closely, we decided that a hexapod design would not work well for our purposes because it is too mechanically complex, harder to scale down, and simply not what we were looking for in a robot that is meant to be small and flexible.
									</p><br>
								<h2>Amoeba-Like Robots</h2>
									<p>
										This <a href="https://www.technologyreview.com/s/407603/amoebalike-robots-for-search-and-rescue/">article</a> discusses benefits of the design, including its ability to move over different kinds of terrain, its ability to move on all sides so it never needs to be “upright”, and the possibility of making it flexible so it can squeeze through tight spaces. Although not explained in detail, the article also mentions which direction the team is moving, which is to make the robot much more rugged. Lastly, it explains some open problems such as carrying and using sensors and attaching a power supply to the robot. <br><br>

										A team at Virginia Tech has published a <a href="http://mechanismsrobotics.asmedigitalcollection.asme.org/article.aspx?articleid=1484862">article</a> concerning the whole skin locomotion robot. It explains their design for the movement of the robot. Instead of using electric motors to pull the bands that run across the robot’s length, it instead uses rings that contract and expand on either side of the robot. The contraction and expansion pulls the band and moves the robot. The contraction process is complicated and probably not the best direction for our team if we were to go with the amoeba design. Mainly this is because the movement process is not as natural as simply pulling the bands along tracks and it requires more complicated materials than simple motors. <br><br>

										One issue that we saw with the design described in the above paper is directing the robot side to side. If we use a contraction process the bands all move simultaneously which means that it can only move backwards and forwards. This loss of freedom would not only hurt the robots ability to maneuver in its environment but also hurt the sensor data we would get. If we use motors it may be possible to move only one side of the robot which may generate a rotational movement. <br><br>

										In terms of carrying sensors we need to account for where these sensors can be placed. Since the robot has a toroid shape with an empty cavity in the center, any sensors inside the robot will only be able to look directly in front or behind the robot. Therefore the sensors would need to be placed outside of the robot but not in the path of the ‘skin’. This <a href="http://www.sciencemag.org/news/2017/10/searching-survivors-mexico-earthquake-snake-robots">paper</a> details what the team that built the snake robot learned from helping out during the evacuation after the Mexico City earthquake. They detail some sensors that would be useful to search and rescue teams, including cameras, microphones, and gas sensors. They also talk about using a stereo camera and laser range finder to create a 3D image of the rubble. They used a wired connection with someone controlling the robot. They actually stated it took more than one person, since the images retrieved had to be interpreted as well. <br><br>

										We still need to do research on these topics:
										<ul>
											<li>How to transmit data through concrete. One way would be to just send a wired connection with each robot. Could also use audio signals.</li>
											<li>How to transmit between robots. Many ways would work since they have short range sensors in general. Audio could work as well, if the signal is unique.</li>
											<li>What sensors we should send down. A camera and radar seem most useful. Can they fit on an amoeba robot?</li>

										<br>
								<h2>Amoebas and Whole Skin Locomotion</h2>
									<p>
										<a href="http://www.hizook.com/blog/2010/01/31/amoeba-whole-skin-locomotion-robots-ooze-right">This</a> describes the whole skin locomotion robots and has a video on Dr. Dennis Hong’s research. The second video on feasibility (<a href="https://youtu.be/k5DKeDECcA4"></a>) details how an amoeba works and two potential robot designs. This amoeba robot seems promising -- it moves at 0.5 m/s and can maneuver through places that are half the diameter of itself. One of the hardest design problems is actuating the outer ectoplasm.
									</p><br>

								<h2>Blob Bot</h2>
									<p>
										<a href="https://spectrum.ieee.org/automaton/robotics/robotics-software/irobot-soft-morphing-blob-chembot">This robot</a> is a palm-sized shape shifting robot (<a href="https://youtu.be/SbqHERKdlK8"></a>). It looks like a ball when it is at full size, but compresses down to a blob when it is deflated. Essentially, researchers can inflate parts of the outer skin to move in a certain direction. It rolls and changes shape, which could potentially be useful in maneuvering around small spaces. Instead of whole skin locomotion like an amoeba, this uses “jamming skin enabled locomotion”. This article is from 2009, but the end of the article looks toward the future where multiple robots might be combined together or sensors can be attached to the robot.
									</p><br>

								<h2>Robtotic Worm</h2>
									<p>
										<a href="https://phys.org/news/2011-07-giant-robotic-worm-mimics-elegans.html">This robot</a> uses side-to-side worm movements to move through rubble. Its inventor wants the worm to be able to move through different environments such as water, snow, and mud. Snake- or worm-like robots are typically propelled forwards by an 'ideal' wave that their control system has worked out in advance. When they meet an obstacle, the control system senses that something is hampering the way it wants to move and directs the robot to change its shape accordingly. A drawback is that this robot isn’t interested in its surroundings and just wants to move forward. It would be cool to see a robot that is cognizant of its surroundings while still maneuvering through tight spots.
									</p><br>

								<h2>Automatic detection of access holes in disaster rubble</h2>
									<p>
										This is a <a href="http://ieeexplore.ieee.org/xpls/icp.jsp?arnumber=6719364"> paper</a> on hole detection in rubble to determine if canines or robots can enter for a search and rescue operation. This would allow rescuers to identify easy entry points. First, a hole is defined by its functionality as a means for accessing the interior; then, geometric and photometric features are used for hole detection. The team conducted experiments using RGB-D data collected over several disaster training facilities using a UAV.
									</p><br>

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
