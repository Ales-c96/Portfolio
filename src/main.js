import '@fortawesome/fontawesome-free/css/all.css'
import './assets/reset.css'
import './assets/theme.css'
import { plugin, defaultConfig } from '@formkit/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import formkitConfig from '../formkit.config'

const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(formkitConfig))

app.mount('#app')
