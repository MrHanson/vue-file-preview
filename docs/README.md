# vue-file-preview

## Description

A file preview component by Vue , maked up by serval previewer components

## Filetype Support

- img
- excel

## Install

```bash
  npm install --save vue '@mrhanson/vue-file-preview'
  # or
  yarn add vue '@mrhanson/vue-file-preview'
```

## Usage

### ESModule

- global

```js
import Vue from 'vue'
import FilePreview from '@mrhanson/vue-file-preview'
Vue.use(FilePreview)
```

- Vue compoent

```html
<template>
  <filePreview v-bind="filePreviewConfig" />
</template>

<script>
  import filePreview from '@mrhanson/vue-file-preview'

  export default {
    data() {
      return {
        filePreviewConfig: {
          /* filePreview props */
        }
      }
    },

    components: { filePreview }
  }
</script>
```
