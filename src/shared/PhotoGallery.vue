<template>
  <WindowFrame>
    <div class="photo__wrapper">
      <div
        @click="handleImageClick(image)"
        v-for="(image, index) in images"
        :key="index"
        :class="['photo__image', { 'photo__image--border': index % 2 === 1 }]"
      >
        <img :src="image.src" alt="" class="photo__img" />
      </div>
    </div>
  </WindowFrame>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import WindowFrame from '@/shared/WindowFrame.vue'

const images = ref([
  { src: 'src/assets/images/image1.jpg' },
  { src: 'src/assets/images/image3.jpg' },
  { src: 'src/assets/images/image5.jpg' },
  { src: 'src/assets/images/image4.jpg' },
  { src: 'src/assets/images/image2.jpg' },
  { src: 'src/assets/images/image6.jpg' }
])

const emit = defineEmits(['onImageClick'])

function handleImageClick(image) {
  emit('onImageClick', image.src)
}
</script>
<style lang="scss" scoped>
.photo {
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
  max-width: 600px;
  max-height: 440px;

  &__wrapper {
    display: flex;
    gap: 15px;
    margin: 15px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  &__image {
    width: 170px;
    height: 170px;
    overflow: hidden;
    box-sizing: border-box;
    border: 5px solid greenyellow;

    &:hover .photo__img {
      transform: scale(1.2);
    }
  }

  &__image--border {
    border-color: #5efc8d;
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

  //&:hover {
  //  cursor: url('../assets/images/hand-cursor3.svg'), auto;
  //}
}
</style>
