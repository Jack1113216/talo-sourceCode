<template>
	<view class="black_bottom flex-col">
		<view class="describe_text">{{ describe }}</view>
		<view class="platform_group flex-row">
			<view class="platform_box total-center" v-for="(platform, index) in platforms" :key="index" @click="openPlatform(platform)">
				<image class="platform_icon" :src="platform.black_icon" />
			</view>
		</view>
		<view class="flex-col" v-for="(item, index) in link_list">
			<view class="link_title">{{ item.key }}</view>
			<view class="link_content" v-for="(link, index) in item.list" @click="openLink(link)">{{ link.name }}</view>
		</view>
		<view class="link_title">{{ contact_title }}</view>
		<view class="contact_item flex-row" v-for="(item, index) in contact_list">
			<image class="contact_icon" :src="item.icon" mode="widthFix" />
			<view class="contact_text">{{ item.text }}</view>
		</view>
		<view class="email_input_box flex-row">
			<input class="email_input" type="text" placeholder-class="email_input_placeholder" :placeholder="email_placeholder" />
			<view class="send_box total-center">
				<image class="send_icon" src="/static/icons/email_1.png" />
			</view>
		</view>
		<view class="split_line"></view>
		<view class="company_text">© Copyright 2020 by Gaviasthemes</view>
	</view>
</template>

<script>
import platforms from '/static/datas/social_platform.json';
export default {
	name: 'black_bottom',
	data() {
		return {
			describe: 'Spot it first.\nBack it early.\nExit when you choose.',
			platforms: platforms,
			link_list: [
				{
					key: 'Company',
					list: [
						{
							name: 'about us',
							link: ''
						}
					]
				},
				{
					key: 'Fundraising',
					list: [
						{
							name: 'about us',
							link: ''
						},
						{
							name: 'about us',
							link: ''
						},
						{
							name: 'about us',
							link: ''
						}
					]
				}
			],
			contact_title: 'Contact',
			contact_list: [
				{
					icon: '/static/icons/phone_0.png',
					text: '+886 901 287955'
				},
				{
					icon: '/static/icons/email_0.png',
					text: 'contact.us@backersden.com'
				},
				{
					icon: '/static/icons/dizhi_0.png',
					text: 'Boulevard, Datong District, Taipei City'
				}
			],
			email_placeholder: 'Enter E-Mail Address'
		};
	},
	methods: {
		openPlatform(platform) {
			window.open(platform.link);
		},
		openLink(link) {
			if (link.link) window.open(link.link);
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'black_bottom.scss';
</style>
