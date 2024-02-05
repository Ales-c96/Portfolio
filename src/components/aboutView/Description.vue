<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <h2 class="container__title">
      {{ data.title }}
    </h2>
    <p class="container__description">
      {{ data.description }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 2rem;
  &__title {
    @include sectionTitle();
  }

  &__description {
  }
}
</style>
