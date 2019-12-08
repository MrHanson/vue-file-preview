/**
 * @param {String} str
 * @return {Boolean}
 */
export function isHttpUrl(str) {
  return new RegExp(
    /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/
  ).test(str)
}

/**
 * @param {File} f
 * @param {Function} cb
 * @return {Uint8Array}
 */
export function file2Uint8Arr(f) {
  return new Promise((resolve, reject) => {
    if (f instanceof File) {
      const reader = new FileReader()
      reader.onload = function(e) {
        resolve(new Uint8Array(e.target.result))
      }
      reader.readAsArrayBuffer(f)
    } else {
      reject(
        `[file-preview] expected File but get ${toString.call(
          Object.getPrototypeOf(f)
        )}`
      )
    }
  })
}

/**
 * @description copy from lodash
 * @param {*} value
 * @return {boolean}
 */
export function isPlainObject(value) {
  function isObjectLike(value) {
    return typeof value === 'object' && value !== null
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

/**
 * @param {Object} obj
 * @return {Array<Object>} { name: 'xxx', content: Object }
 */
export function Obj2Arr(obj) {
  if (!isPlainObject(obj)) {
    return []
  }

  const res = []
  for (const key in obj) {
    res.push({
      name: key,
      content: obj[key]
    })
  }
  return res
}

/**
 * @description generate alpha Array from A to Z by ASCII
 * @return {Array<string>} ['A','B','C'...]
 */
export function getAlphaArr(startIndex = 0, endIndex = 25) {
  return new Array(endIndex - startIndex + 1)
    .fill()
    .map((_, index) => String.fromCharCode(index + startIndex + 65))
}

/**
 * @description get alpha string index
 * @param {string} alpha
 * @param {Number} start
 * @return {Number}
 * @example
 *  input 'A' output 0;
 *  input 'AA' output 26;
 *  input 'a' output -1
 */
export function getAlphaIndex(alpha, start = 0) {
  if (typeof alpha !== 'string') {
    return -1
  }

  const charCode = alpha.charCodeAt(0)
  const res = charCode - 65
  if (charCode < 65 || charCode > 90) {
    return -1
  }
  if (alpha && alpha.length === 1) {
    return res
  }

  return res + getAlphaIndex(alpha.slice(start + 1))
}
