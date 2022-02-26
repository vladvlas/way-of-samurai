import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import store from './redux/state';

let renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
          <App state={store.getState()} addPost={store.addPost.bind(store)} />
        </BrowserRouter>, document.getElementById('root')
      );
}

renderTree(store.getState());
store.subscribe(renderTree);
    
