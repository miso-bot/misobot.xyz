<template>
    <div>
        <slot name="left"></slot>
        <span ref="number" :id="id"></span>
        <slot name="right"></slot>
    </div>
</template>
<script>
import { CountUp } from 'countup.js';
export default {
    name: 'CountTo',
    data() {
        return {
            counter: null,
        };
    },
    props: {
        url: { type: String, required: true },
        id: {
            type: String,
            default: 'myCounter',
        },
        startVal: {
            type: Number,
            default: 0,
        },
        endVal: {
            type: Number,
            required: false,
        },
        decimals: {
            type: Number,
            default: 0,
        },
        delay: {
            type: Number,
            default: 0,
        },
        duration: {
            type: Number,
            default: 1,
        },
        useEasing: {
            type: Boolean,
            default: true,
        },
        useGroup: {
            type: Boolean,
            default: true,
        },
        separator: {
            type: String,
            default: ',',
        },
        decimal: {
            type: String,
            default: '.',
        },
    },
    mounted() {
        //console.log(value);
        fetch(this.url)
            .then((response) => response.text())
            .then((text) => {
                const value = text;
                console.log(value);
                this.counter = new CountUp(this.id, value);
                this.counter.start();
            });
    },
};
</script>
