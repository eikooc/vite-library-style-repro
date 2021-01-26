<template>
  <transition
    name="slide-down"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot/>
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.height = '0';
    },
    enter(el) {
      el.style.height = `${el.scrollHeight}px`;
    },
    leave(el) {
      el.style.height = '0';
    },
  },
};
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all .2s;
}
</style>
