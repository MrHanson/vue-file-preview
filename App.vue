<template>
  <div>
    <input type="file" multiple @input="handleFileInput" />
    <file-preview
      ref="filePV"
      :file-type="fileType"
      :img-pv-props="imgPvProps"
      :excel-pv-props="excelPvProps"
      :word-pv-props="wordPvProps"
    >
    </file-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileType: 'excel',
      imgPvProps: {
        coverList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        width: '250px',
        height: '200px',
        previewSrcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        viewerOptions: {}
      },
      excelPvProps: {
        excelList: null
      },
      wordPvProps: {}
    }
  },
  methods: {
    openViewer(index) {
      this.$refs['filePV'].openImgViewer(index)
    },
    handleFileInput(e) {
      const fileList = e.target.files
      this.excelPvProps.excelList = Array.from(fileList)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  padding: 8px;
  height: 100%;
}
</style>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #c0c4cc;
  .item {
    box-sizing: border-box;
    width: 50%;
    padding: 0.1rem;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
