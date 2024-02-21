<script setup>
import { ref } from "vue";
const showMore = ref(false);
</script>

<template>
  <div class="seeMore">
    <button class="seeMore__button" @click="showMore = !showMore">
      {{ showMore ? "Ver menos..." : "Ver más..." }}
    </button>
    <transition name="fade">
      <div v-if="showMore">
        <p class="seeMore__description">
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.seeMore {
  @include dflexCol();
  gap: 0.5rem;

  &__button {
    border: none;
    background-color: $body-bg;
    color: $secondary;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    width: fit-content;
    font-weight: 500;
    font-size: 0.8rem;
    cursor: pointer;
    transition: 0.3s ease all;

    &:hover {
      background-color: $hover;
    }
  }
  &__description {
    line-height: 1.2rem;
  }
}
</style>
