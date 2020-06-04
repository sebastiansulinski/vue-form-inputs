<template>
  <input v-model="input" />
</template>
<script>
import useInputEvent from '../features/useInputEvent';
export default {
  name: 'TextInput',
  props: {
    value: {
      default: '',
    },
    mutators: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, { emit }) {
    return {
      input: useInputEvent(
        props.value,
        value => {
          emit('input', value);
        },
        props.mutators
      ).input,
    };
  },
};
</script>
