<script setup></script>
<template>
  <div class="about-presentation">
    <h2 class="about-presentation__title">Hola, soy Alex ! <span>Desarrollador Front-end</span></h2>
    <p class="about-presentation__description">
      Mi enfoque principal en el desarrollo frontend es la implementación de interfaces de usuario
      intuitivas, accesibles y atractivas. Tengo una sólida experiencia en lenguajes de programación
      como HTML, CSS y JavaScript, así como experiencia en el uso de frameworks como React.js y
      Vue.js y bibliotecas populares. También he trabajado en proyectos y landings pages con un
      enfoque SEO y accesible. A lo largo de mi carrera, he tenido la oportunidad de trabajar en
      diversos proyectos como también ejercer de supervisor y encargado de algunos de ellos. He
      colaborado estrechamente con equipos multidisciplinarios, (departamentos de marketing y diseño
      UX) lo que me ha permitido aprender de profesionales con diferentes perspectivas y
      conocimientos. Estoy abierto a nuevas oportunidades laborales para seguir creciendo y
      aprendiendo.
    </p>
  </div>
  <div class="about-knowledge">
    <h2 class="about-knowledge__title">Conocimientos</h2>
    <div class="about-knowledge__knowledges">
      <div class="about-knowledge__first-section">
        <div>
          <h3 class="first-section">Lenguajes</h3>
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div>
          <h3>Frameworks y Bibliotecas</h3>
          <ul>
            <li>jQuery</li>
            <li>Axios</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>VueJS</li>
            <li>FormKit</li>
          </ul>
        </div>
      </div>
      <div class="about-knowledge__second-section">
        <div>
          <h3>Bases de datos</h3>
          <ul>
            <li>MySql</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div>
          <h3>Herramientas</h3>
          <ul>
            <li>VScode</li>
            <li>MySQL Workbench</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/utilities.scss";
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
    letter-spacing: 0.1rem;
    margin-bottom: 3rem;
  }
}
.about-knowledge {
  &__title {
    font-size: 1.5rem;
    color: $light;
  }
  &__knowledges {
    display: flex;
    color: $light;
  }
}
</style>
