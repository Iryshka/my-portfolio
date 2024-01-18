<template>
  <div class="innerwindow">
    <slot />
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.innerwindow {
  position: relative;
  width: 85%;
  border: 10px solid rgb(229, 78, 226);
  background-color: rgba(0, 0, 0, 80%);
  height: 90dvh;
  font-size: 20px;

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
