<template>
	<view class="lan_bar_group flex-col">
		<view class="lan_bar flex-row" @click="setOpen(!open)">
			<image class="lan_icon" :src="languages[lan_index].icon" mode="widthFix" />
			<view class="lan_text">{{ languages[lan_index].name }}</view>
			<image class="drop_arrow" src="/static/icons/drop_arrow.png" mode="widthFix" />
		</view>
		<view class="" v-show="open">
			<view class="lan_bar flex-row" v-for="(lan, index) in languages" :key="index" v-show="index != lan_index" @click="changeLan(index)">
				<image class="lan_icon" :src="lan.icon" mode="widthFix" />
				<view class="lan_text">{{ lan.name }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import { setLanguage } from '@/utils/language_util';
import languages from '/static/datas/languages.json';
export default {
	name: 'language_bar',
	data() {
		return {
			languages: languages,
			lan_index: 0,
			open: false
		};
	},
	methods: {
		setOpen(isOpen) {
			this.open = isOpen;
		},
		changeLan(index) {
			this.lan_index = index;
			setLanguage(languages[this.lan_index].simple_name);
			this.setOpen(false);
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'language_bar.scss';
</style>
