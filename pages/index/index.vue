<template>
	<!-- 首页 -->
	<view class="index">
		<view class="content-init" v-show="!initState">
			<image src="https://statich.yidianzixun.com/public/file/1606285599416/init.jpg" alt="" mode="scaleToFill">
		</view>
		<scroll-view class="content" v-show="initState" scroll-y>
			<image class="content-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1608456013258/index.png"
			 mode="widthFix"></image>
			<view class="content-list">
				<image @click="goAppointment" src="https://statich.yidianzixun.com/public/file/1606286771148/p1.png" mode="widthFix"></image>
				<image @click="goExplain" src="https://statich.yidianzixun.com/public/file/1606286771148/p2.png" mode="widthFix"></image>
				<image @click="goProjects" src="https://statich.yidianzixun.com/public/file/1606286771148/p3.png" mode="widthFix"></image>
			</view>
			<swiper class="content-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
				<swiper-item>
					<view class="swiper-item" @click="goNeightbor">
						<image src="https://statich.yidianzixun.com/public/file/1605754071093/swiper1.png" mode="widthFix"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item" @click="goWeekday">
						<image src="https://statich.yidianzixun.com/public/file/1608555853628/swiper2.png" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</scroll-view>
	</view>

</template>

<script>
	export default {
		onLoad() {
			// uni.hideTabBar()
		},
		computed: {
			initState() {
				return this.$store.state.init
			}
		},
		beforeCreate() {
			if (!this.$store.state.init) {
				setTimeout(() => {
					this.$store.dispatch('changeInit');
					uni.showTabBar()
				}, 3000)
			} else {
				uni.showTabBar()
			}
		},
		mounted() {
			// console.log(this.initState)
			// uni.request({
			//     url: 'https://api.heimancc.com/art', //仅为示例，并非真实接口地址。
			//     success: (res) => {
			//         console.log(res.data);
			//         this.text = 'request success';
			//     }
			// });
		},
		methods: {
			goAppointment() {
				uni.switchTab({
					url: "../appointment/appointment"
				})
			},
			goExplain() {
				uni.navigateTo({
					url: "../explain/explain"
				})
			},
			goProjects() {
				uni.navigateTo({
					url: "../projects/projects"
				})
			},
			goNeightbor() {
				uni.navigateTo({
					url: "../neighbor/neighbor"
				})
			},
			goWeekday(){
				uni.navigateTo({
					url: "../weekdayDiscount/weekdayDiscount"
				})
			}
		}
	}
</script>

<style>
	.index {
		width: 100vw;
		height: 100vh;
	}

	.content-init {
		width: 100vw;
		height: 100vh;
		position: fixed;
		z-index: 99;
	}

	.content-init>image {
		width: 100vw;
		height: 100vh;
	}

	.content {
		width: 100vw;
		height: 100vh;
		position: relative;
		font-size: 0;
	}

	.content-bg {
		width: 100%;
		height: auto;
	}

	.content-list {
		position: absolute;
		width: 92%;
		height: auto;
		margin: 0 auto;
		top: 318rpx;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	.content-list image {
		width: 213rpx;
		height: auto;
	}

	.content-swiper {
		position: absolute;
		top: 559rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 692rpx;
		height: 395rpx;
	}

	.swiper-item image {
		width: 692rpx;
		height: 395rpx;
	}
</style>
