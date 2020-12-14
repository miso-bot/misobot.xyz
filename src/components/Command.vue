<template>
  <div class="container columns">
    <div class="column main-command">
      <code
        >{{ prefix }}{{ command.name }}
        <span class="usage-string">{{ command.usage }}</span></code
      >
    </div>
    <span
      class="description column"
      v-html="renderDescription(command.description)"
    ></span>
  </div>
  <SubCommand
    v-for="item in command.subcommands"
    v-bind:command="item"
    v-bind:key="item.id"
    :parentName="command.name"
    :margin="margin"
  >
  </SubCommand>
</template>

<style scoped>
.container {
  text-align: left;
}
.column {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.description {
  font-style: italic;
}
.usage-string {
  color: lightblue;
}
</style>

<script>
import SubCommand from "./Subcommand.vue";
export default {
  name: "Command",
  data() {
    return { margin: 0 };
  },
  components: {
    SubCommand,
  },
  methods: {
    renderDescription(desc) {
      return desc;
    },
  },
  props: { command: {}, prefix: String },
};
</script>
