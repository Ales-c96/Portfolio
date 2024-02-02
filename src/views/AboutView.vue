<script setup>
import Description from "../components/Description.vue";
import Aptitudes from "../components/Aptitudes.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div class="container">
    <Description :data="data.description" />
    <Aptitudes :data="data.aptitudes" />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.container {
  padding: 2rem;
}
</style>
