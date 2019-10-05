import { mount } from '@vue/test-utils'
import filePreview from '@/file-preview.vue'

describe('fileType change', () => {
  it('img', () => {
    const wrapper = mount(filePreview, { propsData: { fileType: 'img' } })
    expect(wrapper.find('div').attributes('id')).toContain('img-previewer')
  })
})
