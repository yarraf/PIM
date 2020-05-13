import React from 'react';
import {Row,Container,Col,Image,Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Tag from '../tag/Tag';
import "./detail.scss";
import { FaVimeoV} from "react-icons/fa";

export default class DetailView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentCodic:"",
            currentFamily:"",
            redirect: false
        }
    }
   
    setRedirect = () => { 
      this.setState ({ 
        redirect: true 
      }) 
    } 
   

    componentDidMount(){
      let currentCodic=localStorage.getItem('SELECTED_CODIC');
      this.setState({currentCodic})
      let currentFamily=localStorage.getItem('SELECTED_FAMILY')
      this.setState({currentFamily})
    }


    render(){
        const article = this.props.art.article;
        
        return  <Container className="content">
                <Row>
                <Col md={4}>
                    <div className={"left shadow p-2 mb-5 "}>
                        <Image  src="" className="left__avatarhome m-auto"/>
                        <h3 className="left__artcodic text-center mt-2">{article && article.CODIC }</h3>                        
                        <h3 className="left__artname text-center mt-2">{article && article.NAMECP }</h3>
                        <div className="left-meta">
                            <figure className="left-meta__icon m-0 p-0">
                            </figure>
                                <span className="smaller-text mt-1 f10px">
                            
                            {article && article.BRAND} </span>
                        </div>
                    </div>
                </Col>
                    
                </Row>

                <Row>
                <Col md={6}>
                    <div className={"left shadow p-2 mb-5 "}>
                    <h3 className="font-weight-bold"> <FaVimeoV/> Information VandenBorre : </h3>
                   <h3 className="left__artfamily text-left mt-2"> Famille :{article && article.FAMILY} </h3> 
                    <h3 className="left__artnamecp text-left mt-2">NameCP : {article && article.NAMECP}</h3> 
                    <h3 className="left__artcodic text-left mt-2"> Codic : {article && article.CODIC}</h3> 
                        

                    </div>
                </Col>
                </Row>
                <Row>
                    
                   <h1>tag</h1>
                    {this.props.artTags.map((tag,index)=>( 
                        
                        <Col  key={index}  md={4}>
                             <Tag Key = {index} Id={tag.ID} />
                            <Tag  key={index}  Name={tag.NAME}   />
                           
                            
                        </Col>
                    ))}
               
                </Row>
           
                <Row> <Link to="/home">Retour à la liste</Link></Row>            
            </Container>
    }
}