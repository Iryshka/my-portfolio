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
  background-image: url('../assets/images/retro-bg.jpg');
  position: absolute;
  left: 10px;
  top: 10px;
  background-size: cover;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  //width: 100%;
  min-width: 320px;
  max-width: min(90vw, 660px);
  min-height: 840px;
  // когда появляется скрол, исчезает верхняя панель
  //overflow: scroll;

  @include breakpoints-up(small) {
    top: 50px;
    left: auto;
    min-width: 620px;
    min-height: 940px;
  }

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
    //overflow: hidden;
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
}
</style>
