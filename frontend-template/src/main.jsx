import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import { RecoilRoot } from 'recoil'
import './style/index.css'
import './style/header.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <Root />
    </RecoilRoot>
  </React.StrictMode>,
)
