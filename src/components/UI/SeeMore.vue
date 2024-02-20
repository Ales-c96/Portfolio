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
        <slot></slot>
      </div>
    </transition>
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
}
</style>
