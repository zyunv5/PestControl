<template>
	<!-- 相邻计划 -->
	<scroll-view class="neighbor" scroll-y>
			<image lazy-load="true" class="neighbor-bg" src="https://statich.yidianzixun.com/public/file/1608454978834/neighbor.png" mode="widthFix"></image>
	</scroll-view>
</template>

<style>
.neighbor {
		width: 100vw;
		position: relative;
		overflow: scroll;
		font-size: 0;
		-webkit-overflow-scrolling: touch;
	}

	.neighbor-bg {
		width: 100%;
		height: 100%;
	}
</style>
