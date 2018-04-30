import MemberPage from '../MemberPage/MemberPage.vue'
import animated_image from '../common/animated_image.vue'
import animated_title from '../common/animated_title.vue'
import animated_par from '../common/animated_par.vue'

export default {
	name: 'Journal',
	components: {
		MemberPage,
		animated_image,
		animated_title,
		animated_par,
	},
	data: function() {
		return {
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
