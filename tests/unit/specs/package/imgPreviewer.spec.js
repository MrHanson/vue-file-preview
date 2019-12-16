import { mount } from '@vue/test-utils'
import imgPreviewer from '@/package/img.vue'

const simpleSrcList = [
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
]
const complexSrcList = [
  {
    width: '100px',
    height: '100px',
    url:
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
  },
  {
    url:
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  }
]
describe('coverSrcList', () => {
  it('global width & height', () => {
    const wrapper = mount(imgPreviewer, {
      propsData: {
        coverList: simpleSrcList,
        previewSrcList: simpleSrcList
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('single width & height attribute', () => {
    const wrapper = mount(imgPreviewer, {
      propsData: {
        coverSrcList: complexSrcList,
        previewSrcList: simpleSrcList
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
