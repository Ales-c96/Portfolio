<script setup>
defineEmits(['handle-submit'])
</script>

<template>
  <form class="form" @submit.prevent="$emit('handle-submit')">
    <div class="form-item">
      <label for="name"></label>
      <input
        class="form-item__name form-item__input"
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
      />
    </div>
    <div class="form-item">
      <label for="email"></label>
      <input
        class="form-item__email form-item__input"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
      />
    </div>
    <div class="form-item">
      <label for="mesage"></label>
      <textarea
        class="form-item__mesaje form-item__input"
        type="text"
        name="mesage"
        id="mesage"
        placeholder="Escribe aquí el mensaje"
      ></textarea>
    </div>
    <input class="form-item__submit" type="submit" name="submit" id="submit" value="Enviar" />
  </form>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.form {
  width: 100%;
  @include dflexCol();
  gap: 3rem;

  &-item {
    @include dflexCol();

    &__input {
      border: none;
      border-bottom: 2px solid $primary;
      padding: 1rem;

      &::placeholder {
        font-size: 1.2rem;
        font-weight: 700;
      }

      &:focus-visible {
        background-color: $input-bg;
        outline: none;
      }
    }

    &__submit {
      padding: 0.5rem 1rem;
      background-color: $primary;
      border: 0.2rem solid $primary;
      border-radius: 0.5rem;
      transition: 0.3s ease all;
      color: $secondary;
      font-weight: 900;
      cursor: pointer;

      &:hover {
        background-color: transparent;
        color: $primary;
      }
    }

    &__name {
    }

    &__email {
    }

    &__mesaje {
      resize: none;
    }
  }
}
</style>
