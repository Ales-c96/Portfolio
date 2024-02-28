<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="card">
    <h2 class="card__title">{{ data.title }}</h2>
    <div class="card__head">
      <img class="card__image" :src="data.thumb" :alt="data.thumbAlt" />
      <div class="card__tecs">
        <img class="card__tecs-img" v-for="tec in data.tec" :src="tec" alt="" />
      </div>
    </div>
    <div class="card__data">
      <h3></h3>
      <p>{{ data.description }}</p>
    </div>
    <div class="card__links">
      <a class="card__links-code" title="ir a github" :href="data.githubUrl" target="_blank"
        >Ver el código <i class="fa-solid fa-arrow-up-right-from-square icon"></i
      ></a>
      <a class="card__links-site" title="ir al sitio" :href="data.url" target="_blank"
        >Ir al sitio <i class="fa-solid fa-arrow-up-right-from-square icon"></i
      ></a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.card {
  width: 90%;
  @include dflexCol();
  flex-wrap: wrap;
  background-color: $primary-bg;
  @include box();

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 1.5rem;
  }

  &__head {
    position: relative;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  &__data {
    padding: 1.5rem;
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    padding: 1.5rem;

    a {
      transition: 0.3s ease all;
      color: $primary;
      font-weight: 900;
      font-size: 0.8rem;
      cursor: pointer;

      &:hover {
        color: $body-bg;

        .icon {
          transform: translate(5px, -5px);
        }
      }
    }
  }

  &__tecs {
    position: absolute;
    bottom: 0;
    right: 1rem;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;

    &-img {
      width: 2rem;
    }
  }
}
.icon {
  transition: 0.3s ease;
}
</style>
