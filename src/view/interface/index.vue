<template>
  <h3>用户数据</h3>
  <el-divider />
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="age" label="年龄" width="180" />
    <el-table-column prop="adress" label="地址" />
    <el-table-column prop="is_status" label="开启状态" />
    <el-table-column prop="is_lock" label="是否激活" />
    <el-table-column prop="user_name" label="用户名" />
    <el-table-column prop="avatar" label="头像" />
  </el-table>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from "vue";
import * as api from '../../axios/api'
const tableData = reactive([]);
onMounted(() => {
  api.getTableList().then(result => {
    console.log(result);
  })
})
</script>
