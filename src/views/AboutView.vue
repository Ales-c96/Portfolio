<script setup>
import Description from "../components/aboutView/Description.vue";
import Aptitudes from "../components/aboutView/Aptitudes.vue";
import Experience from "../components/aboutView/Experience.vue";

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
    <Experience :data="data.experience"/>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.about {
  @include dflexCol();
  gap: 2rem;
  overflow: scroll;

  @include breakpoint(1035px) {
    height: fit-content;
    overflow: hidden;
  }

  &__title {
    @include sectionTitle();
  }
}
</style>
