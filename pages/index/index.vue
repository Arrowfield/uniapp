<template>
	<view class="content">
		<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<XdNavigation />
		<XdProgress percentage="14" />
		<XdPicker></XdPicker>
		<XdDatePicker v-model="dateTime" />
		<!-- <XdTabs :active="active" @change="onChange">
			<xd-tab-pane title="标签1">i am is a pane 1</xd-tab-pane>
			<xd-tab-pane title="标签2">i am is a pane 2</xd-tab-pane>
			<xd-tab-pane title="标签3">i am is a pane 3</xd-tab-pane>
		</XdTabs> -->
		<xd-tabs v-model="active" @change="onChange" class="my-test-class" class-tab='class-tab-a'>
			<xd-tab title="项目检测">i am is a pane 1</xd-tab>
			<xd-tab title="清洁班组">i am is a pane 2</xd-tab>
			
		</xd-tabs>
		
		
		<button class="xd-btn-big">确认</button>
		
		
<!-- 		<van-tabs >
		  <van-tab title="标签 1">内容 1</van-tab>
		  <van-tab title="标签 2">内容 2</van-tab>
		  <van-tab title="标签 3">内容 3</van-tab>
		  <van-tab title="标签 4">内容 4</van-tab>
		</van-tabs> -->
	</view>
</template>

<script>
	import XdDatePicker from '@/components/xd-datePicker.vue'
	import XdNavigation from '@/components/navigation/index.vue'
	import XdProgress from '@/components/progress/index.vue'
	import XdPicker from '@/components/xd-picker/XdPicker.vue'
	
	// import XdTabs from '@/components/xd-tabs-web/tabs.vue'
	// import XdTabPane from '@/components/xd-tabs-web/tab-pane.vue'
	export default {
		components: {
			XdDatePicker,
			XdNavigation,
			XdProgress,
			XdPicker,
			// XdTabs,
			// XdTabPane
		},
		data() {
			return {
				title: 'Hello',
				dateTime: "",
				active:1
			}
		},
		watch: {
			dateTime(n, o) {
				console.log("得到的新值是", n)
			},
			active(n, o) {
				console.log("得到的新值是", n)
			}
		},
		onLoad() {

		},
		methods: {
			onChange(){
				console.log("出发tabs的切换逻辑")
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.class-tab-a{
		color:red;
		font-size: 50rpx;
	}
	uni-page-body {
		min-height: 100%;
		background-color: $xd-bg-color;
		color: $xd-text-color;
		font-family: PingFangSC-Regular, PingFang SC;
	}

	.content {
		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: center;

		// height: 100%;
		&::before,
		&::after {
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

	.xd-btn-big {
		width: 642rpx;
		height: 92rpx;
		background: $xd-color-primary;
		border-radius: 16rpx;
		color: white;
		margin-top: 336rpx;
		margin-bottom: 94rpx;
	}
</style>
