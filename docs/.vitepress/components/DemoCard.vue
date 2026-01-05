<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div class="demo-card">
    <h3>⚡️ 交互演示</h3>
    <p>你点击了 {{ count }} 次</p>
    <button @click="count++">点我 +1</button>
  </div>
</template>

<style scoped>
.demo-card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  background: var(--vp-c-bg-soft); /* 使用 VitePress 内置变量适配黑白模式 */
}
button {
  padding: 5px 10px;
  background: #42b883; /* Vue Green */
  color: white;
  border-radius: 4px;
}
</style>