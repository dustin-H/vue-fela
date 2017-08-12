import StyleProvider from './StyleProvider.vue'
import { renderStyles, createRenderer } from './fela.js'

function plugin(Vue) {
  Vue.component('FelaProvider', StyleProvider)

  Vue.prototype.$renderStyles = felaBinder.renderStyles
}

export default function getPlugin(felaConfig) {
  createRenderer(felaConfig)
  return plugin
}
