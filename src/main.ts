import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './routes/index.js'

/* 全局错误监听 */
window.onerror = function (message: string, source, lineno:number, colno: number, error: Error) {
    console.log(message);
    console.log(source);
    console.log(lineno);
    console.log(colno);
    console.log(error);
    return true
}
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.mount('#app')
