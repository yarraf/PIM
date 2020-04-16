import React from 'react';
import HomeView from './HomeView';
import {connect} from "react-redux";
import {getTopArticles} from '../../actions/userArticlesAction'


class HomeContainer extends React.Component{
//state = {creteriaSearch=""}

componentDidMount(){
    //for testing
    //this.props.getTopArticles();
        
}

render(){
    const {topArticles}= this.props;
    return(
        <HomeView articles = {topArticles || []}/>
    );
}
}

const mapStateToProps = (topArticles)=> ({topArticles});
//const mapDispatchProps={getTopArticles};
export default connect(()=>mapStateToProps)(HomeContainer);
//export default HomeContainer;