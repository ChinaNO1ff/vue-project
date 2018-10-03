<template>
	<div class="button">
		<button @click="add">add</button>
		<span>{{ count }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count: 0
			}
		},
		methods: {
			add() {
				this.count ++;
			}
		}
	}
</script>

<style scoped>
	button {
		color: red;
	}
</style>