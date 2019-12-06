<script>
import PvTabs from '@/components/pv-tabs'
import PvTable from '@/components/pv-table'

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
      tblData: [],
      isClientStream: true // judge if client file stream or not
    }
  },
  watch: {
    async excelList(curList) {
      this.resetData()

      const availFileList = this._getAvailFileList(curList)
      if (availFileList.length === 0) return

      const promiseArr = availFileList.map(f => file2Uint8Arr(f))
      if (promiseArr.length <= 0) return

      const dataList = await Promise.all(promiseArr)
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
      console.log(this.sheetNames, this.sheetDatas)

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
    _getAvailFileList(fileList = []) {
      if (!this.isClientStream) return []
      return Array.prototype.filter.call(
        fileList,
        f =>
          f.type &&
          (String(f.type).indexOf('excel') > 0 ||
            String(f.type).indexOf('sheet') > 0)
      )
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
  },

  render() {
    return (
      <div id='excel-previewer'>
        <PvTabs>
          <PvTable />
        </PvTabs>
      </div>
    )
  }
}
</script>
