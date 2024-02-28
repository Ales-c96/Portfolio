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
    <h2 class="container__title">Educación</h2>
    <div v-for="education in data" class="container__education">
      <p><span class="data-exp">Centro:</span> {{ education.title }}</p>
      <p><span class="data-exp">Título:</span> {{ education.position }}</p>
      <p><span class="data-exp">Fecha:</span> {{ education.date }}</p>
      <SeeMore v-if="education.description">{{ education.description }}</SeeMore>
      <hr class="hr-horizontal" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 1rem;
  margin: 2.5rem 0 0 0;

  &__title {
    width: 100%;
    text-align: left;
    font-weight: 600;
  }

  &__education {
    @include dflexCol();
    gap: 0.5rem;
  }
}
.data-exp {
  font-weight: 700;
}
.hr-horizontal {
  @include separator($body-bg);
}
</style>
