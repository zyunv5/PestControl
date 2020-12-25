<template>
	<!-- 主营项目-虫杀杀安心家 -->
	<scroll-view class="disinfestation" scroll-y>
		<image class="disinfestation-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1608456169217/appointment-bg.png"
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

	.disinfestation-button {
		position: absolute;
		top: 3550rpx;
		width: 100%;
		height: 100rpx;
		font-size: 0;
		z-index: 2;
	}
</style>
