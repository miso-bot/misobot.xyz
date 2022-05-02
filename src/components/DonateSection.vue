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
          <a href="https://ko-fi.com/joinemm">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </a>
        </div>
        <div class="level-item has-text-centered">
          <a href="https://patreon.com/joinemm">
            <font-awesome-icon :icon="['fab', 'patreon']" />
          </a>
        </div>
      </nav>
      <p class="is-size-3">Top donators</p>
      <nav class="level">
        <div
          class="level-item is-flex-direction-column"
          v-for="user in topDonators"
          :key="user.name"
        >
          <div class="image is-96x96">
            <img class="is-rounded" :src="user.avatar" />
          </div>
          <p class="is-size-4">{{ user.name }}</p>
        </div>
      </nav>
      <p class="is-size-4">+ {{ otherDonators }} others</p>
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
  data() {
    return {
      dataUrl: "https://api.misobot.xyz/donators",
      topDonators: [],
      otherDonators: 0,
    };
  },
  mounted() {
    fetch(this.dataUrl)
      .then((response) => response.json())
      .then((data) => {
        this.topDonators = data.filter((user) => user.amount >= 5);
        this.otherDonators = data.length - this.topDonators.length;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>
