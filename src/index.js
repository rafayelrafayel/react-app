import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import  ProductReducer  from './reducers/products';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(ProductReducer,window.devToolsExtension && window.devToolsExtension());


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
