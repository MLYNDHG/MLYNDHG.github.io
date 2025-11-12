import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MLYNDHG",
  description: "note",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '🏠 首页',
        link: '/'
      },
      {
        text: '📚 Ari-Agent',
        collapsed: false,
        items: [
          { text: '序言', link: '/Ari-Agent/' },
          {
            text: '第一阶段',
            collapsed: false,
            items: [
              { text: 'Markdown Examples', link: '/markdown-examples' }
            ]
          },
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '📋 更新日志',
        link: '/changelog'
      }
    ],
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  
  // 自定义主题配置
  srcDir: '.',
})