<template>
  <div id="app">
    <TextInput
      v-model="name"
      type="text"
      id="name"
      name="name"
      aria-placeholder="Full name"
      placeholder="Full name"
      :mutators="['toUpperCase']"
    />
    <p v-text="name"></p>
    <hr />
    <SelectInput
      v-model="title"
      id="title"
      name="title"
      :options="[
        { value: 'mr', name: 'Mr' },
        { value: 'mrs', name: 'Mrs' },
      ]"
      empty-option-label="Select title"
    />
    <hr />
    <CheckboxInput
      v-model="remember"
      id="remember"
      name="remember"
      true-value="selected"
      false-value="deselected"
    />
    <p v-text="remember"></p>
    <hr />
    <CheckboxInput v-model="agree" id="agree" name="agree" />
    <p v-text="agree"></p>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import CheckboxInput from './components/CheckboxInput';
export default {
  name: 'App',
  setup() {
    const name = ref('');
    const title = ref('');
    const remember = ref('selected');
    const agree = ref(false);

    return { name, title, remember, agree };
  },
  components: { TextInput, SelectInput, CheckboxInput },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
