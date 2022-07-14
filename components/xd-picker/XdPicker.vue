<template>
	    <view class="picker-view-wrap">
			<view class="picker-header">
				<text class="title">选择项目</text>
				<text class="close-btn">关闭</text>
			</view>
	        <picker-view v-if="visible" :indicator-style="indicatorStyle" :value="value" @change="bindChange" class="picker-view">
	            <picker-view-column>
	                <view class="item" v-for="(item,index) in companyList" :key="index">{{item}}</view>
	            </picker-view-column>
	        </picker-view>
	    </view>
</template>

<script>
	export default {
		data: function () {
		            const date = new Date()
		            const years = []
		            const year = date.getFullYear()
		            const months = []
		            const month = date.getMonth() + 1
		            const days = []
		            const day = date.getDate()
		            for (let i = 1990; i <= date.getFullYear(); i++) {
		                years.push(i)
		            }
		            for (let i = 1; i <= 12; i++) {
		                months.push(i)
		            }
		            for (let i = 1; i <= 31; i++) {
		                days.push(i)
		            }

		            return {
		                title: 'picker-view',
		                years,
		                year,
		                months,
		                month,
		                days,
		                day,
		                value: [9999, month - 1, day - 1],
		                visible: true,
		                indicatorStyle: `height: 56px;`,
						companyList:[
							"可心科学院",
							"新一代产业园",
							"滨河时代",
							"京基商业",
						]
		            }
		        },
		        methods: {
		            bindChange: function (e) {
		                const val = e.detail.value
		                this.year = this.years[val[0]]
		                this.month = this.months[val[1]]
		                this.day = this.days[val[2]]
		            }
		        }
	}
</script>

<style lang="scss">
	
	.picker-view-wrap{
		width: 750rpx;
		
		background: white;
		border-radius: 16rpx 16rpx 0 0;
		margin:50rpx 0;
		
		.picker-header{
			padding: 26rpx 34rpx 0;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 70rpx;
			.title{
				font-size: 36rpx;
				
				font-weight: 600;
				color: $uni-text-color;
				line-height: 50rpx;
			}
			.close-btn{
				
				height: 40rpx;
				font-size: 28rpx;

				font-weight: 400;
				color: $xd-color-primary;
				line-height: 40rpx;
			}
		}
	}
	
		.picker-view {
			height: 448rpx;
			margin: 0 52rpx;
		}
		.item {
			height: 112rpx;
			line-height: 112rpx;
			align-items: center;
			justify-content: center;
			text-align: center;
		}
</style>