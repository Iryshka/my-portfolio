<template>
  <component :is="icon"></component>
</template>
<script setup>
import { defineProps, defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const icon = defineAsyncComponent(() => import(`../../assets/images/${props.name}.svg`))
// why doesn't @/assets/images/${props.name}.svg work?
</script>
<style scoped lang="scss"></style>
