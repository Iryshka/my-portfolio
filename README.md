# .

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

1. Создаем в компоненте theOptions флаг direction(null)
который отвечает за направление вложенных списков theNode.
2. в theNode идет пропс direction, который принимает 2 аргумента right left нал
3. Создавть функцию в onMOunted для высчитывания right left , она выполнится 1 раз
4. Она проверяет может ли открыться одна нода вправо, если не может, то возвращает left и наоборот.
5. Если может и туда и туда, то вправо.
6. в theNode проверка onMounted. Если нода открывашаяся по рассмотянию вписывается в пустое место, 
то меняю direction на противоположное emitом.
   function getNumberOfLongestNestedList(options) {
   let maxCount = 0;

function countRecursevly(options, count = 0) {
if (options.length) {
options.forEach((option) => {
if (!option.options) {
if (maxCount < count) {
maxCount = count;
}
} else {
countRecursevly(option.options, count + 1);
}
});
}
}
}
