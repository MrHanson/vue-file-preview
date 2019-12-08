<template>
  <div class="pv-table">
    <table-header
      ref="tableHeader"
      :columns="internalTableColumns"
      :gutter-width="gutterWidth"
      :columns-width.sync="columnsWidth"
      :scroll-left="scrollLeft"
    />
    <table-body
      ref="tableBody"
      :columns="internalTableColumns"
      :content-data="contentData"
      :height="heightWithUnit"
      @scroll-tb="handleScrollTB"
      @scroll-lr="handleScrollLR"
    />

    <table-fixed
      :columns="internalTableColumns"
      :content-data="contentData"
      :height="heightWithUnit"
      :header-height="headerHeight"
      :columns-width="columnsWidth"
      :scroll-top="scrollTop"
    />
  </div>
</template>

<script>
import tableHeader from './table-header'
import tableBody from './table-body'
import tableFixed from './table-fixed'

import parseSize from '@laomao800/parse-size-with-unit'

export default {
  name: 'PvTable',
  props: {
    tableColumns: {
      type: Array,
      default: () => []
    },
    height: {
      type: [String, Number],
      default: ''
    },
    contentData: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      internalTableColumns: [],

      gutterWidth: 0,
      headerHeight: '',
      columnsWidth: [],

      /* sync scrollTop & scrollLeft for fixed table */
      scrollLeft: 0,
      scrollTop: 0
    }
  },

  computed: {
    heightWithUnit() {
      return parseSize(this.height)
    }
  },

  async mounted() {
    await this.$nextTick()
    // dynamtic computed gutter width
    const { clientWidth, offsetWidth } = this.$refs['tableBody'].$el
    this.gutterWidth = Math.abs(clientWidth - offsetWidth) - 1

    const { offsetHeight } = this.$refs['tableHeader'].$el
    // get height of header
    this.headerHeight = parseSize(offsetHeight)
  },

  watch: {
    tableColumns: {
      immediate: true,
      handler(tableColumns) {
        this.internalTableColumns = tableColumns.map(
          // prettier-ignore
          ({ label, prop, width, align, fixed }) =>
          ({ label, prop, width, align, fixed })
        )
      }
    }
  },

  // prettier-ignore
  components: { tableHeader, tableBody, tableFixed  },

  methods: {
    handleScrollTB(scrollTop) {
      this.scrollTop = scrollTop
    },
    handleScrollLR(scrollLeft) {
      this.scrollLeft = scrollLeft
    }
  }
}
</script>

<style lang="less" src="./style.less" />
