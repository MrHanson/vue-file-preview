<script>
let TabItems = []
let tabsName = []

export default {
  name: 'PvTabs',

  props: {
    active: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      activeTab: 0,
      lazyTbl: []
    }
  },

  watch: {
    active: {
      immediate: true,
      handler(val) {
        this.activeTab = val
      }
    }
  },

  methods: {
    handleActive(index) {
      this.activeTab = index
      this.$emit('update:active', index)
    }
  },

  render() {
    TabItems = this.$slots.default || []
    tabsName = TabItems.map(
      (tab, index) =>
        (tab.data.attrs && tab.data.attrs.name) || `Sheet${index + 1}`
    )

    if (TabItems.length === 0) return <div></div>

    return (
      <div class='pv-tabs'>
        <div class='pv-tabs__header'>
          <div class='pv-tab__nav-scroll'>
            <div class='pv-tabs__nav' style='transform: translateX(0px)'>
              {tabsName.map((name, index) => (
                <div
                  class={{
                    'pv-tabs__item': true,
                    'is-active': index === this.activeTab
                  }}
                  id={'tab-' + index}
                  key={'tab-' + index}
                  on-click={() => this.handleActive(index)}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div class='pv-tabs__content'>
          {TabItems.map((item, index) => (
            <keep-alive>{index === this.activeTab ? item : null}</keep-alive>
          ))}
        </div>
      </div>
    )
  }
}
</script>

<style lang="less">
.pv-tabs {
  background: #fff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.pv-tabs__header {
  background-color: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
  margin-bottom: -1px;
  .pv-tab__nav-scroll {
    overflow: hidden;
    .pv-tabs__nav {
      white-space: nowrap;
      position: relative;
      transition: transform 0.3s;
      float: left;
      z-index: 2;
    }
  }
}

.pv-tabs__item {
  padding: 0 24px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  margin-top: -1px;
  border: 1px solid transparent;
  box-sizing: border-box;
  color: rgb(144, 147, 153);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:first-child {
    border-left: none;
  }

  &:hover {
    color: #409eff;
    cursor: pointer;
  }

  &.is-active {
    color: #409eff;
    background-color: #fff;
    border-right-color: #dcdfe6;
    border-left-color: #dcdfe6;
  }
}

.pv-tabs__content {
  padding: 8px;
}
</style>
