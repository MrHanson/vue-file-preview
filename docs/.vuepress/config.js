const path = require('path')
const version = process.env.VERSION || require('../../package.json').version

module.exports = {
  base: '/vue-file-preview/',
  description: 'vue-file-preview docs',
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  ],
  markdown: {
    lineNumbers: true
  },
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
  themeConfig: {
    locales: {
      '/': {
        lang: 'zh-CN',
        selectText: '选择语言',
        label: '简体中文',
        lastUpdated: '上次更新',
        nav: [
          { text: '基本使用', link: '/' },
          {
            text: '组件详情',
            items: [
              { text: 'img-previewer', link: '/chapter/img-previewer/' },
              { text: 'md-previewer', link: '/chapter/md-previewer/' }
            ]
          },
          {
            text: 'demo',
            items: [
              {
                text: 'img-previewer',
                items: [
                  { text: '简单使用', link: '/demo/img/simple' },
                  { text: '全屏预览', link: '/demo/img/full' },
                  { text: '搭配jsx', link: '/demo/img/jsx' }
                ]
              }
            ]
          },
          {
            text: 'CHANGELOG',
            link:
              'https://github.com/MrHanson/vue-file-preview/blob/release/CHANGELOG.md'
          },
          {
            text: 'Github',
            link: 'https://github.com/MrHanson/vue-file-preview'
          }
        ],
        sidebar: {
          '/demo/': [
            {
              title: 'img-previewer',
              collapsable: false,
              children: [
                ['/demo/img/simple.md', '简单使用'],
                ['/demo/img/full.md', '全屏预览'],
                ['/demo/img/jsx.md', '搭配jsx']
              ]
            }
          ],
          '/': [
            ['/', '基本使用'],
            {
              title: '开发指南',
              collapsable: false,
              children: [
                ['/chapter/file-preview/Props.md', 'Props一览'],
                ['/chapter/file-preview/Events.md', 'Events'],
                ['/chapter/md-previewer/', 'md-previewer'],
                ['/chapter/img-previewer/', 'img-previewer']
              ]
            }
          ]
        }
      },
      '/en/': {
        lang: 'en-US',
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
            text: 'demo',
            items: [
              {
                text: 'img-previewer',
                items: [
                  { text: 'Simple', link: '/demo/img/simple' },
                  { text: 'Full screen', link: '/demo/img/full' },
                  { text: 'with JSX', link: '/demo/img/jsx' }
                ]
              }
            ]
          },
          {
            text: 'CHANGELOG',
            link:
              'https://github.com/MrHanson/vue-file-preview/blob/release/CHANGELOG.md'
          },
          {
            text: 'Github',
            link: 'https://github.com/MrHanson/vue-file-preview'
          }
        ],
        sidebar: {
          '/en/': [
            ['/en/', 'Basic Usage'],
            {
              title: 'Dev Guide',
              collapsable: false,
              children: [
                ['/en/chapter/file-preview/Props.md', 'Props'],
                ['/en/chapter/file-preview/Events.md', 'Events'],
                ['/en/chapter/md-previewer/', 'md-previewer'],
                ['/en/chapter/img-previewer/', 'img-previewer']
              ]
            }
          ]
        }
      }
    }
  },
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../src')
      }
    }
  })
}
