import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify関連の読み込み
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // アイコンフォント
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Piniaの読み込み
import { createPinia } from 'pinia'

// Vuetifyセットアップ
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

// アプリ作成とプラグイン登録
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(createPinia()) // ★ここでPiniaも登録する！

app.mount('#app')
