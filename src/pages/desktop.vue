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
        ><File @onFileClick="openTextEditor" :index="index" v-if="files[index]">I'm file</File>

        <Resume @dblclick="openResume" v-if="index === 0" class="resume" />
        <Draggable v-if="index === draggablePositionIndex" />

        <DropZone @onDropElement="dropElement" v-if="index === 27" />
        <ImageFolder @dblclick="openPhotoGallery" v-if="index === Number(imageFolderIndex)" />
        <MusicFolder @dblclick="openMusicGallery" v-if="index === Number(musicFolderIndex)" />
        <Draggable v-if="index === Number(cvFolderIndex)" :current-index="cvFolderIndex">
          <CvFolder @dblclick="openCV" v-if="index === Number(cvFolderIndex)" />
        </Draggable>
      </BlockComponent>
      <Transition name="bounce">
        <Cv v-if="isCvDisplayed" @onClick="closeCV" />
      </Transition>
      <Transition name="bounce">
        <Bio @onClick="closeBio" class="bio" v-if="isBioDisplayed" />
      </Transition>
      <Transition name="bounce">
        <PhotoGallery
          @onClick="closePhotoGallery"
          @onImageClick="openFullPhoto"
          v-if="isPhotoGalleryDisplayed"
        />
      </Transition>
      <Transition name="bounce">
        <TextEditor @onClick="closeTextEditor" v-if="isTextEditorDisplayed" class="text-editor" />
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

    <Transition name="bounce">
      <AudioPlayer
        v-if="isAudioPlayerDisplayed"
        :selectedTrack="selectedTrack"
        @onClick="closeAudioPlayer"
        class="audio-player"
      />
    </Transition>
    <Footer />
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { saveAs } from 'file-saver'
import TheOptions from '@/components/TheOptions.vue'
import File from '@/components/File.vue'
import BlockComponent from '@/components/BlockComponent.vue'
import Bio from '@/components/Bio.vue'
import Resume from '@/components/Resume.vue'
import ImageFolder from '@/components/ImageFolder.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import AudioPlayer from '@/components/AudioPlayer.vue'
import MusicGallery from '@/components/MusicGallery.vue'
import MusicFolder from '@/components/MusicFolder.vue'
import Cv from '@/components/Cv.vue'
import CvFolder from '@/components/CvFolder.vue'
import TextEditor from '@/components/TextEditor.vue'
import Footer from '@/components/Footer.vue'
import Draggable from '@/components/Draggable.vue'
import DropZone from '@/components/DropZone.vue'

const blocksCoordinates = reactive({})

const draggablePositionIndex = ref(25)

function dropElement(dropIndex, itemID) {
  console.log({ dropIndex, itemID }, blocksCoordinates, cvFolderIndex)
  if (cvFolderIndex.value === Number(itemID)) {
    cvFolderIndex.value = dropIndex
  }
  draggablePositionIndex.value = dropIndex
}

const isFullPhotoDisplayed = ref(false)
const isAudioPlayerDisplayed = ref(false)
const isMusicGalleryDisplayed = ref(false)
const isCvDisplayed = ref(false)
const isBioDisplayed = ref(false)
const isPhotoGalleryDisplayed = ref(false)
const isOptionsDisplayed = ref(false)

const isTextEditorDisplayed = ref(false)

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
const cvFolderIndex = ref(null)
const fullPhotoSrc = ref('')

function changeCoordinates({ index, top, left }) {
  blocksCoordinates[index] = { top, left }
}

watch(blocksCoordinates, (newValue, oldValue) => {
  if (newValue) {
    const folderIndexesList = findNearestBottom(0)
    imageFolderIndex.value = folderIndexesList[0]
    musicFolderIndex.value = folderIndexesList[1]
    cvFolderIndex.value = folderIndexesList[2]
  }
})

watch(files, (newValue, oldValue) => {
  console.log({ newValue, oldValue })
})

function findNearestBottom(currentIndex) {
  const currentElement = blocksCoordinates[currentIndex]
  const currentElementTopPosition = currentElement.top
  const currentElementLeftPosition = currentElement.left

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
  return sortedVerticalBlocks.map(({ index }) => Number(index))
}

function openResume() {
  isBioDisplayed.value = true
}

function openPhotoGallery() {
  isPhotoGalleryDisplayed.value = true
}

function openAudioPlayer(track) {
  selectedTrack.value = track
  isAudioPlayerDisplayed.value = true
  isPlaying.value = true
}

function openMusicGallery() {
  isMusicGalleryDisplayed.value = true
}

function openTextEditor(index) {
  if (files[index].ext === 'txt') {
    isTextEditorDisplayed.value = true
  }
}

function openFullPhoto(imageSrc) {
  fullPhotoSrc.value = imageSrc
  isFullPhotoDisplayed.value = true
}

function openCV() {
  isCvDisplayed.value = true
}

async function downloadDocx(url = 'https://morth.nic.in/sites/default/files/dd12-13_0.pdf') {
  const response = await fetch(url)
  const blob = await response.blob()
  const newBlob = new Blob([blob], { type: 'application/pdf' })
  saveAs(newBlob, `test.pdf`)
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

function closeTextEditor() {
  isTextEditorDisplayed.value = false
}

function closeCV() {
  isCvDisplayed.value = false
}

function closeBio() {
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
  }
})

function onOption() {
  closeSelect()
  createFile()
  clearCurrentIndex()
}

function onBlock(index) {
  currentIndex.value = index
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
}

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

  &-page__photo-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.block {
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
