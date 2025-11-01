<template>
	<view class="client_video_box">
		<image :src="post_src" style="width: 100%" mode="widthFix" v-show="!playing" />
		<video
			id="client_video"
			ref="client_video"
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
		<view class="client_video_obj_group">
			<view class="play_btn total-center" @click="togglePlay" v-show="!playing">
				<image class="play_btn_icon" src="/static/main/play_arrow.png" mode="widthFix" />
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'client_video',
	data() {
		return {
			playing: false,
			video_src: '',
			post_src: '/static/main/client_img.png',
			video_ctx: null
		};
	},
	mounted() {
		this.video_ctx = uni.createVideoContext('client_video', this);
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
