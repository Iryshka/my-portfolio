<template>
  <div class="player">
    <div class="player__top-line">
      <div class="player__dots">
        <span class="player__dot"></span>
        <span class="player__dot"></span>
        <span class="player__dot"></span>
      </div>
      <div @click="$emit('onClick')" class="player__close">
        <img src="../assets/images/close.svg" alt="" class="player__close-img" />
      </div>
    </div>
    <div class="player__wrapper">
      <div class="player__image">
        <img src="../assets/images/player/Image.svg" alt="" class="player__song-icon" />
      </div>
      <div class="player__song-info">
        <div class="player__song-info-wrapper">
          <h3 class="player__band">Black Parade</h3>
          <h3 class="player__song">Morning Star</h3>
        </div>
        <div id="waveform" class="player__sound-wave"></div>
        <div class="player__controls">
          <img src="../assets/images/player/back.svg" alt="" class="player__back" />
          <img
            src="../assets/images/player/play.svg"
            alt=""
            ref="playButton"
            @click="playTrack"
            class="player__play"
          />
          <span @click="stopTrack" class="player__stop"></span>
          <img src="../assets/images/player/next.svg" alt="" class="player__next" />
          <img src="../assets/images/player/sound.svg" alt="" class="player__sound" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import WaveSurfer from 'wavesurfer.js'

const wavesurfer = ref(null)

function playTrack() {
  wavesurfer.value.play()
}

function stopTrack() {
  wavesurfer.value.pause()
}

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

    wavesurfer.value.load('src/assets/audio/kavinsky.mp3')
    console.log('WaveSurfer initialized successfully')
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
  position: fixed;
  top: 50px;
  background-color: #363232;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  height: 200px;
  width: 400px;

  &__image {
    width: 110px;
    height: 110px;
    box-sizing: border-box;
  }

  &__img {
    width: 100%;
    height: 100%;
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

  &__wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    height: 100%;
  }

  &__song-info {
    display: flex;
    flex-direction: column;
  }

  &__stop {
    width: 23px;
    border: 3px solid black;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__controls > * {
    width: 30px;
  }

  &__stop {
    width: 26px;
    height: 26px;
  }

  &__sound-wave {
    width: 100%;
    height: 30px;
    margin-top: 20px;
  }
}
</style>
