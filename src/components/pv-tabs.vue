<template>
  <div class="pv-tabs">
    <div class="pv-tabs__header">
      <div class="pv-tabs__nav">
        <div
          class="pv-tabs__item"
          v-for="(tab, index) in tabs"
          :key="'tab' + index"
          :id="'tab' + index"
        >
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div class="pv-tabs__content"></div>
  </div>
</template>

<script>
export default {
  name: 'PvTabs',

  data() {
    return {
      tabs: []
    }
  },

  mounted() {
    this.tabs = Array.prototype.map.call(this.$slots.default, VNode => ({
      name: (VNode.data && VNode.data.attrs && VNode.data.attrs.name) || '',
      content: VNode
    }))
  },

  render() {
    return (
      <div class='pv-tabs'>
        <div class='pv-tabs__header'>
          <div class='pv-tabs__nav'>
            {this.tabs.map((tab, index) => (
              <div id={'tab' + index} key={'tab' + index}>
                {tab.name}
              </div>
            ))}
          </div>
        </div>
        <div class='pv-tabs__content'>{this.tabs.map(tab => tab.content)}</div>
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
  margin: 0;
  overflow: hidden;
  .pv-tabs__nav-wrap {
    overflow: hidden;
  }
}
.pv-tabs__content {
  padding: 16px;
}
</style>
