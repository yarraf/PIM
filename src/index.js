import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import List from './Components/List';
import OverView from './Components/OverView/OverView';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';
import {Provider} from 'react-redux';
import HomeContainer from './Components/home/HomeContainer';


ReactDOM.render(
<Provider store={store}>
    <HomeContainer />
</Provider>
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
