import animated_list from '../common/animated_list.vue'

export default {
	name: 'MemberPage',
	props: ['member', 'onClose'],
	components: {
		animated_list
	},
	data: function() {
		return {
			isOpen: false,
			width: this.getWidth(),
			height: this.getHeight(),
		}
	},
	mounted: function() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.onResize);

			this.onResize();
		})
	},
	methods: {
		close: function(onClose, options) {
			TweenMax.killTweensOf(this.$el);
			TweenMax.to(
				this.$el,
				1,
				{
					x: -this.width,
					ease: Expo.easeInOut,
					onComplete: this.setClose,
					onCompleteParams: [onClose, options]
				}
			);
		},
		open: function() {
			this.isOpen = true;
			TweenMax.to(
				this.$el,
				1,
				{
					x: 0,
					ease: Expo.easeInOut,
				}
			);
		},
		getWidth: function() {
			return document.documentElement.clientWidth * 0.5;
		},
		getHeight: function() {
			return document.documentElement.clientHeight * 0.5;
		},
		onResize: function() {

			this.width = this.getWidth();
			this.height = this.getHeight();

			if (!this.isOpen)
			{
				TweenMax.set(
					this.$el,
					{
						x: -this.width,
					}
				);
			}
		},
		setClose: function(onComp, options) {
			this.isOpen = false;

			if (typeof onComp == "function")
			{
				onComp(options);
			}
			else if (typeof this.onClose == "function")
			{
				this.onClose();
			}
		},
		itemClick: function() {
			return 2;
		}
	}
}
