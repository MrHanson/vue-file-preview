# excel-previewer

## Handling client file stream

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

| prop           | type          | default | optional | description                |
| -------------- | ------------- | ------- | -------- | -------------------------- |
| file           | file          |         |          | excel file stream          |
| isClientStream | boolean       | true    |          | whether client file stream |
| tableHeight    | stirng/number |         |          | previewer table height     |
