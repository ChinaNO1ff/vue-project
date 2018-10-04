<template>
	<div class="button">
		<button @click="increase">increase</button>
		<button @click="reduce">reduce</button>
		<span>{{ count }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 7
			}
		},
		methods: {
			increase() {
				this.count ++;
				this.$emit('increase', this.count);
			},
			reduce() {
				this.count --;
				this.$emit('reduce', this.count);
			}
		}
	}
</script>

<style scoped>
	button {
		color: red;
	}
</style>