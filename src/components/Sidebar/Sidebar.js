import animated_list from '../common/animated_list.vue'

export default {
	name: 'Sidebar',
	components: {
		animated_list
	},
	props: ['navItems', 'onLoad', 'beforeClose', 'onClose'],
	data: function() {
		return {
			isActive: false,
			isOpen: false,
			width: this.getWidth(),
			height: this.getHeight(),
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.onResize);

			this.getWidth();
			this.getHeight();
		})
	},
	methods: {
		beforeLoad: function(el, done) {
			TweenMax.set(
				el,
				{
					x: 100 - this.width,
					clearProps: "z-index"
				}
			);
		},
		loadAnimation: function(el, done) {

			TweenMax.fromTo(
				el.querySelector("#sidebar-line"),
				2.5,
				{
					y: -this.height,
				},
				{
					delay: 0.5,
					ease: Expo.easeInOut,
					y: 0,
					onComplete: done,
					clearProps: "all",
				}
			)
			
			TweenMax.fromTo(
				[el.querySelector("#sticky-logo"), el.querySelector("#sticky-burger")], 
				1.5,
				{
					opacity: 0,
					y: 30,
				},
				{
					delay: 2,
					ease: Expo.easeOut,
					opacity: 1,
					y: 0,
					clearProps: "all",
					onComplete: done,
				}
			);
		},
		burgerClickHandler: function(el, done) {
			if (this.isOpen)
			{
				this.isOpen = false;
				this.close(el, done);
			}
			else
			{
				this.isOpen = true;
				this.open(el, done);
			}
		},
		open: function(el, done) {
			TweenMax.to(
				this.$el,
				1,
				{
					x: 0,
					ease: Expo.easeInOut,
					clearProps: "z-index",
				}
			);
		},
		close: function(el, done) {
			this.beforeClose();
			TweenMax.killTweensOf(this.$el);
			TweenMax.to(
				this.$el,
				1,
				{
					x: 100 - this.width,
					ease: Expo.easeInOut,
					clearProps: "z-index",
					onComplete: this.onClose
				}
			);
		},
		getWidth: function() {
			return document.documentElement.clientWidth;
		},
		getHeight: function() {
			return document.documentElement.clientHeight;
		},
		setActive: function(el, done) { 
			this.isActive = true; 
			if (typeof this.onLoad == 'function') {
				this.onLoad();
			}
		},
		onResize: function() {

			this.width = this.getWidth();
			this.height = this.getHeight();

			if (!this.isOpen)
			{
				TweenMax.set(
					this.$el,
					{
						x: 100 - this.width,
						clearProps: "z-index",
					}
				);
			}
		}
	},
}
