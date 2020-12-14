<template>
  <section class="hero is-fullheight is-dark" id="section-home">
    <Header></Header>
    <HeroPage title="Miso Bot" subtitle="Discord bot with too many features" />
  </section>
  <Documentation sectionId="section-documentation"></Documentation>
  <DonateSection sectionId="section-donate"></DonateSection>
  <Wave color="#d8dee9"></Wave>
  <Footer></Footer>
</template>

<script>
import HeroPage from "./components/HeroPage.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Documentation from "./components/Documentation.vue";
import DonateSection from "./components/DonateSection.vue";
import Wave from "./components/Wave.vue";

export default {
  name: "App",
  components: {
    HeroPage,
    Header,
    Footer,
    Documentation,
    DonateSection,
    Wave,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  opacity: 0.8;
  -webkit-transition: opacity 0.5s;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
a:hover {
  opacity: 1;
}
code {
  background: none !important;
}
p {
  line-height: 1.5em;
}
</style>
