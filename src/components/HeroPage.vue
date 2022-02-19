<template>
    <div class="hero-body">
        <div id="introContent" class="container has-text-centered">
            <div class="avatar-container">
                <img
                    src="../assets/icon_circle.png"
                    alt="Logo"
                    style="max-width: 5rem"
                />
                <span
                    class="status-circle"
                    :class="{
                        'status-online': online,
                        'status-offline': !online,
                    }"
                >
                    <span class="tooltiptext">{{ ping }}</span>
                </span>
            </div>
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
.avatar-container {
    display: block;
    margin: 0 auto;
    position: relative;
    max-width: 80px;
    max-height: 80px;
}
.status-circle {
    background: #2e3440;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border: 5px solid #2e3440;
}
.status-circle .tooltiptext {
    font-family: Raleway;
    visibility: hidden;
    min-width: 80px;
    background-color: #121822;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    top: -4px;
    left: 150%;
}
.status-circle .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #121822 transparent transparent;
}
.status-circle:hover .tooltiptext {
    visibility: visible;
}
.status-online {
    background: #43b581;
}
.status-offline {
    background: #2e3440;
    box-shadow: inset 0px 0px 0px 5px #747f8d;
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
    data() {
        return {
            pingUrl: "https://api.misobot.xyz/ping",
            ping: "offline",
            online: false,
        };
    },
    props: {
        title: String,
        subtitle: String,
    },
    mounted() {
        fetch(this.pingUrl)
            .then((response) => response.text())
            .then((data) => {
                this.ping = parseInt(data);
                if (isNaN(this.ping) || this.ping == undefined) {
                    this.online = false;
                    this.ping = "offline";
                } else {
                    this.online = true;
                    this.ping = this.ping + " ms";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                this.online = false;
            });
    },
};
</script>
