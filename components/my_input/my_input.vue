<template>
	<view class="flex-col">
		<view class="input_title">{{ title }}</view>
		<view class="flex-row" :class="radiu_box ? 'radiu_input_box' : 'input_box'">
			<slot></slot>
			<input class="input_text" placeholder-class="input_plac_text" :type="my_type" v-bind="$attrs" :style="with_style" />
			<image class="pwd_eye" v-show="type == 'password'" :src="view_icon" mode=" widthFix" @click="changeView" />
		</view>
	</view>
</template>

<script>
export default {
	inheritAttrs: false,
	name: 'my_input',
	props: {
		type: {
			type: String,
			default: 'text'
		},
		sumb_width: {
			type: Number,
			default: 0
		},
		title: {
			type: String,
			default: ''
		},
		radiu_box: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		sumb_width(val) {
			var input_width = this.sumb_width;
			if (this.type == 'password') {
				input_width += 50;
			}
			this.with_style = input_width > 0 ? `width: calc(100% - ${input_width}rpx)` : 'width: 100%';
		}
	},
	data() {
		return {
			my_type: '',
			view_icon: '/static/icons/icon_view_off.png',
			with_style: 'width: 100%'
		};
	},
	mounted() {
		this.my_type = this.type;
		var input_width = this.sumb_width;
		if (this.type == 'password') {
			input_width += 50;
		}
		this.with_style = input_width > 0 ? `width: calc(100% - ${input_width}rpx)` : 'width: 100%';
	},
	methods: {
		changeView() {
			if (this.my_type == 'password') {
				this.my_type = 'text';
				this.view_icon = '/static/icons/icon_view_on.png';
			} else {
				this.my_type = 'password';
				this.view_icon = '/static/icons/icon_view_off.png';
			}
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'my_input.scss';
</style>
