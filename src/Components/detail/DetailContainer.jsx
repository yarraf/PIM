import React from 'react';
import DetailView from './DetailView';
import {connect} from 'react-redux';
import {getArticleInfo} from '../../actions/articleInfoAction';


 class DetailContainer extends React.Component{

    componentDidMount(){
        this.props.getArticleInfo();
    }
    render(){
        const {articleInfo} = this.props;

        return <DetailView art={articleInfo}></DetailView> 
    }
}


const mapStatetoProps=({articleInfo})=>({articleInfo});
const mapDispatchToProps = {getArticleInfo};
export default connect(mapStatetoProps,mapDispatchToProps)(DetailContainer);