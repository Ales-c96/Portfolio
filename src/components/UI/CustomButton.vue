<script setup>
const emit = defineEmits(["click-event"]);
</script>
<template>
  <button class="button" @click="$emit('click-event')"><slot></slot></button>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.button {
  padding: 0.5rem 1rem;
  background-color: $body-bg;
  border: 0.2rem solid $body-bg;
  border-radius: 0.5rem;
  transition: 0.3s ease all;
  color: $secondary;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
}
</style>
