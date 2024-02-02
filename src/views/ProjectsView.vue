<script setup></script>
<template>
  <div class="projects-container">
    <h2 class="projects__title">Proyectos</h2>
    <div class="projects">
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
      <div class="projects__box">
        <div>
          <h3></h3>
          <div></div>
          <a href="">Ver sitio</a>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";

.projects-container {
  @include dflexCol();
  gap: 2rem;
  padding: 2rem;
}

.projects__title {
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  color: $light;
}

.projects {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  &__box {
    width: 25rem;
    height: 15rem;
    background-color: $primary;
  }
}
</style>
