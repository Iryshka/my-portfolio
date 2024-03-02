<template>
  <div
    ref="desktopPage"
    @contextmenu.prevent="showSelect"
    @click="closeSelect"
    class="desktop-page"
  >
    <transition>
      <the-options ref="options" :coordinates="coordinates" v-if="coordinates.length" />
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
import { ref, reactive, computed, onMounted } from 'vue'
import TheOptions from '@/shared/TheOptions.vue'

// const block = ref(null)
const grid = ref(null)
const desktopPage = ref(null)

const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref(0)
const coordinates = reactive([])
const pageWidth = ref(0)
const options = ref(null)

const horizontalSpaceBetweenBlocks = ref(0)
const verticalSpaceBetweenBlocks = ref(0)

const MENU_WIDTH = 250
const MENU_HEIGHT = 260
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

onMounted(() => {
  getNumberOfBlocks()
  pageWidth.value = desktopPage.value.offsetWidth
})

function onBlock(event) {
  console.log(event.target)
}

function showSelect(event) {
  coordinates[0] = event.clientX
  coordinates[1] = event.clientY
  // coordinates.value = [event.clientX, event.clientY]

  console.log(
    "i'm X",
    coordinates[0],
    "i'm Y",
    coordinates[1],
    "i'm window height",
    window.innerHeight
  )

  const isNeedStickOptionsToRight = windowWidth < coordinates[0] + MENU_WIDTH
  const isNeedStickOptionsToBottom = windowHeight < coordinates[1] + MENU_HEIGHT

  // Check if there's less than 250px space to the right of the menu
  if (isNeedStickOptionsToRight) {
    coordinates[0] = windowWidth - MENU_WIDTH
  }
  // Check if there's less than 260px space to the bottom of the menu
  if (isNeedStickOptionsToBottom) {
    coordinates[1] = windowHeight - MENU_HEIGHT
  }
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
  horizontalSpaceBetweenBlocks.value = Math.floor(
    remainderWidth / (numberOfBlocksInWidth.value - 1)
  )
  verticalSpaceBetweenBlocks.value = Math.floor(
    remainderHeight / (numberOfBlocksInHeight.value - 1)
  )

  totalNumberOfBlocks.value = numberOfBlocksInWidth.value * numberOfBlocksInHeight.value
}

//Computed property to dynamically generate the styles for the .desktop-page__list
// const gridGaps = computed(() => ({
//   'row-gap': `${Math.floor(verticalSpaceBetweenBlocks.value)}px`,
//   'column-gap': `${Math.floor(horizontalSpaceBetweenBlocks.value)}px`
// }))
const rowGap = computed(() => `${verticalSpaceBetweenBlocks.value}px`)
const columnGap = computed(() => `${horizontalSpaceBetweenBlocks.value}px`)
</script>

<style scoped lang="scss">
$rowGap: v-bind(rowGap);
$columnGap: v-bind(columnGap);
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
    row-gap: $rowGap;
    column-gap: $columnGap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
}

.block {
  border: 1px solid pink;
  opacity: 1;
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
