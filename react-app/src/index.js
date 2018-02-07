import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
