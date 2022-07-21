<template>
<uni-shadow-root class="xd-radio-index"><view class="radio" @click="onClickLabel">
	<view :class="'raiod-icon '+(value == name && 'checked')">
		<text v-if="value == name" class="circle"></text>
	</view>
	<text class="label"><slot></slot></text>
</view></uni-shadow-root>
</template>

<script>

global['__wxVueOptions'] = {components:{}}

global['__wxRoute'] = 'xd/radio/index'
Component({
	properties: {
		name: {
			type: String,
		},
		value: null,
	},
	data: {

		parent: null
	},
	methods: {
		onClickLabel() {
			// 获取父元素的值
			const {
				name,
				parent
			} = this.data
			parent.setData({
				value: name
			})
			this.emitChange(name);
		},
		emitChange(value) {
			const instance = this.data.parent;
			instance.triggerEvent('input', value);
			instance.triggerEvent('change', value);
		}
	},
	relations: {
		'../radio-group/index': {
			type: 'parent',
			linked: function(target) {

				this.setData({
					value: target.data.value,
					parent: target
				})
			}
		}
	}
})
export default global['__wxComponents']['xd/radio/index']
</script>
<style platform="mp-weixin">
.radio{
	display: flex;
	align-items: center;
	margin-right: 50rpx;
}
.raiod-icon{
	width: 30rpx;
	height: 30rpx;
	border: 2rpx solid #979797;
	margin-right: 10rpx;
	border-radius: 50%;
}
.raiod-icon.checked{
	border-color: #3A85F5;
	
}
.circle{
	width: 22rpx;
	height: 22rpx;
	background: #3A85F5;
	border-radius: 50%;
	margin-left: 4rpx;
	margin-top:4rpx;
	display: block;
}
.label{
	color: #333;
	line-height: 50rpx;
	font-weight: bold;
	font-size: 36rpx;
}
</style>