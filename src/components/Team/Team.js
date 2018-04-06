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
				{name: "Gurkiran Dhaliwal", id: "gurkiran", image:"static/images/temp-prof.jpg", position: "Web Lackey", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.", 
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
				{name: "Stephanie Djadjadi", id: "stephanie", image:"static/images/temp-prof.jpg", position: "Finance Minister", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.", 
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
				{name: "Michael Lee", id: "michael", image:"static/images/temp-prof.jpg", position: "Social Media Rep", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.", 
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
				{name: "Lavanya Mittal", id: "lavanya", image:"static/images/temp-prof.jpg", position: "Publicity Chair", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.", 
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
				{name: "Will Tai", id: "will", image:"static/images/temp-prof.jpg", position: "Team Leader", 
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis porttitor magna ut aliquam. Nunc ipsum risus, scelerisque non tempus et, pretium dictum turpis. Quisque vel lectus efficitur, consequat libero hendrerit, malesuada orci. Proin sollicitudin arcu mi, porttitor feugiat tortor scelerisque eget. Donec et eros sed libero aliquam tempus. Pellentesque lacinia placerat sem, sed dignissim nisl consectetur eget. Morbi non dui metus. Aliquam erat volutpat.", 
				social: [{text: "github", href: "https://github.com/gurkirand", id:"github"}, {text: "email", href: "mailto:gurkirand@gmail.com", id: "email"}]},
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
