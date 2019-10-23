<template>
  <div id="app">
    <file-preview
      ref="filePV"
      :file-type="fileType"
      :md-pv-props="mdPvProps"
      :img-pv-props="imgPvProps"
    >
      <div class="list">
        <div
          class="item"
          v-for="(src, index) in imgPvProps.coverList"
          :key="index"
          @click="openViewer(index)"
        >
          <img :src="src" :alt="index" />
        </div>
      </div>
    </file-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileType: 'img',
      mdPvProps: {
        readOnly: true,
        height: '500px',
        mode: 'markdown',
        previewStyle: 'vertical'
      },
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
      }
    }
  },
  methods: {
    openViewer(index) {
      this.$refs['filePV'].openImgViewer(index)
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
