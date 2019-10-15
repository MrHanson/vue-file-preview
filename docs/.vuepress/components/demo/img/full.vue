<template>
  <img-previewer v-bind="imgPvProps"></img-previewer>
</template>

<script>
export default {
  name: 'demo-img-full',
  data() {
    return {
      imgPvProps: {
        previewSrcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
}
</script>
