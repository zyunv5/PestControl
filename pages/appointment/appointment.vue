<template>
	<scroll-view scroll-y class="apponitment">
		<image class="apponitment-title" src="../../static/appointment-title.png" mode="aspectFit"></image>
		<image class="apponitment-title-form" src="../../static/form_info.png" mode="widthFix"></image>
		<view class="apponitment-form">
			<button class="form-login" v-if="isLogin" open-type="getUserInfo" @getuserinfo='getUserInfo'></button>
			<input class="form-list" placeholder-style="color:#e5e5e5;" type="text" placeholder="请填写您的姓名" v-model="user" />
			<input class="form-list" placeholder-style="color:#e5e5e5;" type="text" placeholder="请填写您的联系方式" v-model="phone" />
			<picker class="form-list" mode="selector" :value="area" :range="bgMap" @change="areaChange">
				<view class="pickerArea" :class="[areaColor ? 'text-active' : '']">{{ area }}</view>
			</picker>
			<textarea class="form-textarea" placeholder-style="color:#e5e5e5;" placeholder="请填写详细的楼号、楼层、门牌号等信息" v-model="address" />
			</view>
		<image class="apponitment-title-time" src="../../static/appointment_time.png" mode="widthFix"></image>
		<view class="apponitment-time">
			<view class="time-list time-year">
				<picker mode="selector" :value="year" :range="years" @change="yearChange($event)">
					<view class="picker">{{ year }}年</view>
					<image class="time-list-icon" src="../../static/select_icon.png" mode="widthFix"></image>
				</picker>
			</view>
			<view class="time-list">
				<picker mode="selector" :value="month" :range="months" @change="monthChange($event)">
					<view class="picker">{{ month+1 }}月</view>
					<image class="time-list-icon" src="../../static/select_icon.png" mode="widthFix"></image>
				</picker>
			</view>
			<view class="time-list">
				<picker mode="selector" :value="day" :range="days" @change="dayChange($event)">
					<view class="picker">{{ day+1 }}日</view>
					<image class="time-list-icon" src="../../static/select_icon.png" mode="widthFix"></image>
				</picker>
			</view>
		</view>
		<view class="apponitment-day">
			<view class="day-item" :class="{ 'day-item-active': item.active, 'day-item-full': item.isFull }" v-for="item in dayTime" :key="item.time" @click="changeTime(item)">
				<view class="item-text">{{ item.noon }}</view>
				<view class="item-text">{{ item.time }}</view>
			</view>
			<view class="day-item day-next" @click="nextDay"><text>后一天</text></view>
		</view>
		<view class="apponitment-submit" @click="submitForm">提交订单</view>
	</scroll-view>
</template>

