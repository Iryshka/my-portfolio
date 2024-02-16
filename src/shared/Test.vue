<template>
  <ul>
    <li v-for="item in list" :key="item.key">
      <input v-model="value[item.key]" type="text" />
    </li>
  </ul>
</template>

<script setup>
import { ref, reactive } from 'vue'

const value = ref({})

const list = reactive([
  {
    key: 'full'
  },
  {
    key: 'for'
  },
  {
    key: 'meow'
  },
  {
    key: 'bark'
  }
])
</script>
