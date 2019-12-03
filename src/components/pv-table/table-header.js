export default {
  name: 'pv-table-header',

  props: {
    columns: {
      type: Array,
      default: () => []
    },
    gutterWidth: {
      type: String,
      default: ''
    },
    enableFixed: {
      type: Boolean,
      default: false
    }
  },

  render() {
    if (this.enableFixed) {
      return (
        <div class='pv-table__header'>
          <table>
            <colgroup>
              {this.columns.map((column, index) =>
                column.fixed ? (
                  <col key={'colg' + index} width={column.width} />
                ) : (
                  ''
                )
              )}
            </colgroup>
            <tbody>
              <tr>
                {this.columns.map((column, index) =>
                  column.fixed ? (
                    <th key={'col' + index}>{column.label}</th>
                  ) : (
                    ''
                  )
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div class='pv-table__header'>
        <table>
          <colgroup>
            {this.columns.map((column, index) => (
              <col key={'colg' + index} width={column.width} />
            ))}
          </colgroup>
          <tbody>
            <tr ref='header'>
              {this.columns.map((column, index) => (
                <th key={'col' + index}>{column.label}</th>
              ))}
              {this.gutterWidth ? (
                <th class='gutter' style={{ width: this.gutterWidth }}></th>
              ) : (
                ''
              )}
            </tr>
          </tbody>
        </table>
      </div>
    )
  },

  mounted() {
    if (!this.enableFixed) {
      // computed columnsWidth
      const { childNodes } = this.$refs['header']
      const columnsWidth = []
      childNodes.forEach((node, index) => {
        this.columns[index].fixed && columnsWidth.push(node.clientWidth)
      })
      this.$emit('update:columnsWidth', columnsWidth)
    }
  }
}
