<template>
	<div>
		<Button type="primary" @click="modal=true">显示模态框</Button>
	    <Modal
	        v-model="modal"
	        title="Title"
	        :loading="loading"
	        @on-ok="asyncOK">
	        <p>点击两秒钟后消失</p>
	    </Modal>
	    <v-btn v-on:increase="getTotal" v-on:reduce="getTotal"></v-btn>
	    <span>{{ count }}</span>
	</div>
</template>
<script>
	
	import vBtn from '@/button';
    export default {
    	components: {
    		vBtn
    	},
        data() {
            return {
                modal: false,
                loading: true,
                count: 0
            }
        },
        methods: {
            asyncOK() {
                setTimeout(() => {
                    this.modal = false;
                }, 2000);
            },
            getTotal(total) {
            	this.count = total;
            }
        }
    }
</script>
