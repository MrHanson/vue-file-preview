# vue-file-preview

[![npm](https://img.shields.io/npm/v/@mrhanson/vue-file-preview.svg)](https://www.npmjs.com/package/@mrhanson/vue-file-preview)![License](https://img.shields.io/npm/l/@mrhanson/vue-file-preview)

## Filetype Support(Current)

- markdown
- img

## Install

```shell
  npm install --save vue '@mrhanson/vue-file-preview'
  # or
  yarn add vue '@mrhanson/vue-file-preview'
```

## Document

[中文](https://mrhanson.github.io/vue-file-preview/) | [English](https://mrhanson.github.io/vue-file-preview/en/)

## Usage

- Gloal

```js
import Vue from 'vue'
import FilePreview from '@mrhanson/vue-file-preview'
Vue.use(FilePreview)
```

- Vue Component

```html
<script>
  import FilePreview from '@mrhanson/vue-file-preview'

  export default {
    components: {
      FilePreview
    }
  }
</script>
```
