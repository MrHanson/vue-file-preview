// prettier-ignore
import { isHttpUrl, Obj2Arr, str2Arr, getAlphaArr } from '@/utils/util'

describe('convert', () => {
  it('isHttpUrl', () => {
    const str = 'https:github.com'
    expect(isHttpUrl(str)).toBe(false)
  })

  it('Obj2Arr', () => {
    const ori = { col1: 'dfb', col2: 'bcg' }
    // prettier-ignore
    const tar = [{ name: 'col1', content: 'dfb' }, { name: 'col2', content: 'bcg' }]
    expect(Obj2Arr(ori)).toEqual(tar)
  })

  it('str2Arr', () => {
    const arr = [
      { src: 'abc', width: '123px', height: '123px' },
      { src: 'def' }
    ]
    const ori = JSON.stringify(arr)
    expect(str2Arr(ori)).toEqual(arr)
  })
})

describe('get attribute', () => {
  it('getAlphaArr', () => {
    // prettier-ignore
    const tar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    expect(getAlphaArr()).toEqual(tar)
  })
})
