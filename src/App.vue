<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import Media from "./components/Media.vue";
</script>

<template>
  <main class="container">
    <div class="container__nav">
      <NavigationBar />
      <Media />
    </div>
    <div class="container__element main-content">
      <RouterView />
    </div>
  </main>
</template>

<style>
:root {
  --backgorund-dark: rgb(44, 44, 44);
  --backgorund-light-gradient: linear-gradient(
    60deg,
    rgba(0, 53, 198, 1) 0%,
    rgba(1, 16, 55, 1) 100%
  );
  --primary: rgb(255, 201, 23);
}
body {
  background: rgb(0, 53, 198);
  background: var(--backgorund-light-gradient);
  display: grid;
  place-items: center;
  height: 100vh;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.container__element {
  padding: 2rem;
  background-color: var(--backgorund-dark);
  box-shadow: 0px 7px 15px 1px rgba(0, 0, 0, 0.554);
  border-radius: 1rem;
}
.container__nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.main-content {
  display: flex;
  flex-direction: column;
  width: 60rem;
  height: 35rem;
}
</style>
