import { shallowMount } from '@vue/test-utils';
import { TextInput } from '../../src/index';

jest.mock('@ssdcode/js-mutators', () => {
  return {
    default: {
      toUpperCase: value => value.toUpperCase(),
      toLowerCase: value => value.toLowerCase(),
      slug: value => value.replace(' ', '-'),
    },
  };
});

describe('TextInput', () => {
  test('Returns input with set properties and attributes', () => {
    const component = shallowMount(TextInput, {
      propsData: {
        value: 'Jon Doe',
      },
      attrs: {
        type: 'text',
        id: 'name',
        placeholder: 'Full name',
      },
    });

    expect(component.props()).toEqual({
      value: 'Jon Doe',
      mutators: [],
    });

    expect(component.html()).toEqual(
      '<input type="text" id="name" placeholder="Full name">'
    );
  });
});
