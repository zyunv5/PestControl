<template>
	<view>
		<scroll-view class="weekday" scroll-y>
			<image lazy-load="true" class="weekday-bg" src="https://statich.yidianzixun.com/public/file/1608555853628/weekdayDiscount.png" mode="widthFix"></image>
		</scroll-view>
	</view>
</template>

<style scoped>
.weekday {
	width: 100vw;
	position: relative;
	overflow: scroll;
	font-size: 0;
	-webkit-overflow-scrolling: touch;
}

.weekday-bg {
	width: 100%;
	height: 100%;
}
</style>
