<template>
  <div @click.stop="onNode" ref="node" class="node">
    <div class="node__wrapper">
      <p class="node__label">{{ label }}</p>
      <img
        class="node__img node__img-left"
        v-show="props.options && direction === 'left'"
        src="../assets/images/leftarrow.svg"
        alt=""
      />
      <img
        class="node__img node__img-right"
        v-show="props.options && direction === 'right'"
        src="../assets/images/rightarrow.svg"
        alt=""
      />
    </div>
    <ul v-if="isOptionDisplayed" :class="['node__list', direction]">
      <li v-for="option in parsedOptions" :key="option.label" class="node__item">
        <the-node
          @action="$emit('action')"
          :label="option.label"
          :options="option.options"
          :direction="direction"
          :action="option.action"
        />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, defineComponent, defineEmits } from 'vue'

const isOptionDisplayed = ref(false)

const node = ref(null)
const direction = ref('right')

//В зависимости от направления вставлять шеврон.
// Если нода содержит список, подставляем треуголтник.
// Если вправо, вправо и наоборот.
// При выборе конечной ноды, закрыть все списки. emits. Вернуть объект, на котором произошел клик.

defineComponent({
  name: 'TheNode'
})
const props = defineProps({
  label: {
    type: String,
    default: null
  },
  options: {
    type: Array
  },
  action: {
    type: Function
  }
})
const parsedOptions = computed(() => props.options ?? [])

onMounted(() => {
  setDirection()
})

const emit = defineEmits(['action'])

function setDirection() {
  const size = node.value.getBoundingClientRect()
  const isSpaceEnough = window.innerWidth - Math.floor(size.right)
  direction.value = isSpaceEnough >= 220 ? 'right' : 'left'
  console.log(direction)
}

function onNode() {
  console.log('onNode', props)
  if (props.action) {
    emit('action')
    console.log('click on action')
  } else {
    isOptionDisplayed.value = !isOptionDisplayed.value
  }
}
</script>

<style scoped lang="scss">
.node {
  position: relative;

  &__list {
    width: 100%;
    border: 5px solid #ff90ff;

    &.right {
      left: 100%;
      background-color: white;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &.left {
      right: 100%;
      position: absolute;
      top: 0;
      background-color: white;
    }
  }

  &__item {
    border-bottom: 2px solid black;

    &:hover {
      background-color: rgb(229, 78, 226, 0.2);
    }
  }
  &__wrapper {
    display: flex;
    padding: 0 7px;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    //display: block;
    width: 20px;
    height: 20px;
  }
}
</style>
