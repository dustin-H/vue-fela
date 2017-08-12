
import { createRenderer } from 'fela'
import { render } from 'fela-dom'

export const isServer = typeof window === 'undefined'
export const isClient = !isServer

var resetRendering = true
var renderedString = null
var alreadyRenderedInClient = false
var renderer = null

export function createRenderer(felaConfig) {
  renderer = createRenderer(felaConfig)
}

export function renderToString() {
  if (isServer) {
    if (resetRendering !== true) {
      renderedString = renderer.renderToString()
    }
    resetRendering = true
    return renderedString
  } else {
    if (alreadyRenderedInClient !== true) {
      alreadyRenderedInClient = true
      const mountNode = document.createElement('style')
      document.head.appendChild(mountNode)
      render(renderer, mountNode)
    }
    return ''
  }

}

export function renderStyles(rules) {
  return function render() {
    if (resetRendering === true && isServer) {
      renderer = createRenderer(felaConfig)
      resetRendering = false
    }

    var styles = {}
    for (var i in rules) {
      var fn = rules[i]
      if (typeof rules[i] !== 'function') {
        fn = () => {
          return rules[i]
        }
      }
      styles[i] = renderer.renderRule(fn.bind(this), this)
    }
    return styles;
  };
}
