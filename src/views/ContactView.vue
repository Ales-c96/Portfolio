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
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;

  &__title {
    @include sectionTitle();
  }
}
</style>
