<template>
  <section id="counters" class="section">
    <nav class="columns">
      <div class="column has-text-centered">
        <div>
          <p class="title">
            <Counter id="serversCounter" :end-val="guildsCount"></Counter>
          </p>
          <p class="heading">Servers</p>
        </div>
      </div>
      <div class="column has-text-centered">
        <div>
          <p class="title">
            <Counter id="usersCounter" :end-val="usersCount"></Counter>
          </p>
          <p class="heading">Unique users</p>
        </div>
      </div>
      <div class="column has-text-centered">
        <div>
          <p class="title">
            <Counter id="commandsCounter" :end-val="commandsCount"></Counter>
          </p>
          <p class="heading">Commands used</p>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.column {
  padding-top: 0em;
  padding-bottom: 1em;
}
</style>

<script>
import Counter from "./Counter.vue";
export default {
  name: "Stats",
  components: {
    Counter,
  },
  data() {
    return {
      guildsCount: 9000,
      usersCount: 750000,
      commandsCount: 10000000,
    };
  },
};
</script>
