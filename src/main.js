import { createApp } from 'vue'
import App from './App.vue'
import BaseInput from './components/ui/BaseInput.vue'
import BaseButton from './components/ui/BaseButton.vue'
import BaseControl from './components/ui/BaseControl.vue'
import './tailwind.css'

const app = createApp(App)
app.component('base-input', BaseInput)
app.component('base-button', BaseButton)
app.component('base-control', BaseControl)
app.mount('#app')
