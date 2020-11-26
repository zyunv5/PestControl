<template>
	<scroll-view class="neighbor" scroll-y>
			<image lazy-load="true" class="neighbor-bg" src="https://statich.yidianzixun.com/public/file/1605671209343/neighbor.jpg" mode="scaleToFill"></image>
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

<style>
.neighbor {
		width: 100vw;
		height: 100vh;
		position: relative;
		overflow: scroll;
		font-size: 0;
		-webkit-overflow-scrolling: touch;
		background-color: rgb(234,234,234);
	}

	.neighbor-bg {
		width: 100%;
		height: 100%;
	}
</style>
