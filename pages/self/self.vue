<template>
	<view class="self">
		<view class="self-header">
			<view class="header-avatar">
				<image class="avatar-img" src="../../static/icon.png" mode="scaleToFill"></image>
			</view>
			<view class="header-user">
				<button class="user-title" open-type="getUserInfo" @getuserinfo='getUserInfo'>授权登录</button>
				<!-- <open-data type="userAvatarUrl"></open-data> -->
			</view>
		</view>
		<view class="self-bar"></view>
		<view class="self-bottom">
			<view @click="goOrder" class="bottom-list">
				<view class="order-icon">
					<image src="../../static/i1.png" mode="widthFix"></image>
				</view>
				<view>我的订单</view>
			</view>
			<view class="bottom-list">
				<view class="customer-icon">
					<image src="../../static/i2.png" mode="widthFix"></image>
				</view>
				<view>联系客服</view>
			</view>
			<view class="bottom-list">
				<view class="question-icon">
					<image src="../../static/i3.png" mode="widthFix"></image>
				</view>
				<view>常见问题</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				username: 'aacc',
				userphone: 13933330000
			}
		},
		methods: {
			goOrder() {
				uni.navigateTo({
					url: "../order/order"
				})
			},
			getUserInfo() {
				// 必须是在用户已经授权的情况下调用，
				wx.getUserInfo({
					success(res) {
						const userInfo = res.userInfo //userInfo里面存储用户的基本信息
						const nickName = userInfo.nickName
						const avatarUrl = userInfo.avatarUrl
						// const gender = userInfo.gender // 性别 0：未知、1：男、2：女
						// const province = userInfo.province
						// const city = userInfo.city
						// const country = userInfo.country
						const encryptedData = res.encryptedData //包括敏感数据在内的完整用户信息的加密数据
						const rawData = res.rawData //不包括敏感信息的原始数据字符串，用于计算签名
						const signature = res.signature //使用 sha1( rawData + sessionkey ) 得到字符串，用于校验用户信息
						console.log(res);
						
						wx.login({
						  success (res) {
						    if (res.code) {
								console.log(res.code);
							  uni.request({
							      url: 'https://localhost:7001/getOpenId',
							      data: {code:res.code},
							      success: (res) => {
							          console.log(res);
							      }
							  });
						    } else {
						      console.log('登录失败！' + res.errMsg)
						    }
						  }
						})
					},
					fail(err) {
						//在用户未授权过的情况下调用此接口，将不再出现授权弹窗,会执行该fail函数
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
		background-color: rgb(234, 234, 234);
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

	.avatar-img {
		width: 100%;
		height: 100%;
	}

	.header-user {
		width: 300rpx;
		margin-left: 25rpx;
		display: flex;
		flex-direction: column;
	}

	.header-user span {
		color: #fff;
	}

	.header-user span:nth-child(2),
	.header-user span:nth-child(3) {
		font-size: 12px;
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
