<script setup>
import useControls from "../../composables/useControls";
const { localTheme, toggleTheme } = useControls();
</script>
<template>
  <nav class="controls-container container__element">
    <div class="controls-container__mode">
      <button @click="toggleTheme" class="controls-container__mode-theme">
        <transition name="fade">
          <i :class="`fa-solid fa-${localTheme}`"></i>
        </transition>
      </button>
    </div>
    <div class="controls-container__lang">
      <i class="fa-solid fa-language"></i>
      <select class="controls-container__lang-select" id="lang">
        <option value="ES">Español</option>
        <option value="ENG">English</option>
      </select>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.controls-container {
  @include box();
  @include dflexCol();
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;

  &__mode,
  &__lang {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;
  }

  &__mode {
    &-theme {
      display: flex;
      gap: 2.5rem;
      position: relative;
      padding: 0.5rem;
      border-radius: 0.5rem;
      background-color: $primary-lock;
      color: $primary;
      cursor: pointer;
      transition: .3s ease all;

      &:hover {
        color: $primary-hover;
      }
    }

    &--active {
      color: $primary;
    }
  }

  &__lang {
    color: $primary;

    &-select {
      background-color: $primary;
      padding: 0.1rem;
      text-transform: uppercase;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
}
//VUE transition
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease all;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
