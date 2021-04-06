<template>
	<!-- 主营项目-虫杀杀安心家 -->
	<scroll-view class="disinfestation" scroll-y enable-back-to-top>
		<image class="explain-person" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1609035493613/appoinetment-bg-person.png"></image>
		<image class="disinfestation-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1611285729952/appointment-bg.png"
		 mode="widthFix"></image>
		<view class="disinfestation-button" @click="goAppointment"></view>
	</scroll-view>
</template>

<script>
	export default {
		methods: {
			goAppointment() {
				uni.switchTab({
					url: "../appointment/appointment"
				})
			}
		}
	}
</script>

<style scoped>
	.disinfestation {
		width: 100vw;
		height: 100%;
		position: relative;
		overflow: scroll;
		font-size: 0;
		-webkit-overflow-scrolling: touch;
	}

	.disinfestation-bg {
		width: 100%;
		height: auto;
	}
	
	.explain-person{
		position: absolute;
		width: 680rpx;
		height: 657rpx;
		top:20rpx;
		left:0;
		right: 0;
		margin: 0 auto;
	}
	
	.explain-person image{
		width: 680rpx;
		height: 657rpx;
	}

	.disinfestation-button {
		position: absolute;
		top: 5350rpx;
		width: 100%;
		height: 100rpx;
		font-size: 0;
		z-index: 2;
	}
</style>
