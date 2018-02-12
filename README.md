# Deprecated!

This project has not been maintained for a while. Matthew Wagerfield created a new and more advanced version which has been published with the same name: https://github.com/wagerfield/vue-fela.

If you want to use the old version just install `vue-fela@0.0.4`.

# vue-fela

[![npm](https://img.shields.io/npm/v/vue-fela.svg)](https://www.npmjs.com/package/vue-fela) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> Fela bindings for vue

## Installation

```bash
npm install --save vue-fela
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import { getFelaPlugin } from 'vue-fela'

const felaConfig = {
  /* ... */
}

Vue.use(getFelaPlugin(felaConfig))
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vue-fela/dist/vue-fela.css"></link>
<script src="vue-fela/dist/vue-fela.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vue-fela/dist/vue-fela.css"></link>
<script src="https://unpkg.com/vue-fela"></script>
```

### Usage in component

`index.vue`

```vue
<template>
<div :class="styles.box">
  Some Stuff
</div>
</template>

<script>
import { renderStyles } from 'vue-fela'
import styles from './style.js'

export default {
  computed: {
    styles: renderStyles(styles)
  }
}
</script>
```

`style.js`

```js

var styles = {
  box: {
    display: 'block',
    textAlign: 'left',
    fontFamily: 'Helvetica',
    fontWeight: 600,
    fontSize: 32,
    color: 'black',
    marginTop: 10
  }
}

export default styles

```

### Nuxt Server rendering

Just use the `<fela-provider/>` component at the end of rendering.

In nuxtjs I personally use it in the layouts:

`layouts/default.vue`

```vue
<template>
  <div>
    <nuxt/>
    <fela-provider/>
  </div>
</template>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
