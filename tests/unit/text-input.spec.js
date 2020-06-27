import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { TextInput } from '../../src/index';
import CompositionApi from '@vue/composition-api';

Vue.use(CompositionApi);

describe('TextInput test', () => {
  it('Returns input with set properties and attributes', () => {
    const wrapper = mount(TextInput, {
      propsData: {
        value: 'Jon Doe',
      },
      attrs: {
        type: 'text',
        id: 'name',
        placeholder: 'Full name',
      },
    });

    expect(wrapper.props()).toEqual({
      value: 'Jon Doe',
      mutators: [],
    });

    expect(wrapper.attributes()).toEqual({
      type: 'text',
      id: 'name',
      placeholder: 'Full name',
    });

    expect(wrapper.html()).toEqual(
      '<input type="text" id="name" placeholder="Full name">'
    );
  });

  it('Emits input event', async () => {
    const wrapper = mount(TextInput);

    const input = wrapper.find('input');
    input.setValue('Jon');
    input.trigger('keyup');

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.input).toBe('Jon');

    const emitted = wrapper.emitted('input');

    expect(emitted).toHaveLength(1);
    expect(emitted[0]).toEqual(['Jon']);
  });
});
