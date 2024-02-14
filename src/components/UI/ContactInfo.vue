<script setup></script>
<template>
  <div class="contact">
    <h3 class="contact__title">Email <i class="fa-solid fa-envelope"></i></h3>
    <div class="contact__mailto">
      <a
        href="mailto:alejandro.c9.d6@gmail.com"
        title="mailto:alejandro.c9.d6@gmail.com Haz click para enviar un email"
      >
        alejandro.c9.d6@gmail.com
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.contact {
  @include dflexCol();
  gap: 1rem;

  &__title {
    font-weight: 700;
  }

  &__mailto {
    font-size: 1rem;
    font-weight: 500;
  }
}
</style>
