import { app } from '../../core.js'
import { createPinia } from 'pinia'

const store = createPinia()

app.use(store)
