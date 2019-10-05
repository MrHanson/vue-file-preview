// prettier-ignore
import {isString, isObject, isArray, isEqual } from '@/utils/type'

describe('type vertification', () => {
  it('isString', () => {
    const ori = 'abc'
    expect(isString(ori)).toBe(true)
  })

  it('isObject', () => {
    const ori = { a: 1 }
    expect(isObject(ori)).toBe(true)
  })

  it('isArray', () => {
    const ori = { a: 1, b: 2 }
    expect(isArray(ori)).toBe(false)
  })

  it('isEqual', () => {
    expect(isEqual(NaN, NaN)).toBe(true)
  })
})
