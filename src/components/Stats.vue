<template>
    <section id="counters" class="section">
        <nav class="columns">
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter id="serversCounter" :url="guildsUrl"></Counter>
                    </p>
                    <p class="heading">Servers</p>
                </div>
            </div>
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter id="usersCounter" :url="usersUrl"></Counter>
                    </p>
                    <p class="heading">Unique users</p>
                </div>
            </div>
            <div class="column has-text-centered">
                <div>
                    <p class="title">
                        <Counter id="commandsCounter" :url="commandsUrl"></Counter>
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
import Counter from './Counter.vue';
export default {
    name: 'Stats',
    components: {
        Counter,
    },
    data() {
        return {
            guildsUrl: 'https://api.misobot.xyz/guilds',
            usersUrl: 'https://api.misobot.xyz/users',
            commandsUrl: 'https://api.misobot.xyz/commands',
        };
    },
};
</script>
