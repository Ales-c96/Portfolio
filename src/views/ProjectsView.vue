<script setup>
import { ref } from "vue";
import Card from "../components/projectsView/Card.vue";
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const hideArrow = ref(false);

const handleScrollArrow = (event) => {
  hideArrow.value = event.target.scrollTop > 0 || event.target.scrollLeft > 0 ? true : false;
};
</script>
<template>
  <div @scroll="handleScrollArrow" class="projects">
    <h2 class="projects__title">{{ data.title }}</h2>
    <div class="projects__grid">
      <Card v-for="data in data.projects" :key="data.id" :data="data" />
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

  @include breakpoint(768px) {
    flex-direction: row;
    overflow: scroll;
  }

  &__title {
    @include sectionTitle();
    @include breakpoint(768px) {
      display: none;
    }
  }
  &__grid {
    @include dflexWrap();
    justify-content: center;
    gap: 2rem;

    @include breakpoint(768px) {
      flex-wrap: nowrap;
      align-items: center;
    }
  }
  .arrow {
    position: absolute;
    bottom: 1rem;
    right: 1.5rem;
    animation: bounce 1.5s infinite;

    &__icon {
      font-size: 2rem;
      color: $primary;
      opacity: 1;
      transition: 0.5s ease all;

      @include breakpoint(735px) {
        transform: rotate(270deg);
      }

      &--hide {
        opacity: 0;
      }
    }

    @include breakpoint(768px) {
      animation: bounce-right 1.5s infinite;
    }
  }
}
</style>
