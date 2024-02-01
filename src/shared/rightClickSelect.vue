<template>
  <div :style="{ top: coordinates[1] + 'px', left: coordinates[0] + 'px' }" class="click-select">
    <div class="click-select__dots">
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
    </div>
    <ul class="click-select__list">
      <li class="click-select__list-item">Open</li>
      <li class="click-select__list-item">New</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  coordinates: {
    type: Array
  }
})
</script>

<style scoped lang="scss">
$x: v-bind(coordinates[0]);
$y: v-bind(coordinates[1]);

.click-select {
  position: fixed;
  top: $y;
  left: $x;
  z-index: 2;

  border: 5px solid rgb(229, 78, 226);
  border-top-width: 30px;
  background-color: white;
  width: 240px;
  height: 260px;

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
    background-color: rgb(229, 78, 226);
    border: 3px solid black;
    border-radius: 50%;
  }

  &__list {
    font-family: 'IBM Plex Mono', serif;
    color: black;

    &-item {
      font-size: 16px;
      padding: 0 10px 0 10px;
      border-bottom: 2px solid black;

      &::before {
        content: '\01F892';
        position: absolute;
        right: 8px;
        font-size: 36px;
      }

      &:hover {
        background-color: rgb(229, 78, 226, 0.2);
      }
    }
  }
}
</style>
