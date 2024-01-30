<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const currentRoute = computed(() => {
  return this.$route.path;
});
</script>
<template>
  <footer class="container__element footer">
    <div class="footer__social">
      <a
        class="footer__link"
        title="Perfil de GitHub"
        href="https://github.com/Ales-c96"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        class="footer__link"
        title="Perfil de LinkedIn"
        href="https://www.linkedin.com/in/alejandro-cordero-diadosa/"
        target="_blank"
        ><i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
    <button class="footer__button">Download CV</button>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
}
.footer__social {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.footer__link {
  font-size: 2rem;
  color: $primary;
  transition: 0.3s ease all;
}
.footer__link:hover {
  color: $light;
}
.footer__button {
  padding: 0.5rem 1rem;
  background-color: $primary;
  color: $dark;
  border: 0.2rem solid $primary;
  border-radius: 0.5rem;
  transition: 0.3s ease all;
  cursor: pointer;
  font-weight: 900;
}
.footer__button:hover {
  background-color: transparent;
  color: $primary;
}
</style>
