<template>
  <div class="photo">
    <div class="photo__top-line">
      <div class="photo__dots">
        <span class="photo__dot"></span>
        <span class="photo__dot"></span>
        <span class="photo__dot"></span>
      </div>
      <div @click="$emit('onClick')" class="photo__close">
        <img src="../assets/images/close.svg" alt="" class="photo__close-img" />
      </div>
    </div>

    <slot />
  </div>
</template>

<script setup></script>
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
