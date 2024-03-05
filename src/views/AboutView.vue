<script setup>
import Description from "../components/aboutView/Description.vue";
import Aptitudes from "../components/aboutView/Aptitudes.vue";
import Experience from "../components/aboutView/Experience.vue";
import Education from "@/components/aboutView/Education.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="about">
    <div>
      <h2 class="about__title">Sobre <span>Mi</span></h2>
      <h3>{{ data.description.subtitle }}</h3>
    </div>
    <Description :data="data.description" />
    <Experience :data="data.experience" />
    <Aptitudes :data="data.aptitudes" />
    <Education :data="data.education" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.about {
  @include dflexCol();
  gap: 1rem;
  overflow: scroll;

  @include breakpoint(1035px) {
    height: fit-content;
    overflow: hidden;
  }

  &__title {
    @include sectionTitle();

    & span {
      color: $body-bg;
    }
  }
}
</style>
