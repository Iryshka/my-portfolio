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
      <BlockComponent
        @choose-current-index="onBlock"
        @setCoordinates="changeCoordinates"
        :block-index="index"
        :blocks-coordinates="blocksCoordinates"
        v-for="(block, index) in totalNumberOfBlocks"
        :key="index"
        ><File v-if="files[index]">I'm file</File>
        <Resume @dblclick="openResume" v-if="index === 0" class="resume" />
        <ImageFolder @dblclick="openPhotoGallery" v-if="index === Number(imageFolderIndex)" />
        <MusicFolder @dblclick="openMusicGallery" v-if="index === Number(musicFolderIndex)" />
      </BlockComponent>
      <Transition name="bounce">
        <Bio @onClick="closeBio" class="bio" v-if="isBioDisplayed" />
      </Transition>
      <Transition name="bounce">
        <PhotoGallery
          @onClick="closePhotoGallery"
          @onImageClick="showFullPhoto"
          v-if="isPhotoGalleryDisplayed"
        />
      </Transition>
    </ul>
    <Transition name="bounce">
      <MusicGallery
        v-if="isMusicGalleryDisplayed"
        @onClick="closeMusicGallery"
        @onTrackClick="openAudioPlayer"
        class="music-gallery"
      />
    </Transition>
    <div v-if="isFullPhotoDisplayed" class="desktop-page__photo">
      <img :src="fullPhotoSrc" alt="Full Photo" class="desktop-page__photo-img" />
    </div>
    <!--    <FullPhoto />-->
    <Transition name="bounce">
      <AudioPlayer
        v-if="isAudioPlayerDisplayed"
        :selectedTrack="selectedTrack"
        @onClick="closeAudioPlayer"
        class="audio-player"
      />
    </Transition>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import TheOptions from '@/shared/TheOptions.vue'
import File from '@/shared/IconItem/File.vue'
import BlockComponent from '@/components/Block/BlockComponent.vue'
import Bio from '@/shared/IconItem/Bio.vue'
import Resume from '@/shared/Resume.vue'
import ImageFolder from '@/shared/IconItem/ImageFolder.vue'
import PhotoGallery from '@/shared/PhotoGallery.vue'
import AudioPlayer from '@/shared/AudioPlayer.vue'
import MusicGallery from '@/shared/MusicGallery.vue'
import MusicFolder from '@/shared/IconItem/MusicFolder.vue'
import FullPhoto from '@/shared/IconItem/FullPhoto.vue'
const blocksCoordinates = reactive({})

const isFullPhotoDisplayed = ref(false)
const isAudioPlayerDisplayed = ref(false)
const isMusicGalleryDisplayed = ref(false)
const isBioDisplayed = ref(false)
const isPhotoGalleryDisplayed = ref(false)
const isOptionsDisplayed = ref(false)

const desktopPage = ref(null)
const selectedTrack = ref(null)

const numberOfBlocksInWidth = ref(0)
const numberOfBlocksInHeight = ref(0)
const totalNumberOfBlocks = ref([])
const coordinates = reactive([])

const pageWidth = ref(0)
const options = ref(null)

const horizontalSpaceBetweenBlocks = ref(0)
const verticalSpaceBetweenBlocks = ref(0)

const MENU_WIDTH = 210
const MENU_HEIGHT = 240
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const files = reactive({})
let fileCreated = 0

const currentIndex = ref(null)
const imageFolderIndex = ref(null)
const musicFolderIndex = ref(null)

function changeCoordinates({ index, top, left }) {
  blocksCoordinates[index] = { top, left }
}

watch(blocksCoordinates, (newValue, oldValue) => {
  if (newValue) {
    const folderIndexesList = findNearestBottom(0)
    imageFolderIndex.value = folderIndexesList[0]
    musicFolderIndex.value = folderIndexesList[1]
    console.log(findNearestBottom(0))
  }
})

watch(files, (newValue, oldValue) => {
  console.log({ newValue, oldValue })
})

function findNearestBottom(currentIndex) {
  // console.log(blocksCoordinates)
  // First find current element from grouped blockCoordinates
  // get current top coordinate from currentElement
  const currentElement = blocksCoordinates[currentIndex]
  const currentElementTopPosition = currentElement.top
  const currentElementLeftPosition = currentElement.left

  // make an array from blockCoordinates with structure [{index, top, left}]
  // use Object.entries method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

  const coordinatesList = Object.entries(blocksCoordinates).map((item) => {
    const itemIndex = item[0]
    const itemPosition = item[1]
    return { index: itemIndex, ...itemPosition }
  })
  // sort array by top and left
  const verticalBlocks = coordinatesList.filter(
    (item) => item.left === currentElementLeftPosition && item.top > currentElementTopPosition
  )
  const sortedVerticalBlocks = verticalBlocks.sort((previous, next) => previous.top - next.top)
  console.log(sortedVerticalBlocks)
  return sortedVerticalBlocks.map(({ index }) => Number(index))
  // const nearestBottomBlock = sortedVerticalBlocks[0]
  // return nearestBottomBlock.index
  // find first element with the same left and nearest top
}

function openResume() {
  isBioDisplayed.value = true
  console.log("i'm clicked twice")
}

function openPhotoGallery() {
  isPhotoGalleryDisplayed.value = true
  console.log('photogallery clicked')
}

function openAudioPlayer(track) {
  selectedTrack.value = track
  isAudioPlayerDisplayed.value = true
}

function openMusicGallery() {
  isMusicGalleryDisplayed.value = true
}

function closePhotoGallery() {
  isPhotoGalleryDisplayed.value = false
}

function closeAudioPlayer() {
  isAudioPlayerDisplayed.value = false
}

function closeMusicGallery() {
  isMusicGalleryDisplayed.value = false
}

const fullPhotoSrc = ref('')

function showFullPhoto(image) {
  fullPhotoSrc.value = image
  isFullPhotoDisplayed.value = true
}

const closeFullPhoto = () => {
  isFullPhotoDisplayed.value = false
}
function closeBio() {
  console.log('closing bio')
  isBioDisplayed.value = false
}

onMounted(() => {
  getNumberOfBlocks()
  pageWidth.value = desktopPage.value.offsetWidth
  const localStorageFilesString = localStorage.getItem('files')
  if (localStorageFilesString) {
    const filesObject = JSON.parse(localStorageFilesString)
    for (const [key, value] of Object.entries(filesObject)) {
      files[key] = value
    }
    console.log('setting files')
  }
  console.log(localStorage.getItem('files'))
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
  localStorage.setItem('files', JSON.stringify(files))
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
  // console.log(findNearestBottom(0))
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

.audio-player {
  position: absolute;
  top: -20px;
}

.music-gallery {
  position: absolute;
  top: 190px;
}
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

  &-page__photo {
    width: 350px;
    height: 400px;
    border: 6px solid deeppink;
    position: absolute;
    top: 50px;
    left: 50px;
  }

  &-page__photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.block {
  //border: 1px solid pink;
  //opacity: 1;
  width: 70px;
  height: 70px;
}

.bio {
  &:hover {
    cursor: url('../assets/images/hand-cursor3.svg'), auto;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.6s;
}
.bounce-leave-active {
  animation: bounce-in 0.6s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
