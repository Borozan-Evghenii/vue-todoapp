<template>
    <li class="itemContainer">
        <div class="content">
            <input type="checkbox" name="" id="" :checked="item.completed" v-model="item.completed">
            <p>{{ item.title }}</p>
        </div>
        <div>
            <button @click="manage?.removeItem(item.id)">delete</button>
        </div>
    </li>
</template>

<script setup lang="ts">
import type { TodoItem } from '@/App.vue';
import { todoManageKey } from '@/providersKey';
import { inject } from 'vue';


const { item } = defineProps<{ item: TodoItem }>()
const manage = inject(todoManageKey)

</script>



<style scoped>
.itemContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 20px;
}
</style>