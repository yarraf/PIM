import React from 'react'; 
import DetailView from './DetailView'; 
import {connect} from 'react-redux'; 
import {getArticleInfo,getTagsArticle,getAttrArticle} from '../../actions/articleInfoAction'; 

 
 class DetailContainer extends React.Component{ 

    componentDidMount(){ 

    this.props.getArticleInfo(); 
    this.props.getTagsArticle(); 
    this.props.getAttrArticle();

    } 

    render(){ 

const {articleInfo,articleTags,articleAttr} = this.props;  
 return <DetailView art={articleInfo}   artAttr={articleAttr.attr || [] } artTags={articleTags.tags || []  }  ></DetailView>  
    } 
} 

const mapStatetoProps=({articleInfo,articleTags,articleAttr})=>({articleInfo,articleTags,articleAttr}); 
const mapDispatchToProps = {getArticleInfo,getTagsArticle,getAttrArticle}; 
export default connect(mapStatetoProps,mapDispatchToProps)(DetailContainer); 