import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './app/store.jsx';
import { Suspense } from 'react';

createRoot(document.getElementById('root')).render(
  
    <Suspense fallback='Loading..'>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  
)
