<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/aside/NavigationBar.vue";
import Media from "./components/aside/Media.vue";
import Controls from "./components/aside/Controls.vue";

</script>

<template>
  <main class="main-container">
    <aside class="main-container__aside">
      <NavigationBar />
      <Controls />
      <Media />
    </aside>
    <div class="main-content">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "./assets/utilities.scss";
.main-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__aside {
    @include dflexCol();
    gap: 2rem;
  }

  &__content {
  }
}
</style>
