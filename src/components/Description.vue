<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="container main-container__element">
    <h2 class="container__title">
      {{ title }}
    </h2>
    <p class="container__description">
      {{ text }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";

</style>
