import React from 'react';
import HomeView from './HomeView';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {getArticles,getArticleByCodic} from '../../actions/userArticlesAction'

class HomeContainer extends React.Component{

  constructor(props){
      super(props);
      this.state={
        articleSelected:"",
        isSelected:false
    }

    this.onSelect=this.onSelect.bind(this);
  }

onSelect(){
    if (localStorage.getItem('SELECTED_CODIC')){
        //console.log(localStorage.getItem('SELECTED_CODIC'));
        let isSelected=true, articleSelected=localStorage.getItem('SELECTED_CODIC');
		this.setState({isSelected,articleSelected});
        //this.props.getArticleByCodic();
    }
    
}
componentDidMount(){
    console.log("call container")
    this.props.getArticles();   
}

render(){
    const {userArticles}= this.props;
    return(    
        <React.Fragment>
            {this.state.isSelected ? <Redirect to="/detail" /> :
                <HomeView articles = {userArticles.articles || []}  getDetail={this.onSelect}/>
            }
        
        </React.Fragment>    
       
    );
}
}

const mapStateToProps = ({userArticles})=> ({userArticles});
const mapDispatchProps={getArticles,getArticleByCodic};
export default connect(mapStateToProps,mapDispatchProps)(HomeContainer);
