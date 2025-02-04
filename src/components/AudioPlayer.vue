<template>
  <WindowFrame>
    <div class="player">
      <div class="player__image">
        <img
          :src="trackList[currentTrack].image"
          alt=""
          :class="['player__img', { player__rotating: isPlaying }]"
        />
      </div>
      <div class="player__song-info">
        <div class="player__song-info-wrapper">
          <h3 class="player__band">{{ trackList[currentTrack].band }}</h3>
          <h3 class="player__song">{{ trackList[currentTrack].title }}</h3>
        </div>
        <div id="waveform" class="player__sound-wave"></div>
        <div class="player__controls">
          <img
            @click="previousTrack"
            src="../assets/images/player/back.svg"
            alt=""
            class="player__button player__back"
          />
          <img
            src="../assets/images/player/play.svg"
            alt=""
            ref="playButton"
            @click="playTrack"
            class="player__button player__play"
          />
          <span
            @click="stopTrack"
            :class="['player__button', 'player__stop', { player__clicked: isClicked }]"
          ></span>
          <img
            @click="nextTrack"
            src="../assets/images/player/next.svg"
            alt=""
            class="player__button player__next"
          />
          <img
            src="../assets/images/player/sound.svg"
            alt=""
            class="player__button player__sound"
          />
        </div>
      </div>
    </div>
  </WindowFrame>
</template>

<script setup>
import { ref, defineProps, onBeforeUnmount, watch, onMounted } from 'vue'
import WaveSurfer from 'wavesurfer.js'
import WindowFrame from '@/components/WindowFrame.vue'

const wavesurfer = ref(null)
const isPlaying = ref(false)
const isClicked = ref(false)

const props = defineProps({
  selectedTrack: {
    type: Object,
    required: true
  }
})

watch(
  () => props.selectedTrack,
  (newTrack, oldTrack) => {
    if (newTrack && newTrack.src !== wavesurfer.value.getSrc()) {
      wavesurfer.value.load(newTrack.src)
      currentTrack.value = trackList.findIndex((track) => track.src === newTrack.src)
    }
  }
)
const trackList = [
  {
    band: 'Kavinsky',
    title: 'NightCall',
    image: '/my-portfolio/assets/audio/audio-images/Kavinsky-image.png',
    src: '/my-portfolio/assets/audio/kavinsky.mp3'
  },
  {
    band: 'Jimin',
    title: 'Alone',
    image: '/my-portfolio/assets/audio/audio-images/daughter-image.jpg',
    src: '/my-portfolio/assets/audio/alone.mp3'
  },
  {
    band: 'J. Koden',
    title: 'Get lucky',
    image: '/my-portfolio/assets/audio/audio-images/getlucky-image.jpg',
    src: '/my-portfolio/assets/audio/getlucky.mp3'
  }
]
const currentTrack = ref(0)

function playTrack() {
  wavesurfer.value.play()
  isPlaying.value = true
  isClicked.value = false
}

function stopTrack() {
  wavesurfer.value.pause()
  isPlaying.value = false
  isClicked.value = true
}

function nextTrack() {
  if (currentTrack.value === trackList.length - 1) {
    currentTrack.value = 0
    return
  }
  currentTrack.value++
  isPlaying.value = true
}

function previousTrack() {
  if (currentTrack.value === 0) {
    currentTrack.value = trackList.length - 1
    return
  }
  currentTrack.value--
}

watch(currentTrack, (newValue) => {
  wavesurfer.value.load(trackList[newValue].src)
})

onMounted(() => {
  try {
    wavesurfer.value = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#e210f1',
      progressColor: '#a1ffcd',
      height: 20,
      barWidth: 2,
      barHeight: 1,
      barGap: 1.5
    })
    wavesurfer.value.on('ready', () => {
      wavesurfer.value.play()
      isPlaying.value = true
    })
    currentTrack.value = trackList.findIndex((track) => track.src === props.selectedTrack.src)
    wavesurfer.value.load(trackList[currentTrack.value].src)
  } catch (error) {
    console.error('WaveSurfer initialization error:', error)
  }
})

onBeforeUnmount(() => {
  if (wavesurfer.value) {
    wavesurfer.value.destroy()
  }
})
</script>

<style scoped lang="scss">
.player {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  height: 170px;
  padding: 5px;

  @include breakpoints-up(small) {
    gap: 0;
    padding: 0;
  }

  &__image {
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 5px solid #e210f1;
    box-sizing: border-box;
  }

  &__img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    transition: transform 1.1s;
    cursor: url('../assets/images/hand-cursor3.svg'), auto;
  }

  &__close {
    position: absolute;
    cursor: url('../assets/images/hand-cursor3.svg'), auto;
    top: -30px;
    right: -9px;
    padding: 5px;
  }

  &__dots {
    width: 100%;
    position: absolute;
    top: -23px;
    display: flex;
    gap: 5px;
  }

  &__dot {
    width: 15px;
    height: 15px;
    background-color: #e54ee2ff;
    border: 3px solid #231d1d;
    border-radius: 50%;
  }

  &__song-info {
    font-family: 'IBM Plex Mono', sans-serif;
    display: flex;
    flex-direction: column;
    color: #5efc8d;
  }

  &__rotating {
    animation: rotation 13s infinite linear;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__controls > * {
    width: 30px;
  }

  &__clicked {
    background-color: #5efc8d;
  }

  &__button {
    &:hover {
      cursor: url('../assets/images/hand-cursor3.svg'), auto;
    }
  }

  &__play {
    &:hover {
      color: #e210f1;
    }
  }

  &__stop {
    width: 23px;
    height: 23px;
    border: 3px solid black;
    transition: background-color 0.3s ease;

    &:visited {
      background-color: #5efc8d;
    }

    &:focus {
      background-color: #5efc8d;
    }

    &:hover {
      background-color: #e210f1;
    }

    &:active {
      background-color: #5efc8d;
    }
  }

  &__sound-wave {
    width: 100%;
    height: 30px;
    margin-top: 20px;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
