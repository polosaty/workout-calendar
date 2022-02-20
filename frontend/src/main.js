import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8081/';  // the FastAPI backend

let app = createApp(App).use(router);
app.use(store);

axios.interceptors.request.use(function (config) {
    const token = store.state.users.token;
    if (token) {
        config.headers.Authorization = token;
    } else {
        delete config.headers.Authorization;
    }
    return config;
});

// Vue.config.productionTip = false;

app.mount('#app')
