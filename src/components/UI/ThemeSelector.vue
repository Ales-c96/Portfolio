<script setup>
import useTheme from "../../composables/useTheme";
const { getTheme } = useTheme();
</script>

<template>
  <label for="theme" class="theme-selector">
    <input id="theme" class="theme-selector__chackbox" type="checkbox" v-model="getTheme" />
    <transition name="fade" tag="span" class="theme-selector__icon">
      <i v-if="getTheme" class="fa-solid fa-sun"></i>
      <i v-else class="fa-solid fa-cloud-moon"></i>
    </transition>
  </label>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.theme-selector {
  position: absolute;
  top: -2rem;
  left: -2rem;
  width: 4rem;
  height: 4rem;
  border: 0.2rem solid $primary;
  background-color: $primary-bg;
  border-radius: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: $shadow-color;
  cursor: pointer;

  @include breakpoint(1035px) {
    top: 5rem;
    left: 1rem;
    width: 2rem;
    height: 2rem;
  }

  &__chackbox {
    display: none;
  }
  &__icon {
    position: absolute;
    color: $primary;
    font-size: 1.5rem;

    @include breakpoint(1035px) {
      font-size: 1rem;
    }
  }
}
</style>
