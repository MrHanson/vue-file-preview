const version = process.env.VERSION || require('../../package.json').version

const sidebarMixin = [
  ['/', '基本使用'],
  {
    title: '基本配置',
    collapsable: false,
    children: [['/chapter/file-preview/Attribute.md', '属性']]
  },
  {
    title: 'previewer组件详情',
    collapsable: false,
    children: [
      {
        title: 'md-previewer',
        children: [['/chapter/md-previewer/', '基本使用']]
      },
      {
        title: 'img-previewer',
        children: [['/chapter/img-previewer/', '基本使用']]
      }
    ]
  }
]

const sidebarMixinEn = [
  ['/en/', 'Basic Usage'],
  {
    title: 'Basic Configuration',
    collapsable: false,
    children: [['/en/chapter/file-preview/Attribute.md', 'Attributes']]
  },
  {
    title: 'Previewer Detail',
    collapsable: false,
    children: [
      {
        title: 'md-previewer',
        children: [['/en/chapter/md-previewer/', 'Basic Usage']]
      },
      {
        title: 'img-previewer',
        children: [['/en/chapter/img-previewer/', 'Basic Usage']]
      }
    ]
  }
]

module.exports = {
  base: '/vue-file-preview/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: `Vue File Preview v${version}`
    },
    '/en/': {
      lang: 'en-US',
      title: `Vue File Preview v${version}`
    }
  },
  description: 'vue-file-preview docs',
  themeConfig: {
    displayAllHeaders: true,
    locales: {
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        nav: [
          { text: '基本使用', link: '/' },
          {
            text: '组件详情',
            items: [
              { text: 'md-previewer', link: '/chapter/md-previewer/' },
              { text: 'img-previewer', link: '/chapter/img-previewer/' }
            ]
          },
          {
            text: 'Github',
            link: 'https://github.com/MrHanson/vue-file-preview'
          }
        ],
        sidebar: {
          '/chapter/md-previewer/': [
            {
              collapsable: false,
              children: sidebarMixin
            }
          ],
          '/chapter/img-previewer/': [
            {
              collapsable: false,
              children: sidebarMixin
            }
          ],
          '/': sidebarMixin
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'Basic Usage', link: '/en/' },
          {
            text: 'Component Detail',
            items: [
              { text: 'md-previewer', link: '/en/chapter/md-previewer/' },
              { text: 'img-previewer', link: '/en/chapter/img-previewer/' }
            ]
          },
          {
            text: 'Github',
            link: 'https://github.com/MrHanson/vue-file-preview'
          }
        ],
        sidebar: {
          '/en/chapter/md-previewer/': [
            {
              title: 'md-previewer',
              collapsable: false,
              children: sidebarMixinEn
            }
          ],
          '/en/chapter/img-previewer/': [
            {
              title: 'img-previewer',
              collapsable: false,
              children: sidebarMixinEn
            }
          ],
          '/en/': (() => sidebarMixinEn)()
        }
      }
    }
  }
}
