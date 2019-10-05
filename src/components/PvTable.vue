<template>
  <div class="pv-table" v-if="data && data.length > 0">
    <div>
      <table class="alpha-tbl">
        <colgroup>
          <col v-for="alpha in alphaArr" :key="alpha" />
        </colgroup>
        <thead>
          <tr>
            <td v-for="alpha in alphaArr" :key="alpha">
              {{ alpha }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="pv-flex">
      <table class="index-tbl">
        <colgroup>
          <col width="42" />
        </colgroup>
        <tr v-for="(row, rowIndex) in data" :key="rowIndex">
          <td>{{ rowIndex }}</td>
        </tr>
      </table>

      <table class="content-tbl">
        <colgroup>
          <col />
        </colgroup>
        <thead></thead>
        <tfoot></tfoot>
        <tbody>
          <tr v-for="(row, dataIndex) in data" :key="dataIndex + 'rI'">
            <td
              v-for="(col, colIndex) in row"
              :key="colIndex + 'cI'"
              v-html="col"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getAlphaArr } from '@/utils/util'

export default {
  name: 'PvTable',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    alphaArr() {
      return ['all', ...getAlphaArr()]
    }
  }
}
</script>

<style lang="less" scoped>
th,
td {
  padding: 6px 12px;
  text-align: center;
  border: 1px solid #d6d6d6;
}

table {
  border-collapse: collapse;
  color: #555;
  font-size: 14px;
}

.pv-flex {
  display: flex;
  overflow: auto;
  .alpha-tbl {
    tr {
      background: aliceblue;
    }
  }
  .index-tbl {
    td {
      text-align: center;
      background: aliceblue;
    }
  }
}
</style>
