<template>
  <div ref="desktopPage" @contextmenu.prevent="showSelect" class="desktop-page">
    <transition>
      <the-options
        @action="closeSelect"
        ref="options"
        :coordinates="coordinates"
        v-if="isOptionsDisplayed"
      />
    </transition>
    <ul class="desktop-page__list">
      <li
        @contextmenu.prevent="onBlock(index)"
        ref="grid"
        class="block"
        v-for="(block, index) in totalNumberOfBlocks"
        :key="index"
      >
        <!--        <File />-->
        {{ index }}
      </li>
    </ul>
    <!--    <File class="desktop-page__file" v-if="isFileCreated" />-->
    <File
      @click="deleteFile(file.id)"
      :id="file.id"
      class="desktop-page__file"
      v-for="(file, index) in files"
      :key="index"
      :style="{ left: file.position.left, top: file.position.top }"
    />
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import TheOptions from '@/shared/TheOptions.vue'
import File from '@/shared/IconItem/File.vue'
//TODO: ПРИВЕСТИ В порядок компонент theOptions.
// Удолить лишнее
// Почистить комменты
// Options принимает в себя пропс
// Сделать отдельную репу для компонента. Выложить его отдельно

// Ынести options в desktop
//У ноды должен быть треугольник
// в эмит передаем action

// const block = ref(null)
const grid = ref(null)
const desktopPage = ref(null)

const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref(0)
const coordinates = reactive([])
const isOptionsDisplayed = ref(false)
const pageWidth = ref(0)
const options = ref(null)
// const isFileCreated = ref(false)

const horizontalSpaceBetweenBlocks = ref(0)
const verticalSpaceBetweenBlocks = ref(0)

const MENU_WIDTH = 210
const MENU_HEIGHT = 240
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

let files = reactive([])
let fileCreated = 0

const chosenTagIndex = ref(null)

onMounted(() => {
  getNumberOfBlocks()
  pageWidth.value = desktopPage.value.offsetWidth
})

function onBlock(index) {
  chosenTagIndex.value = index
}

function showSelect(event) {
  coordinates[0] = event.clientX
  coordinates[1] = event.clientY

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
  isOptionsDisplayed.value = true
}

function createFile(position) {
  fileCreated++
  const id = fileCreated
  files.push({ position, id })
  console.log(files)
}

function deleteFile(id) {
  const fileIndex = files.findIndex((file) => file.id === id)
  files.splice(fileIndex, 1)
}

function closeSelect() {
  isOptionsDisplayed.value = false
  createFile({ left: `${coordinates[0]}px`, top: `${coordinates[1]}px` })
  // chosenTagIndex.value = null
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
</script>

<style scoped lang="scss">
$rowGap: v-bind(rowGap);
$columnGap: v-bind(columnGap);

$topCoord: v-bind(topCoord);
$leftCoord: v-bind(leftCoord);

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

  &-page__file {
    position: absolute;
    //top: $topCoord;
    //left: $leftCoord;
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
