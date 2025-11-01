<template>
	<view class="form_window" v-bind="$attrs">
		<view class="form_title" v-if="title">{{ title }}</view>
		<view class="form_describe" v-if="describe">{{ describe }}</view>
		<view class="form_content" v-if="title || describe" />
		<slot name="main"></slot>
		<view :class="['form_btn total-center', btn_box_class]" v-if="btn_name">
			<view :class="['form_btn_text', btn_text_class]">
				{{ btn_name }}
			</view>
		</view>
		<slot name="flooter"></slot>
	</view>
</template>

<script>
export default {
	name: 'form_window',
	props: {
		title: {
			type: String,
			default: ''
		},
		describe: {
			type: String,
			default: ''
		},
		btn_name: {
			type: String,
			default: ''
		},
		btn_box_class: {
			type: String,
			default: ''
		},
		btn_text_class: {
			type: String,
			default: ''
		}
	},
	mounted() {},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'form_window.scss';
</style>
