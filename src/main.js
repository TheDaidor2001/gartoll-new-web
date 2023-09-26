import './assets/main.css'

import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import config from '../formkit-config.js'




import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(plugin, defaultConfig(config))

app.use(createPinia())
app.use(router)

app.mount('#app')
