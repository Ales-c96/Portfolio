<script setup>
import { ref } from "vue";
const showMore = ref(false);
</script>

<template>
  <div class="seeMore">
    <button class="seeMore__button" @click="showMore = !showMore">{{ showMore ? 'Ver menos...' : 'Ver más...' }}</button>
    <div :class="[showMore ? 'seeMore__text--active' : '']" class="seeMore__text">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.seeMore {
    @include dflexCol();
    gap: 1rem;

  &__button {
    border: none;
    background-color: transparent;
    width: fit-content;
    color: $primary;
    font-weight: 900;
    cursor: pointer;
  }

  &__text {
    overflow: hidden;
    height: 0;
    transition: 0.3s ease all;
    
    &--active {
      height: initial;
    }
  }
}
</style>
