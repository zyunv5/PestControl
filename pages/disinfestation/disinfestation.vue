<template>
	<scroll-view class="disinfestation" scroll-y>
		<image class="disinfestation-bg" lazy-load="true" src="https://statich.yidianzixun.com/public/file/1605602992706/appointment-bg.jpg" mode="widthFix"></image>
		<view class="disinfestation-button">
			<image src="../../static/appointment.png" mode="widthFix"></image>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
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
	}

	.disinfestation-bg {
		width: 100%;
		height: auto;
	}
	.disinfestation-button{
		width: 100%;
		font-size: 0;
	}
	.disinfestation-button image{
		width: 100%;
	}
</style>
