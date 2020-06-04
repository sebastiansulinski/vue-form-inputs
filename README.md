# Vue form input set

Set of inputs to accompany [vue-form](https://github.com/sebastiansulinski/vue-form) v2.

> This component makes use of Vue 3 composition api so please make sure it is available in your project.

## Installation

```bash
npm install --save-dev @ssdcode/vue-form-inputs
```

## Usage

You can import desired input components using ES6 import syntax

```javascript
import { TextInput, CheckboxInput, SelectInput, FroalaEditor } from '@ssdcode/vue-form-inputs'
```

Alternatively you can also use `UMD` or `CommonJs` approach by pointing to `@ssdcode/vue-form-inputs/dist/main.umd.js` or `@ssdcode/vue-form-inputs/dist/main.common.js`.

#### FroalaEditor

To use [FroalaEditor](https://froala.com/wysiwyg-editor/docs/), make sure you import and compile relevant css files - at the very least:

```css
@import '~froala-editor/css/froala_editor.pkgd.css';
```

To be continued... 


## Tests

You can execute tests by calling

```bash
npm run test:unit
```

## Contributions

Contributions are welcome - please make sure all PRs have their associated test.