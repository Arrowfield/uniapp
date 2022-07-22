<template>
	<view>
		<!-- 时间范围类型切换 -->
		<view class="date-picker-header">
			<button class="header-btn" :key="index" @click="toggleType(index)" v-for="(item,index) of timeRangeTypes" :class="{active:index === type}">{{ item }}</button>
		</view>
		<view class="date-panel-main">
		<view class="date-toggle">
			<button class="prev date-button" @click="toggleMonth(1)"></button>
			<text class="date-toggle-label">{{year}}年{{month+1}}月</text>
			<button class="next date-button" @click="toggleMonth(2)"></button>
		</view>
		<!-- 星期几面板显示 -->
		<view class="date-panel-content">
			<text class="my-text" :key="index" v-for="(item,index) of dateList">{{item}}</text>
		</view>
		
		<!-- 日期面板显示 -->
	<!-- 	:style="{borderRadius:item === 6 ? '33rpx 0 0 33rpx' : ''}" -->
		<view class="date-number date-panel-content">
			<view @click="selectDay(item)"
			class="date-item"
			:key="index"
			:class="{
				border:item.borderActive,
				active:item.rangeActive,
				disabled:item.disabled,
				startDate:item.startDate,
				endDate:item.endDate
			}"  v-for="(item,index) of dateNumber">
			{{item.text}}
			<text class="date-number-border_active" v-show="item.borderActive">{{item.text}}</text>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	// 日历组件的标准版
	export default {
		data(){
			return {
				type:0,
				timeRangeTypes:[
					"周","月","自定义"
				],
				dateLabel:"",
				dateList:[
					"一","二","三","四","五","六","日"
				],
				dateNumber:[
					
				],
				year:-1,
				month:-1,
				currentDate:-1,
				currentTime:-1,
				selectDate:-1
			}
		},
		computed:{
			// 判断是否为当前月份
			isCurrentMonth(){
				
			},
			dateRange(){
				if(this.type == 0){
					return 7
				}else if(this.type == 1){
					return  30
				}else{
					return -1
				}
			}
		},
		methods:{
			selectDay(item){
				// if(item.disabled) return
				// 如果是上个月的数值
				this.selectDate = item.text
				if(item.index < 7 && item.text > 22){
					// 
					this.toggleMonth(1)
					//return
				}else if(item.index > 27 && item.text < 14){
					this.toggleMonth(2)
					//return
				}else{
					this.createDateNumber()
				}
				
				
				
				// 开始时间 结束时间
				this.$emit("input",`${this.year}-${this.month + 1}-${item.text}`)
			},
			
			toggleMonth(type){
				if(type == 1){ // 上一个月
					// 当减到上一年当时候就改年份 // month取值是0-11
					if(this.month === 0){
						this.month = 11
						this.year --
					}else{
						this.month --
					}
				}else{ // 下一个月
					if(this.month == 11) {
						this.month = 0
						this.year++
					}else{
						this.month ++
					}
				}
				this.createDateNumber()
			},
			toggleType(index){
				this.type = index
			},
			createDateNumber(){
				//每个月的一号是星期几
				const dateNumSum = 42
				let dateNumber = []
				let myDate = new Date(this.year, this.month, 1)
				let day = myDate.getDay()
				//获取当前月一共有多少天
				let d = new Date(this.year, this.month + 1, 0);
				let currentMonthDay = d.getDate()

				let temp = 0
				//console.log(currentMonthDay) // 31
				//console.log(day) // day = 5 // 当day = 0 的时候表示星期天
				if(day === 0){
					day = 7
				}
				
				// 小于今天当日期，包括今天 都不允许排班
				

				
				
				// 获取上个月当最后一天
				let lastMonthDay = new Date(this.year, this.month, 0).getDate() - (day-1);
				//console.log(lastMonthDay,day)
				//let nextMonthDay = new Date(this.year, this.month + 2, 0).getDate();
				let nextMonthDay = 1
				//高亮当前选择的天
				//console.log(this.selectDate)
				for(let i = 0; i < dateNumSum; i++){
					let tempTime = -1
					if(i >= day - 1 && i < currentMonthDay + day - 1){ //当前月份
						temp++
						tempTime = new Date(this.year,this.month+1,temp)
					}else{
						if(i < day - 1){ // 上个月
							temp = ++lastMonthDay 
							tempTime = new Date(this.year,this.month,temp)
						}else{ // 下个月
							//temp = "" //必须显示上个月当并且置灰
							temp = nextMonthDay++
							tempTime = new Date(this.year,this.month+2,temp)
						}
						
					}
					// 判断是否为当前月份
					let isCurrentMonth = false
					if(dateNumber.length >= day - 1 && dateNumber.length < day + currentMonthDay - 1){
						//console.log("处于当前月份",temp)
						isCurrentMonth = true
					}
					
					// let selectedTime = new Date(this.year, this.month + 1, temp)
					
					
					if(this.currentTime.valueOf() > tempTime.valueOf()){
						//console.log("计算的时间",tempTime.valueOf(),"当前的时间",this.currentTime.valueOf())
					}
					// 如果选择的日期超过了当前月 那么久跳到下个月 显示高亮
					
					if(currentMonthDay - this.selectDate < this.dateRange - 1){
						//console.log("下个月的某天需要高亮")
					}
					
					dateNumber.push({
						text:temp,
						borderActive:isCurrentMonth && this.selectDate === temp ,
						//rangeActive:isCurrentMonth && temp >= this.selectDate && temp <  this.selectDate + 7,
						// 小于当前时间当话 全部置灰
						disabled:!isCurrentMonth,
						index:i,
						//disabled:this.currentTime.valueOf() > tempTime.valueOf(),
						//startDate:isCurrentMonth && this.selectDate === temp,
						//endDate:isCurrentMonth && this.selectDate + 6 === temp,
					})
					
					if(dateNumber.length == day - 1){ // 进入下个月当第一天
						temp = 0
					}
				}
				this.dateNumber = dateNumber
				//console.log(dateNumber)
			}
		},
		mounted(){
			//console.log(new Date())
			const date = new Date()
			this.year = date.getFullYear()
			this.month = date.getMonth()
			this.selectDate = date.getDate()
			this.currentDate = date.getDate()
			// 如果时间小于这个，就置灰，禁止用户选择
			this.currentTime = new Date(this.year,this.month+1,this.selectDate)
			this.dateLabel = `${this.year}年${this.month+1}月`
			this.createDateNumber()
		}
	}
