<template>
    <section :id="sectionId" class="section is-dark">
        <div class="container">
            <h1 class="title">Commands reference</h1>
            <p>
                List of all available commands, along with their arguments and
                explanations. Many of the commands have subcommands, which are
                shown indented under them.<br />Syntax for arguments is as
                follows:
            </p>
            <ul>
                <li>
                    > Required arguments are in
                    <code>&lt;angle brackets&gt;</code>, optional arguments are
                    in <code>[square brackets]</code>. Insert your own values
                    for these.
                </li>
                <li>
                    > By default arguments are split on whitespace, unless
                    <code>"surrouded by quotes"</code>
                </li>
            </ul>

            <CommandCategory
                v-for="item in commandCategories"
                v-bind:group="item"
                v-bind:key="item.id"
                :prefix="prefix"
            >
            </CommandCategory>
        </div>
    </section>
    <div>
        <a
            href="#section-donate"
            id="downArrow"
            class="has-text-centered"
            v-smooth-scroll
        >
            <div>
                <font-awesome-icon :icon="['fas', 'angle-down']" />
            </div>
        </a>
    </div>
</template>

<style scoped>
#downArrow {
    font-size: 2rem;
}
.container {
    text-align: left;
}
.title {
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
}
code {
    color: lightblue;
}
ul {
    padding: 0.5em;
}
</style>

<script>
import CommandCategory from "./CommandCategory.vue";
import Command from "./Command.vue";
export default {
    name: "Documentation",
    components: {
        CommandCategory,
        Command,
    },
    data() {
        return {
            prefix: ">",
            dataUrl: "https://api.misobot.xyz/documentation",
            commandCategories: [],
        };
    },
    mounted() {
        fetch(this.dataUrl)
            .then((response) => response.json())
            .then((data) => {
                this.commandCategories = data;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    },
    props: {
        sectionId: String,
    },
};
</script>
