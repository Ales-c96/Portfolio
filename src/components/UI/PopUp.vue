<script setup>
const props = defineProps({
  isError: {
    type: Boolean,
    reqired: true,
  },
});
</script>
<template>
  <div class="popUp">
    <i v-if="isError" class="fa-solid fa-circle-exclamation popUp__error"></i>
    <i v-else class="fa-solid fa-circle-check popUp__success"></i>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.popUp {
  position: absolute;
  top: -14rem;
  left: calc(50% - 12rem);
  height: 2rem;
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @include box();
  padding: 1rem 2rem;
  background-color: $body-bg;

  &__error {
    color: #e30000;
  }

  &__success {
    color: #1cbe00;
  }
}
</style>
