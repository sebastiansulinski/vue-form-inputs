import { ref, watch } from '@vue/composition-api';
import * as mutators from '@ssdcode/js-mutators';
export default function (value, onEvent, mutate = []) {
  let input = ref(value);
  const get = value => {
    for (const mutator of mutate) {
      value =
        typeof mutator === 'function'
          ? mutator(value)
          : mutators?.[mutator](value) || value;
    }
    return value;
  };

  watch(input, value => {
    onEvent(get(value));
  });

  return { input };
}
