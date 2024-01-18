<script setup>
// Компонент должен принимать в себя тип файла и название пропсом.
defineProps({
  modelValue: {
    type: Object
  }
})
</script>

<template>
  <div class="icon-item">
    <img src="" alt="" class="icon-img" />
    <input type="text" />
  </div>
</template>
