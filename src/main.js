import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import 'vue-loading-overlay/dist/vue-loading.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
