<template>
  <WindowFrame>
    <div class="cv">
      <article class="cv__info">
        <h2 class="cv__title">Irina Kalinina</h2>
        <h2 class="cv__subtitle">Frontend Developer</h2>
        <ul class="cv__contacts">
          <li class="cv__contacts-item">
            <a href="https://www.linkedin.com/in/irina-k-294534268/" class="cv__contacts-link">
              <img src="../assets/images/cv/linkedin2.svg" alt="" class="cv__contacts-img" />
              <span class="cv__contacts-name">Linkedin</span>
            </a>
          </li>
          <li class="cv__contacts-item">
            <a href="https://github.com/Iryshka" class="cv__contacts-link">
              <img src="../assets/images/cv/github2.svg" alt="" class="cv__contacts-img" />
              <span class="cv__contacts-name">Github</span>
            </a>
          </li>
          <li class="cv__contacts-item">
            <a href="https://web.telegram.org/k/#-1580893434" class="cv__contacts-link">
              <img src="../assets/images/cv/telegram2.svg" alt="" class="cv__contacts-img" />
              <span class="cv__contacts-name">Telegram</span>
            </a>
          </li>

          <li class="cv__contacts-item">
            <a
              href="/assets/file-sample.docx"
              download="file-sample.docx"
              class="cv__contacts-link"
            >
              <img src="../assets/images/cv/download.svg" alt="" class="cv__contacts-img" />
              <span class="cv__contacts-name">CV</span>
            </a>
          </li>
        </ul>

        <div class="cv__experience">
          <h3 class="cv__summary">Summary</h3>
          <p class="cv__summary-description">
            I'm a Frontend Developer with 3+ years of experience, main focus on React and Next JS
            and solid knowledge of JavaScript foundation. My work combines the development of
            dynamic and user-friendly web applications with a strong logical approach and commitment
            to crafting pixel-perfect designs. I’m ready to contribute my skills to projects that
            demand both a logical mindset and an eye for precision.
          </p>
          <h3 class="cv__work">Work experience</h3>
          <h4 class="cv__work-position">Frontend Developer</h4>
          <a href="https://incollet.com/" class="cv__work-title">COLLET</a>
          <div class="cv__work-description">
            <img src="../assets/images/cv/bullet.svg" alt="" class="cv__work-bullet-point" />
            <div class="cv__feature">
              <h4 class="cv__feature-title">New features development</h4>
              <p class="cv__feature-description">
                I’m responsible for implementing new functionalities and features and modifying the
                existing ones.
              </p>
            </div>
          </div>
          <div class="cv__work-description">
            <img src="../assets/images/cv/bullet.svg" alt="" class="cv__work-bullet-point" />
            <div class="cv__feature">
              <h4 class="cv__feature-title">Cross-browser and responsive web development</h4>
              <p class="cv__feature-description">
                This involves considering factors like usability, accessibility, and responsiveness
                across different devices and screen sizes.
              </p>
            </div>
          </div>
          <div class="cv__work-description">
            <img src="/assets/images/cv/bullet.svg" alt="" class="cv__work-bullet-point" />
            <div class="cv__feature">
              <h4 class="cv__feature-title">Refactoring of existing code</h4>
              <p class="cv__feature-description">
                I conduct code refactoring, improving code quality, readability, and maintainability
                in components, optimize codebase for enhanced performance and addressed potential
                compatibility issues.
              </p>
            </div>
          </div>
        </div>
      </article>
      <aside class="cv__add-info">
        <h4 class="cv__add-info-title">Technical Skills</h4>
        <ul class="cv__list">
          <li class="cv__list-item">
            <img src="/assets/images/cv/js.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">JavaScript</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/react.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">React</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/redux.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Redux Toolkit</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/vue.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Vue 3</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/pinia.png" alt="" class="cv__list-img" />
            <p class="cv__list-title">Pinia</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/nodejs.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Node JS</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/vite.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Vite</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/ts.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">TypeScript</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/tailwind.png" alt="" class="cv__list-img" />
            <p class="cv__list-title">Tailwind</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/sass.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Preprocessors</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/css.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">CSS-in-JS</p>
          </li>
          <li class="cv__list-item">
            <img src="/assets/images/cv/storybook.svg" alt="" class="cv__list-img" />
            <p class="cv__list-title">Storybook</p>
          </li>
        </ul>
      </aside>
    </div>
  </WindowFrame>
</template>
<style scoped lang="scss">
.cv {
  font-family: 'IBM Plex Mono', serif;
  font-size: 15px;
  line-height: 1.9;
  padding: 10px;
  color: #d5d2d2;
  height: 100%;
  background: rgba(72, 8, 150, 0.4);

  &__title {
    font-size: 28px;
  }

  &__work-bullet-point {
    width: 15px;
    background-color: #e210f1;
  }

  &__contacts {
    margin: 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }

  &__contacts-link {
    display: flex;
    gap: 10px;
    font-size: 14px;
    color: #d5d2d2;
    text-decoration: none;
  }

  &__summary {
    font-size: 20px;
    margin-bottom: 15px;
  }

  &__work {
    font-size: 20px;
    margin-top: 20px;

    &-title {
      cursor: url('../assets/images/hand-cursor3.svg'), auto;
      color: white;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s ease;
    }

    &-title:hover {
      color: #e210f1;
    }
  }

  &__work-description {
    margin-top: 15px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  &__add-info-title {
    font-size: 24px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    @include breakpoints-up(small) {
      grid-template-columns: 1fr 1fr;
    }
  }

  &__list-item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  &__list-img {
    width: 20px;
  }
}
</style>
<script setup>
import WindowFrame from '@/components/WindowFrame.vue'
</script>
