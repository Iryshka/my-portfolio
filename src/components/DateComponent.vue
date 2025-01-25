<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { format } from 'date-fns'

const date = ref('')
const time = ref('')
const now = ref(new Date())

function updateDateTime() {
  date.value = format(now.value, 'MMMM d, yyyy')
  time.value = format(now.value, 'kk:mm')
}

onMounted(() => {
  updateDateTime()

  const interval = setInterval(() => {
    now.value = new Date()
    updateDateTime()
  }, 1000)

  onUnmounted(() => {
    clearInterval(interval)
  })
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
