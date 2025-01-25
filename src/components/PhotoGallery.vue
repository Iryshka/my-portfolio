<template>
  <WindowFrame>
    <div class="photo__wrapper">
      <Transition name="bounce">
        <FullPhoto
          @onClick="closeFullPhoto"
          v-if="fullPhotoImageIndex !== null"
          :src="images[fullPhotoImageIndex].src"
          class="desktop-page__photo"
        />
      </Transition>
      <div
        @dblclick="() => showFullPhoto(index)"
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
import WindowFrame from '@/components/WindowFrame.vue'

const fullPhotoImageIndex = ref(null)

const images = [
  { src: '/my-portfolio/assets/images/image1.jpg' },
  { src: '/my-portfolio/assets/images/image3.jpg' },
  { src: '/my-portfolio/assets/images/image5.jpg' },
  { src: '/my-portfolio/assets/images/image4.jpg' },
  { src: '/my-portfolio/assets/images/image2.jpg' },
  { src: '/my-portfolio/assets/images/image6.jpg' }
]

const emit = defineEmits(['onImageClick'])

function showFullPhoto(imageIndex) {
  console.log({ imageIndex })
  fullPhotoImageIndex.value = imageIndex
}

function closeFullPhoto() {
  fullPhotoImageIndex.value = null
}
</script>
<style lang="scss" scoped>
.photo {
  &__wrapper {
    display: grid;
    gap: 5px;
    margin: 5px;

    @include breakpoints-up(small) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      margin: 10px;
    }
  }

  &__image {
    //width: 100%;
    height: 250px;
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
}
</style>
