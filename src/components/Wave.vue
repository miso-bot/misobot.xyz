<template>
    <div class="wave-container">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="320px"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
                :fill="color"
                fill-opacity="1"
                d="M0,0L48,26.7C96,53,192,107,288,149.3C384,192,480,224,576,213.3C672,203,768,149,864,144C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
        </svg>
    </div>
</template>

<style scoped>
.wave-container {
    position: relative;
    text-align: center;
    max-height: 240px;
}
.wave-container > svg {
    display: block;
    transform: translateY(1px);
}
</style>

<script>
export default {
    name: 'Wave',
    props: {
        color: String,
    },
};
</script>
