<template>
	<view class="detail">
		<image class="detail-logo" src="https://statich.yidianzixun.com/public/file/1606982036905/detail-logo.png" mode="widthFix"></image>
		<image class="detail-title-info" src="https://statich.yidianzixun.com/public/file/1606982036905/title-info.png" mode="widthFix"></image>
		<view class="detail-form">
			<view class="form-list">{{name}}</view>
			<view class="form-list">{{phone}}</view>
			<view class="form-list">{{area}}</view>
			<view class="form-list form-textarea">{{address}}</view>
		</view>
		<image class="detail-title-time" src="https://statich.yidianzixun.com/public/file/1606982036905/title-time.png" mode="widthFix"></image>
		<view class="detail-time">{{time}}</view>
		<button class="detail-motify">修改订单</button>
		<button class="detail-cancel" @click="deleteProject">取消订单</button>
	</view>
</template>

<script>
	export default {
		onLoad(option) {
			const queryItem=JSON.parse(option.item)
			this.name=queryItem.userName;
			this.phone=queryItem.userPhone;
			this.area=queryItem.userArea;
			this.address=queryItem.userAddress;
			this.time=queryItem.createdAt;
		},
		data() {
			return {
				name:"",
				phone:"",
				area:"",
				address:"",
				time:""
			}
		},
		methods: {
			deleteProject() {
				uni.showModal({
					title: "提醒",
					content: '确认删除该订单',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style>
	.detail {
		box-sizing: border-box;
		width: 100%;
		height: auto;
		background-color: rgb(234, 234, 234);
		padding: 20rpx 4% 0 4%;
	}

	.detail-logo {
		display: block;
		width: 219rpx;
		height: 122rpx;
		margin-bottom: 53rpx;
	}

	.detail-title-info {
		width: 235rpx;
		height: 45rpx;
		margin-bottom: 40rpx;
	}

	.detail-form {
		width: 700rpx;
		height: 452rpx;
		margin-bottom: 41rpx;
	}

	.form-list {
		box-sizing: border-box;
		width: 700rpx;
		height: 78rpx;
		line-height: 78rpx;
		margin-bottom: 20rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		padding-left: 35rpx;
		color: #aaaaaa;
	}

	.form-textarea {
		height: 144rpx;
		margin-bottom: 0;
		color: #aaaaaa;
	}

	.detail-title-time {
		width: 400rpx;
		height: 47rpx;
		margin-bottom: 51rpx;
	}

	.detail-time {
		width: 700rpx;
		height: 78rpx;
		line-height: 78rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
		margin-bottom: 60rpx;
		padding-left: 35rpx;
		color: #aaaaaa;
	}

	.detail-motify {
		width: 695rpx;
		height: 98rpx;
		margin-bottom: 21rpx;
		background-color: rgb(21, 23, 44);
		color: #FFFFFF;
	}

	.detail-cancel {
		width: 695rpx;
		height: 98rpx;
		margin-bottom: 21rpx;
		background-color: rgb(255, 78, 0);
		color: #FFFFFF;
	}
</style>
