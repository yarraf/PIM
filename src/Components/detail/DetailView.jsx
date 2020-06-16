import React from 'react';
import { Row, Container, Col, Image, Card, Button, Form, button, Toggle, Collapse, Accordion,Icon, } from 'react-bootstrap';
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

    mapAttrToTags() {
        this.props.artTags.map((tag) => (

            tag.listAttr = this.props.artAttr

        ))
        console.log("test" + this.props);

    }

    renderCardGeneralInfo = () => {
        const article = this.props.art.article;
        return (
            <div id="a" className="mt-2">
                <Card bg="light">

                    <Card.Body class="padding-body">
                        <Card.Title className="text-uppercase"><h6>Information générales</h6></Card.Title>
                        <div className="text-muted text-size-details">

                            <div class="mr1" className="bd-highlight mr-1 "> <b>Marque :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div id="c">{article && article.MARQUE}</div>  </div>
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

                    <Card.Body class="padding-body">
                        <Card.Title className="text-uppercase"><h6>Informations VandenBorre</h6></Card.Title>
                        <div className="text-muted text-size-details">


                            <div className="bd-highlight mr-4"><b>Codic :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div id="c">{article && article.CODIC}</div></div>
                            <div className="bd-highlight mr-4"><b>Famille :</b>&nbsp;&nbsp;&nbsp; <div id="c">{article && article.FAMILY} </div></div>
                            <div className="bd-highlight mr-4"><b>Date de creation :</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div id="v">{article && article.CREATIONDATE}</div> </div>
                            <div className="bd-highlight"><b>Nom CP :</b> &nbsp;<div id="c">{article && article.NAMECP}</div></div>

                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }

    renderCardTag = () => {

        return (
            <div id="Péritél_1" className="mt-1.5">
                <Card bg="light">
                    <Accordion defaultActiveKey="0">
                            <Accordion.Toggle as={Card.Header} eventKey="1" class="title-padding">
                                <Card.Title className="bloc__title text-uppercase">Tags <span class="caret"></span></Card.Title>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    {this.props.artTags.map((tag, index) => (
                                        <Col key={index} sm="6" >
                                            <Tag key={index} Name={tag.NAME} />

                                        </Col>

                                    ))}
                                    <Form>
                                        <Form.Group>
                                            <Form.Row>
                                                <Col>
                                                    <div class="container h-100">
                                                        <div class="d-flex justify-content-center h-100" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                        <div class="searchbar" >
                                                   <input class="search_input" type="text" name="" placeholder="Search..." />
                                                   <a href="#" class="glyphicon glyphicon-search" id="icon"  ></a>
                                                        </div>
                                                        </div>
                                                        </div>
                                                </Col>
                                            </Form.Row>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Accordion.Collapse>
                    </Accordion>
                </Card>
            </div>
        )
    }

    renderCardAttr = () => {
        console.log(this.props)
        return (

            <div id="Péritél_1" className="mt-1.5" md="6">

                <Card bg="light">

                    <Accordion defaultActiveKey="0">

                        <Accordion.Toggle as={Card.Header} eventKey="1" class="title-padding">
                            <Card.Title className="bloc__title text-uppercase">Attributs <span class="caret"></span> </Card.Title>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div id="Péritél" className="text-muted text-size-details">
                                    <Card id="card" bg="light">
                                        <Card.Title id="title" className="bloc__title "> Connexion Péritél
                    <Col ><button class="btn btn-danger btn-style" type="submit">Ajouter atout</button></Col>
                                        </Card.Title>

                                        <Form>
                                            <Form.Group>
                                                <Form.Row className="mt-2">
                                                    {/* <div>
                            <Col id="btn-style" ><button type="button">Ajouter atout</button></Col>
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
                                <br />

                                <div id="Péritél" className="text-muted text-size-details">
                                    <Card bg="light" >
                                        <Card.Title id="title" className="bloc__title">Optimisation d'image</Card.Title>
                                        <Col><button class="btn-style btn btn-danger" type="submit" >Ajouter atout</button></Col>

                                        <Form>
                                            <Form.Group>
                                                <Form.Row className="mt-2">
                                                    <Col id="vh">
                                                        {/* <Form.Control type="text" placeholder=" Text libre NL" /> */}
                                                        <input id="input_2" type="text" class="form-control" placeholder=" Text libre NL" />
                                                        <br />
                                                        {/* <Form.Control type="textPath" placeholder=" Text libre FR" /> */}
                                                        <input id="input_2" type="text" class="form-control" placeholder=" Text libre FR" />
                                                    </Col>
                                                </Form.Row>
                                            </Form.Group>
                                        </Form>
                                    </Card>
                                </div>
                                <br />
                                <div id="Péritél" className="text-muted text-size-details">
                                    <Card bg="light">
                                        <Card.Title id="title" className="bloc__title">Connex.Vidéo(Calc)</Card.Title>
                                        <Col><button class="btn btn-danger btn-style" type="submit">Ajouter atout</button></Col>
                                        <Form>
                                            <Form.Group>
                                                <Form.Row className="mt-2">
                                                    <Col>
                                                        <input id="input_2" type="text" class="form-control" placeholder="Calculation" />
                                                    </Col>
                                                </Form.Row>
                                            </Form.Group>
                                        </Form>
                                    </Card>
                                </div>   </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
                </Card>

            </div>

        )

    }


    render() {


        return <div class="align-self-center" id="margin" responsive>
            <div className=" container content" id="margin"  responsive>

                <Row>

                    <Col >
                        {this.mapAttrToTags()}
                    </Col>
                </Row>

                <Row>
                    <div>
                        {this.renderCardGeneralInfo()}
                    </div>
                    <Col md="3" responsive="md">
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
                    <Link id="link" class="btn btn-danger"  to="/home">Retour à la liste</Link>
                </Row>

            </div>
        </div>
    }
}