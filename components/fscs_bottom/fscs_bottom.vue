<template>
	<view>
		<view class="split_line" />
		<view class="describe_text">
			{{ describe }}
		</view>

		<view style="height: 172rpx" />
	</view>
</template>

<script>
export default {
	name: 'fscs_bottom',
	data() {
		return {
			describe:
				'Investing through this platform is not covered by the Financial ServicesCompensation Scheme (FSCS). Investing involves risk, including loss ofcapital and illiquidity and it should be done only as part of a diversifedportfolio.Investing using this platform is only forinvestors whounderstand these risks, Please read the full Risk Warning beforeinvesting. You will only be able to invest once you have become anauthorised investor. All investment activities take place within theUnited Kingdom, and any person resident outside the United Kingdomshould ensure that they are not subject to any local regulations beforeinvesting.'
		};
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
.split_line {
	width: 100%;
	height: 2rpx;
	background-color: rgba(103, 76, 239, 1);
	margin-top: 100rpx;
}
.describe_text {
	@extend .text;
	white-space: break-spaces;
	width: 690rpx;
	color: rgba(72, 72, 72, 1);
	font-size: 26rpx;
	font-weight: 400;
	line-height: 40rpx;
	text-transform: capitalize;
	margin-top: 80rpx;
	margin: 30rpx 0 0 30rpx;
}
</style>
