import React from 'react';
import {Row,Container,Col,Image,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Tag from '../tag/Tag';
import {
    faGraduationCap,faCoffee,fatruck,faDesktop, faWarehouse, faArrowAltCircleLeft

  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FnacForm from '../fnac/FnacForm';
import "./detail.scss";

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

    renderCardGeneralInfo=()=>{
        const article = this.props.art.article;
        return (
            <div className="mt-2">
                <Card bg="light">
                   
                <Card.Body>
                    <Card.Title className="bloc__title text-uppercase">Information générales</Card.Title>
                         <div className="d-flex flex-row text-muted">                      
                            <div className="bd-highlight mr-1">Marque: </div>
                            <div className="bd-highlight mr-4">{article && article.MARQUE}</div>
                            <div className="bd-highlight mr-1">Fournisseur: </div>
                            <div className="bd-highlight mr-4">{article && article.SUPPLIER}</div>
                            <div className="bd-highlight mr-1">EAN:</div>
                            <div className="bd-highlight mr-4">{article && article.EAN}</div>
                            <div className="bd-highlight mr-1">Statut d'approvisionnement:</div>
                            <div className="bd-highlight">{article && article.STATUSAPPRO}</div>

                    </div> 
                </Card.Body>
                </Card>
            </div>
       );
    }

    //Optional
    renderArtGeneralInfo=()=>{
        const article = this.props.art.article;
        return (
            <div className={"left shadow border p-2 m-5 "}>
            <div>
                <Image className="left__avatarhome"  src="https://yarressourcesdiag531.blob.core.windows.net/bootdiagnostics-vmwithvs-45a9de96-bacc-4816-b8b5-6a7a7e7db391/NoImageFound.png"/>
            </div>
            
            <h3 className="left__artcodic">{article && article.NAMECP }</h3> 

                                   
            <div className="left-meta">
                <figure className="left-meta__icon m-1 p-0">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}  className="left-meta__fa"/>
                </figure>
                    <span className="smaller-text mt-1 f10px">
                
                {article && article.BRAND} </span>
            </div>
        </div>
        );
    }
    render(){
        
        return  <Container className="content">
                    <Row>
                        <Col>
                            {this.renderCardGeneralInfo()}
                        </Col>    
                        
                    </Row>
                    <Row>
                        {this.props.artTags.map((tag,index)=>( 
                            <Col  key={index}  md={3}>
                                <Tag  key={index}  Name={tag.NAME} />
                            </Col>
                        ))}                
                    </Row>
                    <Row>
                        <Col>
                        <FnacForm />
                        </Col>
                       
                    </Row>     
                <Row> <Link to="/home">Retour à la liste</Link></Row>            
            </Container>
    }
}