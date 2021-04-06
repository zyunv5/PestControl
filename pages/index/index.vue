<template>
	<!-- 首页 -->
	<view class="index">
		<view class="content-init" v-show="isLoading">
			<image src="https://statich.yidianzixun.com/public/file/1606285599416/init.jpg" alt="" mode="scaleToFill">
		</view>
		<scroll-view class="content" v-show="!isLoading" scroll-y>
			<image class="content-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1611285729952/index.png"
			 mode="widthFix"></image>
			<view class="content-list">
				<image @click="goAppointment" src="https://statich.yidianzixun.com/public/file/1606286771148/p1.png" mode="widthFix"></image>
				<image @click="goExplain" src="https://statich.yidianzixun.com/public/file/1606286771148/p2.png" mode="widthFix"></image>
				<image @click="goProjects" src="https://statich.yidianzixun.com/public/file/1606286771148/p3.png" mode="widthFix"></image>
			</view>
			<swiper class="content-swiper" :autoplay="true" :interval="3000" :duration="500" @change="changSwiper">
				<swiper-item v-for="item in bannerData" :key="item.id">
					<view class="swiper-item" @click="goRouter(item.id)">
						<image :src="item.src" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="bannerDots flex_c abs">
				<view v-for="item in bannerData" :key="item.id" class="dot" :class="[currentIndex==item.id?'active':'']"></view>
			</view>
			<view class="content-person">
				<image src="https://statich.yidianzixun.com/public/file/1609000827582/index-person.PNG" lazy-load="true" mode="widthFix"></image>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLoading: true,
				bannerData: [{
						src: 'https://statich.yidianzixun.com/public/file/1605754071093/swiper1.png',
						id: 0
					},
					{
						src: 'https://statich.yidianzixun.com/public/file/1608555853628/swiper2.png',
						id: 1
					},
				],
				currentIndex: 0,
			}
		},
		onLoad() {
			uni.hideTabBar();
			setTimeout(() => {
				this.isLoading = false;
				// this.$store.dispatch('changeInit',true);
				uni.showTabBar()
			}, 3000)
		},
		computed: {
			initState() {
				return this.$store.state.init
			}
		},
		beforeCreate() {},
		mounted() {},
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
			goRouter(id) {
				if (id === 0) {
					uni.navigateTo({
						url: "../neighbor/neighbor"
					})
				} else if (id === 1) {
					uni.navigateTo({
						url: "../weekdayDiscount/weekdayDiscount"
					})
				}
			},
			changSwiper(e) {
				let current = e.detail.current
				this.currentIndex = current
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
		top: 327rpx;
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
		top: 565rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 692rpx;
		/* height: 395rpx; */
		height: 455rpx;
	}


	.swiper-item image {
		width: 692rpx;
		height: 455rpx;
	}

	.content-person {
		width: 699rpx;
		height: 588rpx;
		position: absolute;
		top: 990rpx;
		left: 30rpx;
	}

	.content-person image {
		width: 699rpx;
		height: 588rpx;
	}

	.bannerDots {
		width: 155rpx;
	}

	.dot {
		width: 28rpx;
		height: 8rpx;
		margin: 0 1px;
		border-radius: 2px;
		background-color: rgb(193, 193, 193);
	}

	.dot.active {
		background-color: #fff;
	}

	.abs {
		position: absolute;
		top: 910rpx;
		left: 30rpx;
	}

	.flex_c {
		display: flex;
		justify-content: center;
	}
</style>
