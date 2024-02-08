import { ref, watch } from "vue";

export default function useTheme() {
  const getTheme = ref(localStorage.getItem("theme") === "dark");

  watch(
    getTheme,
    (val) => {
      const theme = val ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    },
    { immediate: true }
  );

  return {
    getTheme
  };
}
