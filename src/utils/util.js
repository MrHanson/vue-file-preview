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
export function file2Uint8Arr(f, cb) {
  if (f instanceof File) {
    const reader = new FileReader()
    reader.onload = function(e) {
      if (cb) {
        cb(new Uint8Array(e.target.result))
      }
    }
    reader.readAsArrayBuffer(f)
  } else {
    console.error('expected get File')
  }
}

/**
 * @param {Object} obj
 * @return {Array<Object>} { name: 'xxx', content: Object }
 */
export function Obj2Arr(obj) {
  if (typeof obj !== 'object') {
    return []
  }

  const res = []
  for (const key in obj) {
    const item = obj[key]
    res.push({
      name: key,
      content: item
    })
  }
  return res
}

/**
 * @param {String} str
 * @return {Array}
 */
export function str2Arr(str) {
  if (typeof str !== 'string') {
    return []
  }

  return JSON.parse(str)
}

/**
 * @description generate alpha Array from A to Z by ASCII
 * @return {Array<string>} ['A','B','C'...]
 */
export function getAlphaArr() {
  // prettier-ignore
  return new Array(26).fill().map((_, index) => String.fromCharCode(index + 65))
}

/**
 * @description get alpha string index
 * @param {string} alpha
 * @param {Number} start
 * @return {Number}
 * @example input 'AA' output 27
 */
export function getAlphaIndex(alpha, start = 0) {
  if (typeof alpha !== 'string') {
    return 0
  }

  const target = alpha.slice(start)
  const charCode = target.charCodeAt(0)
  const res = charCode - 64
  if (charCode < 65 || charCode > 90) {
    return 0
  }
  if (alpha && alpha.length === 1) {
    return res
  }

  return res + getAlphaIndex(alpha.slice(start + 1))
}
