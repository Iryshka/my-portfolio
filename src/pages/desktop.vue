<template>
  <div class="desktop">
    <date-container />
  </div>
</template>
<script setup>
import dateContainer from '@/entities/dateContainer.vue'
</script>
<style scoped lang="scss">
.desktop {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/images/background.svg');
  color: white;
  height: 100vh;
  width: 100%;
  font-size: 40px;
}
</style>
