<template>
	<view class="page" style="background-color: #fff">
		<language_bar />
		<title_bar />
		<video_player />
		<view class="wave_blue_box">
			<image class="wave_bg" src="/static/main/wave_bg.png" mode="heightFix" />
			<view class="wave_title">{{ wave_title }}</view>
			<view class="wave_top">{{ wave_top }}</view>
			<view class="wave_describe">{{ wave_describe }}</view>
			<image class="circle_img" src="/static/main/circle.png" />
			<view class="endorsed_group">
				<view class="endorsed_box flex-col align-center" v-for="(item, index) in endorseds" :key="index">
					<image class="endorsed_icon" :src="item.icon" mode="aspectFit" />
					<view class="endorsed_text">{{ item.text }}</view>
				</view>
			</view>
		</view>
		<view class="green_box">
			<view class="green_title">
				<image class="wave_bg" src="/static/main/wave_bg.png" mode="heightFix" />
				<view class="title_text">{{ green_title }}</view>
				<view class="btn_box total-center">
					<view class="link_box"></view>
					<view class="make_text">{{ make_text }}</view>
				</view>
			</view>
			<view class="green_group">
				<view class="green_grid_box" v-for="(item, index) in img_group">
					<view class="grid_text" v-if="item.text">{{ item.text }}</view>
					<image class="green_grid_box" :src="item.img" mode="aspectFill" />
				</view>
			</view>
			<view class="intrest_group flex-col justify-between" style="margin-top: 86rpx">
				<view class="flex-row">
					<view class="square_box"></view>
					<view class="intrest_text">{{ intrest_text }}</view>
				</view>
				<view class="intrest_top">{{ intrest_top }}</view>
			</view>
			<view class="recommend_group flex-col align-center" v-for="(recommend, index) in recommendations">
				<view class="recommend_icon_box total-center">
					<image class="recommend_icon" :src="recommend.icon" mode=""></image>
				</view>
				<view class="recommend_title">{{ recommend.title }}</view>
				<view class="recommend_content">{{ recommend.content }}</view>
			</view>
		</view>
		<view class="project_blue_box flex-col align-center">
			<view class="project_blue_group flex-col align-center" v-for="(project, index) in projects">
				<view class="icon_box"></view>
				<view class="value_text">{{ project.value }}</view>
				<view class="project_text">{{ project.text }}</view>
			</view>
		</view>
		<view class="intrest_group flex-col justify-between align-center" style="margin-top: 104rpx">
			<view class="flex-row">
				<view class="square_box"></view>
				<view class="intrest_text">{{ intrest_text }}</view>
			</view>
			<view class="intrest_top">{{ intrest_top }}</view>
		</view>
		<!-- 项目滑块列表 -->
		<swiper
			class="main_swipper"
			:indicator-dots="true"
			indicator-color="rgba(196, 196, 196, 1)"
			indicator-active-color="rgba(103, 76, 239, 1)"
			:autoplay="true"
			:circular="true"
			:interval="5000"
			:duration="500"
		>
			<swiper-item v-for="(swipper, index) in swipper_list" :key="index">
				<view class="swiper-item">
					<image class="swiper-img" :src="swipper.img" mode="aspectFill" />
					<view class="swiper_introduce_box">
						<view class="swiper_introduce">{{ swipper.introduce }}</view>
					</view>
					<view class="swipper_day_text" style="margin-top: 16rpx; margin-left: 28rpx">{{ swipper.day }}{{ day_text }}</view>
					<view class="swipper_title_text">{{ swipper.title }}</view>
					<view class="flex-row justify-between raise_group">
						<view class="swipper_day_text">{{ raised_text }}${{ swipper.now_val }}</view>
						<view class="swipper_day_text">{{ getProgress(swipper) }}</view>
					</view>
					<view class="progress_bar_bg">
						<view class="progress_bar" :style="getProgressLength(swipper)"></view>
					</view>
					<view class="total_group flex-row">
						<view class="total_text">{{ target_text }}</view>
						<view class="total_val">${{ swipper.target }}</view>
					</view>
				</view>
			</swiper-item>
		</swiper>

		<!-- 开始项目栏 -->
		<view class="start_project_box flex-col align-center">
			<image class="start_proj_bg" src="/static/main/start_proj_bg.png" />
			<view class="proj_group flex-col align-center">
				<view class="proj_introduce">{{ proj_introduce }}</view>
				<view class="proj_text">{{ proj_text }}</view>
				<view class="proj_btn total-center">
					<view class="proj_btn_text">{{ proj_btn }}</view>
				</view>
			</view>
		</view>
		<view class="client_join_box">
			<view class="client_join_right_block" />
			<view class="client_join_text">{{ client_text }}</view>
		</view>

		<view class="intrest_group flex-col justify-between" style="margin-top: 388rpx; margin-left: 24rpx">
			<view class="flex-row">
				<view class="square_box"></view>
				<view class="intrest_text">{{ intrest_text }}</view>
			</view>
			<view class="intrest_top">{{ intrest_top }}</view>
		</view>

		<!-- 客户信息 -->
		<view class="client_box">
			<view class="client_left_bar" />
			<view class="client_name">{{ client_name }}</view>
			<view class="client_describe">{{ client_describe }}</view>
			<client_videoVue class="client_player" />
		</view>
		<view class="change_list_box">
			<view class="btn_group flex-row">
				<view class="change_list_btn total-center">
					<image class="btn_img" src="/static/main/arrow.png" style="transform: rotate(90deg)" />
				</view>
				<view class="change_list_btn total-center" style="margin-left: 4rpx">
					<image class="btn_img" src="/static/main/arrow.png" style="transform: rotate(-90deg)" />
				</view>
			</view>
		</view>
		<!-- 订阅栏 -->
		<view class="subscribe_box flex-col">
			<image class="bg_img" src="/static/main/green_bg.png" />
			<view class="intrest_group flex-col justify-between align-center" style="margin-top: 76rpx">
				<view class="flex-row">
					<view class="square_box"></view>
					<view class="intrest_text" style="font-weight: 400">{{ intrest_text }}</view>
				</view>
				<view class="intrest_top" style="font-weight: 800">{{ intrest_guide }}</view>
			</view>

			<view class="subscribe_group flex-row justify-between">
				<view class="subscribe_input_box">
					<input class="subscribe_input" type="text" placeholder-class="subscribe_placeholder" :placeholder="subscribe_placeholder" />
				</view>
				<view class="subscribe_btn total-center">
					<view class="btn_text">{{ subscribe_text }}</view>
				</view>
			</view>
		</view>
		<black_bottom />
	</view>
