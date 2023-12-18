import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false} />
    <App 

    />
 </BrowserRouter>
)
