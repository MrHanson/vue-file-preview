export function isString(variable) {
  return typeof variable === 'string'
}

export function isObject(variable) {
  return typeof variable === 'object'
}

export function isArray(obj) {
  return Array.isArray(obj)
}

export function isEqual(a, b) {
  return Object.is(a, b)
}
