import { ref, computed } from "vue";

export default function useContactForm(name, email, msg) {
  const showError = ref(false);
  const showSuccess = ref(false);

  const validName = computed(() => {
    return /^[a-zA-Z\s]*$/.test(name.value);
  });

  const validEmail = computed(() => {
    return !email.value ? true : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.\w{2,3}$/.test(email.value);
  });

  const validMsg = computed(() => {
    return /^[a-zA-Z0-9\s.?,"]*$/.test(msg.value);
  });

  const validDataFields = computed(() => {
    return [validName, validEmail, validMsg].every((valid) => valid.value);
  });

  const emptyFields = computed(() => {
    return [name.value, email.value, msg.value].every((value) => value === "");
  });

  function handleSubmit() {

    if (emptyFields.value || !validDataFields.value) {
      showError.value = true;
      setTimeout(() => {
        showError.value = false;
      }, 3000);

      return;
    }

    //TODO: funcionalidad para enviar al backend
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);
  }

  return {
    handleSubmit,
    validName,
    validEmail,
    validMsg,
    showError,
    showSuccess,
  };
}
