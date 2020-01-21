<template>
  <div id="app">
    <div class="section left">
      <file-preview
        ref="filePV"
        :file-type="fileType"
        :img-pv-props="imgPvProps"
        :excel-pv-props="excelPvProps"
      >
        <template v-slot:img-error>
          <span style="color: red">加载失败</span>
        </template>
      </file-preview>
    </div>
    <div class="section right">
      <el-form label-width="120px">
        <el-form-item label="file-type">
          <el-radio-group v-model="fileType" size="small">
            <el-radio-button label="img"></el-radio-button>
            <el-radio-button label="excel"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <div v-if="fileType === 'img'">
          <el-form-item label="global width">
            <el-input-number size="small" v-model="imgPvProps.width" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="global height">
            <el-input-number size="small" v-model="imgPvProps.height" :min="1"></el-input-number>
          </el-form-item>
          <el-form-item label="coverList">
            <template v-for="(cover, index) in imgPvProps.coverList">
              <div v-if="typeof cover === 'string'" :key="'c' + index">
                <el-input :value="cover" size="small"></el-input>
              </div>
              <div v-else-if="typeof cover === 'object'" :key="'c' + index" style="margin: 16px 0;">
                <div>
                  url:
                  <el-input style="width: 80%" :value="cover.url" size="small"></el-input>
                </div>
                <div>
                  style:
                  <el-input
                    style="width: 80%"
                    :value="
                      Object.keys(cover.style)
                        .map(key => `${key}:${cover.style[key]}`)
                        .join(' ')
                    "
                  ></el-input>
                </div>
              </div>
            </template>
          </el-form-item>
          <el-form-item label="previewSrcList">
            <el-input
              v-for="(pSrc, j) in imgPvProps.previewSrcList"
              :key="'pSrc' + j"
              :value="pSrc"
              size="small"
            ></el-input>
          </el-form-item>
        </div>
        <div v-if="fileType === 'excel'">
          <el-form-item label="file">
            <input type="file" @input="handleFileInput" />
          </el-form-item>
          <el-form-item label="isClientStream">
            <el-switch v-model="excelPvProps.isClientStream"></el-switch>
          </el-form-item>
          <el-form-item label="tableHeight">
            <el-input-number
              size="small"
              v-model="excelPvProps.tableHeight"
              :min="1"
              label="previewer table height"
            ></el-input-number>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileType: 'img',
      imgPvProps: {
        coverList: [
          {
            url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            style: {
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#000'
            }
          },
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ],
        width: 250,
        height: 200,
        previewSrcList: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      },
      excelPvProps: {
        file: null,
        isClientStream: true,
        tableHeight: 500
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
  width: 100%;
  height: 100%;
  border: 4px solid #f0f2f5;
  padding: 8px;
  background-color: #fff;
  display: flex;
  .section {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 8px;
  }
  .left {
    flex: 7;
  }
  .right {
    flex: 3;
    overflow: auto;
  }
}
</style>
