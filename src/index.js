import StyleProvider from './StyleProvider.vue'
import { renderFelaStyles, createFelaRenderer } from './fela.js'

function plugin(Vue) {
  Vue.component('FelaProvider', StyleProvider)
}

export function getFelaPlugin(felaConfig) {
  createFelaRenderer(felaConfig)
  return {install: plugin}
}

export function renderStyles(rules) {
  return renderFelaStyles(rules)
}
