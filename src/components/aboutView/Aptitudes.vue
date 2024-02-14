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
    <h2 class="container__title">{{ data.title }}</h2>
    <div class="container__aptitudes">
      <div v-for="aptitud in data.aptitudes">
        <img :src="aptitud" alt="icono de tecnología">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 1rem;
  justify-content: center;
  align-items: center;

  &__title {
    font-weight: 600;
  }

  &__aptitudes {
    @include dflexWrap();
    gap: 1rem;
    width: 55%;
    border-radius: 1rem;
    padding: 1rem;

    @include breakpoint(768px) {
      width: 100%;
      height: fit-content;
    }

    &-title {
      margin: 0 0 0.5rem 0;
      font-weight: bold;
    }
  }
}
</style>
