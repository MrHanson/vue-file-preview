<template>
  <div id="excel-previewer">
    <el-tabs type="border-card">
      <el-tab-pane v-for="(tab, index) in sheetTabs" :key="'tab' + index" :label="tab">
        <template v-for="(sheet, j) in sheetDatas">
          <el-table :height="tableHeight" :data="sheet.contentData" :key="'tbl' + j" border>
            <el-table-column
              v-for="(column, k) in sheet.tableColumns"
              :key="'col' + k"
              :align="column.align"
              :fixed="column.fixed"
              :prop="column.prop"
              :label="column.label"
              :width="column.width"
            />
          </el-table>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { Table, TableColumn, Tabs, TabPane } from 'element-ui'

// prettier-ignore
import { file2Uint8Arr, Obj2Arr, getAlphaArr, getAlphaIndex } from '@/util'

export default {
  name: 'ExcelPreviewer',
  props: {
    file: {
      type: [Object, File],
      default: null
    },
    isClientStream: {
      type: Boolean, // judge if client file stream or not
      default: true
    },
    tableHeight: {
      type: [String, Number],
      default: '500px'
    }
  },
  data() {
    return {
      sheetTabs: [],
      sheetDatas: [],
      selectedTab: -1
    }
  },
  watch: {
    async file(val) {
      this.resetData()

      if (!val) return

      // filter unavailable file
      if (
        this.isClientStream &&
        String(val.type).indexOf('excel') < 0 &&
        String(val.type).indexOf('sheet') < 0
      ) {
        return
      }

      const data = await file2Uint8Arr(val)
      import('xlsx').then(({ read }) => {
        const workbook = read(data, { type: 'array' })
        const sheets = Obj2Arr(workbook.Sheets)

        this.sheetTabs = sheets.map(sheet => sheet.name)
        this.sheetDatas = this._formateSheets(sheets.map(sheet => sheet.content))

        this.selectedTab = 0
      })
    }
  },

  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-tabs': Tabs,
    'el-tab-pane': TabPane
  },

  methods: {
    resetData() {
      this.sheetTabs = []
      this.sheetDatas = []
      this.selectedTab = -1
    },
    _formateSheets(contents) {
      if (!Array.isArray(contents)) {
        return []
      }
      return contents.map(content => {
        let totalRow = 0

        let tableColumns = []
        Object.keys(content).forEach(key => {
          if (key === '!ref') {
            const range = content[key].match(/\w+\w+/g)
            // range eg: ['B2', 'I10']
            // prettier-ignore
            const start = getAlphaIndex(range[0][0])
            const end = getAlphaIndex(range[1][0])

            const max = range[1].match(/\d+/)[0]
            const min = range[0].match(/\d+/)[0]
            totalRow = Math.abs(parseInt(max) - parseInt(min)) + 1

            tableColumns = getAlphaArr(start, end).map(alpha => ({
              label: alpha,
              prop: alpha
            }))
          }
        })

        // fixed index column
        if (tableColumns.length > 0) {
          tableColumns.unshift({
            label: '#',
            prop: 'index',
            fixed: true,
            align: 'center',
            width: 40
          })
        }

        const contentData = new Array(totalRow).fill().map(() => ({}))
        Object.keys(content).forEach(key => {
          if (key.indexOf('!') !== -1) return

          const index = parseInt(key[1])
          const label = key[0]
          contentData[index - 1][label] = content[key].w
        })
        if (contentData.length > 0) contentData.forEach((row, index) => (row.index = index + 1))

        return { tableColumns, contentData }
      })
    }
  }
}
</script>
