<template>
	<!-- 主营项目 -->
	<view class="project">
		<view class="project-list">
			<view class="list-title">服务类目名单</view>
			<image @click="goDisinfestation" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1608454978834/project1.png" mode="widthFix"></image>
			<image src="https://statich.yidianzixun.com/public/file/1608454978834/project2.png" lazy-load="true" mode="widthFix"></image>
			<image src="https://statich.yidianzixun.com/public/file/1608454978834/project3.png" lazy-load="true" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goDisinfestation() {
				uni.navigateTo({
					url: "../disinfestation/disinfestation"
				})
			}
		}
	}
</script>

<style scoped>
	.project {
		width: 100%;
		padding-top: 30rpx;
	}

	.project-list {
		box-sizing: border-box;
		width: 92%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.list-title {
		width: 692rpx;
		height: 95rpx;
		line-height: 95rpx;
		background-color: #ffffff;
		border-radius: 10rpx;
		text-align: center;
	}

	.project-list image:nth-child(1) {
		width: 692rpx;
		height: 80rpx;
		margin-bottom: 10rpx;
	}

	.project-list image:nth-child(2),
	.project-list image:nth-child(3),
	.project-list image:nth-child(4) {
		width: 692rpx;
		height: 340rpx;
		margin: 10rpx 0;
	}
</style>
