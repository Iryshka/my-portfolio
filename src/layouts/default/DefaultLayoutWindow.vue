<template>
  <div class="innerwindow">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.innerwindow {
  position: relative;
  width: 95%;
  border: 10px solid #e54ee2ff;
  border-bottom: 35px solid #e54ee2ff;
  background-color: #5efc8d;
  height: 95dvh;
  font-size: 20px;

  @include breakpoints-up(small) {
    width: 85%;
    height: 90dvh;
  }
  .date {
    position: absolute;
    top: -7px;
    font-family: 'IBM Plex Mono', serif;
    font-weight: 600;
    color: #282828;
    padding-top: 10px;
    background-color: rgb(229, 78, 226);
    width: 100%;
    height: 65px;
    font-size: 22px;
  }
}
</style>
