import React,{useEffect} from 'react';
import { Container, Row, Col, Table } from "react-bootstrap";
import Overview from '../OverView/OverView';
import './home.scss';
import { connect } from "react-redux";
import { getArticles } from '../../actions/userArticlesAction'
const HomeView=(props)=> {
	useEffect(() => {
    props.getArticles()
		
    //eslint-disable-next-line
	}, []);	
	console.log(props.userArticle.articles);
		return (
			<Container className="content bs-margin-top">
				<Row>
					<Col md={3}>
						<h2> Liste articles  </h2>
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
								{ props.userArticle.articles.Count != 0 ? props.userArticle.articles.map((article, index) => (
									<tr key={index}>
										<td>{article.CODIC}</td>
										<td>{article.NAMECP}</td>
										<td>{article.MARQUE}</td>
										<td>{article.FAMILY}</td>
									</tr>
								)) :
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

const mapStateToProps = (state) => ({
	userArticle: state.userArticle,
});
export default connect(mapStateToProps, { getArticles })(HomeView);