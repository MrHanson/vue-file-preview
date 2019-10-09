# img-previewer

## Props: CoverList

- type: `Array`
- default: `[]`

封面列表数组，支持传入 Object 和 JSX

### CoverItem

#### Object or String

- 若传入的是 string 类型，则组件内部会转换成如下格式的 Object

```js
{
  width: defaultWidth,
  height: defaultHeight,
  src: stringUInput,
  alt: '404',
  style: {}
}
```

```js
export default {
  data() {
    return {
      coverList: [
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        {
          width: '250px',
          height: '250px',
          src:
            'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',
          alt: '404',
          style: {
            // style u like
            'border-radius': '16px'
          }
        }
      ]
    }
  }
}
```

#### JSX

```js
export default {
  data() {
    return {
      coverList: [
        () => (
          <img
            width='250px'
            height='200px'
            src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
          />
        ),
        {
          render: () => (
            <img src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' />
          )
        },
        {
          render: function() {
            return (
              <img src='https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg' />
            )
          }.bind(this)
        }
      ]
    }
  }
}
```
