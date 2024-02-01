<script setup></script>
<template>
  <div class="about-container">
    <div class="about-presentation">
      <h2 class="about-presentation__title">
        Hola, soy Alex ! <span>Desarrollador Front-end</span>
      </h2>
      <p class="about-presentation__description">
        Mi enfoque principal en el desarrollo frontend es la implementación de interfaces de usuario
        intuitivas, accesibles y atractivas. Tengo una sólida experiencia en lenguajes de
        programación como HTML, CSS y JavaScript, así como experiencia en el uso de frameworks como
        React.js y Vue.js y bibliotecas populares. También he trabajado en proyectos y landings
        pages con un enfoque SEO y accesible. A lo largo de mi carrera, he tenido la oportunidad de
        trabajar en diversos proyectos como también ejercer de supervisor y encargado de algunos de
        ellos. He colaborado estrechamente con equipos multidisciplinarios, (departamentos de
        marketing y diseño UX) lo que me ha permitido aprender de profesionales con diferentes
        perspectivas y conocimientos. Estoy abierto a nuevas oportunidades laborales para seguir
        creciendo y aprendiendo.
      </p>
    </div>
    <div class="about-knowledge">
      <h2 class="about-knowledge__title">Conocimientos</h2>
      <div class="about-knowledge__knowledges">
        <div class="about-knowledge__section">
          <div class="about-knowledge__section-container">
            <h3>Lenguajes <i class="fa-solid fa-terminal"></i></h3>
            <p>JavaScript, PHP, HTML, CSS</p>
          </div>
          <div class="about-knowledge__section-container">
            <h3>Frameworks y Bibliotecas <i class="fa-solid fa-book"></i></h3>
            <p>jQuery, Axios, SCSS, Bootstrap, Tailwind, VueJS, FormKit</p>
          </div>
        </div>
        <div class="about-knowledge__section">
          <div class="about-knowledge__section-container">
            <h3>Bases de datos <i class="fa-solid fa-database"></i></h3>
            <p>MySql, MongoDB</p>
          </div>
          <div class="about-knowledge__section-container">
            <h3>Herramientas <i class="fa-solid fa-screwdriver-wrench"></i></h3>
            <p>VScode, MySQL Workbench, Git</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
.about-container {
  padding: 2rem;
}
.about-presentation {
  display: flex;
  flex-direction: column;

  &__title {
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    color: $light;

    & span {
      color: $primary;
      font-size: 1rem;
    }
  }
  &__description {
    color: $light;
    line-height: 1.2rem;
    margin-bottom: 3rem;
  }
}
.about-knowledge {
  &__title {
    font-size: 1.5rem;
    text-align: center;
    color: $light;
  }
  &__knowledges {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    color: $light;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-container {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: auto;
      width: 10rem;
      & h3 {
        font-weight: 700;
        line-height: 1.5rem;
        color: $primary;
        margin-bottom: 0.5rem;
      }
      & p {
        line-height: 1.5rem;
      }
    }
  }
}
</style>
