<template>
    <el-dialog
        title="弹框"
        v-model="props.visible"
    >
      弹框内容
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancel()">取消</el-button>
          <el-button @click="cancel()">确定</el-button>
        </span>
      </template>
    </el-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
const props = defineProps<{
  visible: boolean
}>()
const emits = defineEmits<{
  (e: 'update:visible', action: boolean): void
}>()
const cancel = () => {
  emits('update:visible', false)
}

</script>
