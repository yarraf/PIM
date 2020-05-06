import React from 'react';
import {Row,Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default class DetailView extends React.Component{
    state={
        currentCodic:""
    }
    componentDidMount(){
        let currentCodic=localStorage.getItem('SELECTED_CODIC');
        this.setState({currentCodic})
    }

    render(){
        return  <Container>
                <Row><h2>Page Détail de l'article {this.state.currentCodic}</h2></Row>    

                <Row><Link to="/home">Retout à la liste d'articles</Link></Row>            
            </Container>
        
    }
}