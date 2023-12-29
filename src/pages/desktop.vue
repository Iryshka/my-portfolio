<template>
  <li v-for="(block, index) in 16" key="index">{{ index }}</li>
</template>
<script setup></script>
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
