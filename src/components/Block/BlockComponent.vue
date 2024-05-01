<template>
  <li
    ref="block"
    class="block"
    @contextmenu.prevent="$emit('chooseCurrentIndex', blockIndex)"
    :key="blockIndex"
  >
    <slot />

    {{ blockIndex }}
  </li>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'

const block = ref(null)

const emit = defineEmits(['setCoordinates'])
const props = defineProps({
  blockIndex: {
    type: Number,
    required: true
  },
  files: {
    type: Array,
    default: () => {}
  },
  blocksCoordinates: {}
})

onMounted(() => {
  const { left, top } = block.value.getBoundingClientRect()
  emit('setCoordinates', { index: props.blockIndex, left, top })
  console.log(block.value.getBoundingClientRect(), props.blocksCoordinates)
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
