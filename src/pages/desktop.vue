<template>
  <div ref="desktopPage" @contextmenu.prevent.stop="showSelect" class="desktop-page">
    <transition>
      <the-options
        @create-file="createFile"
        @delete-file="deleteFile"
        ref="options"
        :coordinates="coordinates"
        v-if="isOptionsDisplayed"
      />
    </transition>
    <ul class="desktop-page__list">
      <!--      <Bio />-->

      <BlockComponent
        @choose-current-index="onBlock"
        :block-index="index"
        v-for="(block, index) in totalNumberOfBlocks"
        :key="index"
        ><File v-if="files[index]">I'm file</File>
        <BioFolder v-if="index === 0" />
      </BlockComponent>
    </ul>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import TheOptions from '@/shared/TheOptions.vue'
import File from '@/shared/IconItem/File.vue'
import BlockComponent from '@/components/Block/BlockComponent.vue'
import Bio from '@/shared/IconItem/Bio.vue'
import BioFolder from '@/shared/IconItem/BioFolder.vue'

const grid = ref(null)
const desktopPage = ref(null)

const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref(0)
const coordinates = reactive([])
const isOptionsDisplayed = ref(false)
const pageWidth = ref(0)
const options = ref(null)

function openFolder() {
  console.log("i'm clicked twice")
}

const horizontalSpaceBetweenBlocks = ref(0)
const verticalSpaceBetweenBlocks = ref(0)

const MENU_WIDTH = 210
const MENU_HEIGHT = 240
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const files = reactive({})
let fileCreated = 0

const currentIndex = ref(null)

onMounted(() => {
  getNumberOfBlocks()
  pageWidth.value = desktopPage.value.offsetWidth
})

function onOption() {
  closeSelect()
  createFile()
  clearCurrentIndex()
}

function onBlock(index) {
  currentIndex.value = index
  console.log(currentIndex.value)
}

function createFile() {
  closeSelect()
  fileCreated++
  files[currentIndex.value] = {
    ext: 'txt',
    name: 'file'
  }
  clearCurrentIndex()
}

function showSelect(event) {
  coordinates[0] = event.clientX
  coordinates[1] = event.clientY

  const isNeedStickOptionsToRight = windowWidth < coordinates[0] + MENU_WIDTH
  const isNeedStickOptionsToBottom = windowHeight < coordinates[1] + MENU_HEIGHT

  // Check if there's less than 210px space to the right of the menu
  if (isNeedStickOptionsToRight) {
    coordinates[0] = windowWidth - MENU_WIDTH
  }
  // Check if there's less than 240px space to the bottom of the menu
  if (isNeedStickOptionsToBottom) {
    coordinates[1] = windowHeight - MENU_HEIGHT
  }
  isOptionsDisplayed.value = true
}

function deleteFile() {
  closeSelect()
  delete files[currentIndex.value]
  clearCurrentIndex()
}

function clearCurrentIndex() {
  currentIndex.value = null
}

function closeSelect() {
  isOptionsDisplayed.value = false
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

// const leftCoord = computed(() => `${coordinates[0]}px`)
// const topCoord = computed(() => `${coordinates[1]}px`)
const rowGap = computed(() => `${verticalSpaceBetweenBlocks.value}px`)
const columnGap = computed(() => `${horizontalSpaceBetweenBlocks.value}px`)

defineExpose({
  closeSelect
})
</script>

<style scoped lang="scss">
$rowGap: v-bind(rowGap);
$columnGap: v-bind(columnGap);

$topCoord: v-bind(topCoord);
$leftCoord: v-bind(leftCoord);

.desktop {
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

  &-page__file {
  }
}

.block {
  //border: 1px solid pink;
  //opacity: 1;
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
