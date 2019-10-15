# vue-file-preview docs

## Description

- A file preview component by Vue
- combine by serval previewers component individually

## File Type Support

<feat-box />

## QuickStart

### Install

```bash
  npm install vue
  npm install '@mrhanson/vue-file-preview'
  # or
  yarn add vue
  yarn add '@mrhanson/vue-file-preview'
```

### Usage

- ES Module

```js
// Vue app entry file
import Vue from 'vue'
import FilePreview from '@mrhanson/vue-file-preview'
import '@mrhanson/vue-file-preview/release/file-preview.css'
Vue.use(FilePreview)
```

- Vue component

```html
<script>
  import FilePreview from '@mrhanson/vue-file-preview'
  import '@mrhanson/vue-file-preview/release/file-preview.css'
  export default {
    components: {
      FilePreview
    }
  }
</script>
```
