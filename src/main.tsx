import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'

import { ring } from 'ldrs'
import { Toaster } from 'react-hot-toast'

ring.register()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
        <Toaster position="bottom-center" />
    </React.StrictMode>,
)
