import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';
// import { LayoutProvider, SplashScreenProvider } from './components/layout';

import './assets/style.css'
import { Provider } from "react-redux";
import configureStore from "./stores";


const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

const PUBLIC_URL = "";
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={<div>
          Loading
        </div>}
        onBeforeLift={onBeforeLift}
        persistor={persistor}>
        <App basename={PUBLIC_URL} />
      </PersistGate>

    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
