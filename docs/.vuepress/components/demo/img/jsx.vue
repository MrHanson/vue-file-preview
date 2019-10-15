<template>
  <img-previewer v-bind="imgPvProps"></img-previewer>
</template>

<script>
const srcList = [
  'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
  'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
]
export default {
  data() {
    return {
      imgPvProps: {
        coverList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          () => (
            <div class='img-item'>
              <img src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' />
            </div>
          )
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

<style>
.img-item img {
  width: 250px;
  height: 200px;
}
</style>
