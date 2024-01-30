<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Media from "./components/Media.vue";
import Controls from "./components/Controls.vue";
</script>

<template>
  <main class="container">
    <div class="container__aside">
      <NavigationBar />
      <Media />
      <Controls />
    </div>
    <div class="container__element main-content">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss">
@import "./assets/utilities.scss";
body {
  background: rgb(0, 53, 198);
  background: $backgorund-light-gradient;
  display: grid;
  place-items: center;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  &__element {
    padding: 2rem;
    background-color: $dark;
    box-shadow: 0px 7px 15px 1px rgba(0, 0, 0, 0.554);
    border-radius: 1rem;
  }

  &__aside {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 60rem;
  height: 35rem;
}
</style>
