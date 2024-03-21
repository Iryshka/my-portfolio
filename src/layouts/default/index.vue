<template>
  <div @contextmenu.prevent="closeSelect" class="window-layout">
    <default-layout-window>
      <desktop ref="component" />
    </default-layout-window>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import DefaultLayoutWindow from '@/layouts/default/DefaultLayoutWindow.vue'
import Desktop from '@/pages/desktop.vue'

const component = ref(null)
function closeSelect() {
  component.value.closeSelect()
}

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
