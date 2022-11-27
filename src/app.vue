<template>
    <div class="demo">
        <div class="text">Count: {{ state.count }}</div>
        <button class="btn" @click="onClick">Add</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const state = reactive({
    count: 0,
});
const onClick = () => {
    state.count++;
};
</script>

<style>
.demo {
    width: 100%;
}
.demo .text {
    font-size: 28px;
    font-weight: bolder;
    color: #666666;
}
.demo .btn {
    font-size: 20px;
    padding: 0 10px;
    height: 32px;
    min-width: 80px;
    cursor: pointer;
}
</style>
