// prettier-ignore
import { Obj2Arr, isPlainObject ,getAlphaArr, getAlphaIndex } from '@/util'

describe('convert', () => {
  it('Obj2Arr', () => {
    const ori = { col1: 'dfb', col2: 'bcg' }
    // prettier-ignore
    const tar = [{ name: 'col1', content: 'dfb' }, { name: 'col2', content: 'bcg' }]
    expect(Obj2Arr(ori)).toEqual(tar)
  })

  it('isPlainObject', () => {
    var ctr = function() {
      this.text = 'hello world'
    }
    var instance = new ctr()
    expect(isPlainObject(instance)).toBe(false)
  })
})

describe('get attribute', () => {
  it('getAlphaArr', () => {
    // prettier-ignore
    const tar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    expect(getAlphaArr()).toEqual(tar)
  })

  it('getAlphaIndex', () => {
    expect(getAlphaIndex('AA')).toEqual(26)
  })
})
