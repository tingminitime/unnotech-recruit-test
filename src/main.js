import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Notifications from 'notiwind'
import { notify } from "notiwind"
import './index.css'
import '@/assets/sass/skeleton.sass'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale-subtle.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import { focus, longPress, press, imgSrc } from '@/utils/directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Notifications)
app.directive('focus', focus)
app.directive('longpress', longPress)
app.directive('press', press)
app.directive('img-src', imgSrc)

app.mount('#app')
