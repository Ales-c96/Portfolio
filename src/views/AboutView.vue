<script setup>
import Description from "../components/Description.vue";
import Aptitudes from "../components/Aptitudes.vue";
</script>
<template>
  <div class="container">
    <Description />
    <Aptitudes />
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.container {
  padding: 2rem;
}
</style>
