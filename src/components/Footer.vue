<template>
    <footer class="footer">
        <div class="container has-text-centered">
            <p>
                <strong>Miso Bot</strong> by
                <a href="https://joinemm.dev">Joinemm#7184</a><br />
                This page is <strong>open source.</strong> Noticed a typo? Or
                something unclear?<br />
                <a href="https://github.com/joinemm/miso-bot-website"
                    >Improve this page on GitHub</a
                >
            </p>
            <span style="font-style: italic"
                ><code>Built with vue.js</code></span
            >
            <div class="icon"><img src="../assets/vue-icon.png" /></div>
            <br />
            <div class="avainlippu"><img src="../assets/avainlippu.png" /></div>
        </div>
    </footer>
</template>

<style scoped>
a {
    color: #5e81ac;
}
a:hover {
    color: #5e81ac;
}
.icon {
    transform: translateY(6px);
}
.footer {
    padding-top: 7em;
    padding-bottom: 0;
    color: #4c566a;
}
.avainlippu {
    width: 8em;
    height: 8em;
}
strong,
code {
    color: #4c566a;
}
</style>

<script>
export default {
    name: "Footer",
};
</script>
