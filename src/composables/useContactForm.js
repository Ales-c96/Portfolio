import { ref, computed } from "vue";

export default function useContactForm(name, email, msg) {
  const showError = ref(false);
  const showSuccess = ref(false);
  const loading = ref(false);

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

    loading.value = true;
    const postData = {
      name: name.value,
      email: email.value,
      message: msg.value,
    };
    
    const url = "https://portfolio-bck-production.up.railway.app/index.php";
    const requestOptions = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    fetch(url, requestOptions)
      .then((response) => {
        loading.value = false;
        if (!response.ok) {
          throw new Error("Error en la solicitud");
        }
      })
      .then(() => {
        loading.value = false;
        showSuccess.value = true;
        setTimeout(() => {
          showSuccess.value = false;
        }, 3000);
      })
      .catch((error) => {
        loading.value = false;
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
    loading,
  };
}
