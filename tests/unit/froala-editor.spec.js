import Vue from 'vue';
import { mount } from '@vue/test-utils';
import { FroalaEditor } from '../../src/index';
import CompositionApi from '@vue/composition-api';

Vue.use(CompositionApi);

jest.mock('froala-editor');

describe('FroalaEditor test', () => {
  it('Returns editor with set properties and attributes', () => {
    const wrapper = mount(FroalaEditor, {
      propsData: {
        value: 'Jon Doe',
      },
      attrs: {
        id: 'name',
        title: 'Body',
      },
    });

    expect(wrapper.props()).toEqual({
      value: 'Jon Doe',
      config: {},
    });

    expect(wrapper.attributes()).toEqual({
      id: 'name',
      title: 'Body',
    });

    expect(wrapper.html()).toEqual('<div id="name" title="Body"></div>');
  });
});
