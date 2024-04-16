<template>
  <li
    class="block"
    @contextmenu.prevent="$emit('chooseCurrentIndex', blockIndex)"
    :key="blockIndex"
  >
    <slot />

    {{ blockIndex }}
  </li>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import File from '@/shared/IconItem/File.vue'

defineProps({
  blockIndex: {
    type: Number,
    required: true
  },
  files: {
    type: Array,
    default: () => {}
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
