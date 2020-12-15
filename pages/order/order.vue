<template>
	<view class="order">
		<view class="order-switch">
			<view class="switch-list switch-going" :class="{'switch-select select-left':isActive===0}" @click="changeTab(0)">进行中的订单</view>
			<view class="switch-list switch-end" :class="{'switch-select select-right':isActive===1}" @click="changeTab(1)">已完成的订单</view>
		</view>
		<scroll-view scroll-y="true" class="order-content" v-if="isActive===0">
			<view class="content-list" v-for="item in listData" :key="item.id" @click="seeDetail(item.id)">
				<span class="list-title">{{item.project}}</span>
				<span class="list-time">下单时间:{{item.orderTime}}</span>
				<span class="list-time">安心家服务:{{item.serviceTime}}</span>
			</view>
			<image class="content-img" src="../../static/list-bottom.png" mode="widthFix"></image>
		</scroll-view>
		<scroll-view scroll-y="true" class="order-content" v-if="isActive===1">
			<view class="content-list">
				<span class="list-title">安心家服务</span>
				<span class="list-time">下单时间:2020/11/5 15:32</span>
				<span class="list-time">安心家服务:2020/11/6 15:00</span>
			</view>
			<image class="content-img" src="../../static/list-bottom.png" mode="widthFix"></image>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: 0,
				listData:[
					{
						id:1,
						project:"安心家服务",
						orderTime:"2020/11/5 15:32",
						serviceTime:"2020/11/6 15:00"
					},
					{
						id:2,
						project:"安心家服务",
						orderTime:"2020/11/5 15:35",
						serviceTime:"2020/11/6 18:00"
					},
				]
			}
		},
		beforeCreate() {
			const token=wx.getStorageSync("token")
			uni.request({
				url: 'http://localhost:7001/getUserOrder',
				method: "GET",
				data: {
					token: token
				},
				success: (res) => {
					console.log(res);
				}
			});
		},
		methods: {
			changeTab(num) {
				this.isActive = num
			},
			seeDetail(id){
				uni.navigateTo({
					url: `../detail/detail?id=${id}`
				})
			}
		}
	}
</script>

<style>
	.order {
		width: 100%;
		height: 100%;
		background-color: rgb(234, 234, 234);
		box-sizing: border-box;
		padding-top: 85rpx;
	}

	.order-switch {
		width: 576rpx;
		height: 115rpx;
		margin: 0 auto;
		border-radius: 20rpx;
		background-color: #fff;
		display: flex;
		flex-direction: row;
	}

	.switch-list {
		width: 50%;
		height: 115rpx;
		line-height: 115rpx;
		text-align: center;
	}

	.switch-select {
		background-color: rgb(209, 209, 209);
	}

	.select-left {
		border-radius: 20rpx 0 0 20rpx;
	}

	.select-right {
		border-radius: 0 20rpx 20rpx 0;
	}

	.order-content {
		width: 576rpx;
		margin: 40rpx auto 0;
	}

	.content-list {
		box-sizing: border-box;
		width: 576rpx;
		height: 176rpx;
		border-radius: 20rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-top: 40rpx;
		padding-left: 40rpx;
		margin-bottom: 20rpx;
	}

	.list-title {
		font-weight: bold;
	}

	.list-time {
		font-size: 25rpx;
		color: rgb(209, 209, 209);
	}

	.content-img {
		margin-top: 40rpx;
		width: 100%;
	}
</style>
