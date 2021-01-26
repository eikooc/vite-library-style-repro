<template>
 <transition name="grow" mode="out-in" appear>
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
.grow-enter-active,
.grow-leave-active {
  transition: transform 0.3s ease-in-out;
}

.grow-enter-from,
.grow-leave-to {
  transform: scale(0.6);
}
</style>
