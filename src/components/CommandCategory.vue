<template>
    <div class="card" :class="accordionClasses">
        <header class="card-header" @click="toggleAccordion">
            <p class="card-header-title">
                {{ group.name }}
            </p>
            <a class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                </span>
            </a>
        </header>
        <div class="card-content">
            <div class="content">
                <p v-html="group.description"></p>
                <p>
                    <Command
                        v-for="cmd in group.commandList"
                        v-bind:command="cmd"
                        v-bind:key="cmd.name"
                        :prefix="prefix"
                    >
                    </Command>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin-top: 3px;
    margin-bottom: 3px;
}
.card-header {
    cursor: pointer;
}

.card-content {
    padding: 0;
    max-height: 150em;
    overflow: hidden;
    transition: 0.3s ease all;
}

.is-closed .card-content {
    max-height: 0;
}

.content {
    text-align: left;
    padding: 1em 2em 1em;
}
</style>

<script>
import Command from './Command.vue';
export default {
    name: 'CommandCategory',
    components: { Command },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        toggleAccordion: function() {
            this.isOpen = !this.isOpen;
        },
        renderDescription(desc) {
            return desc;
        },
    },
    computed: {
        accordionClasses: function() {
            return {
                'is-closed': !this.isOpen,
            };
        },
    },
    props: { group: {}, prefix: String },
};
</script>
