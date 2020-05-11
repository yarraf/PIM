import React from 'react';
import {Row,Container,Col,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./detail.scss";

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
                <Col md={3}>
                    <div className={"left shadow p-2 mb-5 "}>
                        <h3 className="left__artcodic text-center mt-2">{article && article.CODIC }</h3>                        
                        <h3 className="left__artname text-center mt-2">{article && article.NAMECP }</h3>
                    
                    </div>
                </Col>
                    
                </Row>
           
                <Row> <Link to="/home">Retour à la liste</Link></Row>            
            </Container>
    }
}