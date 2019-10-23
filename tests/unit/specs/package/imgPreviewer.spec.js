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
    src:
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg'
  },
  {
    src:
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  }
]
describe('coverSrcList', () => {
  it('global width & height', () => {
    const wrapper = mount(imgPreviewer, {
      propsData: {
        coverSrcList: simpleSrcList,
        previewSrcList: simpleSrcList
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('open viewer', () => {
    const wrapper = mount(imgPreviewer, {
      propsData: {
        coverSrcList: simpleSrcList,
        previewSrcList: simpleSrcList
      }
    })

    /* mounted */
    while (wrapper.options.attachedToDocument) {
      const img = wrapper.find('.cover-container img')
      img.trigger('click', { index: 0 })
      expect(wrapper.vm.imgViewer.isShown).toBe(true)
    }
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

describe('only preview mode', () => {
  it('', () => {
    const wrapper = mount(imgPreviewer, {
      propsData: {
        previewSrcList: simpleSrcList
      }
    })

    /* mounted */
    while (wrapper.options.attachedToDocument) {
      expect(wrapper.vm.imgViewer.isShown).toBe(true)
    }
  })
})

describe('custom layout', () => {
  it('default slot', () => {
    const wrapper = mount(imgPreviewer, {
      slots: {
        default: '<div>default slot</div>'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
