<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/aside/NavigationBar.vue";
import Footer from "./components/aside/Footer.vue";
</script>

<template>
  <main class="main">
    <aside class="main__aside">
      <NavigationBar />
      <Footer />
    </aside>
    <RouterView v-slot="{ Component }">
      <transition name="slide" mode="out-in" tag="div" class="main__content">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style lang="scss" scoped>
@import "./assets/utilities.scss";
.main {
  width: 75%;
  height: 40rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @include breakpoint(768px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &__aside {
    width: 100%;
    max-width: 17rem;
    height: 100%;
    @include dflexCol();
    gap: 2rem;

    @include breakpoint(768px) {
      max-width: 100%;
      height: auto;
      align-items: center;
      order: 1;
    }
  }

  &__content {
    position: relative;
    width: 100%;
    height: calc(100% - 4rem);
    padding: 2rem;
    @include box();

    @include breakpoint(768px) {
      width: 18rem;
      margin-top: 8rem;
    }
  }
}
</style>
