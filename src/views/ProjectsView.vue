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
      <div class="more">
        <p>Más en desarrollo...</p>
        <a
          href="http://https://github.com/Ales-c96?tab=overview&from=2024-02-01&to=2024-02-28"
          target="_blank"
          rel="noopener noreferrer"
          class="more-link"
          ><i class="fa-brands fa-github"></i
        ></a>
      </div>
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
  overflow: overlay;

  @include breakpoint(1035px) {
    background-color: transparent;
    box-shadow: none;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
  }

  &__title {
    @include sectionTitle();
    text-align: center;
    @include breakpoint(1035px) {
      display: none;
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @include breakpoint(1035px) {
      // flex-wrap: nowrap;
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

    @include breakpoint(1035px) {
      display: none;
      // animation: bounce-right 1.5s infinite;
      // bottom: 0rem;
    }
  }
}
.more {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $primary;
  font-weight: bold;
  gap: 1rem;

  @include breakpoint(1035px) {
    color: #fff;
  }

  &-link {
    transition: .3s ease all;
    font-size: 1.5rem;

    &:hover{
      color: $body-bg;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
