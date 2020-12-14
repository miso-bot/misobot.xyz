<template>
    <div>
        <slot name="left"></slot>
        <span ref="number" :id="id"></span>
        <slot name="right"></slot>
    </div>
</template>
<script>
    import { CountUp} from "countup.js";
    export default {
        name: "CountTo",
        data() {
            return {
                counter: null
            };
        },
        props: {
            id: {
                type: String,
                default: "myCounter"
            },
            startVal: {
                type: Number,
                default: 0
            },
            endVal: {
                type: Number,
                required: true
            },
            decimals: {
                type: Number,
                default: 0
            },
            delay: {
                type: Number,
                default: 0
            },
            duration: {
                type: Number,
                default: 1
            },
            useEasing: {
                type: Boolean,
                default: true
            },
            useGroup: {
                type: Boolean,
                default: true
            },
            separator: {
                type: String,
                default: ","
            },
            decimal: {
                type: String,
                default: "."
            },
        },
        mounted() {
            this.counter = new CountUp(this.id, this.endVal);
            this.counter.start()
        }
    };
</script>
