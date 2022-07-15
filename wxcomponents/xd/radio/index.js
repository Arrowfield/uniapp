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
