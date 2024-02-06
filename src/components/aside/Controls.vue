<script setup>

import ThemeSelector from "../UI/ThemeSelector.vue";

</script>
<template>
  <nav class="controls-container">
    <ThemeSelector />
    <div class="controls-container__lang">
      Idioma:
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
  position: absolute;
  right: 1rem;
  top: 0.5rem;
  width: 7rem;
  height: 10rem;
  padding: 1rem;
  @include dflexCol();
  gap: 2rem;
  @include box();
  background-color: $light;
  z-index: -1;

  &__lang {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
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
</style>
