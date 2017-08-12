<template>
  <style>{{styleString}}</style>
</template>

<script>
import { renderToString, isServer } from './fela.js'

export default {
  data() {
    return {isServer: isServer}
  },
  computed: {
    styleString: renderToString
  }
}
</script>
