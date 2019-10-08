<template>
  <div id="app">
    <file-preview
      ref="filePV"
      :file-type="operationProps.fileType"
      :md-pv-props="operationProps.mdPvProps"
      :img-pv-props="operationProps.imgPvProps"
    >
      <template v-slot:img_error>
        <div class="image-slot">
          <i class="el-icon-picture-outline"></i>
        </div>
      </template>
    </file-preview>
  </div>
</template>

<script>
export default {
  data() {
    return {
      operationProps: {
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
            () => (
              <img src="https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg" />
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
      },
      constant: {
        fileTypeList: [
          {
            label: 'markdown',
            value: 'md'
          },
          {
            label: 'img',
            value: 'img'
          }
        ]
      }
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
  padding: 16px;
  height: 100%;
}
</style>
