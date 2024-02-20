<template>
  <div @click="onNode" ref="node" class="node">
    <p class="node__label">{{ label }}</p>
    <ul
      v-if="isList"
      :class="[
        direction === 'right' ? 'node__list node__list-right' : 'node__list node__list-left'
      ]"
    >
      <li v-for="option in parsedOptions" :key="option.label" class="node__item">
        <the-node :label="option.label" :options="option.options" :direction="direction" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue'

const isOptionDisplayed = ref(false)
const isList = computed(() => (parsedOptions.value.length ? isOptionDisplayed.value : true))
const node = ref(null)
const left = ref('0px')
const right = ref('0px')

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

defineOptions({
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
  pageWidth: {
    type: Number
  },
  direction: {
    type: String,
    validator: (value) => ['right', 'left'].includes(value)
  }
})
const parsedOptions = computed(() => props.options ?? [])

onMounted(() => {
  checkDirection()
})
function checkDirection() {
  const size = node.value.getBoundingClientRect()
  left.value = -1 * Math.floor(size.left) + 'px'
  right.value = -1 * Math.floor(size.right) + 'px'
  const isSpaceEnough = window.innerWidth - Math.floor(size.right) + 240 > 0
  console.log(window.innerWidth, Math.floor(size.right), isSpaceEnough)
  console.log('size', size)

  console.log('right', right.value, 'left', left.value)
}

function onNode(event) {
  const clickX = event.clientX
  // const clickY = event.clientY
  const nodeWidth = 300
  const widthToEnd = window.innerWidth - clickX - nodeWidth
  console.log(widthToEnd)

  if (props.action) {
    console.log('click on action')
  } else {
    isOptionDisplayed.value = !isOptionDisplayed.value
  }
}
</script>

<style scoped lang="scss">
$left: v-bind(left);
$right: v-bind(right);

.node__list {
  position: relative;
  width: 100%;
  background-color: red;
  padding: 0 10px;

  &::after {
    content: '';
    width: 50px;
    height: 50px;
    background-color: red;
    position: absolute;
    left: $left;
  }

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    background-color: green;
    position: absolute;
    right: $right;
  }

  &-right {
    left: 100%;
    background-color: blue;
    position: absolute;
    top: 0;
  }

  &-left {
    left: 100%;
    position: absolute;
    top: 0;
  }
}
</style>
