<template>
	<view class="order">
		<view class="order-switch">
			<view class="switch-list switch-going" :class="{'switch-select':isActive===0}" @click="changeTab(0)">进行中的订单</view>
			<view class="switch-list switch-end" :class="{'switch-select':isActive===1}" @click="changeTab(1)">已完成的订单</view>
		</view>
			<scroll-view scroll-y="true" class="order-content" v-if="isActive===0">
				<view>123</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="order-content" v-if="isActive===1">
				<view>456</view>
			</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive:0
			}
		},
		methods: {
			changeTab(num){
				this.isActive=num
			}
		}
	}
</script>

<style>
.order{
	width: 100%;
	height: 100%;
	background-color: rgb(234,234,234);
	box-sizing: border-box;
	padding-top: 85rpx;
}
.order-switch{
	width: 576rpx;
	height: 115rpx;
	margin: 0 auto;
	border-radius: 20rpx;
	background-color: #fff;
	display: flex;
	flex-direction: row;
}
.switch-list{
	width: 50%;
	height: 115rpx;
	line-height: 115rpx;
	text-align: center;
}
.switch-select{
	background-color: rgb(209,209,209);
}
.order-content{
	width: 576rpx;
	margin: 0 auto;
}
</style>
