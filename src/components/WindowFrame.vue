<template>
  <div class="frame">
    <div class="frame__top-line">
      <div class="frame__dots">
        <span class="frame__dot"></span>
        <span class="frame__dot"></span>
        <span class="frame__dot"></span>
      </div>

      <div @click="$emit('onClick')" class="frame__close">
        <img src="../assets/images/close.svg" alt="" class="frame__close-img" />
      </div>
    </div>

    <div class="frame__content"><slot /></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.frame {
  background-image: url('../assets/images/retro-bg2.jpg');
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  min-width: 320px;
  max-width: min(90vw, 660px);
  height: auto;

  @include breakpoints-up(small) {
    left: auto;
    min-width: 520px;
  }

  &__content {
    position: relative;
    overflow-y: auto;
    max-height: 85vh;

    @include breakpoints-up(small) {
      max-height: 90vh;
    }
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
