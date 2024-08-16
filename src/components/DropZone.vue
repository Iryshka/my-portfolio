<template>
  <div @drop="onDrop" @dragover.prevent @dragenter.prevent>drop zone</div>
</template>
<script setup>
import { defineEmits } from 'vue'
function onDrop(evt) {
  const itemID = evt.dataTransfer.getData('itemID')
  emits('onDropElement', 27)
  console.log({ itemID })
}

const emits = defineEmits(['onDropElement'])
</script>
