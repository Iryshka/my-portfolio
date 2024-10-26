<template>
  <WindowFrame>
    <textarea class="text-editor" rows="20" cols="50"></textarea>
  </WindowFrame>
</template>
<script setup>
import WindowFrame from '@/components/WindowFrame.vue'
</script>
<style lang="scss" scoped>
.text-editor {
  display: flex;
  resize: none;
  outline: none;
}
</style>
