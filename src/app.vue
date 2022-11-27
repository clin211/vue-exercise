<template>
    <div>
        <h2>{{ count }}</h2>
        <button @click="handleClickAdd">add</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
function handleClickAdd() {
    count.value += 1;
}
</script>

<style></style>
