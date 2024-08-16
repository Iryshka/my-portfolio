<template>
  <WindowFrame>
    <div class="full-photo"><img :src="src" alt="Full Photo" class="full-photo__img" /></div
  ></WindowFrame>
</template>
<script setup>
import WindowFrame from '@/shared/WindowFrame.vue'
import { defineProps, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  }
})

watch(
  () => props.src,
  (value, oldValue) => {
    console.log({ value, oldValue })
  }
)
</script>
<style lang="scss" scoped></style>
