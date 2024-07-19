<template>
  <WindowFrame>
    <div class="music__wrapper">
      <div v-for="(track, index) in trackList" :key="index" class="music__image">
        <img
          @dblclick="handleTrackClick(track)"
          src="../assets/images/desktop-icons/music-file.svg"
          alt=""
          class="music__img"
        />
        <p class="music__band">{{ track.band }}</p>
        <p class="music__title">{{ track.title }}</p>
      </div>
    </div>
  </WindowFrame>
</template>

<script setup>
import { defineEmits } from 'vue'
import WindowFrame from '@/shared/WindowFrame.vue'

const trackList = [
  {
    band: 'Kavinsky',
    title: 'NightCall',
    image: 'src/assets/audio/audio-images/Kavinsky-image.png',
    src: 'src/assets/audio/kavinsky.mp3'
  },
  {
    band: 'Jimin',
    title: 'Alone',
    image: 'src/assets/audio/audio-images/daughter-image.jpg',
    src: 'src/assets/audio/alone.mp3'
  },
  {
    band: 'Daughter',
    title: 'Get lucky',
    image: 'src/assets/audio/audio-images/getlucky-image.jpg',
    src: 'src/assets/audio/getlucky.mp3'
  }
]

const emits = defineEmits(['onTrackClick'])

function handleTrackClick(track) {
  emits('onTrackClick', track)
}
</script>
<style lang="scss" scoped>
.music {
  position: fixed;
  //background-color: #282828;
  background: linear-gradient(
      177deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(2, 2, 6, 0.9) 75%,
      rgba(219, 14, 208, 0.5) 100%
    ),
    url('../assets/images/retro-bg.jpg');
  background-size: cover;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  width: 600px;
  height: 440px;
  max-width: 500px;
  max-height: 340px;

  &__wrapper {
    display: flex;
    gap: 15px;
    margin: 15px;
    align-items: start;
    flex-wrap: wrap;
  }

  &__image {
    width: 70px;
    text-align: center;
    overflow: hidden;
    box-sizing: border-box;

    &:hover .music__img {
      transform: scale(1.2);
    }
  }

  &__image--border {
    border-color: #5efc8d;
  }

  &__img {
    margin-bottom: -10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1.1s;
    cursor: url('../assets/images/hand-cursor3.svg'), auto;
  }

  &__band,
  &__title {
    font-family: 'IBM Plex Mono', serif;
    font-size: 12px;
    padding: 0;
    margin-bottom: -10px;
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

  //&:hover {
  //  cursor: url('../assets/images/hand-cursor3.svg'), auto;
  //}
}
</style>
