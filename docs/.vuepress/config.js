const version = process.env.VERSION || require('../../package.json').version

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
              title: 'md-previewer',
              collapsable: false,
              children: [
                ['/chapter/md-previewer/', '基本使用'],
                ['/chapter/md-previewer/Detail.md', 'Attributes & Events']
              ]
            }
          ],
          '/chapter/img-previewer/': [
            {
              title: 'img-previewer',
              collapsable: false,
              children: [
                ['/chapter/img-previewer/', '基本使用'],
                [
                  '/chapter/img-previewer/Detail.md',
                  'Attributes & Methods & Slots'
                ]
              ]
            }
          ],
          '/': [
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
                  children: [
                    ['/chapter/md-previewer/', '基本使用'],
                    ['/chapter/md-previewer/Detail.md', '相关属性']
                  ]
                },
                {
                  title: 'img-previewer',
                  children: [
                    ['/chapter/img-previewer/', '基本使用'],
                    ['/chapter/img-previewer/Detail.md', '相关属性']
                  ]
                }
              ]
            }
          ]
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
              children: [
                ['/en/chapter/md-previewer/', 'Basic Usage'],
                ['/en/chapter/md-previewer/Detail.md', 'Attributes & Events']
              ]
            }
          ],
          '/en/chapter/img-previewer/': [
            {
              title: 'img-previewer',
              collapsable: false,
              children: [
                ['/en/chapter/img-previewer/', 'Basic Usage'],
                [
                  '/en/chapter/img-previewer/Detail.md',
                  'Attributes & Methods & Slots'
                ]
              ]
            }
          ],
          '/en/': [
            ['/en/', 'Basic Usage'],
            {
              title: 'Basic Configuration',
              collapsable: false,
              children: [
                ['/en/chapter/file-preview/Attribute.md', 'Attributes']
              ]
            },
            {
              title: 'Previewer Detail',
              collapsable: false,
              children: [
                {
                  title: 'md-previewer',
                  children: [
                    ['/en/chapter/md-previewer/', 'Basic Usage'],
                    [
                      '/en/chapter/md-previewer/Detail.md',
                      'Attributes & Events'
                    ]
                  ]
                },
                {
                  title: 'img-previewer',
                  children: [
                    ['/en/chapter/img-previewer/', 'Basic Usage'],
                    [
                      '/en/chapter/img-previewer/Detail.md',
                      'Attributes & Methods & Slots'
                    ]
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  }
}
