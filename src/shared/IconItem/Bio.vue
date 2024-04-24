<template>
  <div class="bio">
    <div class="bio__dots">
      <span class="bio__dot"></span>
      <span class="bio__dot"></span>
      <span class="bio__dot"></span>
    </div>

    <div class="bio__info">
      <img src="@/assets/images/bio-photo.jfif" class="bio__img" alt="" />
      <article class="bio__text">
        <h2 class="bio__title">Hi there! 👋I'm Iryshka</h2>
        <p class="bio__desc">
          I'm a frontend developer with a keen interest in web development. Vue JS | JavaScript
          junkie
        </p>
      </article>
    </div>
    <aside class="bio__links">
      <img class="bio__link" src="@/assets/images/linkedin-image.svg" alt="" />
    </aside>
  </div>
</template>
<script setup></script>
<style scoped lang="scss">
.bio {
  position: fixed;
  margin: 10px;
  border: 5px solid #e54ee2ff;
  border-top-width: 30px;
  background-color: #231d1d;
  max-width: 600px;
  max-height: 440px;

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
    box-shadow: 0 0 0 12px #a1ffcd;
    width: 200px;
    height: 200px;
  }

  &__info {
    font-family: 'IBM Plex Mono', sans-serif;
    color: #e0d4d4;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 45px;
    margin: 35px;
  }

  &__title {
    font-size: 32px;
    margin-bottom: 10px;
  }

  &__links {
    display: flex;
    flex-direction: row;
  }

  &__link {
    width: 50px;
    height: 50px;
    z-index: 2;
  }
}
</style>
