<template>
	<view class="video_box">
		<image :src="post_src" style="width: 100%" mode="widthFix" v-show="!playing" />
		<video
			id="my_video"
			ref="my_video"
			:src="video_src"
			autoplay="false"
			:show-center-play-btn="false"
			:controls="false"
			object-fit="fill"
			:show-mute-btn="true"
			style="width: 100%"
			@play="setPlaying(true)"
			@ended="setPlaying(false)"
			v-show="playing"
		/>
		<view class="video_obj_group">
			<view class="flex-row info_group">
				<view class="info_head"></view>
				<view class="flex-col">
					<view class="info_name_text">{{ video_name }}</view>
					<view class="info_describe_text">{{ video_describe }}</view>
				</view>
			</view>
			<image class="play_btn" src="/static/main/video_play.png" mode="widthFix" @click="togglePlay" v-show="!playing" />
			<view class="share_box total-center">
				<image class="share_icon" src="/static/main/share.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'video_player',
	data() {
		return {
			playing: false,
			video_src: '',
			post_src: '',
			video_ctx: null,
			video_name: 'Discover BackersDen',
			video_describe: '清静光'
		};
	},
	mounted() {
		this.video_ctx = uni.createVideoContext('my_video', this);
	},
	methods: {
		togglePlay() {
			if (this.video_src) {
				this.video_ctx.play();
				this.isPlaying = !this.isPlaying;
			}
		},
		setPlaying(val) {
			this.playing = val;
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import 'video_player.scss';
</style>
