<script setup>
import Card from "../components/projectsView/Card.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="projects">
    <h2 class="projects__title">{{ data.title }}</h2>
    <div class="projects__grid">
      <Card :data="data" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.projects {
  @include dflexCol();
  gap: 2rem;
  max-height: -webkit-fill-available;
  overflow: overlay;

  &__title {
    @include sectionTitle();
  }
  &__grid {
    @include dflexWrap();
    justify-content: center;
    position: relative;
    gap: 2rem;
  }
}
</style>
