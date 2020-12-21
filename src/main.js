import { createApp } from 'vue'
import Toast, { useToast } from 'vue-toastification'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import translate from './utils/translate'

import 'vue-toastification/dist/index.css'

createApp(App)
  .use(router)
  .use(Toast, {

  })
  .mixin({
    methods: {
      t (text) {
        return translate(text)
      }
    }
  })
  .mount('#app')
