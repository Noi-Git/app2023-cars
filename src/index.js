import 'bulma/css/bulma.css'
import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux/'
import { store } from './store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // wrap the <App/> with Provider
  // and pass in the store props
  // this is how you connect redux and react together
  <Provider store={store}>
    <App />
  </Provider>
)
