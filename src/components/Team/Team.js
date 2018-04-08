import MemberPage from '../MemberPage/MemberPage.vue'
import animated_image from '../common/animated_image.vue'
import animated_title from '../common/animated_title.vue'
import animated_par from '../common/animated_par.vue'

export default {
	name: 'Team',
	components: {
		MemberPage,
		animated_image,
		animated_title,
		animated_par,
	},
	data: function() {
		return {
			team_members: [
				{name: "Gurkiran Dhaliwal", id: "gurkiran", image:"static/images/temp-prof.jpg", position: "Code Daddy",
				description: "I'm a third year math major, and I joined this club because I'm interested in autonomous robots. I want to learn more about how to design systems that can react to environmental inputs and make decisions on their own. I also enjoy the challenge of simplifying complicated tasks so that they can be handled by software. I'm hoping that through this project I will become a better programmer and will have more experience with the hardware side of robotics. My other interests include computer vision, painting, violin, and pool.",
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
				{name: "Stephanie Djajadi", id: "stephanie", image:"static/images/steph.jpg", position: "Finance Minister",
				description: "Hi! I'm a first-year studying computer science and data science, and I'm excited to learn about the potential of humanitarian applications of robotics. Outside of school, I like eating ramen, learning random fun facts, and exploring new places!",
				social: [{text: "email", href: "mailto:sdjajadi@berkeley.edu", id: "email"}]},
				{name: "Michael Lee", id: "michael", image:"static/images/temp-prof.jpg", position: "Social Media Rep",
				description: "I am a third year EECS student at UC Berkeley. My interests include machine learning, control systems, and coffee.",
				social: [{text: "email", href: "mailto:hyunkyu@berkeley.edu", id: "email"}]},
				{name: "Lavanya Mittal", id: "lavanya", image:"static/images/lavanya.jpg", position: "Chief Technology Officer",
				description: "Hiiiiii! I'm a third year CS major with an interest in applying AI to robotics! I look forward to learning as much as I can and seeing how my passions can be applied to a meaningful social cause, such as aiding in a humanitarian crisis. In my spare time I like to hike, play board games, and be a big toon on Toontown. Catch me as Dr. Huddles!",
				social: [{text: "email", href: "mailto:lavamitt@berkeley.edu", id: "email"}]},
				{name: "William Tai", id: "will", image:"static/images/will.jpg", position: "Team Dictator",
				description: "Hey, I’m a first year MechE major who's most likely gonna minor in EECS or CS, and I’ve always loved robotics. I engaged mostly in the design aspect, but I would love to learn more about the software part. Besides school, I’m a big Lakers and Warriors fan, and I love eating Chipotle and playing with my dog Beebo.",
				social: [{text: "email", href: "mailto:williamt@berkeley.edu", id: "email"}]},
			],
			isActive: false,
			activeMember: null,
			isLocked: false,
		}
	},
	methods: {
		beforeEnter: function(el, done) {
		},
		enterAnimation: function(el, done) {
			done();
		},
		setActive: function(el, done) { this.isActive = true; },
		isEven: function(n) { return false; },
		isMid: function(n) { return n % 3 == 1; },
		isLast: function(n) { return n % 3 == 2; },
		memberClick: function(member) {
			if (this.$refs.memberPage.isOpen) {
				var onClose = this.newMember.bind(this)
				this.$refs.memberPage.close( onClose, member);
			}
			else {
				this.newMember(member);
			}
		},
		newMember: function(member)
		{
			this.activeMember = member;
			this.$refs.memberPage.open();
			this.isLocked = true;
		},
		setUnlocked: function()
		{
			console.log("HELLO");
			this.isLocked = false;
		}
	}
}