</script>

<style lang="scss" scoped>
	
	.date-picker-header{
		box-sizing: border-box;
		background-color: $xd-color-primary;
		// width: 710rpx;
		height: 80rpx;
		border-radius: 16rpx 16rpx 0 0;
		// margin-top:20rpx;
		margin:20rpx 18rpx 0;
		padding: 6rpx 6rpx 0;
		display: flex;
		align-items: center;
		.header-btn{
			width: 256rpx;
			text-align: center;
			color: white;
			font-size: 32rpx;
			height: 74rpx;
			line-height: 74rpx;
			background-color: transparent;
			border-radius: 12rpx 12rpx 0 0;
			font-weight: bold;
			&::after{
				border: none;
			}
			&.active{
				background-color: white;
				color: $xd-color-primary;
			}

		}
	}
	.date-panel-main{
	
		background: #F9F9F9;
		border-radius: 0 0 16rpx 16rpx;
		margin: 0 19rpx;
		&::before{
			content: "";
			display: table;
		}
	}
	.date-toggle{
		margin-top: 18rpx;
		margin-bottom: 32rpx;
		padding: 0 27rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.date-button{
			
			&.prev{
				background:  url("@/static/assets/icons/prev_month.png") no-repeat center;
				background-size: 84rpx 84rpx;
			}
			&.next{
				background:  url("@/static/assets/icons/next_month.png") no-repeat center;
				background-size: 84rpx 84rpx;
				
			}
			width: 84rpx;
			height: 84rpx;
			
			
			// box-shadow: 0 0 12rpx 0 rgba(0,0,0,0.2000);
			// border-radius: 50%;
			margin:0;
			
			&::before{
				
			}
			&::after{
				border-radius: 0;
				border:none;
			}
		}
		.date-toggle-label{
			font-weight: bold;
			font-size: 42rpx;
		}
	}
	.date-panel-content{
		padding: 0 20rpx;
		display: flex;
		flex-wrap: wrap;
		.my-text,.date-item{
			text-align: center;
			color: #999;
			// font-size: 36rpx;
			// height: 50rpx;
			// line-height: 50rpx;
			// width: calc(100% / 7);
			// position: relative;
			
		}
		.date-number-border_active{
			position: absolute;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
			width: 66rpx;
			height: 66rpx;
			color:white;
			border-radius: 50%;
			background-color: $xd-color-primary;
			padding: 0;
			line-height: 66rpx;
		}
	}
	.date-number{
		margin-top: 14rpx;
		.my-text{
			//padding: 8rpx 0;
			//margin-bottom: 22rpx;
		//	color: $xd-text-color;
			font-weight: bold;
			
			&.active{
				background-color: #E8EFFD;
			}
			&.disabled{
				color: #999999;
			}
			
			&.startDate{
				border-radius: 33rpx 0 0 33rpx;
			}
			&.endDate{
				border-radius: 0 33rpx 33rpx 0;
			}
		}
	}
</style>