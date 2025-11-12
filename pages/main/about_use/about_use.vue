<template>
	<base_page>
		<view class="back_block"></view>
		<view class="content_group">
			<image class="about_img" src="/static/api/about_bar.png" mode="aspectFill" />
			<view class="about_img_text_box flex-col">
				<view class="about_img_text">{{ about_img_text }}</view>
			</view>
			<view class="about_us flex-row">
				<view class="square_box" />
				<text class="about_us_text">{{ about_us }}</text>
			</view>
			<view class="title">{{ title }}</view>
			<view class="sub_title">{{ subtitle }}</view>
			<rich-text class="content_text" :nodes="contents" />
		</view>
	</base_page>
</template>

<script>
const style = 'span style="color:rgba(154, 154, 154, 1);font-weight:500" ';
export default {
	data() {
		return {
			about_img_text: 'Invest in AI Technology',
			about_us: 'About Us',
			title: 'BackerDen: Where Early Believers Become Real Winners',
			subtitle: 'About Us — BackerDen',
			contents: `"Discover.Back.Succeed."\n<${style}>BackersDen is where</span>\nentrepreneurs share their goals,ideas,and dreams <${style}>with the world - and where supporters can showbacking those vision with attention,feedback</span>`
		};
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'about_us.scss';
</style>
