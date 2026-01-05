import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Dev_Intern's Blog", // 你的站名
  description: "记录前端成长之路",
  
  // 部署到 GitHub Pages 这里的 base 需要填 '/仓库名/'，如果用 Vercel 则不需要
  // base: '/my-blog/', 

  themeConfig: {
    // 1. 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'Vue 笔记', link: '/posts/vue-notes' }, // 指向文章
      { text: 'React 探索', link: '/posts/react-learning' },
      { text: '面试题', link: '/posts/mian' },

      { text: '关于我', link: '/about' }
    ],

    // 2. 侧边栏 (可以为不同板块配置不同侧边栏)
    sidebar: [
      {
        text: '技术文章',
        items: [
          { text: 'Vue 3 踩坑记录', link: '/posts/vue-notes' },
          { text: 'React Hooks 初体验', link: '/posts/react-learning' },
          { text: '面试题', link: '/posts/mian' }
        ]
      }
    ],

    // 3. 社交链接 (显示在右上角)
    socialLinks: [
      { icon: 'github', link: 'https://github.com/你的用户名' }
    ]
  }
})