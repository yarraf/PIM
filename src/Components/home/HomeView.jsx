import React from 'react';
import {Container,Row,Col,Table} from "react-bootstrap";
import Overview from '../OverView/OverView';
import './home.scss';

class HomeView extends React.Component{



    render(){
        return(
            <Container className="content bs-margin-top">
                <Row>
                    <Col md={3}>
                        <h2>Liste articles</h2>
                    </Col>
                </Row>
                <Row>
                  <Col md={{ span: 10, offset: 1 }}>
                  <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>CODIC</th>
      <th>Name CP</th>
      <th>Brend</th>
      <th>Family</th>
    </tr>
  </thead>
  <tbody>
    {this.props.articles  && this.props.articles.Count>0 ? this.props.articles.map((article,index)=>(
        <tr key={index}>
            <td>{article.CODIC}</td>
            <td>{article.NAMECP}</td>
            <td>{article.MARQUE}</td>
            <td>{article.FAMILY}</td>
        </tr>
    )):
    <tr>
        <td colSpan="4">Empty</td>
    </tr>

}
  </tbody>
</Table>
                  </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeView;