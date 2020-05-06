import React from 'react';
import DetailView from './DetailView';
import {connect} from 'react-redux';

 class DetailContainer extends React.Component{
    render(){
        return <DetailView></DetailView> 
    }
}

export default connect()(DetailContainer);