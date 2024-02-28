<script setup></script>
<template>
  <div class="contact">
    <div class="contact-section">
      <h3 class="contact-section__title">Móvil <i class="fa-solid fa-phone"></i></h3>
      <a href="tel:+622913639" class="contact-section__mobile"><span>+34 </span>622 913 639</a>
    </div>
    <div class="contact-section">
      <h3 class="contact-section__title">Email <i class="fa-solid fa-envelope"></i></h3>
      <div class="contact-section__mailto">
        <a
          href="mailto:alejandro.c9.d6@gmail.com"
          title="mailto:alejandro.c9.d6@gmail.com Haz click para enviar un email"
        >
          alejandro.c9.d6@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.contact {
  @include dflexCol();
  gap: 1.5rem;

  &-section {
    @include dflexCol();
    gap: .5rem;
    
    &__mailto {
      font-size: 1rem;
      font-weight: 500;
    }

    &__mobile {
      font-size: 1rem;
      font-weight: 500;
      & span {
        font-weight: bold;
        color: $body-bg;
      }
    }
  }
}
</style>
