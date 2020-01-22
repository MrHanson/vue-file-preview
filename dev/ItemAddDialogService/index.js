import Vue from 'vue'
import Dialog from './Dialog'

function isPlainObject(value) {
  function isObjectLike(value) {
    return value !== null && typeof value === 'object'
  }
  function getTag(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(value)
  }

  if (!isObjectLike(value) || getTag(value) != '[object Object]') {
    return false
  }
  if (Object.getPrototypeOf(value) === null) {
    return true
  }
  let proto = value
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }
  return Object.getPrototypeOf(value) === proto
}

const DialogConstructor = Vue.extend(Dialog)

export default function(options) {
  const params = isPlainObject(options) ? options : {}

  const instance = new DialogConstructor({
    data: params
  })

  const vm = instance.$mount()
  document.body.append(vm.$el)

  // prop of el-dialog
  vm.visible = true

  return vm
}
