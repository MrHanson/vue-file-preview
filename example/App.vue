<template>
  <div id="app">
    <!-- <input type="file" multiple @input="handleFileInput" />
    <file-preview
      ref="filePV"
      :file-type="fileType"
      :img-pv-props="imgPvProps"
      :excel-pv-props="excelPvProps"
      :word-pv-props="wordPvProps"
    >
    </file-preview> -->
    <pv-table
      :table-columns="tableColumns"
      :content-data="contentData"
      height="300"
    />
  </div>
</template>

<script>
import PvTable from '@/components/pv-table'

export default {
  data() {
    return {
      fileType: 'excel',
      excelPvProps: {
        excelList: null
      },
      wordPvProps: {},

      tableColumns: [
        {
          label: 'first',
          prop: 'first',
          align: 'center',
          fixed: true,
          width: 100
        },
        {
          label: 'second',
          prop: 'second',
          align: 'center',
          width: 100
        },
        {
          label: 'third',
          prop: 'third',
          align: 'center',
          width: 100
        },
        {
          label: 'fourth',
          prop: 'fourth',
          align: 'center',
          width: 100
        },
        {
          label: 'fifth',
          prop: 'fifth',
          align: 'center',
          width: 100
        }
      ],
      contentData: (() =>
        // eslint-disable-next-line
        new Array(10).fill().map(_ => ({
          first: 1,
          second: 2,
          third: 3,
          fourth: 4,
          fifth: 5
        })))()
    }
  },

  components: {
    PvTable
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
  width: 70%;
  margin: 0 auto;
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
