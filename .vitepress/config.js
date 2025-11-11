// .vitepress/config.js
export default {
  base: '/', // 用户主页必须是根路径
  title: '我的学习日志',
  description: '记录每天的学习与成长',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/learning/' }
    ],
    sidebar: {
      '/learning/': [
        {
          text: '学习笔记',
          collapsible: true,
          items: [
            { text: '入门示例', link: 'example' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mlyndhg' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023–2025 mlyndhg'
    }
  }
}