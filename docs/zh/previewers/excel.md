# excel-previewer

## 处理本地文件流

```html
<template>
  <div id="demo-excel-client">
    <input type="file" @input="handleFileInput" />
    <div class="wrapper">
      <excel-previewer ref="excelPV" v-bind="excelPvProps"> </excel-previewer>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        excelPvProps: {
          file: null,
          tableHeight: '300'
        }
      }
    },
    methods: {
      handleFileInput(e) {
        const fileList = e.target.files
        this.excelPvProps.file = fileList[0]
      }
    }
  }
</script>

<style lang="less">
  .wrapper {
    margin: 8px 0;
  }
</style>
```

## Props

| 参数           | 类型          | 默认 | 可选值 | 说明           |
| -------------- | ------------- | ---- | ------ | -------------- |
| file           | file          |      |        | excel 文件流   |
| isClientStream | boolean       | true |        | 是否本地文件流 |
| tableHeight    | stirng/number |      |        | 预览表格高度   |
