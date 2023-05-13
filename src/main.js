import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store.js'
import router from "./router.js"
 
createApp(App).use(router).use(store).mount('#app')


// Sender
// Receiver
// Publisher - Store