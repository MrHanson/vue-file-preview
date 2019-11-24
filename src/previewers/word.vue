<template>
  <div id="word-previewer"></div>
</template>

<script>
export default {
  name: 'WordPreviewer',
  props: {
    file: {
      type: File,
      default: null
    }
  }
}
</script>
