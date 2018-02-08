import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store/store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import "./utils/google_connect"; // initialize global function
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>
, document.getElementById('root'));

registerServiceWorker();
