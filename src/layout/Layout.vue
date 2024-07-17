<template>
  <div class="common-layout">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
</script>

<style scoped lang="less">
.common-layout {
  .contain-aside {
    width: 200px;
    height: 100vh;
  }
  .contain-main {
    height: 100vh;
  }
}
</style>
