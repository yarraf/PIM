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

    mapAttrToTags(){
        this.props.artTags.map((tag) => (
           
              tag.listAttr = this.props.artAttr 
        
    ))
    console.log("test"+this.props);
        
    }

    renderCardGeneralInfo = () => {
        const article = this.props.art.article;
        return (
            <div  id="a" className="mt-2">
                <Card bg="light">

                    <Card.Body>
                        <Card.Title className="text-uppercase">Information générales</Card.Title>
                        <div className="text-muted text-size-details">
                      
                            <div class="mr1" className="bd-highlight mr-1 "> <b>Marque :</b>  <div id="c">{article && article.MARQUE}</div>  </div> 
                            <div className="bd-highlight mr-1"><b>Fournisseur:</b>  <div id="c">{article && article.SUPPLIER}</div></div> 
                            <div className="bd-highlight mr-1"> <b>EAN:</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div id="c">{article && article.EAN}</div></div>
                            <div className="bd-highlight mr-1"><b>Statut d'approvisionnement:</b> <div id="c">{article && article.STATUSAPPRO}</div></div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderCardVandenInfo = () => {
        const article = this.props.art.article;
        return (
            <div id="b" className="mt-2">
                <Card bg="light">

                    <Card.Body>
                        <Card.Title className="text-uppercase">Informations VandenBorre</Card.Title>
                        <div className="text-muted text-size-details">
                        
                            <div  className="bd-highlight mr-4"><b>Codic :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div id="c">{article && article.CODIC}</div></div>
                            <div  className="bd-highlight mr-4"><b>Famille :</b>&nbsp;&nbsp;&nbsp; <div id="c">{article && article.FAMILY} </div></div>
                            <div  className="bd-highlight mr-4"><b>Date de creation :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div id="v">{article && article.CREATIONDATE}</div> </div>
                            <div  className="bd-highlight"><b>Nom CP :</b> <div id="c">{article && article.NAMECP}</div></div>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderCardTag = () => {

        return (
            <div id="Péritél_1" className="mt-2">
                <Card bg="light">
                    <Card.Body>
                        <Card.Title className="bloc__title text-uppercase">Tags</Card.Title>
                        {this.props.artTags.map((tag, index) => (
                                <Col  key={index} sm="6" > 
                                <Tag key={index} Name={tag.NAME}  />
                              
                            </Col>
                            
                        ))}
                        <Form>
                            <Form.Group>
                                <Form.Row>
                                     <Col >
                       
                          
                                    {/* <input  type="search"   id="input1" className="input" placeholder="Search..." />
                                    <button id="btn_2" type="submit" class="btn btn-danger"><i class="fa fa-search"></i></button> */}
                                    
                                    {/* <input type="text" class="form-control" id="input1" className="input" onChange={this.handleChange} placeholder="Search..." /> */}
                                  
                                  {/* <input type="text" class="form-control" id="input" className="input" onChange={this.handleChange} placeholder="Search..." /> 
                                        &nbsp;&nbsp;&nbsp;
                                        <button id="btn_1" class="btn btn-danger">Search</button> */}
                                    </Col> 
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <div class="form-group">
                                            <label for="search" class="sr-only">Search</label>
                                            <input type="text" class="form-control" name="search" id="search" placeholder="search..."/>
                                            <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                        </div>
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
            <div id="Péritél_1" className="mt-2" md="6">
               
            <Card bg="light">
               
            <Card.Body>
                <Card.Title className="bloc__title text-uppercase">Attributs</Card.Title>
                 {/* {this.props.artAttr.map((attr , index) => (
                    <Col key={index} sm="7" >
                    <Attribut key={index} listAttr={attr} />
                    
                </Col> ))}  */}

                    
                <div id="Péritél"  className="text-muted text-size-details"> 
                    <Card  id="card" bg="light">
                    <Card.Title id="title" className="bloc__title "> Connexion Péritél
                    <Col id="bt3" ><button id="color-btn" class="btn btn-danger" type="submit">Ajouter atout</button></Col>
                    </Card.Title>  
                                    
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                            {/* <div>
                            <Col id="bt2" ><button type="button">Ajouter atout</button></Col>
                            </div> */}
                            
                                <Col id="drop" lg="6">
                                    <Form.Control as="select" placeholder="Sélectionner une valeur">
                                        <option>Sélectionner une valeur</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Form.Control>
                                       
                                 </Col>
                                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                 <div id="ou">OU</div>
                                 <Col id="col_2" sm="4">
                                    <Form.Control type="text" placeholder="" />
                                </Col>

                                
                            </Form.Row>
                                                     
                       </Form.Group>
                    
                    </Form>
                    </Card>
                    </div>
                     <br/>

                     <div id="Péritél" className="text-muted text-size-details"> 
                    <Card bg="light" >
                    <Card.Title id="title" className="bloc__title">Optimisation d'image</Card.Title>  
                    <Col id="bt2" ><button id="color-btn" class="btn btn-danger" type="submit">Ajouter atout</button></Col>
                   
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                                 <Col id="vh">
                                    {/* <Form.Control type="text" placeholder=" Text libre NL" /> */}
                                    <input id="input_2" type="text" class="form-control"  placeholder=" Text libre NL"/>
                                    <br/>
                                    {/* <Form.Control type="textPath" placeholder=" Text libre FR" /> */}
                                    <input id="input_2" type="text" class="form-control" placeholder=" Text libre NL"/>
                                </Col>
                             
                                
  
                            </Form.Row>
                                                     
                       </Form.Group>
                    
                    </Form>
                    </Card>
                    </div> 
                    <br/>   
                    <div id="Péritél" className="text-muted text-size-details">  
                    <Card bg="light">
                    <Card.Title id="title" className="bloc__title">Connex.Vidéo(Calc)</Card.Title>  
                    <Col id="bt2" ><button id="color-btn" class="btn btn-danger" type="submit">Ajouter atout</button></Col>
                    <Form>
                        <Form.Group>
                            <Form.Row className="mt-2">
                                 <Col>
                                    
                                    <input id="input_2" type="text" class="form-control" placeholder="Calculation"/>
                                </Col>
                                
                               
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

       
        return <div className=" container-fluid content">
 <Row>
                
                <Col >
                {this.mapAttrToTags()}
                </Col>
            </Row>

            <Row>
                <Col md="3" >
                    {this.renderCardGeneralInfo()} 
                </Col>
                <Col md="3">
                    {this.renderCardVandenInfo()}
                </Col>
            </Row>

            <Row>
                <Col md="6">
                {this.renderCardTag()}
                </Col>
                
            </Row>
            <Row>
                <Col md="8">
                   {this.renderCardAttr()}
                </Col>
            </Row>
            <Row>
                 <Link id="link" class="btn btn-dark" to="/home">Retour à la liste</Link>
            </Row>
        </div>
    }
}