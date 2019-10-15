<template>
  <div>
    <!-- current feat -->
    <div class="feat-box">
      <div class="title tip">
        Current State
      </div>
      <ul class="list">
        <li v-for="(item, index) in curFeats" :key="index">
          <input
            class="magic-checkbox"
            type="checkbox"
            :id="index + item.name"
            checked="true"
            disabled="true"
          />
          <a v-if="item.href" :href="item.href">{{ item.name }}</a>
          <label v-else :for="index + item.name">{{ item.name }}</label>
        </li>
      </ul>
    </div>
    <!-- future-feat -->
    <div class="feat-box">
      <div class="title warning">
        Next State
      </div>
      <ul class="list">
        <li v-for="(item, index) in futFeats" :key="index">
          <input
            class="magic-checkbox"
            type="checkbox"
            :id="index + item.name"
            disabled="true"
          />
          <a v-if="item.href" :href="item.href">{{ item.name }}</a>
          <span v-else>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feat-box',
  data() {
    return {
      typeColor: {
        tip: {
          'border-color': '#42b983',
          'background-color': 'rgba(66, 185, 131, 0.37)'
        },
        warning: {
          'background-color': 'rgba(255,229,100,.3)',
          'border-color': '#e7c000',
          color: '#6b5900'
        },
        danger: {
          'background-color': '#ffe6e6',
          'border-color': '#c00',
          color: '#4d0000'
        }
      },
      curFeats: [
        { name: 'img', active: true, href: '/chapter/img-previewer/' },
        { name: 'md', active: true, href: '/chapter/md-previewer/' }
      ],
      futFeats: [
        { name: 'excel', active: false },
        { name: 'doc', active: false }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.feat-box {
  margin: 1rem 0;
  .title {
    border-left-width: 0.5rem;
    border-left-style: solid;
    padding: 0.1rem 1.5rem;
    font-weight: 600;
  }
  .list {
    padding: 0.1rem 1.5rem;
    background-color: #f3f5f7;
  }
}

.tip {
  border-color: #42b983;
  background-color: rgba(66, 185, 131, 0.37);
}

.warning {
  background-color: rgba(255, 229, 100, 0.3);
  border-color: #e7c000;
  color: #6b5900;
}

.danger {
  background-color: #ffe6e6;
  border-color: #c00;
  color: #4d0000;
}
</style>
