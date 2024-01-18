<template>
  <ul class="desktop-page" ref="desktopPage">
    <li
      class="block"
      v-for="(block, index) in totalNumberOfBlocks"
      @click="getBlockIndex(index)"
      :key="index"
      ref="block"
    >
      {{ index }}
    </li>
  </ul>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const block = ref(null)
const desktopPage = ref(null)
const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref(0)

onMounted(() => {
  getNumberOfBlocks()
})

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

// function getNumberOfBlocks() {
//   const width = desktopPage.value.offsetWidth
//   const height = desktopPage.value.offsetHeight
//
//   const blockSize = 70
//   // количество блоков в ширину, в высоту
//   numberOfBlocksInWidth.value = Math.floor(width / blockSize)
//   numberOfBlocksInHeight.value = Math.floor(height / blockSize)
//   console.log('Ширина', width)
//   console.log('Высота', height)
//   console.log('Mаксимальное количество блоков в ширину', numberOfBlocksInWidth.value)
//   console.log('Mаксимальное количество блоков в высоту', numberOfBlocksInHeight.value)
//
//   const remainderWidth = width / blockSize - Math.trunc(width / blockSize)
//   const remainderHeight = height / blockSize - Math.trunc(height / blockSize)
//   console.log('Общий отступ блоков по горизонтали', remainderWidth)
//   console.log('Общий отступ блоков по вертикали', remainderHeight)
//
//   // отступ между квадратами по горизонтали
//   const horizontalSpaceBetweenBlocks = (numberOfBlocksInWidth.value - 1) / remainderWidth
//   console.log('отступ между квадратами по горизонтали', horizontalSpaceBetweenBlocks)
//
//   const verticalSpaceBetweenBlocks = (numberOfBlocksInHeight.value - 1) / remainderHeight
//   console.log('отступ между квадратами по вертикали', verticalSpaceBetweenBlocks)
//
//   desktopPage.value.style.columnGap = `${Math.trunc(horizontalSpaceBetweenBlocks)}px`
//   desktopPage.value.style.columnRow = `${Math.trunc(verticalSpaceBetweenBlocks)}px`
//
//   totalNumberOfBlocks.value = numberOfBlocksInWidth.value * numberOfBlocksInHeight.value
// }

function getBlockIndex(index) {
  block.value = index
  console.log(index)
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
    //background-color: #e210f1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }
}

.block {
  border: none;
  width: 70px;
  height: 70px;
}
</style>
