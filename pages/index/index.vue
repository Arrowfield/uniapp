<template>
	<view class="content">
<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<XdNavigation/>
		<XdProgress/>
		<XdDatePicker v-model="dateTime"/>
		<button class="xd-btn-big">确认</button>
	</view>
</template>

<script>
	import XdDatePicker from '@/components/xd-datePicker.vue'
	import XdNavigation from '@/components/navigation/index.vue'
	import XdProgress from '@/components/progress/index.vue'
	export default {
		components:{
			XdDatePicker,
			XdNavigation,
			XdProgress
		},
		data() {
			return {
				title: 'Hello',
				dateTime:""
			}
		},
		watch:{
			dateTime(n,o){
				console.log("得到的新值是",n)
			}
		},
		onLoad() {

		},
		methods: {

		},
		mounted(){
			console.log(this.dateTime)
		}
	}
</script>

<style lang="scss">
	uni-page-body{
		min-height: 100%;
		background-color: $xd-bg-color;
		color:$xd-text-color;
		font-family: PingFangSC-Regular, PingFang SC;
	}
	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;
		
		// height: 100%;
		&::before,&::after{
			content: "";
			display: table;
		}
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.xd-btn-big{
		width: 642rpx;
		height: 92rpx;
		background: $xd-color-primary;
		border-radius: 16rpx;
		color:white;
		margin-top:336rpx;
		margin-bottom: 94rpx;
	}
</style>
