<template>
  <div class="container">
    <el-container>
      <el-aside class="contain-aside">
        <Menu></Menu>
      </el-aside>
      <el-main class="contain-main">
        <Layout>
          <template #content>
            <router-view></router-view>
          </template>
        </Layout>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import Menu from './Menu.vue'
import Layout from './Layout.vue'

</script>

<style scoped lang="less">
.container {
  .contain-aside {
    width: 200px;
    height: 100vh;
    border-right: 0.8px solid #dcdfe6;
  }
  .contain-main {
    height: 100vh;
  }
}
</style>
