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
    <h2 class="container__title">Experiencia</h2>
    <div v-for="exp in data" class="container__experience">
      <p><span class="data-exp">Empresa:</span> {{ exp.company }}</p>
      <p><span class="data-exp">Puesto:</span> {{ exp.position }}</p>
      <p><span class="data-exp">Tiempo:</span> {{ exp.time }}</p>
      <hr class="hr-horizontal" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 1rem;

  &__title {
    font-weight: 600;
  }

  &__experience {
    @include dflexCol();
    gap: 0.3rem;
  }
}
.data-exp {
  font-weight: 700;
}
.hr-horizontal {
  @include separator($body-bg);
}
</style>
