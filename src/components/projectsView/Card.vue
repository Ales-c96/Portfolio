<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    v-for="project in data.projects"
    class="card"
    :style="`background-image: url(${project.thumb})`"
  >
    <div class="card__item">
      <h2 class="card__title">{{ project.title }}</h2>
      <a
        class="card__link"
        :href="project.url"
        target="_blank"
        title="Ver proyecto"
        rel="noopener noreferrer"
      >
        <i class="fa-solid fa-eye"></i>
      </a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.card {
  position: relative;
  @include box();
  @include dflexCol();
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 12rem;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  overflow: hidden;
  transition: 0.3s ease all;

  &:hover {
    filter: grayscale(1);
  }

  &__item {
    width: 100%;
    height: 100%;
    @include dflexCol();
    justify-content: center;
    align-items: center;
    gap: 1rem;
    transition: 0.3s ease all;
    opacity: 0;

    &:hover {
      opacity: 1;
    }
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  &__link {
    color: $light;
    font-size: 2rem;
  }
}
</style>
