<script setup>
import { onMounted, ref } from 'vue'
import { format } from 'date-fns'

const date = ref('')
const time = ref('')

function getDate() {
  date.value = format(new Date(), 'MMMM d, yyyy')
}
function getTime() {
  time.value = format(new Date(), 'kk:mm')
}

onMounted(() => {
  getTime()
  getDate()
})
</script>

<template>
  <div>
    <ul class="date-list">
      <li class="date-list__item">{{ date }}</li>
      <li class="date-list__item">{{ time }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.date-list {
  font-family: 'IBM Plex Mono', serif;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 15px;
  list-style: none;
  color: #282828;
  font-size: 14px;
  font-weight: bold;

  @include breakpoints-up(small) {
    font-size: 18px;
  }
}
</style>
