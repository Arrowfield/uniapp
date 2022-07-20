<template>
	<view class="content">
		<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
		<!-- <XdNavigation /> -->
		<XdProgress percentage="14" />
		<XdPicker></XdPicker>
		<XdDatePicker v-model="dateTime" />
		<!-- <XdTabs :active="active" @change="onChange">
			<xd-tab-pane title="标签1">i am is a pane 1</xd-tab-pane>
			<xd-tab-pane title="标签2">i am is a pane 2</xd-tab-pane>
			<xd-tab-pane title="标签3">i am is a pane 3</xd-tab-pane>
		</XdTabs> -->
		<!-- 		<xd-tabs v-model="active" @change="onChange" class="my-test-class" class-tab='class-tab-a'>
			<xd-tab title="项目检测">i am is a pane 1</xd-tab>
			<xd-tab title="清洁班组">i am is a pane 2</xd-tab>
			
		</xd-tabs> -->


		<button class="xd-btn-big">确认</button>



		<!-- 		<van-tabs >
		  <van-tab title="标签 1">内容 1</van-tab>
		  <van-tab title="标签 2">内容 2</van-tab>
		  <van-tab title="标签 3">内容 3</van-tab>
		  <van-tab title="标签 4">内容 4</van-tab>
		</van-tabs> -->



		<!-- https://github.com/youzan/vant-weapp/tree/dev/dist/radio-group -->
		<xd-radio-group :value="radio" @change="onChangeRadio">
			<xd-radio name="1">单选框 1</xd-radio>
			<xd-radio name="2">单选框 2</xd-radio>
		</xd-radio-group>

		<!-- echart 饼状 -->
		<view style="width: 100%; height:500rpx">
			<l-echart ref="chart"></l-echart>
		</view>

	</view>
</template>

<script>
	import XdDatePicker from '@/components/xd-datePicker.vue'
	// import XdNavigation from '@/components/navigation/index.vue'
	import XdProgress from '@/components/progress/index.vue'
	import XdPicker from '@/components/xd-picker/XdPicker.vue'

	//import XdTabs from '@/components/xd-tabs-web/tabs.vue'
	// import XdTabPane from '@/components/xd-tabs-web/tab-pane.vue'


	import * as echarts from 'echarts/core';

	import {
		LineChart,
		BarChart
	} from 'echarts/charts';
	import {
		TitleComponent,
		TooltipComponent,
		GridComponent,
		DatasetComponent,
		TransformComponent,
		LegendComponent
	} from 'echarts/components';
	// 标签自动布局，全局过渡动画等特性
	import {
		LabelLayout,
		UniversalTransition
	} from 'echarts/features';
	// 引入 Canvas 渲染器，注意引入 CanvasRenderer 是必须的一步
	import {
		CanvasRenderer
	} from 'echarts/renderers';

	// 注册必须的组件
	echarts.use([
		LegendComponent,
		TitleComponent,
		TooltipComponent,
		GridComponent,
		DatasetComponent,
		TransformComponent,
		LineChart,
		BarChart,
		LabelLayout,
		UniversalTransition,
		CanvasRenderer
	]);

	export default {
		components: {
			XdDatePicker,
			//XdNavigation,
			XdProgress,
			XdPicker,
			// XdTabs,
			// XdTabPane
		},
		data() {
			return {
				title: 'Hello',
				dateTime: "",
				active: 1,
				radio: 1,
				option: {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: 'shadow'
						},
						confine: true
					},
					legend: {
						data: ['热度', '正面', '负面']
					},
					grid: {
						left: 20,
						right: 20,
						bottom: 15,
						top: 40,
						containLabel: true
					},
					xAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#999999'
							}
						},
						axisLabel: {
							color: '#666666'
						}
					}],
					yAxis: [{
						type: 'category',
						axisTick: {
							show: false
						},
						data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
						axisLine: {
							lineStyle: {
								color: '#999999'
							}
						},
						axisLabel: {
							color: '#666666'
						}
					}],
					series: [{
							name: '热度',
							type: 'bar',
							label: {
								normal: {
									show: true,
									position: 'inside'
								}
							},
							data: [300, 270, 340, 344, 300, 320, 310],
						},
						{
							name: '正面',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true
								}
							},
							data: [120, 102, 141, 174, 190, 250, 220]
						},
						{
							name: '负面',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									show: true,
									position: 'left'
								}
							},
							data: [-20, -32, -21, -34, -90, -130, -110]
						}
					]
				},
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
			onChange() {
				// console.log("出发tabs的切换逻辑")
			},
			onChangeRadio(val) {

			}
		},
		mounted() {
			// 把 echarts 传入 

		
			this.$refs.chart.init(echarts, chart => {
				chart.setOption(this.option);
			});
		}
	}
</script>

<style lang="scss">
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
<style>
	.class-tab-a {
		color: red;
		font-size: 50rpx;
	}
</style>
