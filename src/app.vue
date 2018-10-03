<template>
	<div class="root">
		<v-btn></v-btn>
		<span>{{ msg }}</span>
	</div>
</template>

<script>
	import vBtn from '@/button.vue';

	export default {
		components: {
			vBtn
		},
		data() {
			return {
				msg: 'hello vue'
			}
		}
	}
</script>

<style scoped>
	span {
		color: blue;
	}
</style>