<template>
  <div class="window-layout">
    <default-layout-window>
      <slot />
    </default-layout-window>
  </div>
</template>
<script setup>
import DefaultLayoutWindow from '@/layouts/default/DefaultLayoutWindow.vue'

defineOptions({
  name: 'default-layout'
})
</script>
<style scoped lang="scss">
.window-layout {
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
