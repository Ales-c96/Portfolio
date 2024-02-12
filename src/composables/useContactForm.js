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

    const postData = {
      username: name.value,
      email: email.value,
      mensaje: msg.value,
    };
    const url = "https://meloinvento.asd/asd/asd";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    fetch(url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
        return response.json();
      })
      .then(() => {
        showSuccess.value = true;
        setTimeout(() => {
          showSuccess.value = false;
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
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
