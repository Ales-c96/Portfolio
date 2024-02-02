<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const currentRoute = computed(() => {
  return this.$route.path;
});

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = `${window.location.href}/src/assets/pdf/cv.pdf`;
  link.download = "AlejandroCordero_CV.pdf";
  link.click();
};
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
    <button class="footer__button" @click="downloadPDF">Descargar CV</button>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.footer {
  @include box();
  @include dflexCol();
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  &__social {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  &__link {
    font-size: 2rem;
    color: $primary;
    transition: 0.3s ease all;
    &:hover {
      color: $primary-hover;
    }
  }
  &__button {
    padding: 0.5rem 1rem;
    background-color: $primary;
    border: 0.2rem solid $primary;
    border-radius: 0.5rem;
    transition: 0.3s ease all;
    cursor: pointer;
    font-weight: 900;

    &:hover {
      background-color: transparent;
      color: $primary;
    }
  }
}
</style>
