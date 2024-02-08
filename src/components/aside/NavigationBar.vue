<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";
import ThemeSelector from "../UI/ThemeSelector.vue";

const currentRoute = computed(() => {
  return this.$route.path;
});
</script>
<template>
  <nav class="navbar">
    <ThemeSelector />
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'about' }"
    >
      <i class="fa-solid fa-address-card"></i>
      Sobre mi</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'projects' }"
      ><i class="fa-solid fa-code"></i>Proyectos</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'contact' }"
      ><i class="fa-regular fa-address-book"></i>Contacto</RouterLink
    >
  </nav>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.navbar {
  position: relative;
  @include box();
  @include dflexCol();
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
}
.navbar__element {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding: 0.5rem 1rem;

  &--active {
    color: $secondary;
    border-radius: 0.5rem;
    background-color: $primary;
    transform: translateX(2rem);
  }
}
</style>
