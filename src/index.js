import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import App from "./app/App";
import LoginDrawer from "./LoginRegister/LoginDrawer";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <App />
      {/*<LoginDrawer/>*/}
    </Provider>
);

