<template>
  <div @click.stop="onNode" ref="node" class="node">
    <div class="node__wrapper">
      <p class="node__label">{{ label }}</p>
      <img
        class="node__img node__img-left"
        v-show="props.options && props.direction === 'left'"
        src="../assets/images/leftarrow.svg"
        alt=""
      />
      <img
        class="node__img node__img-right"
        v-show="props.options && props.direction === 'right'"
        src="../assets/images/rightarrow.svg"
        alt=""
      />
    </div>
    <ul v-if="isOptionDisplayed" :class="[props.direction, { node__list: parsedOptions.length }]">
      <li v-for="option in parsedOptions" :key="option.label" class="node__item">
        <the-node
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
import { ref, computed, defineComponent } from 'vue'

const isOptionDisplayed = ref(false)
const node = ref(null)

defineComponent({
  name: 'TheNode'
})

const props = defineProps({
  label: {
    type: String,
    default: null
  },
  direction: {
    type: String,
    default: 'right'
  },
  options: {
    type: Array
  },
  action: {
    type: Function
  }
})

const parsedOptions = computed(() => props.options ?? [])

// const emit = defineEmits(['action'])

function onNode() {
  if (props.action) {
    props.action()
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
    border: 5px solid rgb(229, 78, 226);

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
    width: 20px;
    height: 20px;
  }
}
</style>
