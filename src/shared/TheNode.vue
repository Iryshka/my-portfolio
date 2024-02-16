<template>
  <div @click="onNode" class="node">
    <p class="node__label">{{ label }}</p>
    <ul v-if="isList" class="node__list">
      <li v-for="option in parsedOptions" :key="option.label" class="node__item">
        <the-node :label="option.label" :options="option.options" />
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

const isOptionDisplayed = ref(false)
const isList = computed(() => (parsedOptions.value.length ? isOptionDisplayed.value : true))

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

function onNode() {
  if (props.action) {
    // console.log('click on action')
    console.log(props.pageWidth)
  } else {
    isOptionDisplayed.value = !isOptionDisplayed.value
  }
}
</script>

<style scoped lang="scss">
.node__list {
  width: 100%;
  background-color: red;

  &-right {
    right: 100%;
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
