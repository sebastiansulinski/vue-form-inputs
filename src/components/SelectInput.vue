<template>
  <select v-model="input">
    <option v-if="emptyOptionLabel" value="" v-text="emptyOptionLabel"></option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      v-text="option.name"
    ></option>
  </select>
</template>
<script>
import useInputEvent from '../features/useInputEvent';
export default {
  name: 'SelectInput',
  model: {
    prop: 'selected',
    event: 'change',
  },
  props: {
    selected: {
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    emptyOptionLabel: {
      type: String,
      default: null,
    },
  },
  setup(props, { emit }) {
    return {
      input: useInputEvent(props.selected, value => {
        emit('change', value);
      }).input,
    };
  },
};
</script>
