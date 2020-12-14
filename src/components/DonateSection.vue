<template>
  <section :id="sectionId" class="section is-medium is-dark">
    <div class="container">
      <h1 class="title">Donate</h1>
      <p>
        Hosting a big bot like this is not cheap, and wouldn't be possible
        without community support!<br />If you like what I'm doing, consider
        donating. As an extra incentive you get some exclusive commands and
        perks!
      </p>
      <nav class="level">
        <div class="level-item has-text-centered">
          <a href="https://github.com/sponsors/joinemm">
            <font-awesome-icon :icon="['fab', 'github']" />
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://patreon.com/joinemm">
            <font-awesome-icon :icon="['fab', 'patreon']" />
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://ko-fi.com/joinemm">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a @click="showBitcoinAddress">
            <font-awesome-icon :icon="['fab', 'bitcoin']" />
          </a>
        </div>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.level {
  justify-content: center;
}
.level > .level-item:not(.is-narrow) {
  flex-grow: 0;
  padding: 20px;
}
.level-item {
  font-size: 3em;
}
.title {
  text-transform: uppercase;
  font-weight: 600;
}
</style>

<script>
export default {
  name: "DonateSection",
  props: {
    sectionId: String,
  },
  methods: {
    showBitcoinAddress() {
      this.$toast.show("1HDwoc5ith4goXmh6CAQC3TP6i1GAqanB1", {
        type: "info",
        position: "bottom",
        duration: 5000,
        dismissible: false,
      });
    },
  },
};
</script>
