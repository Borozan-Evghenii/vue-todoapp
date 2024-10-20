<template>
    <button :class="['button', {'buttonActive': active}]">
        <slot />
    </button>
</template>

<script lang="ts" setup>
   const {active} = defineProps(['active'])
</script>

<style scoped>

.button {
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: black;
}
.buttonActive {
    color: white;
    background-color: gray;
}
</style>