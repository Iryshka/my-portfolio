<template>
  <li
    class="block"
    @contextmenu.prevent="$emit('chooseCurrentIndex', blockIndex)"
    :key="blockIndex"
  >
    {{ blockIndex }}
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
const blockSize = 70

defineProps({
  blockIndex: {
    type: Number,
    required: true
  }
})
</script>

<style scoped lang="scss">
.block {
  border: 1px solid pink;
  opacity: 1;
  width: 70px;
  height: 70px;
}
</style>
