<template>
  <button @click="() => showCondition = true">Test inside lib</button>

  <Modal bodyTxt="test" :showCondition="showCondition" :hideFunction="() => showCondition = false" />
</template>

<script>
import Modal from '../lib/components/modals/modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      showCondition: false
    }
  }
}
</script>
