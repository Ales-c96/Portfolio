import { ref, watch } from "vue";

export default function useContactForm() {
  function handleSubmit() {
    console.log('hola')
  }

  return {handleSubmit};
}
