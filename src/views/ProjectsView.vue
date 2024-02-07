<script setup>
import { watch, ref } from "vue";
import Card from "../components/projectsView/Card.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
const hideArrow = ref(false);

const handleScrollArrow = (event) => {
  hideArrow.value = event.target.scrollTop > 0 ? true : false;
};
</script>
<template>
  <div @scroll="handleScrollArrow" class="projects">
    <h2 class="projects__title">{{ data.title }}</h2>
    <div class="projects__grid">
      <Card :data="data" />
    </div>
    <div class="arrow">
      <i
        :class="[hideArrow ? 'arrow__icon--hide' : '']"
        class="fa-solid fa-arrow-down arrow__icon"
      ></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.projects {
  position: relative;
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
  .arrow {
    position: absolute;
    bottom: 0;
    right: 0;
    animation: bounce 1.5s infinite;

    &__icon {
      font-size: 2rem;
      color: $primary;
      opacity: 1;
      transition: 0.5s ease all;

      &--hide {
        opacity: 0;
      }
    }
  }
}
</style>
