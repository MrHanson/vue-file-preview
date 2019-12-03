export default {
  name: 'pv-table-body',

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
    enableFixed: {
      type: Boolean,
      default: false
    }
  },

  render() {
    if (this.enableFixed) {
      return (
        <div class='pv-table__body' style={{ height: this.height }}>
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
              {this.contentData.map((row, i) => (
                <tr key={'r' + i} on-mouseover={() => this.$emit('hover')}>
                  {this.columns.map((col, j) =>
                    col.fixed ? (
                      <td key={'c' + j} style={{ textAlign: col.align }}>
                        {row[col['prop']]}
                      </td>
                    ) : (
                      ''
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
    return (
      <div
        class='pv-table__body'
        style={{ height: this.height }}
        on-scroll={this.handleScroll}
      >
        <table>
          <colgroup>
            {this.columns.map((column, index) => (
              <col key={'colg' + index} width={column.width} />
            ))}
          </colgroup>
          <tbody>
            {this.contentData.map((row, i) => (
              <tr key={'r' + i} on-mouseover={() => this.$emit('hover')}>
                {this.columns.map((col, j) => (
                  <td key={'c' + j} style={{ textAlign: col.align }}>
                    {row[col['prop']]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  },

  methods: {
    handleScroll(e) {
      const { scrollTop, scrollLeft } = e.target
      if (scrollTop >= 0) {
        this.$emit('scroll-tb', scrollTop)
      }

      if (scrollLeft >= 0) {
        this.$emit('scorll-lr', scrollLeft)
      }
    }
  }
}
