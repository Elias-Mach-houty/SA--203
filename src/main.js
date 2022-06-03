import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSrcuCHohk4Ah5qyjHTeDIQEnft-yIZ00",
    authDomain: "sae203-407e7.firebaseapp.com",
    projectId: "sae203-407e7",
    storageBucket: "sae203-407e7.appspot.com",
    messagingSenderId: "992092878419",
    appId: "1:992092878419:web:50565f654dfd13b46e78a6"
  };

  const firebaseApp = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
