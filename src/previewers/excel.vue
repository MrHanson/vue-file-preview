<template>
  <div id="excel-previewer">
    <div class="sheet-tab-wrap">
      <span
        class="sheet-tab"
        :class="selectedTab === sheetNames ? 'selected' : ''"
        v-for="(name, index) in sheetNames"
        :key="index"
        @click="handleTblChange(index)"
      >
        {{ name }}
      </span>
    </div>
    <div class="tbl-wrap"></div>
  </div>
</template>

<script>
// prettier-ignore
import { file2Uint8Arr, Obj2Arr, getAlphaArr, getAlphaIndex } from '@/mixin/util'
import XLSX from 'xlsx'

export default {
  name: 'ExcelPreviewer',
  props: {
    excelList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sheetNames: [],
      sheetDatas: [],
      selectedTab: '',
      tblData: []
    }
  },
  watch: {
    async excelList(curList) {
      this.resetData()
      // prettier-ignore
      const promiseArr = curList.map(f => file2Uint8Arr(f))
      if (promiseArr.length <= 0) {
        return
      }
      const collections = Promise.all(promiseArr)
      console.log(collections)
      const dataList = await collections
      dataList.forEach(data => {
        const workbook = XLSX.read(data, { type: 'array' })
        const sheets = Obj2Arr(workbook.Sheets)

        this.sheetNames = this.sheetNames.concat(
          sheets.map(sheet => sheet.name)
        )
        this.sheetDatas = this.sheetDatas.concat(
          this._formateSheets(sheets.map(sheet => sheet.content))
        )
      })

      this.selectedTab = this.sheetNames[0][0]
      this.tblData = this.sheetDatas[0][0]
    }
  },
  methods: {
    handleTblChange(sheetIndex) {
      this.selectedTab = sheetIndex
      this.tblData = this.sheetDatas[sheetIndex]
      console.log(this.tblData)
    },
    resetData() {
      this.sheetNames = []
      this.sheetDatas = []
      this.selectedTab = ''
      this.tblData = []
    },
    _formateSheets(contents) {
      if (!Array.isArray(contents)) {
        return []
      }
      console.log(contents)
      return contents.map(content => {
        const columns = ['all']
        const data = []

        Object.keys(content).forEach(key => {
          if (key === '!ref') {
            const range = content[key].match(/[\w]:[\w]/g)
            const start = getAlphaIndex(range[0])
            const end = getAlphaIndex(range[1])

            getAlphaArr(start, end)
          }
        })
        return { columns, data }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.sheet-tab {
  border: 1px solid #d6d6d6;
}

#excel-previewer {
  box-sizing: border-box;
  .sheet-tab {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom: none;
    padding: 6px 6px 0 6px;
    line-height: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    &.selected {
      color: lightpink;
    }
    &:hover {
      background: #d6d6d6;
    }
  }
}
</style>
