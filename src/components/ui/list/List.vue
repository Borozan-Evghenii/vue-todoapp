<template>
    <ul>
        <ListItem v-for="todo in dataList" :key="todo.id" :item="todo" />
    </ul>
</template>

<script lang="ts" setup>
import type { TodoItem } from '@/App.vue';
import ListItem from '../listItem/ListItem.vue';

const { dataList } = defineProps<{ dataList: TodoItem[] }>()

</script>

<style lang="scss" scoped></style>