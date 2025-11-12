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
            text: '阶段一',
            collapsed: false,
            items: [
              { text: '1. 编程语言入门 (Python)', link: '/Ari-Agent/step1/编程语言入门 (Python)' },
              { text: '2. 基础数学 (微积分与线性代数)', link: '/Ari-Agent/step1/基础数学 (微积分与线性代数)' },
              { text: '3. 电路基础与模拟电子', link: '/Ari-Agent/step1/电路基础与模拟电子' },
              { text: '4. 数字电子与微控制器入门 (Arduino)', link: '/Ari-Agent/step1/数字电子与微控制器入门 (Arduino)' },
              { text: '5. 综合实践项目', link: '/Ari-Agent/step1/综合实践项目' },
            ]
          },
          {
            text: '阶段二',
            collapsed: false,
            items: [
              { text: '1. C++ 基础与嵌入式编程', link: '/Ari-Agent/step2/C++ 基础与嵌入式编程' },
              { text: '2. 传感器技术与数据采集', link: '/Ari-Agent/step2/传感器技术与数据采集' },
              { text: '3. 电机驱动与控制', link: '/Ari-Agent/step2/电机驱动与控制' },
              { text: '4. 电源管理与太阳能', link: '/Ari-Agent/step2/电源管理与太阳能' },
              { text: '5. 综合实践项目 ', link: '/Ari-Agent/step2/综合实践项目' },
            ]
          },
          {
            text: '阶段三',
            collapsed: false,
            items: [
              { text: '1. 机械制图 (CAD) 与 3D 打印', link: '/Ari-Agent/step3/机械制图 (CAD) 与 3D 打印' },
              { text: '2. 机械原理与结构设计', link: '/Ari-Agent/step3/机械原理与结构设计' },
              { text: '3. 机器人操作系统 (ROS)', link: '/Ari-Agent/step3/机器人操作系统 (ROS)' },
              { text: '4. 综合实践项目 ', link: '/Ari-Agent/step3/综合实践项目' },
            ]
          },
          {
            text: '阶段四',
            collapsed: false,
            items: [
              { text: '1. 概率统计与机器学习基础', link: '/Ari-Agent/step4/概率统计与机器学习基础' },
              { text: '2. 计算机视觉 (OpenCV)', link: '/Ari-Agent/step4/计算机视觉 (OpenCV)' },
              { text: '3. 深度学习与模型部署', link: '/Ari-Agent/step4/深度学习与模型部署' },
              { text: '4. 任务规划与 AI', link: '/Ari-Agent/step4/任务规划与 AI' },
              { text: '5. 综合实践项目', link: '/Ari-Agent/step4/综合实践项目' },
            ]
          },
          {
            text: '阶段五',
            collapsed: false,
            items: [
              { text: '1. 农业知识速成', link: '/Ari-Agent/step5/农业知识速成' },
              { text: '2. 农民机器人”原型机总装与联调', link: '/Ari-Agent/step5/农民机器人”原型机总装与联调' },
              { text: '3. 物料协同”系统实现（你的核心功能）', link: '/Ari-Agent/step5/物料协同”系统实现（你的核心功能）' },
              { text: '4. 综合实践项目 ', link: '/Ari-Agent/step5/综合实践项目' },
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