<script setup>
import ContactInfo from "../UI/ContactInfo.vue";
import CustomButton from "../UI/CustomButton.vue";
import SocialMedia from "../UI/SocialMedia.vue";
import cvPdrf from "@assets/pdf/CV.pdf";

const downloadPDF = () => {
  const link = document.createElement("a");
  link.href = `${window.location.origin}${cvPdrf}`;
  link.download = "AlejandroCordero_CV.pdf";
  link.click();
};
</script>
<template>
  <footer class="footer">
    <SocialMedia />
    <hr class="hr-horizontal" />
    <ContactInfo />
    <hr class="hr-horizontal" />
    <CustomButton @click-event="downloadPDF"
      >Descargar CV <i class="fa-solid fa-download"></i
    ></CustomButton>
  </footer>
</template>

<style lang="scss" scoped>
@import "../../assets/utilities.scss";

.footer {
  height: 100%;
  @include box();
  @include dflexCol();
  justify-content: space-evenly;
  padding: 2rem;
  background-color: $secondary-bg;
  color: $secondary;

  @include breakpoint(768px) {
    gap: 1rem;
    border-radius: 0;
    width: -webkit-fill-available;
  }
  .hr-horizontal {
    @include separator($secondary);
  }
}
</style>
