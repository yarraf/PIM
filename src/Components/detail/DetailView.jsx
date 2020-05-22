import React from 'react';
import { Row, Container, Col, Image, Card, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Tag from '../tag/Tag';
import Attribut from '../attribut/Attribut';
import "./detail.scss";

export default class DetailView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCodic: "",
            currentFamily: "",
            redirect: false
        }
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    componentDidMount() {
        let currentCodic = localStorage.getItem('SELECTED_CODIC');
        this.setState({ currentCodic })
        let currentFamily = localStorage.getItem('SELECTED_FAMILY')
        this.setState({ currentFamily })
    }

    renderCardGeneralInfo = () => {
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

    renderCardVandenInfo = () => {
        const article = this.props.art.article;
        return (
            <div className="mt-2">
                <Card bg="light">

                    <Card.Body>
                        <Card.Title className="bloc__title text-uppercase">Informations VandenBorre</Card.Title>
                        <div className="d-flex flex-row text-muted">
                            <div className="bd-highlight mr-1">Codic : </div>
                            <div className="bd-highlight mr-4">{article && article.CODIC}</div>
                            <div className="bd-highlight mr-1">Famillle: </div>
                            <div className="bd-highlight mr-4">{article && article.FAMILY}</div>
                            <div className="bd-highlight mr-1">Date de creation :</div>
                            <div className="bd-highlight mr-4">{article && article.CREATIONDATE}</div>
                            <div className="bd-highlight mr-1">Nom CP:</div>
                            <div className="bd-highlight">{article && article.NAMECP}</div>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderCardTag = () => {

        return (
            <div className="mt-2">
                <Card bg="light">
                    <Card.Body>
                        <Card.Title className="bloc__title text-uppercase">Tags</Card.Title>
                        {this.props.artTags.map((tag, index) => (
                                <Col key={index} sm="3" >
                                <Tag key={index} Name={tag.NAME}  />
                              
                            </Col>
                            
                        ))}
                        <Form>
                            <Form.Group>
                                <Form.Row>
                                    <Col md="12">
                                        <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                                        <button >Search</button>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                
            </div>
        )
    }

     renderCardAttr = () => {
         console.log(this.props)
        return(
            <div className="mt-2">
               
            <Card bg="light">
               
            <Card.Body>
                <Card.Title className="bloc__title text-uppercase">Attributs</Card.Title>
                 {this.props.artAttr.map((attr , index) => (
                    <Col key={index} sm="7" >
                    <Attribut key={index} listAttr={attr} />
                    
                </Col> ))} 

                    
                <div> 
                    <Card bg="light">
                    <Card.Title className="bloc__title "> Connexion Péritél</Card.Title>  
                                    
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                            <Col sm="12" ><button type="button">Ajouter atout</button></Col>
                                <Col lg="5">
                                    <Form.Control as="select" placeholder="Sélectionner une valeur">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                       
                                 </Col>
                                 OU
                                 <Col>
                                    <Form.Control type="text" placeholder="" />
                                </Col>

                                
                            </Form.Row>
                                                     
                       </Form.Group>
                    
                    </Form>
                    </Card>
                    </div>
                     <br/>

                     <div> 
                    <Card bg="light">
                    <Card.Title className="bloc__title ">Optimisation d'image</Card.Title>  
                 
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                            <Col><button type="button">Ajouter atout</button></Col>
                                
                                 <Col>
                                    <Form.Control type="text" placeholder=" Text libre NL" />
                                </Col>
                                <Col>
                                    <Form.Control type="textPath" placeholder=" Text libre FR" />
                                </Col>
  
                            </Form.Row>
                                                     
                       </Form.Group>
                    
                    </Form>
                    </Card>
                    </div> 
                    <br/>   
                    <div>  
                    <Card bg="white">
                    <Card.Title className="bloc__title ">Connex.Vidéo(Calc)</Card.Title>  
                                    
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                                 <Col>
                                    <Form.Control type="text" placeholder="Calculation" />
                                </Col>
                                <Col md="3"><button type="button">Ajouter atout</button></Col>
                               
                            </Form.Row>
                                                      
                       </Form.Group>
                    
                    </Form>
                    </Card>
                    </div>   
            </Card.Body>
            </Card>
          
        </div>
           
        )

     }

   
    render() {


        return <Container className="content">
            <Row>
                <Col>
                    {this.renderCardGeneralInfo()} {this.renderCardVandenInfo()}
                </Col>
            </Row>

            <Row>
                <Col>
                {this.renderCardTag()}
                </Col>
                
            </Row>
            <Row>
                <Col>
                   {this.renderCardAttr()}
                </Col>
            </Row>
            <Row> <Link to="/home">Retour à la liste</Link></Row>
        </Container>
    }
}