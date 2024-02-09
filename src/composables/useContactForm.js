import { ref, computed } from "vue";

export default function useContactForm(name, email, msg) {

  const showError = ref(false);

  const validName = computed(() => {
    return !name.value ? true : /^[a-zA-Z\s]*$/.test(name.value);
  });

  const validEmail = computed(() => {
    return !email.value ? true : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,3}$/.test(email.value);
  });

  const validMsg = computed(() => {
    return !msg.value ? true : /^[a-zA-Z0-9\s.?,"]*$/.test(msg.value);
  });

  const validDataFields = computed(() => {
    return [validName, validEmail, validMsg].every((valid) => valid.value);
  });

  const notEmptyFields = computed(() => {
    return [name.value, email.value, msg.value].every((value) => value !== "");
  });

  function handleSubmit() {
    console.log(name.value);
    console.log(email.value);
    console.log(msg.value);
    console.log("error= " + validDataFields.value);

    if (!validDataFields && !notEmptyFields) {
      showError.value = true;
      setTimeout(() => {
        showError.value = false;
      }, 3000);

      return;
    }

    //TODO: funcionalidad para enviar al backend
  }

  return {
    handleSubmit,
    validName,
    validEmail,
    validMsg,
    showError,
  };
}
