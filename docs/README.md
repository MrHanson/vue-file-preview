# vue-file-preview 食用文档

## 介绍

- Vue.js 通用文件预览组件
- 由多个 Previewer 组件组成，组件间相互独立

## 支持文件类型

- 目前支持

  - [markdown](/chapter/md-preview/)
  - [img](/chapter/img-preview/)

- 未来支持

  - excel
  - docx

## 快速上手

### 安装

```bash
  // npm
  npm install vue
  npm install '@mrhanson/vue-file-preview'
  # or
  yarn add vue
  yarn add '@mrhanson/vue-file-preview'
```

### 使用

- ES Module

```js
// Vue app entry file
import Vue from 'vue'
import FilePreview from 'vue-file-preview'
import 'vue-file-preview/dist/lib/file-preview.css'
Vue.use(FilePreview)
```

- web-component[详情](/chapter/file-preview/WebComponent.md)
