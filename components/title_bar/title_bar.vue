<template>
	<view class="">
		<view class="title_bar flex-col">
			<language_bar />
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
				<image class="title_bottom_icon" src="/static/icons/btn_menu.png" mode="widthFix" @click="openMenu" />
				<image class="title_bottom_icon" src="/static/icons/search.png" mode="widthFix" />
			</view>
			<my_drawer ref="menuDrawer" forward="left" :width="520">
				<view class="menu_drawer flex-col align-center">
					<view class="menu_box flex-col" v-for="(menu, index) in menu_list" :key="index" @click="clickMenu(menu)">
						<view class="menu_text">{{ menu.name }}</view>
					</view>
				</view>
			</my_drawer>
		</view>
	</view>
</template>

<script>
export default {
	name: 'title_bar',
	data() {
		return {
			now_page: '',
			show_menu: false,
			menu_list: [
				{ name: 'Home', url: 'pages/main/main_home/main_home' },
				{ name: 'Projetcts', url: 'pages/project/menu_project/menu_project' },
				{ name: 'Raise', url: 'pages/raise_page/raise_page' },
				{ name: 'About Us', url: 'pages/main/about_use/about_use' }
			]
		};
	},
	mounted() {
		var pages = getCurrentPages();
		this.now_page = '/' + pages[pages.length - 1].route;
	},
	methods: {
		toRaise() {
			var url = '/pages/raise_page/raise_page';
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
		},
		openMenu() {
			this.$refs.menuDrawer.open();
		},
		closeMenu() {
			this.$refs.menuDrawer.close();
		},
		clickMenu(menu) {
			var url = menu.url;
			if (!url) {
				this.closeMenu();
				return;
			}
			if (!url.startsWith('/')) url = '/' + url;
			if (url == this.now_page) {
				this.closeMenu();
				return;
			}
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