import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Table, button } from "react-bootstrap";
import {Redirect} from 'react-router-dom';



export default class DetailView extends React.Component{

    state={
        currentCodic:"",
        currentFamily:"",
        redirect: false
    }
    setRedirect = () => { 
      this.setState ({ 
        redirect: true 
      }) 
    } 
    renderRedirect = () => { 
      if (this.state.redirect) { 
        return <Redirect to = '/ home' /> 
      } 
    } 

    componentDidMount(){
      let currentCodic=localStorage.getItem('SELECTED_CODIC');
      this.setState({currentCodic})
      let currentFamily=localStorage.getItem('SELECTED_FAMILY')
      this.setState({currentFamily})
    }


    


    
    
    render(){
        return  <Container>
            <Row><h2>Page Détail de l'article {this.state.currentCodic}</h2>
                <Col md={{ span: 10, offset: 1 }}>
              <Table >
                <thead>
                <br />
                <br />

                  <tr>Informations Generales</tr>
                 
                  <tr>
                    <th>Marque</th>
                    <th>philips</th>
                    <th> Status d'approvisionnement</th>
                    <th>G</th>

                  </tr>
                  <tr>
                    <th>Fournisseur</th>
                    <th>PHINEWPEM</th>
                    <th> EAN</th>
                    <th>6508315467500</th>

                  </tr>
                  <br /> <br />
                  <br />
                  <tr>Informations vanden Borre</tr>
                  <tr>
                    
                    <th>CODIC {this.state.currentCodic}</th>
                    <th>8265720</th>
                    <th> Nom CP</th>
                    <th>S1333/41 </th>

                  </tr>
                  <tr>
                    <th>Gamme</th>
                    <th>M</th>
                    <th>Famille {this.state.currentFamily}</th>
                    <th>Rasoir Homme</th>

                  </tr>
                  
                </thead>
                

                <tbody>

                </tbody>
              </Table>
            </Col>
            
                
                </Row> 
                <Row> {this.renderRedirect ()}
                  <button onClick = {this.setRedirect}>Retour à la liste d'articles</button></Row>            
            </Container>
        
    }
}