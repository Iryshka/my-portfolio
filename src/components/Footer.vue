<template>
  <footer class="footer">
    <div class="footer__images">
      <img class="footer__img" src="../assets/images/desktop-icons/bluetooth2.svg" alt="" />
      <img class="footer__img" src="../assets/images/desktop-icons/wifi2.svg" alt="" />
      <img class="footer__img" src="../assets/images/desktop-icons/sound.svg" alt="" />
    </div>
    <DateComponent />
  </footer>
</template>
<script setup>
import DateComponent from '@/components/DateComponent.vue'
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;

  &__images {
    display: flex;
    gap: 5px;
  }

  &__img {
    width: 25px;
    height: 25px;
  }
}
</style>
