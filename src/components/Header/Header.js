import animated_list from '../common/animated_list.vue'

export default {
	name: 'Nav',
	components: {
		animated_list
	},
	data: function() {
		return {
			nav_items: [
				{text:"Journal", id:'journal-nav', to:'journal'}, 
				{text: "Team", id:'team-nav', to:'team'},
				{text: "About", id:'about-nav', to:'about'}
			],
			isActive: false
		}
	},
	methods: {
		appearTransition: function(el, done) {
			TweenMax.fromTo(
				[el.querySelector("#site-title"), el.querySelector("#site-nav")], 
				1.25,
				{
					opacity: 0,
					y: 30,
				},
				{
					ease: Expo.easeOut,
					opacity: 1,
					y: 0,
					onComplete: done
				}
			);
		},
		setActive: function(el, done) { this.isActive = true; },
		handleScroll: function(el, done) {
			if (!this.isActive) {
				return;
			}
			console.log("SCROLL");
		}
	},
	created () {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	}
}

// data () {
//   return {
//     scrolled: false
//   };
// },
// methods: {
//   handleScroll () {
//     this.scrolled = window.scrollY > 0;
//   }
// },
// created () {
//   window.addEventListener('scroll', this.handleScroll);
// },
// destroyed () {
//   window.removeEventListener('scroll', this.handleScroll);
// }
