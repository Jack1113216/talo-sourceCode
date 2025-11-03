<template>
	<view class="page">
		<language_bar />
		<title_bar />
		<image class="head_img" src="/static/fund/fund_head.png" mode="widthFix" />
		<view class="become_group total-center">
			<view class="become_text">{{ become }}</view>
		</view>
		<view style="background-color: rgba(246, 250, 251, 1)">
			<view class="describe_text">{{ describe }}</view>
			<form_window class="window">
				<template v-slot:main>
					<!-- 个人详情 -->
					<view class="title_text">{{ personal_title }}</view>
					<view :class="{ option_space: option.title }" v-for="(option, index) in personal_infos" :key="index">
						<my_input :title="option.title" :placeholder="option.placeholder" :type="option.type" :radiu_box="true" v-model="option.value" />
					</view>
					<!-- 项目详情 -->
					<view class="option_space title_text">{{ project_title }}</view>
					<my_dropdown
						class="option_space"
						:title="project_infos[0].title"
						:placeholder="project_infos[0].placeholder"
						:radiu_box="true"
						:itemList="project_infos[0].list"
						v-model="project_infos[0].value"
					/>
					<view class="option_space">
						<my_input
							:title="project_infos[1].title"
							:placeholder="project_infos[1].placeholder"
							:type="project_infos[1].type"
							:radiu_box="true"
							v-model="project_infos[1].value"
						/>
					</view>
					<view class="option_space option_title">{{ project_infos[2].title }}</view>
					<view class="flex-row justify-between" style="margin-top: 12rpx">
						<my_dropdown
							:placeholder="project_infos[2].placeholder"
							:radiu_box="true"
							:itemList="project_infos[2].list"
							:width="294"
							:show_arrow="false"
							:right="true"
							v-model="project_infos[2].value"
						/>
						<my_dropdown
							:placeholder="project_infos[3].placeholder"
							:radiu_box="true"
							:itemList="project_infos[3].list"
							:width="294"
							:show_arrow="false"
							:right="true"
							v-model="project_infos[3].value"
						/>
					</view>

					<!-- 类型选择 -->
					<view class="flex-row justify-between" style="margin-top: 18rpx">
						<view class="flex-row" v-for="(item, index) in type_options" :key="index">
							<view class="option_circle total-center">
								<view class="option_circle_choose" v-show="index == type_choose" />
							</view>
							<view class="option_text">{{ item }}</view>
						</view>
					</view>
					<!-- 文件消息 -->
					<view class="option_space title_text">{{ other_title }}</view>
					<view class="option_title" style="margin-top: 20rpx">{{ msg_title }}</view>
					<view class="file_box"></view>
					<view class="link_text">{{ add_files }}</view>
					<!-- 按钮 -->
					<view class="btn_box total-center">
						<view class="btn_text">
							{{ create_btn }}
						</view>
					</view>
					<!-- 底部内容 -->
					<view class="tip_text option_space">{{ tip_star }}</view>
					<view class="space_line option_space"></view>
					<view class="privacy_title option_space">{{ project_title }}</view>
					<view class="tip_text option_space">{{ privacy_text }}</view>
				</template>
			</form_window>
			<view class="tip_text request_tip_text">{{ tip_request }}</view>
		</view>
		<fund_swiperVue></fund_swiperVue>

		<view class="goto_box flex-col align-center" v-for="(goto, index) in goto_datas" :key="index">
			<view class="goto_title">{{ goto.title }}</view>
			<view class="goto_describe">{{ goto.describe }}</view>
			<view class="goto_title">{{ goto.login }}</view>
			<image class="goto_icon" src="/static/icons/goto_icon.png" mode=""></image>
		</view>
		<view class="goto_box" style="height: 164rpx"></view>
		<view class="fund_bottom flex-col align-center">
			<image class="ukcf_logo" src="/static/fund/ukcf_logo.png" mode="" />
			<view class="ukcf_describe">{{ ukcf_describe }}</view>
			<view class="contast_grid">
				<view class="ukcf_describe contast_text" v-for="(item, index) in contact_texts" :key="index">
					{{ item }}
				</view>
			</view>
			<view class="split_line"></view>
			<view class="company_text">{{ company }}</view>
			<view class="icon_group justify-between">
				<view class="icon_box total-center" v-for="(platform, index) in platforms" :key="index" @click="openLink(platform)">
					<image class="icon" :src="platform.white_icon" mode="widthFix"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import platforms from '/static/datas/social_platform.json';
