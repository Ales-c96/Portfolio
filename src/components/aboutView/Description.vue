<script setup>
import SeeMore from '../UI/SeeMore.vue';
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <p class="container__description">
      {{ data.description }}
    </p>
    <SeeMore>{{ data.seeMore }}</SeeMore>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 1rem;
}
</style>
