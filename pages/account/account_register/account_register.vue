<template>
	<base_page>
		<form_window :title="form_title" :describe="form_describe" :btn_name="create_btn">
			<template v-slot:main>
				<view class="option_space" v-for="(option, index) in options_info" :key="index">
					<my_input :title="option.title" :placeholder="option.placeholder" :type="option.type" v-model="option.value" />
				</view>
				<view class="option_space">
					<my_input :title="code_title" :placeholder="code_placeholder" type="number" :sumb_width="100" v-model="my_number">
						<hyCountryPickerVue :title="country_title" :searchPlaceholder="country_find" @change="chooseCountry" />
					</my_input>
				</view>
			</template>
		</form_window>
		<view class="option_bottom"></view>
	</base_page>
</template>

<script>
import hyCountryPickerVue from '@/uni_modules/hy-countryPicker/components/hy-countryPicker/hy-countryPicker.vue';
export default {
	components: { hyCountryPickerVue },
	data() {
		return {
			form_title: 'Create an account',
			form_describe: 'By registering on our platform you are requesting to seefull offer details and to be able to invest.',
			create_btn: 'CREATE',
			code_title: 'Phone Number',
			code_placeholder: 'Phone number',
			my_number: '',
			country_title: '選擇地區',
			country_find: '搜索地區名稱',
			countryCode: '886',
			options_info: [
				{
					title: 'Enter your full frst names as they appear on your passport / birth certifcate',
					placeholder: 'First names',
					type: 'text',
					value: ''
				},
				{
					title: 'Enter your full last name as it appears on your passport / birth certifcate',
					placeholder: 'Last names',
					type: 'text',
					value: ''
				},
				{
					title: 'Email',
					placeholder: 'Enter Email',
					type: 'text',
					value: ''
				},
				{
					title: 'password',
					placeholder: 'Enter password',
					type: 'password',
					value: ''
				},
				{
					title: 'confirm password',
					placeholder: 'Confirm your password',
					type: 'password',
					value: ''
				}
			]
		};
	},
	onLoad() {
		uni.setNavigationBarTitle({
			title: 'talotalk'
		});
	},
	methods: {
		chooseCountry(item) {
			this.countryCode = item.dial_code;
		}
	}
};
</script>

<style lang="scss">
@import '@/pages/common/common.scss';
@import '@/pages/common/page.scss';
@import '../account.scss';
</style>
