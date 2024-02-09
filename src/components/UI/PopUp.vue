<template>
  <div class="error-popUp"><slot></slot></div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.error-popUp {
  position: absolute;
  top: 3rem;
  height: 5rem;
  width: 5rem;
  background-color: $body-bg;
}
</style>
