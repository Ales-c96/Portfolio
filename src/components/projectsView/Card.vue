<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="card" :style="`background-image: url(${data.thumb})`">
    <div class="card__item">
      <div class="card__data">
        <h2 class="card__data-title">{{ data.title }}</h2>
        <p class="card__data-description">{{ data.description }}</p>
      </div>
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

  @include breakpoint(1035px) {
    height: 15rem;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 1px #208d9183;;
    .card__item {
      opacity: 1;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.554);
      @include breakpoint(1035px) {
        transform: translateY(0);
      }
    }
  }

  &__item {
    width: 100%;
    height: 100%;
    @include dflexCol();
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    transition: 0.3s ease all;
    opacity: 0;
    background-color: $primary-bg;
    color: $primary;

    @include breakpoint(1035px) {
      opacity: 1;
      gap: 1rem;
      padding: 3rem;
      background-color: #05050599;
    }
  }

  &__data {
    width: 100%;
    position: relative;
    @include dflexCol();
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 1rem;

    &-title {
      width: 80%;
      font-size: 1rem;
      font-weight: 700;
      color: $primary;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      @include breakpoint(1035px) {
        color: #fff;
        font-size: 0.9rem;
      }
    }

    &-description {
      width: 80%;
      top: 2rem;
      color: $primary;
      text-align: center;

      @include breakpoint(1035px) {
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }

  &__tecs {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5rem;

    @include breakpoint(1035px) {
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
    @include breakpoint(1035px) {
      gap: 2rem;
    }
    .link {
      color: $primary;
      font-size: 1.3rem;

      @include breakpoint(1035px) {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
}
</style>
