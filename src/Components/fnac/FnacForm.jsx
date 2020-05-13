import React from 'react';
import {Form,Col,Card,Row,Button} from 'react-bootstrap';

export default class FnacForm extends React.Component{

 render(){
     return(
         
                <div className="mt-2">
                <Card bg="light">
                   
                <Card.Body>
                    <Card.Title className="bloc__title text-uppercase">Information fnac</Card.Title>                        
                        <Form>
                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column sm="2">
                                        SKU
                                    </Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="14343398" />
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Label column lg={2}>Libellé fnac</Form.Label>
                                    <Col>
                                        <Form.Control as="textarea" placeholder="Lbellé fnac" />
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mt-2">
                                    <Form.Label column lg={2}>Classe</Form.Label>
                                    <Col lg="6">
                                        <Form.Control as="select" placeholder="Classe fnac">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                     </Col>
                                     <Col><button type="button">choisir autre</button></Col>
                                </Form.Row>
                                <Form.Row className="mt-2">
                                    <Form.Label column lg={2}>Sous classe</Form.Label>
                                    <Col lg="6">
                                        <Form.Control as="select" placeholder="Sous classe fnac">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            </Form.Control>
                                    </Col>
                                     
                                </Form.Row>
                                <Form.Row className="mt-2">
                                    <Form.Label column lg={2}>Gamme</Form.Label>
                                    <Col lg="6">
                                        <Form.Control as="select" placeholder="Gamme fnac">
                                            <option>A</option>
                                            <option>B</option>
                                            <option>C</option>
                                            <option>D</option>
                                            <option>E</option>
                                            </Form.Control>
                                    </Col>                                                              
                                </Form.Row>
                                <Form.Row className="mt-2">
                                    <Form.Label column lg={2}>Fournisseur</Form.Label>
                                    <Col sm="10">
                                        <Form.Control plaintext readOnly defaultValue="None" />
                                    </Col>                                                           
                                </Form.Row>                           
                           </Form.Group>
                           <Button type="submit">Sauvegarder</Button>
                        </Form>
                </Card.Body>
                </Card>
               
                
                
            </div>
     );
 }
}