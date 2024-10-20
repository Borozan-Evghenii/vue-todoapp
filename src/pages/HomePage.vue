<script async setup lang="ts" >
import { computed, onMounted, provide, ref, watch } from 'vue';
import Input from '@/components/ui/input/Input.vue';
import List from '@/components/ui/list/List.vue';
import { todoManageKey } from '@/providersKey';
import Progress from '@/components/ui/progress/Progress.vue';
import Button from '@/components/ui/button/Button.vue';
import { useQuery } from '@/api/useQuery';


export interface TodoItem {
  id: number,
  title: string,
  completed: boolean
}


// onMounted(()=> {
//   fetchData()
// //   getUsers()
// })




export type Category = 'all' | 'completed' | 'uncompleted'

const categories = ref<Category[]>(['all', 'completed', 'uncompleted'])
const currentCategory = ref<Category>('all')
const userId = ref<number>(1)
const users = ref([])


// const getUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   users.value = data
// }


const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
}

// const fetchByUser = async (id:number) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
//   const data = await response.json()
//   todoList.value = data
// }



const getTodos = await useQuery(() => fetchData())





const updateTodoList = (value: string) => {
    getTodos.response.value.push({ id: Math.random(), title: value, completed: false })
}

const completedTodo = computed((() => getTodos.response.value.filter(item => item.completed === true).length))
console.log('completed',completedTodo.value);


const removeItem = (id: number) => getTodos.response.value = getTodos.response.value.filter(x => x.id !== id)

const filteredList = computed(() => {


  if (currentCategory.value === 'completed') {
    return getTodos.response.value.filter(item => item.completed === true)
  }
  if (currentCategory.value === 'uncompleted') {
    return getTodos.response.value.filter(item => item.completed === false)
  }
  return getTodos.response.value

})


// watch(userId, ()=> fetchByUser(userId.value) )


provide(todoManageKey, { removeItem })




</script>

<template >
  <main class="container">

    <Progress :totalValue="getTodos.response.value.length" :value="completedTodo" />

    <Input @submit-text="updateTodoList" />
    <div style="display: flex; flex-direction: row; gap: 20px;" >
      <Button v-for="category in categories" 
        :key="category"
        :active="currentCategory === category"
        @click="currentCategory = category">
        {{ category.toUpperCase() }}
      </Button>
      <select @change="(value) => userId = value?.target?.value ">
        <option v-for="user in users"  :key="user.id" :value="user.id">{{ user.name }}</option>
      </select>

    </div>

    <List :dataList="filteredList" />
  </main>
</template>

<style scoped>
.container {
  height: 100vh;
  padding-top: 100px;
  width: 400px;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.active {
  background: red;
}
</style>
