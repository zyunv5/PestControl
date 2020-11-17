<template>
	<scroll-view class="content" scroll-y>
		<image class="content-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1605598295554/bg.jpg" mode="widthFix"></image>
		<view class="content-list">
			<image @click="goAppointment" src="../../static/b1.png" mode="aspectFit"></image>
			<image @click="goExplain" src="../../static/b2.png" mode="aspectFit"></image>
			<image @click="goProjects" src="../../static/b3.png" mode="aspectFit"></image>
		</view>
		<swiper class="content-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/swiper1.png" mode="aspectFit"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="../../static/swiper1.png" mode="aspectFit"></image>
				</view>
			</swiper-item>
		</swiper>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(11);
		},
		methods: {
			goAppointment() {
				uni.navigateTo({
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
		}
	}
</script>

<style>
	.content {
		width: 100vw;
		height: 100%;
		position: relative;
		overflow: scroll;
		font-size: 0;
	}

	.content-bg {
		width: 100%;
		height: auto;
	}

	.content-list {
		position: absolute;
		width: 80%;
		height: auto;
		margin: 0 auto;
		top: 332rpx;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
	}

	.content-list image {
		width: 185rpx;
		height: 185rpx;
	}

	.content-swiper {
		position: absolute;
		top: 540rpx;
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 600rpx;
		height: 344rpx;
	}

	.swiper-item image {
		width: 600rpx;
		height: 344rpx;
	}
</style>
