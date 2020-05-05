import React from 'react';
import HomeView from './HomeView';
import {connect} from "react-redux";
import {getArticles} from '../../actions/userArticlesAction'


class HomeContainer extends React.Component{
constructor(){
   
}

componentDidMount(){
 
    this.props.getArticles();       
}

render(){
    const {userArticles}= this.props;
    return(
        <HomeView articles = {userArticles.articles || []}/>
    );
}
}

const mapStateToProps = ({userArticles})=> ({userArticles});

const mapDispatchProps={getArticles};
export default connect(mapStateToProps,mapDispatchProps)(HomeContainer);
