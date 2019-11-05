<template>
  <img-previewer ref="imgPV" v-bind="imgPvProps">
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
  </img-previewer>
</template>

<script>
export default {
  data() {
    return {
      imgPvProps: {
        coverList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        width: '250px',
        height: '200px',
        alt: '加载失败',
        previewSrcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ],
        viewerOptions: {}
      }
    }
  },
  methods: {
    openViewer(index) {
      this.$refs['imgPV'].openViewer(index)
    }
  }
}
</script>

<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  background-color: #c0c4cc;
  .item {
    box-sizing: border-box;
    width: 50%;
    padding: 0.1rem;
    cursor: pointer;
    img {
      border-radius: 16px;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
