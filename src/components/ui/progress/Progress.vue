<template>
    <div class="progressContainer">
        <div class="progress">
            <div class="indicator" :style="{ width: (Math.floor(percentage()) || 0) + '%' }"></div>
        </div>
        <div>
            {{ (Math.floor(percentage()) || 0) + '%' }}
        </div>
    </div>
</template>

<script setup>
const { totalValue, value } = defineProps(['totalValue', 'value'])
const percentage = () => {
    return (value / totalValue) * 100
}

</script>

<style scoped>
.progressContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
}

.progress {
    width: 100%;
    height: 10px;
    background-color: #efefee;
    border-radius: 10px;
    overflow: hidden;
}

.indicator {
    height: 100%;
    background: green;
    animation: all 2s ease-in-out;
}
</style>