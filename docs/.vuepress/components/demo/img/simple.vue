<template>
  <img-previewer v-bind="imgPvProps"></img-previewer>
</template>

<script>
export default {
  name: 'demo-img-simple',
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
  }
}
</script>
