<script setup>
import useControls from "../../composables/useControls";
const { toggleTheme } = useControls();
</script>

<template>
  <div class="tg-list-item">
    <h3>Cambia el modo <span class="primary">claro/oscuro</span></h3>
    <input @click="toggleTheme" id="cb4" class="tgl tgl-flat" type="checkbox" />
    <label class="tgl-btn" for="cb4"></label>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.tg-list-item {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  
  h3 {
    font-size: 0.8rem;
    font-weight: 700;
  }

  .tgl {
    display: none;

    // add default box-sizing for this scope
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;
      &::selection {
        background: none;
      }
    }

    + .tgl-btn {
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;
      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }

      &:after {
        left: 0;
      }

      &:before {
        display: none;
      }
    }

    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }
  .tgl-flat {
    + .tgl-btn {
      padding: 2px;
      transition: all 0.2s ease;
      background: #fff;
      border: 4px solid #f2f2f2;
      border-radius: 2em;
      &:after {
        transition: all 0.2s ease;
        background: #f2f2f2;
        content: "";
        border-radius: 1em;
      }
    }

    &:checked + .tgl-btn {
      border: 4px solid $primary;
      &:after {
        left: 50%;
        background: $primary;
      }
    }
  }
}
</style>
