<template>
	<scroll-view class="disinfestation" scroll-y>
		<image class="disinfestation-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1606805602975/appointment-bg.jpg" mode="widthFix"></image>
		<view class="disinfestation-button" @click="goAppointment"></view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goAppointment(){
				uni.navigateTo({
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
		background-color: rgb(234,234,234);
	}

	.disinfestation-bg {
		width: 100%;
		height: auto;
	}
	.disinfestation-button{
		position: absolute;
		top: 3550rpx;
		width: 100%;
		height: 100rpx;
		font-size: 0;
		z-index: 2;
	}
</style>
