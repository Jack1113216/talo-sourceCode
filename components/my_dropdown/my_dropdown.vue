<template>
	<view class="flex-col">
		<view class="dropdown_title">{{ title }}</view>
		<view class="flex-row" :class="radiu_box ? 'radiu_dropdown_box' : 'dropdown_box'" :style="width ? `width:${width}rpx` : ''">
			<picker class="picker" mode="selector" :range="items" @change="onChange">
				<view class="flex-row">
					<view :style="width_style">
						<view class="dropdown_text" v-show="choose_index >= 0" :style="right ? 'text-align: right;' : ''">
							{{ items[choose_index] }}
						</view>
						<view class="dropdown_plac_text ellipsis_text" v-show="placeholder && choose_index == -1" :style="right ? 'text-align: right;' : ''">{{ placeholder }}</view>
					</view>
					<image class="drop_arrow" src="/static/icons/drop_arrow.png" mode="widthFix" v-show="show_arrow" @click="" />
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
export default {
	name: 'my_dropdown',
	props: {
		itemList: Array,
		def_val: String,
		def_index: {
			type: Number,
			default: -1
		},
		title: {
			type: String,
			default: ''
		},

		placeholder: {
			type: String,
			default: ''
		},
		show_arrow: {
			type: Boolean,
			default: true
		},
		radiu_box: {
			type: Boolean,
			default: false
		},
		width: {
			type: Number,
			default: 0
		},
		right: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		itemList(newVal) {
			this.resetItems();
		},
		def_val(newVal) {
			if (newVal) {
				if (this.choose_index < 0) this.choose_index = this.items.indexOf(newVal);
			} else {
				this.choose_index = -1;
			}
		}
	},
	data() {
		return {
			items: [],
			choose_index: -1,
			width_style: 'width: 100%;'
		};
	},
	mounted() {
		this.width_style = this.show_arrow ? 'width: calc(100% - 30rpx);' : 'width: 100%;';
		if (this.itemList && this.itemList.length > 0) {
			this.resetItems();
		}
	},
	methods: {
		resetItems() {
			this.items = this.itemList;

			if (this.items.length == 1) {
				this.choose_index = 0;
			} else if (this.def_val) {
				this.choose_index = this.items.indexOf(this.def_val);
			} else {
				this.choose_index = this.def_index;
			}
		},
		onChange(e) {
			if (this.itemList && this.itemList.length > 0) {
				this.choose_index = e.detail.value; // 更新选中项的索引
				this.$emit('change', this.choose_index);
			}
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'my_dropdown.scss';
</style>
