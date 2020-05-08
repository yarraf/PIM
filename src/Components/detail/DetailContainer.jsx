import React from 'react';
import DetailView from './DetailView';
import {connect} from 'react-redux';
import {getArticles,getArticleByCodic} from '../../actions/userArticlesAction';
import {Redirect} from 'react-router-dom';

 class DetailContainer extends React.Component{
     
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
    
    render(){
        return <DetailView>
           
        </DetailView> 
    }
}


export default connect()(DetailContainer);