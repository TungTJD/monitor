<template>
  <el-menu
      default-active="Interface"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      style="border: none"
  >
    <el-menu-item index="Interface">
      <el-icon>
        <Connection />
      </el-icon>
      <span>接口调试</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <span>菜单2</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <span>菜单3</span>
    </el-menu-item>
    <el-menu-item index="4" disabled>
      <span>菜单4</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
/* method */
const handleOpen = (key) => {
  router && router.push({ name: key })
}
const handleClose = () => {

}
</script>
