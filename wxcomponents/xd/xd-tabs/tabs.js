Component({
	externalClasses: ['class-tab'],
	options: {
		multipleSlots: true ,// 在组件定义时的选项中启用多 slot 支持
		addGlobalClass: true,
	},
	relations: {
		'./tab': {
			type: 'child', // 关联的目标节点应为子节点
			linked: function(target) {
				// 每次有 custom-li 被插入时执行，target是该节点实例对象，触发在该节点 attached 生命周期之后
				// console.log("实例对象：",target)
			},
			linkChanged: function(target) {
				// 每次有 custom-li 被移动后执行，target是该节点实例对象，触发在该节点 moved 生命周期之后
			},
			unlinked: function(target) {
				// 每次有 custom-li 被移除时执行，target是该节点实例对象，触发在该节点 detached 生命周期之后
			}
		}
	},
	data() {
		return {
			nodes: [],
			heads: [],
			activeIndex: 0,
		}
	},
	// model: {
	// 	prop: 'value',
	// 	event: 'input'
	// },
	properties: {
		active: {
			type: Number,
		},
		//value:String
	},
	methods: {
		_getAllLi: function() {
			// 使用getRelationNodes可以获得nodes数组，包含所有已关联的custom-li，且是有序的
			this.nodes = this.getRelationNodes('./tab')
			// 取到title

			let heads = []
			this.nodes.forEach((item) => {

				heads.push(item.data.title)
			})
			this.nodes[0].setData({
				active: 1
			})
			// console.log(this.heads)
			this.setData({
				heads: heads,
				activeIndex: 0
			})

		},

		changeActive(event) {

			let index = event.currentTarget.dataset.index
			// let com = this.selectComponent(".my-component")
			// console.log(com)
			//https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E8%8E%B7%E5%8F%96%E7%BB%93%E6%9E%9C

			this.setData({
				activeIndex: index
			})
			this.nodes.forEach((item, i) => {
				let active = -1
				if (index == i) {
					active = 1

				}
				item.setData({
					active
				})

			})
			
			this.setData({
				value:1
			})
			// 触发父组件事件

			this.triggerEvent('change')
			this.triggerEvent('input', index)
		}
	},
	ready: function() {
		this._getAllLi()
	},
	load() {

	}
})
