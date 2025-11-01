<template>
	<view class="title_bar flex-col">
		<view class="top_group flex-row align-center">
			<view class="flex-row" @click="toRaise()">
				<image class="title_icon" src="/static/icons/btn_add.png" mode="widthFix" />
				<text class="title_text">Raise</text>
			</view>
			<view class="flex-row" @click="toLogin()">
				<image class="title_icon" src="/static/icons/btn_account.png" mode="widthFix" />
				<text class="title_text">Sign in or Register</text>
			</view>
		</view>
		<view class="bottom_group flex-row justify-between">
			<image class="title_bottom_icon" src="/static/icons/btn_menu.png" mode="widthFix" />
			<image class="title_bottom_icon" src="/static/icons/search.png" mode="widthFix" />
		</view>
	</view>
</template>

<script>
export default {
	name: 'title_bar',
	data() {
		return {
			now_page: ''
		};
	},
	mounted() {
		var pages = getCurrentPages();
		this.now_page = '/' + pages[pages.length - 1].route;
	},
	methods: {
		toRaise() {
			var url = '/pages/introduction_page/introduction_page';
			if (url == this.now_page) return;
			uni.navigateTo({
				url: url
			});
		},
		toLogin() {
			var url = '/pages/account/account_login/account_login';
			if (url == this.now_page) return;
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'title_bar.scss';
</style>
