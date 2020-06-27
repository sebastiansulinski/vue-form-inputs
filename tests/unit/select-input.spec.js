import Vue from 'vue';
import { purify } from '../helpers';
import { mount } from '@vue/test-utils';
import { SelectInput } from '../../src/index';
import CompositionApi from '@vue/composition-api';

Vue.use(CompositionApi);

const options = [
  {
    value: 'mr',
    name: 'Mr',
  },
  {
    value: 'mrs',
    name: 'Mrs',
  },
  {
    value: 'ms',
    name: 'Ms',
  },
];

describe('SelectInput test', () => {
  it('Returns select with set properties and attributes', () => {
    const wrapper = mount(SelectInput, {
      propsData: {
        selected: 'mr',
        options,
        emptyOptionLabel: 'Select title',
      },
      attrs: {
        id: 'title',
        name: 'title',
        autofocus: true,
      },
    });

    expect(wrapper.props()).toEqual({
      selected: 'mr',
      options,
      emptyOptionLabel: 'Select title',
    });

    expect(wrapper.attributes()).toEqual({
      id: 'title',
      name: 'title',
      autofocus: 'autofocus',
    });

    expect(purify(wrapper.html())).toEqual(
      purify(`<select id="title" name="title" autofocus="autofocus">
        <option value="">Select title</option>
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="ms">Ms</option>
       </select>`)
    );
  });

  it('Returns select without optional empty label', () => {
    const wrapper = mount(SelectInput, {
      propsData: {
        selected: 'mr',
        options,
      },
      attrs: {
        name: 'title',
      },
    });

    expect(wrapper.props()).toEqual({
      selected: 'mr',
      options,
      emptyOptionLabel: null,
    });

    expect(wrapper.attributes()).toEqual({
      name: 'title',
    });

    expect(purify(wrapper.html())).toEqual(
      purify(`<select name="title">
        <!---->
        <option value="mr">Mr</option>
        <option value="mrs">Mrs</option>
        <option value="ms">Ms</option>
       </select>`)
    );
  });

  it('Emits input event', async () => {
    const wrapper = mount(SelectInput, {
      propsData: {
        selected: 'mr',
        options,
      },
    });

    const input = wrapper.find('select');
    input.setValue('mrs');
    input.trigger('change');

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.input).toBe('mrs');

    const emitted = wrapper.emitted('change');

    expect(emitted).toHaveLength(1);
    expect(emitted[0]).toEqual(['mrs']);
  });
});
