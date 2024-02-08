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
  width: 70rem;
  height: 40rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  @include breakpoint(768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  &__aside {
    width: 17rem;
    height: 100%;
    @include dflexCol();
    gap: 2rem;

    @include breakpoint(768px) {
      width: 100%;
      height: auto;
      align-items: center;
      order: 1;
    }
  }

  &__content {
    position: relative;
    height: calc(100% - 4rem);
    padding: 2rem;
    @include box();

    @include breakpoint(768px) {
      width: 18rem;
      margin-top: 16rem;
    }
  }
}
</style>
