<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import NavigationBar from "./components/aside/NavigationBar.vue";
import Media from "./components/aside/Media.vue";
import Controls from "./components/aside/Controls.vue";

const showControls = ref(false);

const handleControls = () => {
  showControls.value = !showControls.value;
};
</script>

<template>
  <main class="main">
    <aside class="main__aside">
      <NavigationBar />
      <Media />
    </aside>
    <div class="main__content">
      <div class="controls">
        <i
          @click="handleControls"
          class="fa-solid fa-gear controls__icon"
          :class="[showControls ? 'controls__icon--active' : '']"
        ></i>
        <Controls v-if="showControls" />
      </div>

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
.controls {
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 1;

  &__icon {
    text-align: right;
    font-size: 1.5rem;
    color: $primary;
    transition: 0.3s;
    cursor: pointer;

    &--active {
      transform: rotate(45deg);
    }
  }
}
</style>