<script>
import urlConfig from '../../common/config.js';
import dayjs from 'dayjs';
export default {
	data() {
		const date = new Date();
		const years = [];
		const year = date.getFullYear();
		for (let i = year; i <= date.getFullYear() + 10; i++) {
			years.push(i);
		}
		return {
			year,//当前年份
			years,
			month:null,
			months:[],
			day:null,
			days:[],
			dayTime: [
				{ noon: '上午', time: '09:00', active: false, isFull: false },
				{ noon: '上午', time: '11:00', active: false, isFull: false },
				{ noon: '下午', time: '13:00', active: false, isFull: false },
				{ noon: '下午', time: '15:00', active: false, isFull: false },
				{ noon: '下午', time: '17:00', active: false, isFull: false },
				{ noon: '下午', time: '19:00', active: false, isFull: false },
				{ noon: '下午', time: '21:00', active: false, isFull: false }
			],
			area: '选择您所在区域',
			bgMap: ["东城区","西城区",'朝阳区', '海淀区',"丰台区","石景山区","通州区","昌平区"],
			areaColor: false,
			user: '',
			phone: '',
			address: '',
			id: '',
			isLogin:true//是否登录
		};
	},
	computed: {
		detail() {//是否是修改订单
			let state = this.$store.state.detail;
			return state;
		}
	},
	onShow() {
		//查看是否登录
		const token = wx.getStorageSync('token');
		if (!token) {
			uni.showToast({
				title: '请先登录再进行预约',
				icon: 'none',
				duration: 3000
			});
		}
		//初始化当前时间
		this.setCurrentTime()
		
		//查询预约情况
		let nextDay = dayjs().add(1, 'day');
		this.getNextDay(nextDay);
		
		//修改订单选项
		if (JSON.stringify(this.detail) !== '{}') {
			const queryItem = JSON.parse(this.detail);
			const date=dayjs(queryItem.time)
			this.year=date.year()
			this.month=date.month()
			this.day=date.date()-1
			this.dayTime.filter(item=>{
				if(item.time===`${date.hour()}:00`){
					item.active=true
				}
			})
			this.id = queryItem.id;
			this.areaColor=true;
			this.user = queryItem.name;
			this.phone = queryItem.phone;
			this.address = queryItem.address;
			this.area = queryItem.area;
		}
	},
	methods: {
		// 更改年份
		yearChange(e,m) {
			this.year =m?this.year+1:this.years[e.target.value];
			const beforeYear =m?this.year+1:this.years[e.target.value];
			const afterDay = dayjs(`${beforeYear}-${this.month + 1}`).daysInMonth();
			this.dayOrigin(afterDay,this.month + 1);
			const addDay= dayjs(`${this.year}-${this.month + 1}-${this.day+1}`)
			e===""?"":this.getNextDay(addDay)
		},
		// 更改月份 e是手动操作 m是后一天修改
		monthChange(e, m) {
			this.month = m ? m - 1 : this.months[e.target.value] - 1;
			let beforeMonth = m ? m : this.months[e.target.value];
			const afterDay = dayjs(`${this.year}-${beforeMonth}`).daysInMonth();
			this.dayOrigin(afterDay,beforeMonth);//更改天数
			const addDay= dayjs(`${this.year}-${this.month + 1}-${this.day+1}`)
			e===""?"":this.getNextDay(addDay)
		},
		//更改不同月份天数
		dayOrigin(days,mon) {
			let dayAfter = this.day,
				dayBefore = this.days,
				dayArray = [],
				currentMonth=dayjs().month()+1,
				currentDay=dayjs().date(),
				currentDays=dayjs().daysInMonth();
				console.log(dayAfter,currentDay,currentDays)
			if(mon===currentMonth){
				for(let i=currentDay;i<=currentDays;i++){
					dayArray.push(i);
				}
				if(dayAfter<currentDay){
					this.day=currentDay-1
				}
				this.days = dayArray;
			}else{
				for (let i = 1; i <= days; i++) {
					dayArray.push(i);
				}
				this.days = dayArray;
				//判断是不是31号切换到30号
				if (dayAfter == '30') {
					this.day = this.days[this.days.length - 1] - 1;
				}
			}
		},
		// 更改了日期
		dayChange(e, d) {
			this.day = d ? d - 1 : this.days[e.target.value] - 1;
			const addDay= dayjs(`${this.year}-${this.month + 1}-${this.day+1}`)
			e===""?"":this.getNextDay(addDay)
		},
		// 更改区域
		areaChange(val) {
			this.area = this.bgMap[val.detail.value];
			this.areaColor = true;
		},
		// 选中时间
		changeTime(item) {
			if (item.isFull) {
				uni.showToast({
					title: '该时间段已约满，请更换其他时间',
					icon: 'none'
				});
				return;
			}
			this.dayTime.forEach(item => (item.active = false));
			item.active = true;
		},
		// 选择下一天
		nextDay() {
			let year = this.year,
				month = this.month,
				day = this.day;
			let addDay = dayjs(`${year}-${month + 1}-${day + 1}`).add(1, 'day');
			let newYear = addDay.year();
			let newMonth = addDay.month() + 1;
			let newDay = addDay.date();
			this.getNextDay(addDay);
			if(month+1==12&&day==30){
				this.yearChange('', 1);
			}
			this.monthChange('', newMonth);
			this.dayChange('', newDay);
			
		},
		getNextDay(addDay){
			let that=this;
			uni.request({
				url: urlConfig + 'getTime',
				method: 'GET',
				data:{
					time:addDay.format("YYYY-MM-DD")
				},
				header: {
					'content-type': 'application/json'
				},
				success: res => {
					for(let i=0;i<7;i++){
						if(res.data.data[i]>1){
							that.dayTime[i].isFull=true
						}
						that.dayTime[i].active=false
					}
				}
			})
		},
		//提交表单
		submitForm() {
			let timeActive = this.dayTime.filter(item => item.active);
			let m = this.month + 1 < 10 ? '0' + (this.month + 1) : this.month + 1;
			let d = this.day + 1 < 10 ? '0' + (this.day + 1) : this.day + 1;
			if (!this.user) {
				this.alert('', '请填写用户姓名');
			} else if (!/^1[3|4|5|6|7|8|9]\d{9}$/.test(this.phone)) {
				this.alert('', '请填写正确的手机号');
			} else if (this.area === '选择您所在区域') {
				this.alert('', '请选择您所在区域');
			} else if (!this.address) {
				this.alert('', '请填写您的详细地址');
			} else if (timeActive.length === 0) {
				this.alert('', '请选择日期');
			} else if (this.checkTime(this.year, m, d, timeActive[0].time)) {
				this.alert('', '所选日期早于当前日期');
			} else {
				let form = {
					user: this.user,
					phone: this.phone,
					area: this.area,
					address: this.address,
					time: `${this.year}-${m}-${d} ${timeActive[0].time}:00`
				};
				const token = wx.getStorageSync('token');
				const username=wx.getStorageSync('userName')
				if (!token) {
					uni.showToast({
						title: '请先登录再进行预约',
						icon: 'none',
						duration: 1500
					});
				} else {
					uni.showLoading()
					if(this.id){
						form.id=this.id;
						uni.request({
							url: urlConfig + 'update',
							method: 'POST',
							header: {
								'content-type': 'application/json'
							},
							data: { token: token,username:username,form: form },
							dataType: 'json',
							success: res => {
								if (res.data.status === 1) {
									uni.hideLoading()
									uni.navigateTo({
										url: '../order/order'
									});
								} else {
									uni.showToast({
										title: '提交失败，请检查网络环境',
										icon: 'none'
									});
								}
							}
						});
					}else{
						uni.request({
							url: urlConfig + 'submit',
							method: 'POST',
							header: {
								'content-type': 'application/json'
							},
							data: { token: token,username:username, form: form },
							dataType: 'json',
							success: res => {
								if (res.data.status === 1) {
									uni.hideLoading()
									uni.navigateTo({
										url: '../order/order'
									});
								} else {
									uni.showToast({
										title: '提交失败，请检查网络环境',
										icon: 'none'
									});
								}
							}
						});
					}
				}
			}
		},
		//弹出弹框
		alert(title = '', msg = '', confirm, cancel) {
			uni.showModal({
				title: title,
				content: msg,
				showCancel: cancel ? true : false,
				success: res => {
					if (res.confirm) {
						if (confirm) {
							confirm();
						}
					}
					if (res.cancel) {
						if (cancel) {
							cancel();
						}
					}
				}
			});
		},
		//校验时间
		checkTime(year, month, day, time) {
			let date = new Date(`${year}-${month}-${day} ${time}:00`);
			const nowDate = new Date();
			return date.getTime() < nowDate.getTime();
		},
		//清空提交的表单
		resetForm() {
			this.user = '';
			this.phone = '';
			this.area = '选择您所在区域';
			this.areaColor = false;
			this.address = '';
			const date = new Date();
			this.year = date.getFullYear();
			// this.month = date.getMonth();
			// this.day = date.getDate();
			this.dayTime.forEach(item => (item.active = false));
			this.setCurrentTime()
		},
		//用户登录
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
		},
		//初始化当前时间
		setCurrentTime(){
			let currentDay=dayjs();//获取当前的日子
			let day=currentDay.date(),
			days=currentDay.daysInMonth(),
			dayArr=[],
			month=currentDay.month(),
			monthArr=[];
			for(let i=day;i<=days;i++){
				dayArr.push(i)
			}
			for(let i=month+1;i<=12;i++){
				monthArr.push(i)
			}
			this.day=day-1
			this.days=dayArr
			this.month=month
			this.months=monthArr
		},
		onHide() {
			this.$store.dispatch('clearDetail');
			this.resetForm()
		},
	},
};
</script>

