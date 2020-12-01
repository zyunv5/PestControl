<template>
	<view class="self">
		<view class="self-header">
			<view class="header-avatar">
				<image class="avatar-img" src="../../static/icon.png" mode="scaleToFill"></image>
			</view>
			<view class="header-user">
				<span class="user-title">虫杀杀小管家</span>
				<span class="user-name">用户名：{{username}}</span>
				<span class="user-phone">绑定手机：{{userphone}}</span>
			</view>
		</view>
		<view class="self-bar"></view>
		<view class="self-bottom">
			<view @click="goOrder" class="bottom-list">
				<view class="order-icon">
					<image src="../../static/i1.jpg" mode="widthFix"></image>
				</view>
				<view>我的订单</view>
			</view>
			<view class="bottom-list">
				<view class="customer-icon">
					<image src="../../static/i2.jpg" mode="widthFix"></image>
				</view>
				<view>联系客服</view>
			</view>
			<view class="bottom-list">
				<view class="question-icon">
					<image src="../../static/i3.jpg" mode="widthFix"></image>
				</view>
				<view>常见问题</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				username: 'aacc',
				userphone: 13933330000
			}
		},
		methods: {
			goOrder() {
				uni.navigateTo({
					url: "../order/order"
				})
			}
		}
	}
</script>
<style scoped>
	.self {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: rgb(234, 234, 234);
	}

	.self-header {
		box-sizing: border-box;
		width: 100%;
		height: 36.35vh;
		background-color: rgb(21, 23, 44);
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		padding: 0 60px 50rpx 60rpx;
	}

	.header-avatar {
		width: 150rpx;
		height: 150rpx;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
	}

	.header-user {
		width: 300rpx;
		margin-left: 25rpx;
		display: flex;
		flex-direction: column;
	}

	.header-user span {
		color: #fff;
	}

	.header-user span:nth-child(2),
	.header-user span:nth-child(3) {
		font-size: 12px;
	}

	.self-bar {
		height: 25rpx;
		width: 100%;
		background: linear-gradient(to right, #ff6611, #f3b28f, #fff)
	}

	.self-bottom {
		flex: 1;
		padding-top: 42rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.bottom-list {
		width: 632rpx;
		height: 116rpx;
		border-radius: 10rpx;
		background-color: #fff;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		padding-left: 40rpx;
	}
	.order-icon,.customer-icon,.question-icon{
		width: 70rpx;
		height: 60rpx;
		margin-right: 10rpx;
	}
	.order-icon image,.customer-icon image,.question-icon image{
		width: 100%;
	}
</style>
