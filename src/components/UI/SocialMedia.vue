<script setup></script>
<template>
  <div class="social">
    <h3 class="social__title">Mis redes sociales</h3>
    <div class="social__link">
      <a
        class="social__icon"
        title="Perfil de GitHub"
        href="https://github.com/Ales-c96"
        target="_blank"
      >
        <i class="fa-brands fa-github"></i>
      </a>
      <a
        class="social__icon"
        title="Perfil de LinkedIn"
        href="https://www.linkedin.com/in/alejandro-cordero-diadosa/"
        target="_blank"
        ><i class="fa-brands fa-linkedin"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.social {
  @include dflexCol();
  justify-content: center;
  gap: 1rem;

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
  }

  &__link {
    display: flex;
    gap: 1rem;
  }

  &__icon {
    font-size: 2em;
    color: $primary;
    transition: 0.3s ease all;
    &:hover {
      color: $hover;
    }
  }
}
</style>
