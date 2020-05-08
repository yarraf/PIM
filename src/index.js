import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Container from './Components/Container/Container';
import HomeContainer from './Components/home/HomeContainer';
import DetailContainer from './Components/detail/DetailContainer';

class IndexApp extends React.Component{
    render(){
        //localStorage.clear();

        return(
            <Provider store ={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/detail' component={DetailContainer}/>
                        <Route path='/' component={Container}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}


ReactDOM.render(<IndexApp/>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
