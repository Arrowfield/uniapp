<template>
	<xd-vue-layout>

		<!-- echart 饼状 -->



		<view class="content">



			<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view> -->
			<!-- <XdNavigation /> -->
			<xd-vue-navigation>首页</xd-vue-navigation>

			<XdProgress percentage="14" />
			<XdPicker></XdPicker>

			<XdDatePicker  ></XdDatePicker>
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
			
			<button class="xd-btn-big">确认</button>
			<button class="xd-btn-big">确认</button>



			<!-- 		<van-tabs >
		  <van-tab title="标签 1">内容 1</van-tab>
		  <van-tab title="标签 2">内容 2</van-tab>
		  <van-tab title="标签 3">内容 3</van-tab>
		  <van-tab title="标签 4">内容 4</van-tab>
		</van-tabs> -->

			<view class="container">

				<ec-canvas class="my-canvas" @init="chartInit" id="mychart-dom-pie" canvas-id="mychart-pie" :ec="ec"
					type="2d">
				</ec-canvas>
			</view>

			<!-- https://github.com/youzan/vant-weapp/tree/dev/dist/radio-group -->
			<xd-radio-group :value="radio" @change="onChangeRadio">
				<xd-radio name="1">单选框 1</xd-radio>
				<xd-radio name="2">单选框 2</xd-radio>
			</xd-radio-group>


			<canvas type="2d" id="canvas" style="width: 300px; height: 300px;"></canvas>


		</view>




	</xd-vue-layout>
</template>

<script>
	import XdDatePicker from '@/components/xd-datePicker.vue'
	// import XdNavigation from '@/components/navigation/index.vue'
	import XdProgress from '@/components/progress/index.vue'
	import XdPicker from '@/components/xd-picker/XdPicker.vue'

	//import XdTabs from '@/components/xd-tabs-web/tabs.vue'
	// import XdTabPane from '@/components/xd-tabs-web/tab-pane.vue'


	import * as echarts from '@/wxcomponents/ec-canvas/echarts';




	function initChart(canvas, width, height, dpr) {
		const chart = echarts.init(canvas, null, {
			width: width,
			height: height,
			devicePixelRatio: dpr // new
		});
		canvas.setChart(chart);
		console.log(canvas)
		var option = {
			
			series: [{
				label: {
					normal: {
						fontSize: 14
					}
				},
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['20%', '40%'],
				data: [{
					value: 55,
					name: '北京'
				}, {
					value: 20,
					name: '武汉'
				}, {
					value: 10,
					name: '杭州'
				}, {
					value: 20,
					name: '广州'
				}, {
					value: 38,
					name: '上海'
				}]
			}]
		};

		chart.setOption(option);
		return chart;
	}



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
				ec: {
					onInit: initChart
				}
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
		onLoad: function() {
			this.position = {
				x: 150,
				y: 150,
				vx: 2,
				vy: 2
			}
			this.x = -100

			// 通过 SelectorQuery 获取 Canvas 节点
			wx.createSelectorQuery()
				.select('#canvas')
				.fields({
					node: true,
					size: true,
				})
				.exec(this.init.bind(this))
		},

		methods: {
			init(res) {
				const width = res[0].width
				const height = res[0].height

				const canvas = res[0].node
				const ctx = canvas.getContext('2d')

				const dpr = wx.getSystemInfoSync().pixelRatio
				canvas.width = width * dpr
				canvas.height = height * dpr
				ctx.scale(dpr, dpr)

				const renderLoop = () => {
					this.render(canvas, ctx)
					canvas.requestAnimationFrame(renderLoop)
				}
				canvas.requestAnimationFrame(renderLoop)

				const img = canvas.createImage()
				img.onload = () => {
					this._img = img
				}
				img.src = './car.png'
			},

			render(canvas, ctx) {
				ctx.clearRect(0, 0, 300, 300)
				this.drawBall(ctx)
			 this.drawCar(ctx)
			},

			drawBall(ctx) {
				const p = this.position
				p.x += p.vx
				p.y += p.vy
				if (p.x >= 300) {
					p.vx = -2
				}
				if (p.x <= 7) {
					p.vx = 2
				}
				if (p.y >= 300) {
					p.vy = -2
				}
			 if (p.y <= 7) {
					p.vy = 2
				}

				function ball(x, y) {
					ctx.beginPath()
					ctx.arc(x, y, 5, 0, Math.PI * 2)
					ctx.fillStyle = '#1aad19'
					ctx.strokeStyle = 'rgba(1,1,1,0)'
			  ctx.fill()
					ctx.stroke()
				}

				ball(p.x, 150)
				ball(150, p.y)
				ball(300 - p.x, 150)
				ball(150, 300 - p.y)
				ball(p.x, p.y)
				ball(300 - p.x, 300 - p.y)
				ball(p.x, 300 - p.y)
			 ball(300 - p.x, p.y)
			},

			drawCar(ctx) {
				if (!this._img) return
				if (this.x > 350) {
					this.x = -100
				}
			 ctx.drawImage(this._img, this.x++, 150 - 25, 100, 50)
				ctx.restore()
			},
			onChange() {
				// console.log("出发tabs的切换逻辑")
			},
			onChangeRadio(val) {

			},
			chartInit(options) {
				// console.log(options)
				let res = options.detail
				initChart(res.canvas, res.width, res.height, res.dpr)
			}
		},
		mounted() {
			// 把 echarts 传入 


		}
	}
</script>

<style lang="scss" scoped>
	.container {


		// display: flex;
		// flex-direction: column;
		// align-items: center;
		// justify-content: space-between;
		// box-sizing: border-box;

		background-color: white;
		height: 355.8px;
		// padding-bottom: 30rpx;
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
<style>
	.class-tab-a {
		color: red;
		font-size: 50rpx;
	}
</style>
