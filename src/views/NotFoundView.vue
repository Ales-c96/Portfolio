<script setup></script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__paragraph">¡Ooops! parece que te has perdido</p>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/utilities.scss";
.not-found {
  @include box();
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  &__title {
    font-size: 5rem;
    font-weight: 700;
  }

  &__paragraph {
    text-align: center;
    font-size: 1.2rem;
  }
}
</style>
