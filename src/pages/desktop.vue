<template>
  <div
    ref="desktopPage"
    @contextmenu.prevent="showSelect"
    @click="closeSelect"
    class="desktop-page"
  >
    <transition>
      <the-options :pageWidth="pageWidth" :coordinates="coordinates" v-if="coordinates.length" />
    </transition>
    <ul class="desktop-page__list">
      <li
        @click="onBlock"
        ref="grid"
        class="block"
        v-for="(block, index) in totalNumberOfBlocks"
        :key="index"
      >
        {{ index }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import TheOptions from '@/shared/TheOptions.vue'

// const block = ref(null)
const grid = ref(null)
const desktopPage = ref(null)

const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref(0)
const coordinates = ref([])
const pageWidth = ref(0)

onMounted(() => {
  getNumberOfBlocks()
  pageWidth.value = desktopPage.value.offsetWidth
})

function onBlock(event) {
  console.log(event.target)
}

function showSelect(event) {
  coordinates.value[0] = event.clientX
  coordinates.value[1] = event.clientY
}

function closeSelect() {
  coordinates.value = []
}

function getNumberOfBlocks() {
  const width = desktopPage.value.offsetWidth

  const height = desktopPage.value.offsetHeight

  const blockSize = 70

  // Calculate the number of blocks in width and height
  numberOfBlocksInWidth.value = Math.floor(width / blockSize)
  numberOfBlocksInHeight.value = Math.floor(height / blockSize)

  // Calculate the total occupied space by blocks
  const totalOccupiedWidth = numberOfBlocksInWidth.value * blockSize
  const totalOccupiedHeight = numberOfBlocksInHeight.value * blockSize

  // Calculate the remainder space after placing blocks
  const remainderWidth = width - totalOccupiedWidth
  const remainderHeight = height - totalOccupiedHeight

  // Calculate the space between blocks
  const horizontalSpaceBetweenBlocks = remainderWidth / (numberOfBlocksInWidth.value - 1)
  const verticalSpaceBetweenBlocks = remainderHeight / (numberOfBlocksInHeight.value - 1)

  desktopPage.value.style.columnGap = `${Math.floor(horizontalSpaceBetweenBlocks)}px`
  desktopPage.value.style.rowGap = `${Math.floor(verticalSpaceBetweenBlocks)}px`

  totalNumberOfBlocks.value = numberOfBlocksInWidth.value * numberOfBlocksInHeight.value
}
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

  &-page {
    width: 100%;
    height: 100%;
  }

  &-page__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
}

.block {
  border: none;
  opacity: 0;
  width: 70px;
  height: 70px;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
