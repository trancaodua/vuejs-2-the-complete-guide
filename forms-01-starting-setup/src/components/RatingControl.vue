<template>
    <ul>
        <li :class="{ active: modelValue === 'poor' }"><button type="button" @click="active('poor')">Poor</button></li>
        <li :class="{ active: modelValue === 'average' }"><button type="button"
                @click="active('average')">Average</button></li>
        <li :class="{ active: modelValue === 'great' }"><button type="button" @click="active('great')">Great</button></li>
    </ul>
</template>


<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         activeOption: this.modelValue
    //     }
    // },
    computed: {
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        active(option) {
            this.$emit('update:modelValue', option);
        }
    }
}
</script>

<style scoped>
.active {
    border-color: #a00078;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: flex;
    justify-content: center;
    align-content: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>