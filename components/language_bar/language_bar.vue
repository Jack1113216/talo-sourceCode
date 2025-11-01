<template>
	<view>
		<view class="lan_bar flex-row" :style="`right: ${lan_data.value}rpx;`" @click="openLan()">
			<view class="lan_text" v-show="open_style == 0">{{ languages[lan_index].simple_name }}</view>
			<picker class="picker_box" mode="selector" :range="lan_list" @change="changeLan" v-show="open_style != 0">
				<view class="lan_text">{{ languages[lan_index].name }}</view>
			</picker>

			<image class="close_arrow" src="/static/main/arrow.png" mode="" @click="closeLan()" />
		</view>
	</view>
</template>

<script>
import { playAnim, anim_data } from '@/utils/anim';
import { setLanguage } from '@/utils/language_util';
import languages from '/static/datas/languages.json';
export default {
	name: 'language_bar',
	data() {
		return {
			lan_data: {
				value: -130,
				lastTime: null,
				animId: null,
				progress: 0
			},
			open_style: 0, //0：关闭；1：正在打开；2：已打开；3：正在关闭
			languages: languages,
			lan_list: [],
			lan_index: 1
		};
	},
	mounted() {
		this.lan_list = [];
		for (let i = 0; i < languages.length; i++) {
			this.lan_list.push(languages[i].name);
		}
	},
	methods: {
		openLan() {
			if (this.open_style == 0) {
				this.open_style = 1;
				playAnim(this.lan_data, 0, 0.2, () => {
					this.open_style = 2;
				});
			}
		},
		closeLan() {
			if (this.open_style == 2) {
				this.open_style = 3;
				playAnim(this.lan_data, -130, 0.2, () => {
					this.open_style = 0;
				});
			}
		},
		changeLan(e) {
			this.lan_index = e.detail.value;
			setLanguage(languages[this.lan_index].simple_name);
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'language.scss';
</style>
