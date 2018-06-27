import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import TrackingForm from './Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <TrackingForm />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

