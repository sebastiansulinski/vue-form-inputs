<template>
  <div ref="inputRef"></div>
</template>
<script>
import FroalaEditor from 'froala-editor';
import { ref, onMounted, onUnmounted } from '@vue/composition-api';
export default {
  name: 'FroalaEditor',
  props: {
    value: {
      default: '',
    },
    config: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const inputRef = ref(null);
    let editor;

    onMounted(() => {
      editor = new FroalaEditor(inputRef.value, {
        ...{
          events: {
            initialized: () => {
              editor.html.set(props.value);
            },
            contentChanged: () => {
              emit('input', editor.html.get());
            },
          },
        },
        ...props.config,
      });
    });

    onUnmounted(() => {
      editor?.destroy();
    });

    return { inputRef };
  },
};
</script>
