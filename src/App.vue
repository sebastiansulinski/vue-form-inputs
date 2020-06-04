<template>
  <div id="app" class="py-6">
    <form class="mx-auto max-w-3xl">
      <div class="mb-4 rounded-md shadow-sm">
        <TextInput
          v-model="name"
          type="text"
          id="name"
          name="name"
          aria-placeholder="Full name"
          placeholder="Full name"
          :mutators="['toUpperCase']"
          class="appearance-none bg-white border border-gray-300 rounded-md text-base leading-normal py-3 px-4 block w-full transition ease-in-out duration-150"
        />
      </div>
      <div class="mb-4 rounded-md shadow-sm">
        <TextInput
          v-model="slug"
          type="text"
          id="slug"
          name="slug"
          aria-placeholder="Slug"
          placeholder="Slug"
          :mutators="['slug']"
          class="appearance-none bg-white border border-gray-300 rounded-md text-base leading-normal py-3 px-4 block w-full transition ease-in-out duration-150"
        />
      </div>
      <div class="relative mb-4">
        <SelectInput
          v-model="title"
          id="title"
          name="title"
          :options="[
            { value: 'mr', name: 'Mr' },
            { value: 'mrs', name: 'Mrs' },
          ]"
          empty-option-label="Select title"
          class="block appearance-none bg-white border border-gray-300 rounded-md text-base leading-normal py-3 pl-4 pr-8 w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>

      <div class="p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md">
        <div class="mb-4">
          <label for="remember">
            <CheckboxInput
              v-model="remember"
              id="remember"
              name="remember"
              true-value="selected"
              false-value="deselected"
              class="mr-2"
            />
            Remember me forever!
          </label>
        </div>

        <div>
          <label for="agree">
            <CheckboxInput
              v-model="agree"
              id="agree"
              name="agree"
              class="mr-2"
            />
            I agree to your terms and conditions
          </label>
        </div>
      </div>

      <FroalaEditor
        v-model="body"
        id="body"
        name="body"
        :config="froalaConfig"
        class="mb-4"
      />
      <FroalaEditor
        v-model="content"
        id="content"
        name="content"
        :config="froalaConfig"
      />
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api';
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import CheckboxInput from './components/CheckboxInput';
import FroalaEditor from './components/FroalaEditor';
import froalaConfig from './config/froala-editor';
export default {
  name: 'App',
  setup() {
    const name = ref('');
    const slug = ref('');
    const title = ref('');
    const remember = ref('selected');
    const agree = ref(false);
    const body = ref(
      '<h1>Body</h1><img src="https://images.unsplash.com/photo-1425736317462-a103b1303a35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Plant">'
    );
    const content = ref('');

    return {
      name,
      slug,
      title,
      remember,
      agree,
      body,
      content,
      froalaConfig,
    };
  },
  components: { TextInput, SelectInput, CheckboxInput, FroalaEditor },
};
</script>
<style>
@import '~tailwindcss/dist/base.min.css';
@import '~tailwindcss/dist/components.min.css';
@import '~tailwindcss/dist/utilities.min.css';
@import '~codemirror/lib/codemirror.css';
@import '~froala-editor/css/froala_editor.pkgd.css';
@import '~froala-editor/css/plugins/code_view.min.css';
@import '~froala-editor/css/plugins/char_counter.min.css';
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
</style>
