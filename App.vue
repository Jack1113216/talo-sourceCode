<script>
export default {
	onLaunch: function () {
		uni.getSystemInfo({
			success: (res) => {
				console.log(res);
			}
		});
		console.log('App Launch');
	},
	onShow: function () {
		console.log('App Show');
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
.text {
	overflow-wrap: break-word;
	font-family: Noto Sans SC;
	text-align: left;
	white-space: nowrap;
}
</style>