</template>

<script>
import video_player from '@/components/main/video_player/video_player.vue';
import client_videoVue from '@/components/main/video_player/client_video.vue';
export default {
	components: { video_player, client_videoVue },
	data() {
		return {
			wave_title: 'Which Category Intrest You',
			wave_top: 'Top categories',
			wave_describe:
				'Explore our diverse range of high-potentia] crowdfunding opportunities, We welcomeexceptional projects across all categories, with special focus on Pre-lPo candidates(1-3 yearhorizon) and ventures with innovative IP seekingglobal capital. Browse by category to find yourperfect investment match.',
			endorseds: [
				{
					icon: '/static/main/endorsed_0.png',
					text: 'TW AI ASsOC\nEndorsed'
				},
				{
					icon: '/static/main/endorsed_1.png',
					text: 'TW AI ASsOC\nEndorsed'
				},
				{
					icon: '/static/main/endorsed_2.png',
					text: 'TW AI ASsOC\nEndorsed'
				},
				{
					icon: '/static/main/endorsed_0.png',
					text: 'TW AI ASsOC\nEndorsed'
				},
				{
					icon: '/static/main/endorsed_1.png',
					text: 'TW AI ASsOC\nEndorsed'
				},
				{
					icon: '/static/main/endorsed_2.png',
					text: 'TW AI ASsOC\nEndorsed'
				}
			],
			green_title: 'Ready to Raise Funds for ldoa?',
			make_text: 'MAKE IT HAPPEN',
			img_group: [
				{ text: 'We provide professional\n"investor Management and lPo Guidance' },
				{ img: '/static/main/green_imgs/img_1.png' },
				{ img: '/static/main/green_imgs/img_2.png' },
				{ img: '/static/main/green_imgs/img_3.png' },
				{ img: '/static/main/green_imgs/img_3.png' },
				{ img: '/static/main/green_imgs/img_3.png' }
			],
			intrest_text: 'Which Category Intrest You',
			intrest_top: 'Top categories',
			intrest_guide: 'Crowdfunding Guide',
			recommendations: [
				{
					icon: '/static/main/icon_dui.png',
					title: 'AI-Powered Recommendations & Monitoring',
					content:
						'Our platform uses artificial intelligence to match you with ideal investment opportunities and provide real-time analysis of project performance, giving you professional insights for smarter decisions.'
				},
				{
					icon: '/static/main/icon_dui.png',
					title: 'AI-Powered Recommendations & Monitoring',
					content:
						'Our platform uses artificial intelligence to match you with ideal investment opportunities and provide real-time analysis of project performance, giving you professional insights for smarter decisions.'
				},
				{
					icon: '/static/main/icon_dui.png',
					title: 'AI-Powered Recommendations & Monitoring',
					content:
						'Our platform uses artificial intelligence to match you with ideal investment opportunities and provide real-time analysis of project performance, giving you professional insights for smarter decisions.'
				}
			],
			projects: [
				{
					icon: '',
					value: 690,
					text: 'Projects Completed'
				},
				{
					icon: '',
					value: 690,
					text: 'Projects Completed'
				},
				{
					icon: '',
					value: 690,
					text: 'Projects Completed'
				},
				{
					icon: '',
					value: 690,
					text: 'Projects Completed'
				}
			],
			swipper_list: [
				{
					img: '/static/main/swipper_img.png',
					introduce: 'EDUCATION IHOLISTIC AND\nSPIRITUAL WELLNESS\nMASTERCLASS RECOMMENDED\nPROJECTS',
					day: 0,
					title: '正念A1:佛教智慧核心的互動式旅程',
					now_val: 22,
					target: 1000
				},
				{
					img: '/static/main/swipper_img.png',
					introduce: 'EDUCATION IHOLISTIC AND\nSPIRITUAL WELLNESS\nMASTERCLASS RECOMMENDED\nPROJECTS',
					day: 0,
					title: '正念A1:佛教智慧核心的互動式旅程',
					now_val: 0,
					target: 1000
				},
				{
					img: '/static/main/swipper_img.png',
					introduce: 'EDUCATION IHOLISTIC AND\nSPIRITUAL WELLNESS\nMASTERCLASS RECOMMENDED\nPROJECTS',
					day: 0,
					title: '正念A1:佛教智慧核心的互動式旅程',
					now_val: 500,
					target: 1000
				}
			],
			day_text: ' days left',
			raised_text: 'Raised:',
			target_text: 'Goal:',
			proj_introduce: 'World is Full with Creativity',
			proj_text: 'Together We can Bring More Creativity into the World',
			proj_btn: 'START A PROJECT',
			client_text: 'Clients we have worked with.',
			client_name: 'Li-jie',
			client_describe:
				"\"Having built financial businesses across Taiwan,Asia, and Dubai, i've seen how traditional barriersexclude brilliant entrepreneurs from opportunities.When l digitized regional investment processes, l\nwitnessed technology's power to democratizecapital markets. Backersden unlocks global\npotential-enabling everyday investors to support innovation alongside institutional players.\nTraditionalventure capital serves less than 1% of entrepreneurs.Through equity crowdfunding, we're democratizing\nopportunity itself, creating a world where great ideasget funded regardless of geography or connections.Innovation thrives through collective belief.\"",
			subscribe_placeholder: 'Enter E-Mail Address',
			subscribe_text: 'SUBSCRIBE'
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: 'talotalk'
		});
	},
	methods: {
		getProgress(item) {
			var progress = (item.now_val / item.target) * 100;
			progress = progress.toFixed(1).replace('.0', '');
			return progress + '%';
		},
		getProgressLength(item) {
			var width = (item.now_val / item.target) * 644;
			var style = `width: ${width}rpx`;
			return style;
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'main_home.scss';
</style>
