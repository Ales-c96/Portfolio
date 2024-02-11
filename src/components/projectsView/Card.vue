<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const path  = window.location.origin;
</script>

<template>
  <article class="card" :style="`background-image: url(${data.thumb})`">
    <div class="card__item">
      <h2 class="card__title">{{ data.title }}</h2>
      <div class="card__tecs">
        <div>
          <img
            class="card__tecs-icon"
            v-for="icons in data.tec"
            :src="icons"
            :alt="`Icono de la tecnologia`"
          />
        </div>
        <div class="card__links">
          <a
            class="link"
            :href="data.url"
            target="_blank"
            title="Ver proyecto"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-eye"></i>
          </a>
          <a
            :href="data.githubUrl"
            class="link"
            target="_blank"
            title="Ver proyecto en github"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github"></i
          ></a>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.card {
  position: relative;
  @include dflexCol();
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 12rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.2rem;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0px 7px 15px 1px rgba(0, 0, 0, 0.554);
  transition: 0.3s ease all;

  @include breakpoint(768px) {
    width: 18rem;
    height: 13rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 7px 20px 8px rgba(0, 0, 0, 0.554);
    .card__item {
      opacity: 1;
      transform: translateY(3rem);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.554);
      @include breakpoint(768px) {
        transform: translateY(0);
      }
    }
  }

  &__item {
    width: 100%;
    height: 100%;
    @include dflexCol();
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    padding: 1rem;
    transition: 0.3s ease all;
    opacity: 0;
    background-color: $body-bg;
    color: $primary;
    transform: translateY(15rem);

    @include breakpoint(768px) {
      gap: 1rem;
      padding: 3rem;
      background-color: #0505056a;
    }
  }

  &__title {
    font-weight: 700;
    color: $primary;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;

    @include breakpoint(768px) {
      color: #fff;
    }
  }

  &__tecs {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;

    @include breakpoint(768px) {
      justify-content: space-around;
      flex-direction: column;
      gap: 0.5rem;
    }

    &-icon {
      width: 2rem;
      height: auto;
    }
  }

  &__links {
    display: flex;
    gap: 0.5rem;
    @include breakpoint(768px) {
      gap: 2rem;
    }
    .link {
      color: #000;
      font-size: 1.3rem;

      @include breakpoint(768px) {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
}
</style>
