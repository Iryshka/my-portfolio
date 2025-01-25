<template>
  <div class="typewriter"><slot /></div>
</template>

<script setup></script>

<style scoped lang="scss">
.typewriter {
  font-family: monospace;
  overflow: hidden;
  border-right: 0.15em solid orange;
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: 0.25em;
  animation:
    typing 3.5s steps(30, end),
    blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #e210f1;
  }
}
</style>
