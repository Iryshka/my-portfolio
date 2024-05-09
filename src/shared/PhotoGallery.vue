<template>
  <div class="photo">
    <div class="photo__top-line">
      <div class="photo__dots">
        <span class="photo__dot"></span>
        <span class="photo__dot"></span>
        <span class="photo__dot"></span>
      </div>
      <div class="photo__image">
        <img src="@/assets/images/retro-bg.jpg" alt="" class="photo__img" />
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.photo {
  position: relative;
  background-color: #282828;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  width: 400px;
  height: 400px;
  max-width: 600px;
  max-height: 440px;

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

  &__img {
    width: 100px;
    height: 100px;
  }
}
</style>
