import Vue from 'vue'
import Child from './Child'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globally.
[
  Child,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})
