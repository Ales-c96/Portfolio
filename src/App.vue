<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Media from "./components/Media.vue";
import Controls from "./components/Controls.vue";
</script>

<template>
  <main class="container">
    <aside class="container__aside">
      <NavigationBar />
      <Controls />
      <Media />
    </aside>
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
  width: 75rem;
  height: 40rem;
  display: flex;
  gap: 2rem;

  &__element {
    background-color: $dark;
    box-shadow: 0px 7px 15px 1px rgba(0, 0, 0, 0.554);
    border-radius: 1rem;
    height: 100%;
  }

  &__aside {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}

.main-content {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
}
</style>
