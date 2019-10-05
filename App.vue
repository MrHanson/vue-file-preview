<template>
  <div id="app">
    <div class="demo">
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
    <div class="operation">
      <h2>Props Area</h2>
      <el-form
        class="prop-form"
        ref="propForm"
        :model="operationProps"
        label-width="120px"
      >
        <el-form-item label="fileType">
          <el-select v-model="operationProps.fileType">
            <el-option
              v-for="(option, index) of constant.fileTypeList"
              :key="index"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </el-form-item>
        <template v-if="operationProps.fileType === 'md'">
          <el-form-item label="readOnly">
            <el-switch
              v-model="operationProps.mdPvProps.readOnly"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </el-form-item>
          <el-form-item label="height">
            <el-input
              v-model="operationProps.mdPvProps.height"
              placholder="enter height"
              :disabled="operationProps.mdPvProps.readOnly ? true : false"
            />
          </el-form-item>
          <el-form-item label="mode">
            <el-select
              v-model="operationProps.mdPvProps.mode"
              :disabled="operationProps.mdPvProps.readOnly ? true : false"
            >
              <el-option label="markdown" value="markdown" />
              <el-option label="wysiwyg" value="wysiwyg" />
            </el-select>
          </el-form-item>
          <el-form-item label="previewStyle">
            <el-select
              v-model="operationProps.mdPvProps.previewStyle"
              :disabled="operationProps.mdPvProps.readOnly ? true : false"
            >
              <el-option label="tab" value="tab" />
              <el-option label="vertical" value="vertical" />
            </el-select>
          </el-form-item>
        </template>
        <template v-if="operationProps.fileType === 'img'">
          <el-form-item label="coverSrcList">
            <el-input v-model="operationProps.imgPvProps.coverSrcList[0]">
            </el-input>
          </el-form-item>
          <el-form-item label="width">
            <el-input v-model="operationProps.imgPvProps.width"> </el-input>
          </el-form-item>
          <el-form-item label="height">
            <el-input v-model="operationProps.imgPvProps.height"> </el-input>
          </el-form-item>
          <el-form-item label="alt">
            <el-input v-model="operationProps.imgPvProps.alt"> </el-input>
          </el-form-item>
        </template>
      </el-form>
    </div>
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
          coverSrcList: [
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
          ],
          width: '500px',
          height: '400px',
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
  display: flex;
  padding: 16px;
  height: 100%;
  .demo {
    flex: 7;
    transition: 0.2s;
    .image-slot {
      font-size: 20px;
    }
  }
  .operation {
    flex: 3;
    transition: 0.2s;
    padding-left: 4px;
    h2 {
      padding: 0 16px;
      background: #f8f8f8;
      line-height: 32px;
      border-radius: 3px;
    }
    .prop-form {
      padding: 16px;
    }
  }
}
</style>
