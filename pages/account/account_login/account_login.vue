<template>
	<view class="page">
		<language_bar />
		<title_bar />
		<form_window :title="form_title" :describe="form_describe" :btn_name="create_btn">
			<template v-slot:main>
				<view class="option_space" v-for="(option, index) in options_info" :key="index">
					<my_input :title="option.title" :placeholder="option.placeholder" :type="option.type" v-model="option.value" />
				</view>
			</template>
			<template v-slot:flooter>
				<view class="link_text option_space" @click="forgetPwd()">
					{{ pwd_link }}
				</view>
				<view class="flex-row option_space justify-center">
					<view class="normal_text">{{ register_tip }}</view>
					<view class="link_text" @click="registerAccount()">{{ register_link }}</view>
				</view>
				<view class="link_text option_space">
					{{ email_link }}
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
			form_title: 'Login to your account',
			form_describe: '',
			create_btn: 'LOGIN',

			options_info: [
				{
					title: 'Email',
					placeholder: 'Enter Email',
					type: 'text',
					value: ''
				},
				{
					title: 'Password',
					placeholder: 'Enter password',
					type: 'password',
					value: ''
				}
			],
			pwd_link: "I've forgottenmy_password",
			register_tip: "Don't have an account?",
			register_link: 'create one here',
			email_link: "Didn'treceive email conhrmation instructions?"
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: 'talotalk'
		});
	},
	methods: {
		forgetPwd() {
			uni.navigateTo({
				url: '/pages/account/account_reset_pwd/account_reset_pwd'
			});
		},
		registerAccount() {
			uni.navigateTo({
				url: '/pages/account/account_register/account_register'
			});
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import '../account.scss';
</style>
