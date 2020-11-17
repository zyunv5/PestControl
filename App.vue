<!-- <template>
	<image v-if="showLoading" class="launch-img" src="https://statich.yidianzixun.com/public/file/1605540741621/loading.png" alt="" mode="scaleToFill" />
</template> -->
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	html,body{
		width:100%;
		height: 100%;
	}
	page{
		width:100%;
		height: 100%;
	}
</style>
