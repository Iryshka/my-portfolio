<template>
  <div @dragstart="startDrag" draggable="true"><slot /></div>
</template>
<script setup>
import { defineProps } from 'vue'

const props = defineProps(['currentIndex'])
function startDrag(evt) {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', props.currentIndex)
}
</script>
