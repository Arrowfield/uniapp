<template>
	<view class="progress">
		<view class="track">
			<view class="progress-bar" :style="{width:percentage + '%'}">
				<text class="progress-bar-tips">{{percentage}}%</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			percentage:{
				type:String,
				default:"30"
			}
		}
	}
</script>

<style lang="scss">
	.progress{
		width: 670rpx;
		height: 56rpx;
		background: #FFFFFF;
		box-shadow: 0 6rpx 16rpx 0 #CFE0E9;
		border-radius: 28rpx;
		margin: 40rpx auto;
		padding: 14rpx 16rpx;
		box-sizing: border-box;
		.track{
			width: 630rpx;
			height: 20rpx;
			background: #D9E8F0;
			box-shadow: inset 0 2rpx 10rpx 0 #CCCECF;
			border-radius: 16rpx;
			padding: 4rpx;
			
		}
		.progress-bar{
			width: 30%;
			height: 20rpx;
			background: linear-gradient(90deg, #7FB1FB 0%, #3A85F5 100%);
			border-radius: 10rpx;
			position: relative;
		}
		.progress-bar-tips{
			position: absolute;
			top:calc(100% + 14rpx);
			left:calc(100% - 50rpx);
			color: white;
			background-color: $xd-color-primary;
			height: 42rpx; // 总高度是52rpx，三角形的高度是10rpx
			// width: 68rpx;;
			border-radius: 12rpx;;
			padding: 0 10rpx;;
			font-size: 28rpx;
			text-align: center;
			line-height: 42rpx;
			&::after{
				content: "";
				display: inline-block;
				width: 0;
				height: 0;
				
				position: absolute;
				top:0;
				left:50%;
				transform: translate(-50%,-100%);
				border-left:10rpx solid transparent;
				border-bottom:10rpx solid $xd-color-primary;
				border-right:10rpx solid transparent;
				border-top:10rpx solid transparent;
			}
		}
	}
</style>