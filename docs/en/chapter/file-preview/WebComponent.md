# file-preview web component version

## [about web component](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

## Usage

```html
<!-- eg: img-previewer -->
<meta charset="utf-8" />
<title>vue-file-preview demo</title>
<script src="https://unpkg.com/vue"></script>
<script src="./vue-file-preview.js"></script>
<link rel="stylesheet" href="../lib/file-preview.css" />

<vue-file-preview-img id="imgPV" read-only="false"></vue-file-preview-img>
<script>
  const previewSrcList = [
    'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
    'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
  ]
  const imgPV = document.getElementById('imgPV')
  imgPV.setAttribute('preview-src-list', JSON.stringify(previewSrcList))
</script>
```
