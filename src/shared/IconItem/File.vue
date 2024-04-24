<template>
  <div class="file">
    <svg
      width="60"
      height="60"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="page.block">
        <g id="page.fill">
          <path d="M72 4H4V124H96V28H72V4Z" fill="black" />
          <path d="M80 4H76V24H96V20H92V16H88V12H84V8H80V4Z" fill="#FFFF50" />
        </g>
        <g id="page.outline">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H80V4H76V24H96V20H100V104H112V108H120V112H128V128H0V0ZM96 28H72V4H4V124H96V28Z"
            fill="black"
          />
          <path d="M92 16H96V20H92V16Z" fill="black" />
          <path d="M88 12H92V16H88V12Z" fill="black" />
          <path d="M84 8H88V12H84V8Z" fill="black" />
          <path d="M84 8V4H80V8H84Z" fill="black" />
        </g>
      </g>
    </svg>
    <input
      v-click-outside="exitEditMode"
      @keyup.enter="exitEditMode"
      v-model="title"
      v-if="isEditMode"
      type="text"
    />
    <p v-else @dblclick="changeTitle" class="file__title">{{ title }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('document')
const isEditMode = ref(false)
function changeTitle() {
  isEditMode.value = true
}

function exitEditMode() {
  console.log('click outside')
  isEditMode.value = false
}
</script>

<style scoped lang="scss">
.file {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__title {
    font-size: 14px;
    color: black;
    font-weight: bold;
  }
}
</style>
