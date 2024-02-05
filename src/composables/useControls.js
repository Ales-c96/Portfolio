import { ref, onMounted } from "vue";

export default function useControls() {
  const localTheme = ref("");
  const body = ref(document.body);

  onMounted(() => {
    if (localStorage.getItem("theme") === null) {
      localTheme.value = window.matchMedia("(prefers-color-scheme: dark)").matches ? "moon" : "sun";
    } else {
      localTheme.value = localStorage.getItem("theme");
    }
    body.value.classList.add(localTheme.value);
    localStorage.setItem("theme", localTheme.value);
  });

  const toggleTheme = () => {
    body.value.classList.remove(localTheme.value);
    localTheme.value = localStorage.getItem("theme") === "moon" ? "sun" : "moon";
    body.value.classList.add(localTheme.value);
    localStorage.setItem("theme", localTheme.value);
  };

  const selectLang = (lang) => {
    
  };

  return {
    localTheme,
    toggleTheme,
  };
}
