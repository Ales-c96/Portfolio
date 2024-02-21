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
  gap: .5rem;

  &__button {
    border: none;
    background-color: $body-bg;
    color: $secondary;
    padding: .2rem .5rem;
    border-radius: .2rem;
    width: fit-content;
    font-weight: 500;
    font-size: .8rem;
    cursor: pointer;

    &:hover{
      background-color: $hover;
    }
  }
  &__description {
    line-height: 1.2rem;
  }
}
</style>
