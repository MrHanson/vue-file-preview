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
      lang: 'en-US',
      title: `Vue File Preview v${version}`
    },
    '/zh/': {
      lang: 'zh-CN',
      title: `Vue File Preview v${version}`
    }
  },
  themeConfig: {
    locales: {
      '/': {
        lang: 'en-US',
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        nav: [
          { text: 'Guide', link: '/' },
          {
            text: 'Previewer Detail',
            items: [
              { text: 'img-previewer', link: '/previewers/img' },
              { text: 'excel-previewer', link: '/previewers/excel' }
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
          '/': [
            ['/', ''],
            {
              title: 'Guide',
              collapsable: false,
              children: []
            }
          ]
        }
      },
      '/zh/': {
        lang: 'zh-CN',
        selectText: '语言',
        label: '中文',
        ariaLabel: '语言',
        nav: [
          { text: '指南', link: '/zh/' },
          {
            text: 'Previewer 详情',
            items: [
              { text: 'img-previewer', link: '/zh/previewers/img' },
              { text: 'excel-previewer', link: '/zh/previewers/excel' }
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
          '/': [
            ['/', ''],
            {
              title: '指南',
              collapsable: false,
              children: []
            }
          ]
        }
      }
    }
  }
}
