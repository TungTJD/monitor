<template>
  <div>
    <el-button @click="submit()">子组件</el-button>
  </div>
</template>

<script setup>
import {ref, reactive} from "vue";
import DialogComp from './DialogComp.vue'
import { useCommandComponent } from ''
const dialogComp = useCommandComponent()
/* method */
const submit = () => {

}
</script>
