import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { CheckboxInput } from '../../src/index';
import CompositionApi from '@vue/composition-api';

Vue.use(CompositionApi);

describe('CheckboxInput test', () => {
  it('Returns input with set properties and attributes', () => {
    const wrapper = mount(CheckboxInput, {
      propsData: {
        checked: 'yes',
        trueValue: 'yes',
        falseValue: 'no',
      },
      attrs: {
        id: 'name',
        name: 'name',
        disabled: true,
      },
    });

    expect(wrapper.props()).toEqual({
      checked: 'yes',
      trueValue: 'yes',
      falseValue: 'no',
    });

    expect(wrapper.attributes()).toEqual({
      id: 'name',
      name: 'name',
      disabled: 'disabled',
      type: 'checkbox',
    });

    expect(wrapper.html()).toEqual(
      '<input type="checkbox" id="name" name="name" disabled="disabled">'
    );
  });

  it('Emits input event for unchecked', async () => {
    const wrapper = mount(CheckboxInput, {
      propsData: {
        checked: 'yes',
        trueValue: 'yes',
        falseValue: 'no',
      },
    });

    const input = wrapper.find('input');
    input.setChecked(false);
    input.trigger('change');

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.input).toBe(false);

    const emitted = wrapper.emitted('change');

    expect(emitted).toHaveLength(1);
    expect(emitted[0]).toEqual(['no']);
  });

  it('Emits input event for checked', async () => {
    const wrapper = mount(CheckboxInput, {
      propsData: {
        checked: 0,
        trueValue: 1,
        falseValue: 0,
      },
    });

    const input = wrapper.find('input');
    input.setChecked(true);
    input.trigger('change');

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.input).toBe(true);

    const emitted = wrapper.emitted('change');

    expect(emitted).toHaveLength(1);
    expect(emitted[0]).toEqual([1]);
  });
});
