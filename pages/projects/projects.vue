<template>
	<view class="project">
		<view class="project-list">
			<image src="../../static/title.png" mode="widthFix"></image>
			<image @click="goDisinfestation" src="https://statich.yidianzixun.com/public/file/1606288248012/project1.png" mode="widthFix"></image>
			<image src="https://statich.yidianzixun.com/public/file/1606288248012/project2.png" mode="aspectFill"></image>
			<image src="https://statich.yidianzixun.com/public/file/1606288248012/project3.png" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goDisinfestation(){
				uni.navigateTo({
					url: "../disinfestation/disinfestation"
				})
			}
		}
	}
</script>

<style>
.project{
	width: 100%;
	height: 100%;
	font-size: 0;
	background-color: rgb(234,234,234);
	padding-top: 30rpx;
	
}
.project-list{
	box-sizing: border-box;
	width: 80%;
	height: calc(100% - 60rpx);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.project-list image:nth-child(1){
	width:600rpx;
	height: 80rpx;
}
.project-list image:nth-child(2),.project-list image:nth-child(3),.project-list image:nth-child(4){
	width:600rpx;
	height: 340rpx;
}
</style>
