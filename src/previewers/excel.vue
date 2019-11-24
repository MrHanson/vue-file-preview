<template>
  <div id="excel-previewer">
    <div class="sheet-tab-wrap">
      <span
        class="sheet-tab"
        :class="selectedTab === sheetName ? 'selected' : ''"
        v-for="(name, index) in sheetName"
        :key="index"
        @click="handleTblChange(index)"
      >
        {{ name }}
      </span>
    </div>
    <div class="tbl-wrap">
      <VTable />
    </div>
  </div>
</template>

<script>
// prettier-ignore
import { file2Uint8Arr, Obj2Arr, getAlphaArr, getAlphaIndex } from '@/mixin/util'
import XLSX from 'xlsx'

/* components */
import 'vue-easytable/libs/themes-base/index.css'
import { VTable } from 'vue-easytable'

export default {
  name: 'ExcelPreviewer',
  props: {
    excelList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    VTable
  },
  data() {
    return {
      sheetName: [],
      sheetData: [],
      selectedTab: '',
      tblData: []
    }
  },
  computed: {
    indexArr() {
      return ['all'].concat(getAlphaArr())
    }
  },
  watch: {
    excelList(val) {
      this.resetData()
      if (val) {
        file2Uint8Arr(val, data => {
          const workbook = XLSX.read(data, { type: 'array' })
          console.log('origin', workbook.Sheets)
          this.sheetData = this._formateSheets(Obj2Arr(workbook.Sheets))
          this.selectedTab = this.sheetName[0]
          this.tblData = this.sheetData[0]
          console.log('formatted', this.sheetData)
        })
      }
    }
  },
  methods: {
    handleTblChange(sheetIndex) {
      this.selectedTab = sheetIndex
      this.tblData = this.sheetData[sheetIndex]
      console.log(this.tblData)
    },
    resetData() {
      this.sheetName = []
      this.sheetData = []
      this.selectedTab = ''
      this.tblData = []
    },
    _formateSheets(sheets) {
      if (!Array.isArray(sheets)) {
        return []
      }
      return sheets.map(sheet => {
        /* set sheet tab name */
        this.sheetName.push(sheet.name)

        /* set sheet content */
        const oriContent = sheet.content
        // prettier-ignore
        const res = { name: sheet.name, content: { tblData: {}, minRowLen: 10, minColLen: 26 } }
        const resContent = res.content
        const tblData = res.content.tblData

        if (oriContent['!ref']) {
          const end = oriContent['!ref'].split(':')[1]
          console.log(end)
          resContent.minRowLen = parseInt(end.match(/\d+/g).pop())
          resContent.minColLen = getAlphaIndex(end.match(/[A-Z]+/g).pop())
        }

        for (let key in oriContent) {
          if (key.indexOf('!') === -1) {
            tblData[key] = oriContent[key]
          }
        }
        return res
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
