<template>
    <section id="counters" class="section">
        <nav class="columns">
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter
                            id="serversCounter"
                            v-if="hasData"
                            :endVal="guildsCount"
                        ></Counter>
                    </p>
                    <p class="heading">Servers</p>
                </div>
            </div>
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter
                            id="usersCounter"
                            v-if="hasData"
                            :endVal="usersCount"
                        ></Counter>
                    </p>
                    <p class="heading">Unique users</p>
                </div>
            </div>
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter
                            id="commandsCounter"
                            v-if="hasData"
                            :endVal="commandsCount"
                        ></Counter>
                    </p>
                    <p class="heading">Commands processed</p>
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
            hasData: false,
            dataUrl: "https://api.misobot.xyz/stats",
            guildsCount: 0,
            usersCount: 0,
            commandsCount: 0,
        };
    },
    mounted() {
        fetch(this.dataUrl)
            .then((response) => response.json())
            .then((data) => {
                this.guildsCount = data.guilds;
                this.usersCount = data.users;
                this.commandsCount = data.commands;
                this.hasData = true;
            })
            .catch((error) => {
                console.error("Error:", error);
                this.hasData = true;
            });
    },
};
</script>
