import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';

import store from './redux/store-redux'

export let rerenderDOMTree = (state) => {
  ReactDOM.render(

    <BrowserRouter>
      <App store={store} dispatch={store.dispatch} state={state} />
    </BrowserRouter>
    ,
    document.getElementById('root')
  );
}

rerenderDOMTree(store.getState());
store.subscribe(() => {
  let state = store.getState()
  rerenderDOMTree(state)
})

serviceWorker.unregister();