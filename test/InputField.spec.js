import { createLocalVue, shallowMount } from '@vue/test-utils'
import InputField from '@/components/shared/input.vue'
describe('InputField.vue', () => {
  const props = {
    value: 'test value',
    label: 'test label',
    disabled: false,
    hint: 'test hint',
    icon: 'test-icon',
    placeholder: 'Search...',
    color: 'indigo',
  }
  it('renders InputField with placeholplaceholder="Search..."', () => {
    const wrapper = shallowMount(InputField, {
      propsData: props,
    })
    const html = `<input type="text" placeholder="Search..."`
    expect(wrapper.html()).toContain(html)
  })

  it('should renders InputField with styled label with color=indigo and label inner text = test label', () => {
    const wrapper = shallowMount(InputField, {
      propsData: props,
    })
    const html = `<label style="color: indigo;">test label</label>`
    expect(wrapper.html()).toContain(html)
  })
  it('should renders InputField with styled label with color=indigo and label inner text = test label', () => {
    const wrapper = shallowMount(InputField, {
      propsData: { ...props, value: 'test-value' },
      data() {
        return {
          show: true,
        }
      },
    })
    const newValue = 'A new extractor'
    const input = wrapper.find('input')

    wrapper.find('input').element.value = newValue
    wrapper.find('input').setValue(newValue)
    input.trigger('input')
    input.trigger('change')
    input.trigger('click')

    expect(wrapper.vm.$data.show).toBe(true)
  })
  it('should trigger the filled method', async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(InputField, {
      localVue,
      propsData: props,
    })
    const result = wrapper.vm.filled()
    const res = JSON.stringify(result)
    expect(res.replace('\\', '')).toBe('"has__content"')
  })
  it('should trigger the filled method else section', async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(InputField, {
      localVue,
      propsData: { ...props, value: '' },
    })
    const result = wrapper.vm.filled()
    const res = JSON.stringify(result)
    expect(res.replace('\\', '')).toBe('""')
  })
  it('should trigger the hasIcon method', async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(InputField, {
      localVue,
      propsData: props,
    })
    const result = wrapper.vm.hasIcon()
    const res = JSON.stringify(result)
    expect(res.replace('\\', '')).toBe('"input__has__icon"')
  })
  it('should trigger the hasIcon method else section', async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(InputField, {
      localVue,
      propsData: { ...props, icon: '' },
    })
    const result = wrapper.vm.hasIcon()
    const res = JSON.stringify(result)
    expect(res.replace('\\', '')).toBe('""')
  })
  it('should trigger focusBorder', async () => {
    const localVue = createLocalVue()
    const wrapper = shallowMount(InputField, {
      localVue,
      propsData: { ...props, value: 'test value' },
    })
    const result = wrapper.vm.focusBorder()
    expect(JSON.stringify(result)).toBe('{"background-color":"indigo"}')
  })
})
