<template>
	<div>
		<v-btn v-on:increase="getTotal" v-on:reduce="getTotal"></v-btn>
		<span>{{ total }}</span>
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
				total: 0
			}
		},
		methods: {
			getTotal(total) {
				this.total = total;
			}
		}
	}
</script>

<style scoped>
	span {
		color: blue;
	}
</style>