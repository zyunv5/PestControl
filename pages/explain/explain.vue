<template>
	<!-- 费用说明 -->
	<view class="explain">
		<image class="explain-logo" src="https://statich.yidianzixun.com/public/file/1606877321188/explain_logo.png" mode="widthFix"></image>
		<image class="explain-price1" src="https://statich.yidianzixun.com/public/file/1608556303977/price1.png" mode="widthFix"></image>
		<image class="explain-price2" src="https://statich.yidianzixun.com/public/file/1608556303977/price2.png" mode="widthFix"></image>
		<button class="explain-button" @click="goHome">返 回</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goHome() {
				uni.switchTab({
					url: "../index/index"
				})
			}
		}
	}
</script>

<style>
	.explain {
		width: 100%;
		height: auto;
		position: relative;
		font-size: 0;
		/* background-color: rgb(234, 234, 234); */
		padding: 20rpx 4% 20rpx 4%;
		box-sizing: border-box;
	}

	.explain-logo {
		width: 214rpx;
		height: auto;
		margin-bottom: 50rpx;
	}

	.explain-price1,
	.explain-price2 {
		width: 653rpx;
		height: auto;
		margin: 0 auto 20rpx;
		text-align: center;
		display: block;
	}

	.explain-button {
		width: 653rpx;
		height: 80rpx;
		background-color: rgb(21, 23, 44);
		border-radius: 10rpx;
		color:#fff;
	}
</style>
