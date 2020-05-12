import React from 'react'; 
import DetailView from './DetailView'; 
import {connect} from 'react-redux'; 
import {getArticleInfo,getTagsArticle} from '../../actions/articleInfoAction'; 

 
 class DetailContainer extends React.Component{ 

    componentDidMount(){ 

    this.props.getArticleInfo(); 
    this.props.getTagsArticle(); 

    } 

    render(){ 

const {articleInfo,articleTags} = this.props;  
 return <DetailView art={articleInfo} artTags={articleTags.tags || []}></DetailView>  
    } 
} 

const mapStatetoProps=({articleInfo,articleTags})=>({articleInfo,articleTags}); 
const mapDispatchToProps = {getArticleInfo,getTagsArticle}; 
export default connect(mapStatetoProps,mapDispatchToProps)(DetailContainer); 