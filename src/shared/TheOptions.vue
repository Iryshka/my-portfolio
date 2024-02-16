<template>
  <div :style="styles" ref="select" @click.stop class="click-select">
    <div class="click-select__dots">
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
      <span class="click-select__dot"></span>
    </div>

    <ul class="click-select__list">
      <li v-for="option in options" :key="option.label" class="click-select__list-item">
        <the-node :label="option.label" :options="option.options" :action="option.action" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import TheNode from '@/shared/TheNode.vue'

const props = defineProps({
  coordinates: {
    type: Array
  },
  pageWidth: {
    type: Number
  }
})
onMounted(() => {
  checkDirection()
})

function checkDirection() {}

const styles = reactive({
  top: props.coordinates[1] + 'px',
  left: props.coordinates[0] + 'px'
})

console.log(styles)
const options = reactive([
  {
    label: 'Create',
    options: [
      {
        label: 'Document',
        options: [
          {
            label: 'txt'
          },
          {
            label: 'pdf'
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
  width: 250px;
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
      cursor: pointer;

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

  //&__sublist {
  //  z-index: 3;
  //  background-color: red;
  //  width: 300px;
  //  position: absolute;
  //  top: 0;
  //  left: 100%;
  //}
}
</style>
