<script setup></script>
<template>
  <nav class="controls-container container__element">
    <div class="controls-container__mode">
      <div class="controls-container__mode-dark"><i class="fa-solid fa-moon"></i></div>
      <div class="controls-container__mode-light"><i class="fa-solid fa-sun"></i></div>
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
@import "../assets/utilities.scss";
.controls-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
    color: #a5a5a557;
    &-dark {
      cursor: pointer;
    }

    &-light {
      cursor: pointer;
    }

    &--active {
      color: $primary;
    }
  }

  &__lang {
    color: $primary;

    &-select {
        background-color: $primary;
        padding: .1rem;
        text-transform: uppercase;
        border: none;
        border-radius: .2rem;
        cursor: pointer;
    }
  }
}
</style>
