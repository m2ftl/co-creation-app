import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import { store } from "./store/store";

const isNode =typeof module !== 'undefined'

if (!isnode) {
  // localStorage can be used
if (typeof(Storage) !== "undefined") {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
  }
}
