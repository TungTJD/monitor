<script setup lang="ts">
import {ref, onMounted} from 'vue'
import * as api from '../axios/api'
import DialogComp from "./DialogComp.vue";
defineProps<{ msg: string }>()
const dialogVisible = ref<Boolean>(false)
const count = ref<Number>(0)
const dialogTitle = ref<String>('测试')
const dialogHide = () => {
  dialogVisible.value = true
}
onMounted(() => {
  let sem = { name: 'sem' }
  const iterable = new WeakMap()
  iterable.set(sem, '11111')
  api.getTableList().then(result => {
    console.log(result);
  })

  console.log(window.performance.timing.responseStart - window.performance.timing.navigationStart + 'sm');
  /* 首屏加载时间 */
  document.addEventListener('DOMContentLoaded', event => {
    console.log(event.timeStamp + 'sm')
  })
})
</script>

<template>
  <div class="background">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
      >, the official Vue + Vite starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
    <div class="radial-gradient"></div>
    <el-button @click="dialogHide">弹框</el-button>
    <dialog-comp v-model:visible="dialogVisible"/>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.background {
  background-image: url("../assets/demo.png");
  position: relative;
}
.radial-gradient {
  position: absolute;
  top: 0;
  left: 43px;
  width: 300px;
  height: 100px;
  backdrop-filter: saturate(50%) blur(4px);
  background-image: radial-gradient(transparent 1px,#ffffff 1px);
  background-size: 4px 4px;
}
</style>
