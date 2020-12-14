<template>
  <div class="hero-body">
    <div id="introContent" class="container has-text-centered">
      <img
        src="../assets/icon_circle.png"
        alt="Logo"
        style="max-width: 5rem;"
      />
      <h1 class="title">
        {{ title }}
      </h1>
      <h2 class="subtitle">
        {{ subtitle }}
      </h2>
      <button
        onclick="window.open('https://discord.com/oauth2/authorize?client_id=500385855072894982&scope=bot&permissions=1074654407','_blank');"
        class="button is-rounded is-primary"
      >
        Add to your server
      </button>
      <Stats></Stats>
    </div>
  </div>
  <div class="hero-foot">
    <div>
      <a
        href="#section-documentation"
        id="downArrow"
        class="has-text-centered"
        v-smooth-scroll
      >
        <div>
          <font-awesome-icon :icon="['fas', 'angle-down']" />
        </div>
      </a>
    </div>
    <Wave color="#3b4252"></Wave>
  </div>
</template>

<style scoped>
#introContent {
  margin-top: 2rem;
}
#downArrow {
  font-size: 2rem;
}
.title {
  font-family: Raleway;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 3.2rem;
}
.subtitle {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.7;
  letter-spacing: 0.03em;
  line-height: 25.88px;
}
.button {
  font-family: Raleway;
  font-weight: 500;
}
</style>

<script>
import Stats from "./Stats.vue";
import Wave from "./Wave.vue";
export default {
  name: "HeroPage",
  components: {
    Stats,
    Wave,
  },
  props: {
    title: String,
    subtitle: String,
  },
};
</script>
