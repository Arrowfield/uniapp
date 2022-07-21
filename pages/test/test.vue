<template>
	<view>

		<view class="container">

			<ec-canvas id="mychart-dom-turnover" canvas-id="mychart-turnover" :ec="turnoverEc"></ec-canvas>
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/wxcomponents/ec-canvas/echarts';




	let Chart = [];


	export default {
		data() {
			return {
				title: 'Hello',
				dateTime: "",
				active: 1,
				radio: 1,

				turnoverEc: {
					lazyLoad: true,
				},
			}
		},
		methods: {
			onChange() {

			},
			onChangeRadio(val) {

			},
			getData() {
				this.initEcharts(1); //初始化图表
			},
			initEcharts(i) {

				this.echartsComponnet1.init((canvas, width, height) => {

					Chart[1] = echarts.init(canvas, null, {
						width: width,
						height: height
					})
					
					console.log(Chart[1].setOption)
					Chart[1].setOption(this.getOption1())
				})

			},
			getOption1() {

				return {
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: [150, 230, 224, 218, 135, 147, 260],
						type: 'line'
					}]
				};
			},

		},
		onLoad() {
			//this.echartsComponnet1 = this.selectComponent('#mychart-dom-turnover');

		},
		onShow() {
			// 重置图表存储容器 不然会报错
			Chart = [];
			//this.getData(); //获取数据
		},
	}
</script>

<style lang="scss" scoped>
	.container {
		background-color: white;
		height: 355.8px;

	}
</style>
