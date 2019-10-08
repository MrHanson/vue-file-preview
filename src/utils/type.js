export function isString(variable) {
  return typeof variable === 'string'
}

export function isObject(variable) {
  const type = typeof variable
  return variable != null && (type === 'object' || type === 'function')
}

export function isFunction(variable) {
  if (!isObject(variable)) {
    return false
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = getTag(variable)
  return (
    tag == '[object Function]' ||
    tag == '[object AsyncFunction]' ||
    tag == '[object GeneratorFunction]' ||
    tag == '[object Proxy]'
  )
}

export function isArray(obj) {
  return Array.isArray(obj)
}

export function isEqual(a, b) {
  return Object.is(a, b)
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}