import fund_swiperVue from '@/components/fund/fund_swiper/fund_swiper.vue';
export default {
	components: {
		fund_swiperVue
	},
	data() {
		return {
			become: 'Become a Fundraiser',
			describe:
				'It is simple to raise property finance through our platform, This does not placeany obllgation on you to ralse funds on the Simple Crowdfunding platform.\n\nComplete the form below with your project infomation to get started. One ofour property investment team will then call you to discuss. Any information youprovide will remain confdential and will only be used for the sole purpose ofassessing fnance for your project.',
			create_btn: 'Submit',
			personal_title: 'PERSONAL DETMILS',
			personal_infos: [
				{
					title: 'Full name*',
					placeholder: 'First names',
					type: 'text',
					value: ''
				},
				{
					title: '',
					placeholder: 'last names',
					type: 'text',
					value: ''
				},
				{
					title: 'Email Address*',
					placeholder: 'Email Address',
					type: 'text',
					value: ''
				},
				{
					title: 'confirm Email Address*',
					placeholder: 'Email Address',
					type: 'text',
					value: ''
				},
				{
					title: 'Phone Number*',
					placeholder: 'Phone Number',
					type: 'text',
					value: ''
				}
			],
			project_title: 'PROJECT DETMILS',
			project_infos: [
				{
					title: 'Type of project*',
					placeholder: '',
					list: ['aa', 'bb'],
					value: ''
				},
				{
					title: 'Raise amount (£)*',
					placeholder: 'Enter the amount you wish to raise',
					type: 'text',
					value: ''
				},
				{
					title: 'How long wouid you like the finance for?*',
					placeholder: '年',
					list: Array.from({ length: 100 }, (v, k) => 2023 - k),
					value: ''
				},
				{
					title: '',
					placeholder: '月',
					list: Array.from({ length: 12 }, (v, k) => k + 1),
					value: ''
				}
			],

			type_options: ['i own it', 'i control it', 'i buying it'],
			type_choose: -1,
			other_title: 'OTHER',
			msg_title: 'message*',
			add_files: 'Add Files',
			tip_star: '*Indicates a required feld',
			privacy: 'Privacy Statement',
			privacy_text:
				'In order to assess an application for funding, we may need to collectand process personal data relating to the key people involved in andconnected to the project.\nFor full information about how Simple Crowdfunding uses and sharespersonal data please refer to our privacy policy.',
			tip_request:
				'One of the Simple Crowdfunding property investment team will be in touch inthe next day or two once we have reviewed your request, lfyou wish to speak tosomeone in the meantime, please Contact Us.',
			goto_datas: [
				{
					title: 'What Our Fundraisers Say..',
					describe:
						'"Working with Simple? Great! l researched quite a fewplatforms before we decided to go with you. What reallycinched it wre people that l wanted to work with."',
					login: 'Login'
				},
				{
					title: 'What Our Fundraisers Say..',
					describe:
						'"Working with Simple? Great! l researched quite a fewplatforms before we decided to go with you. What reallycinched it wre people that l wanted to work with."',
					login: 'Login'
				}
			],
			ukcf_describe:
				'Simple Crowdfunding is a trading name for Focus 2020 Limited (FRN 727214), authorised and regulated by the Financial Conduct Authority. Focus 2020 Limited (Number 04016517) is a registered company in England and Wales.',
			contact_texts: ['Contact Us', 'Contact Us', 'Contact Us', 'Contact Us', 'Contact Us', 'Contact Us'],
			company: '© 2025 Simple Crowdfunding. All Rights Reserved',
			platforms: platforms
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: 'talotalk'
		});
	},
	methods: {
		openLink(platform) {
			window.open(platform.link);
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'fund_page.scss';
.window {
	margin-top: 38rpx !important;
	box-sizing: border-box;
	box-shadow: none !important;
	border: 2rpx solid rgba(196, 188, 239, 1);
	border-radius: 8rpx;
	background-color: rgba(245, 243, 255, 1) !important;
	padding: 32rpx 40rpx 70rpx 40rpx !important;
}
.btn_box {
	height: 72rpx;
	background: rgba(103, 76, 239, 1);
	margin-top: 22rpx;
}
.btn_text {
	@extend .text;
	color: rgba(255, 255, 255, 1) !important;
	font-size: 20rpx !important;
	font-weight: 700;
}
</style>
