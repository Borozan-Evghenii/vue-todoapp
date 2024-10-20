<template>
    <input type="text" class="input" v-model="inputValue" @keypress.enter="emitSubmitText">
    <p>{{ inputError }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('')
const inputError = ref('')


const emit = defineEmits(['submit-text'])



const emitSubmitText = () => {
    if(inputValue.value.length === 0 ){
        inputError.value = 'completeaza'
        
    }else{
        emit('submit-text', inputValue.value)
        inputValue.value = ''
        inputError.value = ''
    }
    
}




</script>

<style scoped>
.input {
    max-width: 100%;
    padding: 18px 20px;
    border: none;
    border-radius: 10px;
    outline: none;
    background-color: #efefef;
}
</style>