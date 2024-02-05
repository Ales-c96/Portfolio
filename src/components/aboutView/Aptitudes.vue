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
      <div v-for="aptitudes in data.aptitudes">
        <h2 class="container__aptitudes-title">{{ aptitudes.title }}</h2>
        <p class="container__aptitudes-paragraph">{{ aptitudes.list }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.container {
  @include dflexCol();
  gap: 1rem;

  &__title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__aptitudes {
    @include dflexWrap();
    gap: 5rem;

    &-title {
      margin: 0 0 0.5rem 0;
      font-weight: bold;
    }
    &-paragraph {
      width: 50%;
    }
  }
}
</style>
