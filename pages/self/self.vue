<template>
	<!-- 我的 -->
	<view class="self">
		<view class="self-header">
			<view class="header-avatar">
				<button v-if="isLogin" class="avatar-login" open-type="getUserInfo" @getuserinfo='getUserInfo'></button>
				<image class="avatar-img" :src="userAvatar" mode="scaleToFill"></image>
			</view>
			<view class="header-user">
				<button class="user-title" open-type="getUserInfo" @getuserinfo='getUserInfo'>{{userName}}</button>
			</view>
		</view>
		<view class="self-bar"></view>
		<view class="self-bottom">
			<view @click="goOrder" class="bottom-list">
				<button v-if="isLogin" class="list-login" open-type="getUserInfo" @getuserinfo='getUserInfo'></button>
				<view class="order-icon">
					<image src="../../static/i1.png" mode="widthFix"></image>
				</view>
				<view>我的订单</view>
			</view>
			<view @click="phoneService" class="bottom-list">
				<button v-if="isLogin" class="list-login" open-type="getUserInfo" @getuserinfo='getUserInfo'></button>
				<view class="customer-icon">
					<image src="../../static/i2.png" mode="widthFix"></image>
				</view>
				<view>联系客服</view>
			</view>
			<view @click="seeOther" class="bottom-list">
				<view class="question-icon">
					<image src="../../static/i3.png" mode="widthFix"></image>
				</view>
				<view>大众美团&下单</view>
			</view>
		</view>
	</view>
</template>
<script>
	import urlConfig from '../../common/config.js'
	export default {
		data() {
			return {
				userName: '登录|注册',
				userAvatar: "../../static/icon.png",
				isLogin: true
			}
		},
		created() {

		},
		onShow() {
			const nameStorage = wx.getStorageSync('userName');
			const avatarStorage = wx.getStorageSync('userAvatar');
			if (nameStorage && avatarStorage) {
				this.userName = nameStorage
				this.userAvatar = avatarStorage
				this.isLogin = false
			}
		},
		methods: {
			goOrder() {
				const token = wx.getStorageSync("token")
				if (token) {
					uni.navigateTo({
						url: "../order/order"
					})
				}
			},
			phoneService() {
				const token = wx.getStorageSync("token")
				if (token) {
					uni.makePhoneCall({
						phoneNumber: '13001057986'
					})
				}
			},
			seeOther() {
				uni.showModal({
					content: '美团或大众点评搜索虫杀杀也可下单',
					success(res) {
						if (res.confirm) {
							console.log('用户点击确定')
						} else if (res.cancel) {
							console.log('用户点击取消')
						}
					}
				})
			},
			getUserInfo() {
				let that = this
				wx.getUserInfo({
					success(res) {
						const userInfo = res.userInfo
						that.userName = userInfo.nickName
						that.userAvatar = userInfo.avatarUrl
						wx.setStorageSync('userName', userInfo.nickName)
						wx.setStorageSync('userAvatar', userInfo.avatarUrl)
						wx.login({
							success(res) {
								if (res.code) {
									uni.request({
										url: urlConfig + 'getOpenId',
										method: "POST",
										data: {
											code: res.code,
											name: userInfo.nickName
										},
										success: (res) => {
											wx.setStorageSync('token', res.data.sig)
											that.isLogin = false
										}
									});
								} else {
									console.log('登录失败！' + res.errMsg)
								}
							}
						})
					},
					fail(err) {
						console.log("用户未授权")
					}
				})
			}
		},
	}
</script>
<style scoped>
	.self {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.self-header {
		box-sizing: border-box;
		width: 100%;
		height: 36.35vh;
		background-color: rgb(21, 23, 44);
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		padding: 0 60px 50rpx 60rpx;
	}

	.header-avatar {
		width: 150rpx;
		height: 150rpx;
	}

	.avatar-login {
		position: absolute;
		z-index: 5;
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		background-color: transparent;
		border: none;
	}

	.avatar-login::after {
		border: none;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.header-user {
		width: 200rpx;
		height: 150rpx;
		margin-left: 25rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header-user span {
		color: #fff;
	}

	.header-user span:nth-child(2),
	.header-user span:nth-child(3) {
		font-size: 12px;
	}

	.user-title {
		background-color: transparent;
		color: rgb(255, 101, 18);
		padding: 0;
	}

	.self-bar {
		height: 25rpx;
		width: 100%;
		background: linear-gradient(to right, #ff6611, #f3b28f, #fff)
	}

	.self-bottom {
		flex: 1;
		padding-top: 42rpx;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.bottom-list {
		width: 665rpx;
		height: 116rpx;
		border-radius: 10rpx;
		background-color: #fff;
		margin-top: 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		box-sizing: border-box;
		padding-left: 40rpx;
	}

	.list-login {
		position: absolute;
		z-index: 5;
		width: 500rpx;
		height: 116rpx;
		background-color: transparent;
	}

	.list-login::after {
		border: none;
	}

	.order-icon,
	.customer-icon,
	.question-icon {
		width: 70rpx;
		height: 60rpx;
		margin-right: 10rpx;
	}

	.order-icon image,
	.customer-icon image,
	.question-icon image {
		width: 100%;
	}
</style>
