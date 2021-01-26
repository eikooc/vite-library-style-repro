<template>
  <div class="container">
    <button @click="show">Open</button>
    <Modal bodyTxt="test" :showCondition="modalOpen" :hideFunction="hide" />
  </div>
</template>

<script>
import { Modal } from '@myLib/components'
import '@myLib/components/dist/style.css'
export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      modalOpen: false,
    }
  },
  methods: {
    hide() {
      this.modalOpen = false
    },
    show() {
      this.modalOpen = true
    }
  }
}
</script>
<style scoped>
.container {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