<style>
.apponitment {
	box-sizing: border-box;
	width: 100%;
	padding: 20rpx 4% 0 4%;
}
.apponitment-title {
	width: 219rpx;
	height: 122rpx;
	display: block;
	margin-bottom: 48rpx;
}
.apponitment-title-form {
	width: 271rpx;
	height: 45rpx;
	display: block;
	margin-bottom: 35rpx;
}
.apponitment-form {
	width: 705rpx;
	height: 452rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 35rpx;
}
.form-login{
	position: absolute;
	width: 685rpx;
	height: 452rpx;
	z-index:5;
	background-color: transparent;
}
.form-login::after {
		border: none;
	}
.form-list {
	box-sizing: border-box;
	width: 675rpx;
	height: 78rpx;
	background-color: #fff;
	border-radius: 10rpx;
	padding-left: 30rpx;
	font-size: 28rpx;
	margin: 0 auto;
}
.form-list .pickerArea {
	line-height: 78rpx;
	color: #e5e5e5;
}
.form-textarea {
	box-sizing: border-box;
	width: 675rpx;
	height: 144rpx;
	background-color: #fff;
	border-radius: 10rpx;
	padding-top: 20rpx;
	padding-left: 30rpx;
	font-size: 28rpx;
	margin: 0 auto;
}
.apponitment-title-time {
	width: 430rpx;
	height: 47rpx;
	display: block;
	margin-bottom: 42rpx;
}
.apponitment-time {
	width: 675rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto 32rpx;
}
.time-list {
	width: 184rpx;
	height: 78rpx;
	border-radius: 10rpx;
	background-color: #fff;
	color: #000;
	text-align: center;
	line-height: 78rpx;
	position: relative;
}
.time-list-icon {
	position: absolute;
	right: 8%;
	top: 50%;
	transform: translate(0, -50%);
	width: 25rpx;
	height: 15rpx;
}
.time-year {
	width: 258rpx;
}
.apponitment-day {
	width: 675rpx;
	height: 263rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 0 auto 30rpx;
}
.day-item {
	box-sizing: border-box;
	width: 156rpx;
	height: 115rpx;
	background-color: #fff;
	border: 1rpx solid rgb(223, 223, 223);
	border-radius: 10rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding: 25rpx 0;
	font-size: 25rpx;
}
.day-item .item-text {
	width: 100%;
	text-align: center;
	font-size: 25rpx;
}
.day-next {
	background-color: rgb(255, 101, 16);
	color: #fff;
}
.day-item-active {
	background-color: rgb(255, 232, 225);
	color: #fff;
	border: 1rpx solid rgb(255, 101, 16);
}
.day-item-full {
	background-color: rgb(226, 226, 226);
	color: #fff;
	border: 1rpx solid rgb(192, 192, 192);
}
.apponitment-submit {
	width: 675rpx;
	height: 96rpx;
	line-height: 96rpx;
	text-align: center;
	background-color: rgb(21, 23, 44);
	color: #fff;
	border-radius: 10rpx;
	margin: 0 auto 20rpx;
}
.form-list .text-active {
	color: #000;
}
</style>
