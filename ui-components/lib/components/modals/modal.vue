<template>
  <modal-backdrop>
    <div
      v-if="showCondition"
      class="modal-wrapper"
      tabindex="0"
      @keydown.esc="hideFunction"
    >
     <grow-transition>
        <div
          class=""
          @click.prevent.self="hideFunction"
        >
          <div class="modal">
            <button type="button" aria-label="Close" class="close ml-auto" @click="hideFunction">×</button>
            <header v-if="$slots.header">
              <slot name="header"></slot>
            </header>
            <main>
              <slot v-if="$slots.body" name="body"></slot>
              <div v-else-if="bodyTxt">{{ bodyTxt }}</div>
            </main>
            <footer v-if="$slots.footer">
              <slot name="footer"></slot>
            </footer>
          </div>
        </div>
      </grow-transition>
    </div>
  </modal-backdrop>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModalBackdrop from '../transitions/ModalBackdrop.vue';
import GrowTransition from '../transitions/GrowTransition.vue';

export default defineComponent({
  components: {
    ModalBackdrop,
    GrowTransition,
  },
  props: {
    bodyTxt: { type: String },
    showCondition: {type: Boolean},
    hideFunction: {type: Function},
  },
  methods: {
    // hide() {
    //   this.$store.commit('SET_UI_STATE', { isModalVisible: false });
    // },
  },
  mounted() {
      console.log('MODAL', GrowTransition, ModalBackdrop);
  }
});
</script>
<style scoped>
.modal {
  min-width: 500px;
  background: rgba(255,255,255);
  height: 500px;
}
.close {
  cursor: pointer;
  appearance: none;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
  outline: none;
  text-align: end;
  align-self: flex-end;
}
.close:focus {
  outline: none;
}
.modal-wrapper {
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.5);
}
</style>
