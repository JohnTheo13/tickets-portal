import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import translate from './utils/translate'

createApp(App)
  .mixin({
    methods: {
      t (text) {
        return translate(text)
      }
    }
  })
  .use(router)
  .mount('#app')
