import DefaultTheme from 'vitepress/theme'
import DemoCard from '../components/DemoCard.vue' // 引入组件

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('DemoCard', DemoCard)
  }
}