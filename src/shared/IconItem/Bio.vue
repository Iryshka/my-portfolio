<template>
  <WindowFrame>
    <div class="bio__info">
      <img src="@/assets/images/bio-photo.jfif" class="bio__img" alt="" />
      <article class="bio__text">
        <AnimatedText><h2>Hi there!</h2> </AnimatedText>
        <AnimatedText>
          <h2>I'm Iryshka</h2>
        </AnimatedText>
        <p class="bio__desc">
          I'm a frontend developer with a keen interest in web development. Vue JS | JavaScript
          junkie
        </p>
      </article>
    </div>
    <aside class="bio__links">
      <div class="bio__linkedin">
        <a href="https://www.linkedin.com/in/irina-k-294534268/" target="_blank" class="bio__link">
          <img class="bio__social-img" src="../../assets/images/linkedin-image.svg" alt="" />
          <p class="bio__linkedin-p">linkedin</p>
        </a>
      </div>
      <div class="bio__github">
        <a href="https://github.com/Iryshka" target="_blank" class="bio__link">
          <img class="bio__social-img" src="../../assets/images/github-image.svg" alt="" />
          <p class="bio__linkedin-p">github</p>
        </a>
      </div>
      <div class="bio__telegram">
        <a href="https://desktop.telegram.org/" target="_blank" class="bio__link">
          <img class="bio__social-img" src="../../assets/images/telegram-image.svg" alt="" />
          <p class="bio__linkedin-p">telegram</p>
        </a>
      </div>
    </aside>
  </WindowFrame>
</template>
<script setup>
import WindowFrame from '@/shared/WindowFrame.vue'
import AnimatedText from '@/shared/IconItem/ui/AnimatedText.vue'
</script>
<style scoped lang="scss">
.bio {
  background: linear-gradient(
      177deg,
      rgba(2, 0, 36, 0.5) 0%,
      rgba(2, 2, 6, 0.9) 75%,
      rgba(219, 14, 208, 0.5) 100%
    ),
    url('../../assets/images/retro-bg2.jpg');
  //background-image: url('../../assets/images/retro-bg2.jpg');

  background-size: cover;
  position: fixed;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  //background-color: #231d1d;
  box-shadow: 7px 10px 0 0 rgba(35, 29, 29, 100);
  max-width: 600px;
  max-height: 440px;

  &__close-img {
    position: absolute;
    top: -30px;
    right: -9px;
    padding: 5px;
  }

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
    background-color: #e54ee2ff;
    border: 3px solid #231d1d;
    border-radius: 50%;
  }

  &__img {
    border: 15px solid #e54ee2ff;
    box-shadow: 0 0 0 12px #5efc8d;
    width: 200px;
    height: 200px;
  }

  &__info {
    font-family: 'IBM Plex Mono', serif;
    line-height: 1.5;
    color: #e0d4d4;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 45px;
    margin: 35px;
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 100%;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 10px;
    line-height: 1.3;
  }

  &__links {
    display: flex;
    flex-direction: row;
    gap: 70px;
    margin: 0 0 10px 30px;
  }

  &__social-img {
    width: 25px;
    height: 25px;
    z-index: 2;
  }

  &__link {
    cursor: url('../../assets/images/hand-cursor3.svg'), auto;
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: 'IBM Plex Mono', serif;
    font-size: 14px;
    color: #c4c4c4;
    text-decoration: navajowhite;
    transition: color 0.3s ease;

    &:hover {
      color: #e54ee2ff;
    }
  }
}
</style>
