<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const currentRoute = computed(() => {
  return this.$route.path;
});
</script>
<template>
  <nav class="container__element navbar">
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'about' }"
    >
      <i class="fa-solid fa-house"></i>
      About</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'projects' }"
      ><i class="fa-solid fa-code"></i>Projects</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'contact' }"
      ><i class="fa-regular fa-address-book"></i>Contact</RouterLink
    >
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 2rem;
}
.navbar__element {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  color: #fff;
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: uppercase;
}
.navbar__element--active {
  color: var(--primary);
}
</style>
