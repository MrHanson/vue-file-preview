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
            ['/', 'Guide'],
            {
              title: 'Previewers',
              collapsable: false,
              children: [
                ['/previewers/file.md', 'file-preview'],
                ['/previewers/img.md', 'img-previewer'],
                ['/previewers/excel.md', 'excel-previewer']
              ]
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
            ['/', 'Guide'],
            {
              title: 'Previewers',
              collapsable: false,
              children: [
                ['/zh/previewers/file.md', 'file-preview'],
                ['/zh/previewers/img.md', 'img-previewer'],
                ['/zh/previewers/excel.md', 'excel-previewer']
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
