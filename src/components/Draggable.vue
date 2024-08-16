<template>
  <div @dragstart="startDrag" draggable="true">I'm draggable</div>
</template>
<script setup>
function startDrag(evt) {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', 'hello')
}
</script>
