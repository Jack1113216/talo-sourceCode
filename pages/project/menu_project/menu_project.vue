<template>
	<base_page bg-color="#fff">
		<view class="project_title_box total-center">
			<text class="title_text">項目類型</text>
		</view>
		<scroll-view class="type_scroll" scroll-x="true">
			<view class="flex-row">
				<view class="type_box flex-row" v-for="(item, index) in type_list">
					<view class="type_text">{{ item }}</view>
					<image class="add_icon" src="/static/project/add_icon.png" />
				</view>
			</view>
		</scroll-view>
		<project_box :project_info="project_info" />
		<page_selector class="page_selector" @change="choosePage" />
	</base_page>
</template>

<script>
import project_box from '@/components/project/project_box/project_box.vue';
export default {
	components: {
		project_box
	},
	data() {
		return {
			type_list: ['課程', '影視', '遊戲', 'AI應用', 'ESG科技'],
			project_info: {
				imgs: ['/static/main/project_img.png', '/static/api/project_2.png'],
				introduce: 'EDUCATION | IHOLISTIC AND SPIRITUAL\nWELLNESS | MASTERCLASS\nRECOMMENDED PROJECTS',
				day: 0,
				title: '正念A1:佛教智慧核心的互動式旅程',
				now_val: 22,
				target: 1000,
				type: '課程',
				progress: '眾籌中/已成案',
				deadline: new Date(2025, 11, 12),
				describe: '為下一代重新想像古老經典'
			},
			total_page: 50,
			show_page: 5
		};
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
		},
		choosePage(page) {
			console.log(page);
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import 'menu_project.scss';
</style>
