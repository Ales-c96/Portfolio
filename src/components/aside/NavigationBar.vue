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
      <i class="fa-solid fa-address-card navbar-icon"></i>
      Sobre mi</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'projects' }"
      ><i class="fa-solid fa-code navbar-icon"></i>Proyectos</RouterLink
    >
    <RouterLink
      class="navbar__element"
      active-class="navbar__element--active"
      :to="{ name: 'contact' }"
      ><i class="fa-regular fa-paper-plane navbar-icon"></i>Contacto</RouterLink
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
  background-color: $secondary-bg;
  color: $secondary;

  @include breakpoint(1035px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: 1rem 0;
    background-color: $secondary-bg;
    border-radius: 0;
    z-index: 2;
  }
  &__element {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    font-size: 1.3rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;

    @include breakpoint(1035px) {
      flex-direction: column;
      padding: 0.5rem;
      font-size: 0.9rem;
      gap: .5rem;
    }

    &--active {
      color: $secondary;
      border-radius: 0.5rem;
      background-color: $body-bg;
      transform: translateX(2rem);

      @include breakpoint(1035px) {
        transform: translateX(0);
      }
    }
  }

  &-icon {
    @include breakpoint(1035px) {
      font-size: 1.3rem;
    }
  }
}
</style>
