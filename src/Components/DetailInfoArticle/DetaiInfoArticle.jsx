
import { Container, Row, Col, Table } from "react-bootstrap";
import React from 'react';





class DetailInfoArticle extends React.Component{

   

  render (){

    return (

        <div>
        <Container className="content bs-margin-top">
				<Row>
					<Col md={3}>
						<h2 align="center"> Detail InfoArticle  </h2>
					</Col>
				</Row>
				<Row>
					<Col md={{ span: 10, offset: 1 }}>
						<Table >
							<thead>
                                <h6>Informations Generales</h6>

                                <br/>
                                <br/>
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
                            <br/> <br/>
                            <br/>
                            <h6>Informations vanden Borre</h6>
                            <tr>
                              <th>CODIC</th>
                              <th>8265720</th>
                              <th> Nom CP</th>
                              <th>S1333/41 </th>

                            </tr>
                            <tr>
                              <th>Gamme</th>
                              <th>M</th>
                              <th>Famille</th>
                              <th>Rasoir Homme</th>

                            </tr>
							</thead>
							<tbody>
							
							
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
      
</div>
    );


  }




}



export default DetailInfoArticle;