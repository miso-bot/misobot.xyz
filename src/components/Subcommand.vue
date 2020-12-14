<template>
  <div class="container columns">
    <code class="column is-half" :style="{ 'padding-left': calculateMargin() }"
      >└ {{ command.name }}
      <span class="usage-string">{{ command.usage }}</span></code
    >
    <span
      class="description column"
      v-html="renderDescription(command.description)"
    ></span>
  </div>
  <SubCommand
    v-for="item in command.subcommands"
    v-bind:command="item"
    v-bind:key="item.id"
    :parentName="newParentName"
    :margin="deeperMargin"
  >
  </SubCommand>
</template>

<style scoped>
.container {
  text-align: left;
}
.description {
  font-style: italic;
}
.usage-string {
  color: lightblue;
}
.column {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
</style>

<script>
export default {
  name: "SubCommand",
  data() {
    return {
      deeperMargin: this.margin + 2,
      newParentName: `${this.parentName} ${this.command.name}`,
    };
  },
  methods: {
    calculateMargin() {
      return `${this.deeperMargin}em`;
    },
    renderDescription(desc) {
      return desc;
    },
  },
  props: { command: {}, parentName: String, margin: Number },
};
</script>
