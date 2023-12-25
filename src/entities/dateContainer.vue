<script setup>
import DateComponent from '@/components/dateComponent.vue'
</script>

<template>
  <div class="innerbox">
    <date-component class="date" />
  </div>
</template>

<style scoped lang="scss">
.innerbox {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, 33px);
  grid-template-rows: repeat(auto-fill, 33px);
  width: 85%;
  border-style: solid;
  border-top-width: 10px;
  border-right-width: 10px;
  border-bottom-width: 10px;
  border-left-width: 10px;
  border-color: rgb(229, 78, 226);
  background-color: rgba(0, 0, 0, 80%);
  height: 90dvh;

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
