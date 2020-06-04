<template>
  <input type="checkbox" v-model="input" />
</template>
<script>
import useInputEvent from '../features/useInputEvent';
export default {
  name: 'CheckboxInput',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  setup(props, { emit }) {
    const isTrue = value => value === props.trueValue;

    return {
      input: useInputEvent(isTrue(props.checked), value => {
        emit('change', value ? props.trueValue : props.falseValue);
      }).input,
    };
  },
};
</script>
