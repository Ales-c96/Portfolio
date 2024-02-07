<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/aside/NavigationBar.vue";
import Media from "./components/aside/Media.vue";
</script>

<template>
  <main class="main">
    <aside class="main__aside">
      <NavigationBar />
      <Media />
    </aside>
    <div class="main__content">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "./assets/utilities.scss";
.main {
  width: 70rem;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &__aside {
    @include dflexCol();
    gap: 2rem;
    height: 100%;
  }

  &__content {
    position: relative;
    height: calc(100% - 4rem);
    padding: 2rem;
    @include box();
  }
}
</style>
