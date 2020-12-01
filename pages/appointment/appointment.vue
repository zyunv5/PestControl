<template>
	<scroll-view scroll-y class="apponitment">
		<image class="apponitment-title" src="../../static/appointment-title.png" mode="aspectFit"></image>
		<image class="apponitment-title-form" src="../../static/form_info.png" mode="widthFix"></image>
		<view class="apponitment-form">
			<input class="form-list" type="text" placeholder="请填写您的姓名" v-model="user">
			<input class="form-list" type="text" placeholder="请填写您的联系方式" v-model="phone">
			<picker class="form-list" mode="selector" :value="area" :range='bgMap' @change="areaChange">
				<view class="picker" :class="[areaColor?'text-active':'']">{{area}}</view>
			</picker>
			<textarea class="form-textarea" placeholder="请填写详细的楼号、楼层、门牌号等信息" />
			</view>
		<image class="apponitment-title-time" src="../../static/appointment_time.png" mode="widthFix"></image>
		<view class="apponitment-time">
			<view class="time-list time-year">
				<picker mode="selector" :value="year" :range='years' @change="yearChange($event)">
				    <view class="picker">
				      {{year}}年
				    </view>
				  </picker>
			</view>
			<view class="time-list">
					 <picker mode="selector" :value="month" :range='months' @change="monthChange($event)">
					     <view class="picker">
					       {{month+1}}月
					     </view>
					   </picker>
			</view>
			<view class="time-list">
				<picker mode="selector" :value="day" :range='days' @change="dayChange($event)">
				    <view class="picker">
				    {{day}}日
				    </view>
				  </picker>
			</view>
		</view>
		<view class="apponitment-day">
			<view class="day-item" :class="[item.active?'day-item-active':'']" v-for="item in dayTime" :key="item.time">
				<view class="item-text">{{item.noon}}</view>
				<view class="item-text">{{item.time}}</view>
			</view>
			<view class="day-item day-next">
				<text>后一天</text>
			</view>
		</view>
		<view class="apponitment-submit">
			提交订单
		</view>
	</scroll-view>
</template>

<script>
	// import {bgMapJson} from "../../utils/bj-map.js"
	export default {
		data() {
			const date = new Date()
			        const years = []
			        const year = date.getFullYear()
			        const months = []
			        const month = date.getMonth()
			        const days = []
			        const day = date.getDate()
			        for (let i = year; i <= date.getFullYear()+10; i++) {
			            years.push(i)
			        }
			        for (let i = 1; i <= 12; i++) {
			            months.push(i)
			        }
			        for (let i = 0; i <= 31; i++) {
			            days.push(i)
			        }
			return {
				year,
				years,
				month,
				months,
				day,
				days,
				dayTime:[
					{noon:"上午",time:"9:00",active:true},
					{noon:"上午",time:"11:00",active:false},
					{noon:"下午",time:"13:00",active:false},
					{noon:"下午",time:"15:00",active:false},
					{noon:"下午",time:"17:00",active:false},
					{noon:"下午",time:"19:00",active:false},
					{noon:"下午",time:"21:00",active:false},
					],
					area:"选择您所在社区",
					bgMap:["西城区",
	"崇文区",
	"宣武区",
	"朝阳区",
	"丰台区",
	"石景山区",
	"海淀区",
	"门头沟区",
	"房山区",
	"通州区",
	"顺义区",
	"昌平区",
	"大兴区",
	"平谷区",
	"怀柔区",
	"密云县",
	"延庆县"],
	areaColor:false
			}
		},
		methods: {
			 yearChange(e){
				 this.year=this.years[e.target.value]
			 },
			 monthChange(e){
				 this.month=this.months[e.target.value]-1
			 },
			 dayChange(e){
				 this.day=this.days[e.target.value]
			 },
			 areaChange(val){
				 this.area=this.bgMap[val.detail.value]
				 this.areaColor=true
			 }
		},
		mounted() {
		}
	}
</script>

<style>
.apponitment{
	box-sizing: border-box;
	width:100%;
	background-color: rgb(234,234,234);
	padding-top: 30rpx;
	padding-left: 70rpx;
}
.apponitment-title{
	width: 186rpx;
	height: 105rpx;
	display: block;
	margin-bottom: 48rpx;
}
.apponitment-title-form{
	width: 230rpx;
	height: 40rpx;
	display: block;
	margin-bottom: 35rpx;
}
.apponitment-form{
	width: 606rpx;
	height: 390rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 35rpx;
}
.form-list{
	box-sizing: border-box;
	width: 606rpx;
	height: 70rpx;
	background-color: #fff;
	border-radius:10rpx ;
	padding-left: 30rpx;
	font-size: 25rpx;
}
.form-list .picker{
	line-height: 70rpx;
}
.form-textarea{
	box-sizing: border-box;
	width: 606rpx;
	height: 125rpx;
	background-color: #fff;
	border-radius:10rpx ;
	padding-top: 20rpx;
	padding-left: 30rpx;
	font-size: 25rpx;
}
.apponitment-title-time{
	width: 372rpx;
	height: 42rpx;
	display: block;
	margin-bottom: 42rpx;
}
.apponitment-time{
	width: 604rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 32rpx;
}
.time-list{
	width: 160rpx;
	height: 68rpx;
	border-radius: 10rpx;
	background-color: #fff;
	color:#000;
	text-align: center;
	line-height: 68rpx;
}
.time-year{
	width: 224rpx;
}
.apponitment-day{
	width: 606rpx;
	height: 228rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
	margin-bottom: 30rpx;
}
.day-item{
	box-sizing: border-box;
	width: 136rpx;
	height: 100rpx;
	background-color: #fff;
	border: 1rpx solid rgb(223,223,223);
	border-radius: 10rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	padding:25rpx 0;
	font-size: 25rpx;
}
.day-item .item-text{
	width: 100%;
	text-align: center;
	font-size: 25rpx;
}
.day-next{
	background-color: rgb(255,101,16);
	color:#fff;
}
.day-item-active{
	background-color: rgb(255,232,225);
	color:#fff;
	border: 1rpx solid rgb(255,101,16);
}
.apponitment-submit{
	width:606rpx;
	height: 84rpx;
	line-height: 84rpx;
	text-align: center;
	background-color: rgb(21,23,44);
	color: #fff;
	border-radius: 10rpx;
}
.picker{
	color:#999999;
}
.text-active{
	color:#000;
}
</style>
