<template>
  <div @click="onNode" ref="node" class="node">
    <p class="node__label">{{ label }}</p>
    <ul
      v-if="isList"
      class="node__list"
      :class="[rightOrLeft === 'right' ? 'node__list-right' : 'node__list-left']"
    >
      <li v-for="option in parsedOptions" :key="option.label" class="node__item">
        <the-node :label="option.label" :options="option.options" :direction="direction" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed, onMounted, defineComponent } from 'vue'

const isOptionDisplayed = ref(false)
const isList = computed(() => (parsedOptions.value.length ? isOptionDisplayed.value : true))
const node = ref(null)
const rightOrLeft = ref('right')

// const left = ref('0px')
// const right = ref('0px')

// чтобы открывать ноду справа или слева надо в ноду передавать пропс direction.
// От него будет рендериться нода справа или слева.
// 1. создать пропс direction в TheNode
// 2. на хук onMounted повесить функцию вычисления direction. Direction передаем пропсом.
// 3. В функции по умолчанию проверяем можем ли мы открыть в правую сторону. еСТЬ ЛИ У НАС МЕСТО ДЛЯ НОВОЙ НОДЫ.
// 4. Если места нет, возвращаем left

// Разработка функции.
// 1. Высчитываем расстояние от правой границы ноды до правой границы нашей всей страницы.
// 2. расстояние от правой границы нашей всей страницы до правой границы розового окна.
// 3. Высчитать разницу между этими величинами.
// (Разница между этими величинами 1,2 должна быть >= 300 px (нужно ли добавлять ширину опций?))
// 4.

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
  },
  direction: {
    type: String,
    validator: (value) => ['right', 'left'].includes(value)
  }
})
const parsedOptions = computed(() => props.options ?? [])

onMounted(() => {
  rightOrLeft.value = checkDirection()
})
function checkDirection() {
  const size = node.value.getBoundingClientRect()
  const isSpaceEnough = window.innerWidth - Math.floor(size.right)

  return isSpaceEnough >= 220 ? 'right' : 'left'
}

function onNode() {
  if (props.action) {
    console.log('click on action')
  } else {
    isOptionDisplayed.value = !isOptionDisplayed.value
  }
}
</script>

<style scoped lang="scss">
.node__list {
  position: relative;
  width: 100%;
  background-color: red;
  padding: 0 10px;

  &-right {
    left: 100%;
    background-color: pink;
    position: absolute;
    top: 0;
  }

  &-left {
    right: 100%;
    position: absolute;
    top: 0;
    background-color: yellow;
  }
}
</style>
