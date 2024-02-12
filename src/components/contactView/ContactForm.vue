<script setup>
import { ref } from "vue";
import useContactForm from "../../composables/useContactForm";
import PopUp from "../UI/PopUp.vue";
import Spinner from "../UI/Spinner.vue";

const name = ref("");
const email = ref("");
const msg = ref("");

const { handleSubmit, validName, validEmail, validMsg, showError, showSuccess, loading } = useContactForm(
  name,
  email,
  msg
);
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <transition name="slide-down">
      <PopUp v-if="showError" :isError="true">Revisa los campos del formulario</PopUp>
    </transition>
    <Spinner v-if="loading" />
    <div class="form-item">
      <div v-if="!validName" class="error">
        <p class="error__msg">
          El nombre no es válido. Por favor, revisa que no haya carácteres extraños
        </p>
      </div>
      <label for="name"></label>
      <input
        class="form-item__name form-item__input"
        type="text"
        name="name"
        id="name"
        placeholder="Nombre"
        v-model="name"
      />
    </div>
    <div class="form-item">
      <div v-if="!validEmail" class="error">
        <p class="error__msg">
          El email no es válido. Por favor, revisa que no haya carácteres extraños
        </p>
      </div>
      <label for="email"></label>
      <input
        class="form-item__email form-item__input"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        v-model="email"
      />
    </div>
    <div class="form-item">
      <div v-if="!validMsg" class="error">
        <p class="error__msg">
          El mensaje no es válido. Por favor, revisa que no haya carácteres extraños
        </p>
      </div>
      <label for="message"></label>
      <textarea
        class="form-item__mesaje form-item__input"
        type="text"
        name="message"
        id="message"
        placeholder="Escribe aquí el mensaje"
        v-model="msg"
      ></textarea>
    </div>
    <input class="form-item__submit" type="submit" name="submit" id="submit" value="Enviar" />
    <transition name="slide-down">
      <PopUp v-if="showSuccess" :isError="false">Formulario enviado correctamente</PopUp>
    </transition>
  </form>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";
.form {
  position: relative;
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

    &__mesaje {
      resize: none;
    }

    .error {
      &__msg {
        color: #e30000;
        font-weight: 600;
      }
    }
  }
}
</style>
