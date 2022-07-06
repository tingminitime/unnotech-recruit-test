import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import { focus, longPress, press } from '@/utils/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.directive('focus', focus)
app.directive('longpress', longPress)
app.directive('press', press)

app.mount('#app')
