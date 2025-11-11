// .vitepress/config.js
export default {
  title: '我的学习日志',
  description: '记录编程学习的点点滴滴',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/MLYNDHG' }
    ],
    sidebar: [
      {
        text: '学习笔记',
        collapsed: false,
        items: [
          { text: 'Markdown 入门', link: '/learning/day1' },
          { text: 'Vue 学习', link: '/learning/vue-notes' },
          { text: 'React 基础', link: '/learning/react-basics' }
        ]
      }
    ]
  }
}