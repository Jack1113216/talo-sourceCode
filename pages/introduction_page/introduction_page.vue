<template>
	<view class="page">
		<language_bar />
		<title_bar />
		<view class="bg_group">
			<image class="introduction_bg" src="/static/introduction/introduction_bg.png" mode="widthFix" @click="toFund()" />
			<view class="bg_btn total-center" style="right: 114rpx">
				<view class="btn_text">{{ home_txt }}</view>
			</view>
			<view class="bg_btn total-center" style="right: 22rpx">
				<view class="btn_text">{{ raise_txt }}</view>
			</view>
		</view>
		<view class="introduce_title">
			{{ intro_title }}
		</view>
		<view class="introduce_describe">
			{{ intro_describe }}
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			home_txt: 'HOME',
			raise_txt: 'RAISE',
			intro_title: 'BETA SITE | UNDER DEVELOPMENT',
			intro_describe:
				'BackersDen provides educational content only. We are not a broker-dealer, investment adviser, or funding portal. Nothing here is investment advice or an offer of securities. Users should seek qualified professional guidance before making financial decisions. This website is in early development (~30% complete), with limited features and ongoing refinements. Thank you for your patience. For more info, contact us at contact.us@backersden.com'
		};
	},
	methods: {
		toFund() {
			uni.navigateTo({
				url: '/pages/fund/fund_page/fund_page'
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'introduction_page.scss';
</style>
