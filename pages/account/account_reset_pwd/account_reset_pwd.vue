<template>
	<view class="page">
		<language_bar />
		<title_bar />
		<form_window :title="form_title" :describe="form_describe" :btn_name="create_btn" btn_text_class="btn_text">
			<template v-slot:main>
				<view class="option_space" v-for="(option, index) in options_info" :key="index">
					<my_input :title="option.title" :placeholder="option.placeholder" :type="option.type" v-model="option.value" />
				</view>
			</template>
			<template v-slot:flooter>
				<view class="link_text option_space" @click="toLogin()">
					{{ login_link }}
				</view>
			</template>
		</form_window>
		<fscs_bottom />
	</view>
</template>

<script>
export default {
	data() {
		return {
			form_title: 'Reset your password',
			form_describe: 'To reset your password enter the user name and press the"Reset Password" button.',
			create_btn: 'RESET PASSWORD',

			options_info: [
				{
					title: 'Email address',
					placeholder: 'Enter Email',
					type: 'text',
					value: ''
				}
			],
			login_link: 'Back To Login'
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: 'talotalk'
		});
	},
	methods: {
		toLogin() {
			uni.navigateTo({
				url: '/pages/account/account_login/account_login'
			});
		}
	}
};
</script>
<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import '../account.scss';
.btn_text {
	font-weight: 400 !important;
}
</style>
