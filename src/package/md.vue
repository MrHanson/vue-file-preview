<template>
  <div id="md-previewer">
    <template v-if="readOnly">
      <viewer
        :value="previewerText"
        :style="{ height: height, overflow: 'auto' }"
      />
    </template>
    <template v-else>
      <editor
        v-model="previewerText"
        :options="editorOptions"
        :preview-style="previewStyle"
        :height="height"
        :mode="mode"
      />
    </template>
  </div>
</template>

<script>
import { Editor, Viewer } from '@toast-ui/vue-editor'

const defaultOptions = {
  minHeight: '200px',
  language: 'en_US',
  useCommandShortcut: true,
  useDefaultHTMLSanitizer: true,
  usageStatistics: true,
  hideModeSwitch: true,
  toolbarItems: [
    'heading',
    'bold',
    'italic',
    'strike',
    'divider',
    'hr',
    'quote',
    'divider',
    'ul',
    'ol',
    'task',
    'indent',
    'outdent',
    'divider',
    'table',
    'image',
    'link',
    'divider',
    'code',
    'codeblock'
  ]
}

export default {
  name: 'MdPreviewer',
  props: {
    /** editor props */
    editorOptions: {
      type: Object,
      default: () => defaultOptions
    },
    mode: {
      type: String,
      default: 'markdown'
    },
    previewStyle: {
      type: String,
      default: 'vertical'
    },
    /** common props */
    height: {
      type: String,
      default: '300px'
    },
    readOnly: {
      type: Boolean,
      default: true
    }
  },
  components: {
    editor: Editor,
    viewer: Viewer
  },
  data() {
    return {
      previewerText: ''
    }
  },
  watch: {
    previewerText(val) {
      this.$emit('text-change', val)
    }
  }
}
</script>

<style src="tui-editor/dist/tui-editor.css"></style>
<style src="tui-editor/dist/tui-editor-contents.css"></style>
<style src="codemirror/lib/codemirror.css"></style>
<style src="highlight.js/styles/github.css"></style>
