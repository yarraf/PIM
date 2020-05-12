import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomeContainer from '../home/HomeContainer';
import DetailContainer from '../detail/DetailContainer';



class Container extends React.Component {
    state = {
        isLoadingLocalStorage: true
    }

    componentDidMount() {

        if (localStorage.getItem('SELECTED_CODIC')) {
            this.setState({ isLoadingLocalStorage: false });
            if (this.props.location.pathname === '/') {
                this.props.history.push({ pathname: '/home', });
            }
        }

        else {

            this.setState({ isLoadingLocalStorage: false });
        }
    }

    render() {
        return (

            <React.Fragment>
                {!this.state.isLoadingLocalStorage ?
                    <section>
                        <Switch>
                            <Route path='/home' component={HomeContainer} />
                            <Route path='/detail' component={DetailContainer} />
                        </Switch>
                    </section>

                    : <Redirect to="/home" />

                }
            </React.Fragment>

        );

    }
}

export default Container 