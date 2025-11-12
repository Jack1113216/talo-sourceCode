<template>
	<base_page bg-color="#fff">
		<view class="top_img_group">
			<image class="top_img_group" src="/static/raise/raise_bg.png" mode="aspectFill" />
			<view class="top_content">
				<view class="top_text">{{ project_data.title }}</view>
			</view>
		</view>
		<view class="content_group flex-col">
			<image class="project_top_img" :src="project_data.imgs[1]" mode="aspectFill" />
			<view class="project_other_img_group flex-row justify-between justify-between">
				<image class="project_other_img_1" :src="project_data.imgs[0]" mode="aspectFill" />
				<image class="project_other_img_2" :src="project_data.imgs[1]" mode="aspectFill" />
			</view>
			<view class="project_introduce_box">
				<view class="project_introduce">{{ project_data.introduce }}</view>
			</view>
			<view class="project_title_text">{{ project_data.title }}</view>
			<view class="project_target_box flex-col">
				<view class="target_text">{{ target_text }}</view>
				<view class="target_value_text">{{ project_data.target }}</view>
			</view>
			<view class="deadline_box">
				<view class="deadline_text">
					{{ deadline_text }}
					<br />
					{{ getTime() }}
				</view>
			</view>
			<view class="story_box total-center">
				<view class="story_text">{{ story_text }}</view>
			</view>
			<view class="project_title_text">{{ project_data.title }}</view>
			<view class="project_title_text" style="font-weight: 500">{{ project_data.describe }}</view>
			<view style="height: 100rpx"></view>
		</view>
	</base_page>
</template>

<script>
import { formatTime } from '@/utils/time_util';
export default {
	data() {
		return {
			target_text: '目標金額',
			deadline_text: '截止日期',
			story_text: 'Stroy',
			project_data: {}
		};
	},
	onLoad() {
		this.project_data = uni.getStorageSync('page_data');
		console.log(this.project_data);
	},
	methods: {
		getTime() {
			console.log(this.project_data);
			var str = formatTime(this.project_data.deadline, 'yyyy/MM/dd');
			return str;
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'project_detail.scss';
</style>
