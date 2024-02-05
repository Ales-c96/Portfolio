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
    <Description :data="data.description" />
    <Aptitudes :data="data.aptitudes" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.about {
  @include dflexCol();
  gap: 3rem;
}
</style>
