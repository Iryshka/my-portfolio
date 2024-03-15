<template>
  <div :style="styles" @click.stop class="click-select">
    <div class="click-select__dots">
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
    </div>

    <ul class="click-select__list">
      <li v-for="option in options" :key="option.label" class="click-select__list-item">
        <the-node
          @action="$emit('action')"
          :label="option.label"
          :options="option.options"
          :action="option.action"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineEmits, reactive } from 'vue'
import TheNode from '@/shared/TheNode.vue'

const props = defineProps({
  coordinates: {
    type: Array
  },
  pageWidth: {
    type: Number
  }
})

const styles = reactive({
  top: props.coordinates[1] + 'px',
  left: props.coordinates[0] + 'px'
})

console.log(props.coordinates[0], props.coordinates[1])

defineEmits(['action'])

// TODO: вынести options в desktop
const options = reactive([
  {
    label: 'Create',
    options: [
      {
        label: 'Document',
        options: [
          {
            label: 'txt',
            action: () => console.log('create txt file')
          },
          {
            label: 'pdf',
            action: () => console.log('create pdf file')
          }
        ]
      },
      {
        label: 'Folder'
      }
    ]
  },
  {
    label: 'Open',
    action: () => console.log('open')
  }
])

// const x = computed(() => props.coordinates[0] + 'px')
// const y = computed(() => props.coordinates[1] + 'px')
</script>

<style scoped lang="scss">
//$x: v-bind(x);
//$y: v-bind(y);

.click-select {
  position: fixed;
  //top: $y;
  //left: $x;
  z-index: 2;

  border: 5px solid rgb(229, 78, 226);
  border-top-width: 30px;
  background-color: white;
  width: 210px;
  height: 240px;

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
      border-bottom: 2px solid black;
      cursor: pointer;

      &:hover {
        background-color: rgb(229, 78, 226, 0.2);
      }
    }
  }
}
</style>
