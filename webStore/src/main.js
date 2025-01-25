import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
const vuetify = createVuetify()

const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')
