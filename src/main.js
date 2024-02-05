import './assets/main.css'
import './assets/style.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import formkitConfig from '../formkit.config'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(formkitConfig))

app.mount('#app')
