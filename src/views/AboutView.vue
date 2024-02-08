<script setup>
import Description from "../components/aboutView/Description.vue";
import Aptitudes from "../components/aboutView/Aptitudes.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="about">
    <h2 class="about__title">{{ data.description.title }}</h2>
    <Description :data="data.description" />
    <Aptitudes :data="data.aptitudes" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.about {
  @include dflexCol();
  gap: 3rem;

  @include breakpoint(768px) {
    gap: 1rem;
    height: fit-content;
  }

  &__title {
    @include sectionTitle();
  }
}
</style>
