<template>
	<view>
		<swiper
			class="fund_swipper"
			:indicator-dots="true"
			indicator-color="rgba(196, 196, 196, 1)"
			indicator-active-color="rgba(103, 76, 239, 1)"
			:autoplay="true"
			:circular="true"
			:interval="5000"
			:duration="500"
		>
			<swiper-item>
				<view class="justify-center">
					<image class="quotation_img" src="/static/fund/quotation_img.png" mode="widthFix" />
				</view>
				<view class="say_title option_space">{{ say_title }}</view>
				<view class="say_content option_space">{{ say_content }}</view>
				<view class="lafina_text">{{ lafina }}</view>
				<view class="eurk_text">{{ eurk }}</view>
			</swiper-item>
			<swiper-item>
				<view class="justify-center">
					<image class="quotation_img" src="/static/fund/quotation_img.png" mode="widthFix" />
				</view>
				<view class="say_title option_space">{{ say_title }}</view>
				<view class="say_content option_space">{{ say_content }}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	name: 'fund_swiper',
	data() {
		return {
			say_title: 'What Our Fundraisers Say..',
			say_content: '"Working with Simple? Great! l researched quite a fewplatforms before we decided to go with you. What reallycinched it wre people that l wanted to work with."',
			lafina: 'LAFINA DIAMANDIS',
			eurk: 'Eurekadoc'
		};
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'fund_swiper.scss';
</style>
