<script setup>
import ContactForm from "../components/contactView/ContactForm.vue";
import Description from "../components/aboutView/Description.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="contact">
    <h2 class="contact__title">{{ data.title }}</h2>
    <Description :data="data" />
    <ContactForm />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";

.contact {
  @include dflexCol();
  gap: 3rem;

  @include breakpoint(1035px) {
    gap: 2rem;
  }

  @include breakpoint(735px) {
    gap: 1rem;
  }

  &__title {
    @include sectionTitle();
  }
}
</style>
