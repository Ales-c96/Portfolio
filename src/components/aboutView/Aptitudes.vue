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
      <div class="aptitude" v-for="aptitud in data.aptitudes">
        <img
          class="aptitude__tec"
          :src="aptitud.icon"
          :alt="`icono de ${aptitud.name}`"
          :title="aptitud.name"
          loading="lazy"
        />
        <p class="aptitude__title">{{ aptitud.name }}</p>
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
  margin: 2.5rem 0 0 0;

  &__title {
    width: 100%;
    text-align: center;
    font-weight: 600;
  }

  &__aptitudes {
    @include dflexWrap();
    justify-content: center;
    gap: 1rem;
    width: 95%;
    border-radius: 1rem;
    padding: 1rem;

    @include breakpoint(1035px) {
      width: 100%;
      height: fit-content;
    }

    .aptitude {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;
      padding: .3rem;
      background-color: $input-bg;
      border-radius: .5rem;
      transition: .3s ease all;

      &__tec {
        width: 1.5rem;
      }

      &__title {
        font-weight: bold;
        cursor: default;
      }

      &:hover {
        transform: scale(1.5);
        box-shadow: $shadow-color;
        z-index: 1;
      }

    }
  }
}
</style>
