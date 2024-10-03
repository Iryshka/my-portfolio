<template>
  <div @drop="onDrop" @dragover.prevent @dragenter.prevent><slot /></div>
</template>
<script setup>
import { defineEmits } from 'vue'
function onDrop(evt) {
  const itemID = evt.dataTransfer.getData('itemID')
  emits('onDropElement', 27, itemID)
}

const emits = defineEmits(['onDropElement'])
</script>
