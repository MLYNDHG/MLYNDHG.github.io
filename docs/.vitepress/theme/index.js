import DefaultTheme from 'vitepress/theme'
import AutoChangelog from './components/AutoChangelog.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp({ app })
    app.component('AutoChangelog', AutoChangelog)
  }
}