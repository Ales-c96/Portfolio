<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/aside/NavigationBar.vue";
import Footer from "./components/aside/Footer.vue";

const welcome = ref(false);

setTimeout(() => {
  welcome.value = true;
}, 500);
</script>

<template>
  <main class="main">
    <transition-group name="slide-left" mode="out-in" tag="aside" class="main__aside">
      <NavigationBar v-if="welcome" />
      <Footer v-if="welcome" />
    </transition-group>
    <RouterView v-slot="{ Component }">
      <transition name="slide-right" mode="out-in" tag="div" class="main__content">
        <component v-if="welcome" :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style lang="scss" scoped>
@import "./assets/utilities.scss";
.main {
  width: 70%;
  height: 43rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  @include breakpoint(1440px) {
    width: 85%;
    height: 38rem;
  }

  @include breakpoint(1366px) {
    width: 85%;
  }

  @include breakpoint(1035px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  &__aside {
    width: 100%;
    max-width: 20rem;
    height: 100%;
    @include dflexCol();
    gap: 2rem;

    @include breakpoint(1035px) {
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
    background-color: $primary-bg;
    @include box();

    @include breakpoint(1035px) {
      width: 70%;
      margin-top: 8rem;
    }
  }
}
</style>
