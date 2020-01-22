<template>
  <el-dialog :visible.sync="visible" :title="title" :width="width" @closed="handleClosed">
    <el-form>
      <el-form-item label="Item type">
        <el-radio-group v-model="formData.itemType" size="mini">
          <el-radio-button v-for="type in itemTypeList" :key="type" :label="type"></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Item property">
        <el-row v-for="(pty, index) in formData.itemList" :key="'pty' + index">
          <el-input
            v-if="formData.itemType === 'string'"
            style="width: 90%"
            size="small"
            :value="pty"
          />
          <div v-if="formData.itemType === 'object'" style="width: 90%; display: inline-block;">
            <el-card>
              <el-row v-for="key in Object.keys(pty)" :key="key">
                <template v-if="key === 'style'">
                  style:
                  <el-input
                    v-for="keyStyle in Object.keys(pty['style'])"
                    :key="keyStyle"
                    size="mini"
                    :value="pty['style'][keyStyle]"
                  >
                    <template v-slot:prepend>{{ keyStyle }}:</template>
                  </el-input>
                </template>
                <el-input v-else size="mini" :value="pty[key]">
                  <template v-slot:prepend>{{ key }}:</template>
                </el-input>
              </el-row>
            </el-card>
          </div>
          <el-button
            size="small"
            icon="el-icon-minus"
            type="danger"
            @click="() => removeProperty(index)"
          ></el-button>
        </el-row>
        <el-row v-if="formData.itemType === 'string'">
          <el-input
            style="width: 90%"
            size="small"
            v-model="formData.itemVal"
            placeholder="property value"
          >
          </el-input>
          <el-button
            size="small"
            icon="el-icon-plus"
            type="success"
            @click="() => addProperty('string')"
          ></el-button>
        </el-row>
        <el-row v-else-if="formData.itemType === 'object'">
          <el-button
            size="mini"
            icon="el-icon-plus"
            type="success"
            :disabled="!formData.itemObj.url"
            @click="() => addProperty('object')"
          ></el-button>
          <div style="display: flex;">
            <el-input style="flex: 1" size="small" value="url"></el-input>
            <el-input
              style="flex: 6"
              size="small"
              v-model="formData.itemObj.url"
              placeholder="property url"
            />
          </div>
          <div style="display: flex;">
            <el-input style="flex: 1" size="small" value="alt"></el-input>
            <el-input
              style="flex: 6"
              size="small"
              v-model="formData.itemObj.alt"
              placeholder="property alt"
            />
          </div>
          <div style="display: flex;">
            <el-input style="flex: 1" size="small" value="lazy"></el-input>
            <el-select
              style="flex: 6"
              size="small"
              v-model="formData.itemObj.lazy"
              placeholder="property lazy"
            >
              <el-option label="true" :value="true"></el-option>
              <el-option label="false" :value="false"></el-option>
            </el-select>
          </div>
          <div style="display: flex;">
            <el-input style="flex: 1" size="small" value="zIndex"></el-input>
            <el-input
              style="flex: 6"
              size="small"
              v-model="formData.itemObj.zIndex"
              placeholder="property zIndex"
            />
          </div>
          <div style="display: flex;">
            <el-input style="flex: 1" size="small" value="style"></el-input>
            <el-input
              style="flex: 6"
              size="small"
              v-model="formData.itemObj.style"
              placeholder="property style (split by ';')"
            />
          </div>
        </el-row>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <template v-for="btn in btnList">
        <el-button
          size="small"
          :key="btn.key"
          :icon="btn.icon"
          :type="btn.type"
          :plain="btn.plain"
          :disabled="btn.disabled"
          @click="btn.click"
        >
          {{ btn.text }}
        </el-button>
      </template>
    </span>
  </el-dialog>
</template>

<script>
function isFunction(value) {
  return typeof value === 'function'
}

export default {
  name: '',

  data() {
    return {
      visible: false,
      title: 'Add item',
      width: '30%',
      onClosed: () => {},
      formData: {
        itemType: 'string',
        itemVal: '',
        itemObj: {},
        itemList: []
      },
      itemTypeList: ['string'],
      PROPERTY_KEYS: [
        { label: 'url', value: 'url' },
        { label: 'alt', value: 'alt' },
        { label: 'lazy', value: 'lazy' },
        { label: 'zIndex', value: 'zIndex' },
        { label: 'style', value: 'style' }
      ],
      buttons: []
    }
  },

  computed: {
    btnList() {
      return Array.isArray(this.buttons)
        ? this.buttons
            .map((btn, index) => ({
              size: 'small',
              key: 'btn' + index,
              icon: btn.icon || '',
              type: btn.type || '',
              plain: btn.plain,
              disabled: btn.disabled,
              click: isFunction(btn.click)
                ? () => btn.click(this.formData.itemList, this.handleClosed)
                : null,
              text: btn.text || ''
            }))
            .filter(btn => !!btn)
        : []
    },
    handleClosed() {
      return () => {
        isFunction(this.onClosed) ? this.onClosed() : null
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }
    }
  },

  methods: {
    addProperty(type) {
      if (type === 'string') {
        this.formData.itemList.push(this.formData.itemVal)
      } else if (type === 'object') {
        const styleProperties =
          this.formData.itemObj.style && this.formData.itemObj.style.trim().split(';')
        const item = Object.assign({}, this.formData.itemObj)

        if (Array.isArray(styleProperties)) {
          styleProperties.forEach(property => {
            console.log(property)
            const [key, val] = property.trim().split(':')
            item[key.trim()] = val.trim()
          })
        }

        this.formData.itemList.push(item)
      }
    },
    removeProperty(index) {
      this.formData.itemList.splice(index, 1)
    }
  }
}
</script>
