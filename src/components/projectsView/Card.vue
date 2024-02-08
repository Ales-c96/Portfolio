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
  transition: 0.3s ease all;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 7px 15px 1px rgba(0, 0, 0, 0.554);
    .card__item {
      opacity: 1;
      transform: translateY(3rem);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.554);
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
    background-color: #fff;
    color: #000;
    transform: translateY(15rem);
  }

  &__title {
    font-size: 1.2rem;
    font-weight: 700;
    color: #000;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 80%;
  }

  &__tecs {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    gap: 5rem;

    &-icon {
      width: 2rem;
      height: auto;
    }
  }

  &__links {
    display: flex;
    gap: 0.5rem;
    .link {
      color: #000;
      font-size: 1.3rem;
    }
  }
}
</style>
