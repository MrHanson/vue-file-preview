<template>
  <div id="excel-previewer">
    <el-tabs type="border-card" v-show="sheetDatas.length > 0">
      <el-tab-pane v-for="(tab, index) in sheetTabs" :key="'tab' + index" :label="tab">
        <template>
          <el-table
            :height="tableHeight"
            :data="sheetDatas[index].contentData"
            :key="'tbl' + index"
            border
          >
            <el-table-column
              v-if="sheetDatas[index].contentData.length > 0"
              label="#"
              type="index"
              width="40"
              align="center"
            >
            </el-table-column>
            <el-table-column
              v-for="(column, k) in sheetDatas[index].tableColumns"
              :key="'col' + k"
              :align="column.align || 'center'"
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

import { read as xlsxRead } from 'xlsx'
// prettier-ignore
import { file2Uint8Arr, Obj2Arr, isFunction } from '@/util'

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
      xlsxRead: null
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

      const workbook = xlsxRead(data, { type: 'array' })
      const sheets = Obj2Arr(workbook.Sheets)

      this.sheetTabs = sheets.map(sheet => sheet.name)
      this.sheetDatas = this._formateSheets(sheets.map(sheet => sheet.content))
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
    },
    _formateSheets(contents) {
      if (!Array.isArray(contents)) {
        return []
      }
      return contents.map(content => {
        let totalRow = 0
        const colHash = {}

        let tableColumns = []
        const contentData = []

        // get total row & col
        Object.keys(content).forEach(key => {
          if (key.indexOf('!') < 0) {
            const alpha = key.match(/[A-Z]+/)[0]
            if (!colHash[alpha]) colHash[alpha] = true

            const rowIndex = key.match(/\d+/)[0]
            if (rowIndex > totalRow) totalRow = rowIndex
            if (!contentData[rowIndex]) {
              contentData[rowIndex] = {}
            }
            contentData[rowIndex][alpha] = content[key].w
          }
        })

        // handle tableColumns
        tableColumns = Object.keys(colHash)
        tableColumns.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        tableColumns = tableColumns.map(alpha => ({
          label: alpha,
          align: 'center',
          prop: alpha
        }))

        return { tableColumns, contentData }
      })
    }
  }
}
</script>
