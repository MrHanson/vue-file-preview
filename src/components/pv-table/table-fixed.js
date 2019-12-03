import tableHeader from './table-header'
import tableBody from './table-body'

import parseSize from '@laomao800/parse-size-with-unit'

export default {
  name: 'PvTableFixed',

  props: {
    columns: {
      type: Array,
      default: () => []
    },
    contentData: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: ''
    },
    headerHeight: {
      type: String,
      default: ''
    },
    columnsWidth: {
      type: Array,
      default: () => []
    },

    scrollLeft: {
      type: Number,
      default: 0
    },
    scrollTop: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      maxWidth: parseSize(0)
    }
  },

  watch: {
    columnsWidth(val) {
      this.maxWidth = parseSize(
        val.reduce((total, cur) => (total += Number(cur)), 0)
      )
    },

    async scrollLeft(val) {
      await this.$nextTick()
      this.$refs['tableBody'].$el.scrollLeft = val
    },
    async scrollTop(val) {
      await this.$nextTick()
      this.$refs['tableBody'].$el.scrollTop = val
    }
  },

  // eslint-disable-next-line
  render() {
    return (
      <div class='pv-table__fixed' style={{ maxWidth: this.maxWidth }}>
        <table-header
          enable-fixed={true}
          min-height={this.headerHeight}
          columns={this.columns}
        />
        <table-body
          ref='tableBody'
          class='fixed'
          enable-fixed={true}
          columns={this.columns}
          content-data={this.contentData}
          height={this.height}
        />
      </div>
    )
  },

  // prettier-ignore
  components: { tableHeader, tableBody }
}
