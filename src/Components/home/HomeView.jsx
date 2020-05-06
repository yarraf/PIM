import React,{useEffect} from 'react';
import { Container, Row, Col, Table } from "react-bootstrap";
import Overview from '../OverView/OverView';
import './home.scss';
import {connect} from 'react-redux';
//import {getArticleByCodic} from '../../actions/userArticlesAction'



 class HomeView extends React.Component{
	constructor(props){
		super(props);
		this.state={
			isSelected:false,
			articleSelected:""
		}

		//this.getDetailArticle=this.getDetailArticle().bind(this);
	}

	handlArticle=(value)=>{		
		let isSelected=true, articleSelected=value;
		localStorage.setItem('SELECTED_CODIC',value);
		this.setState({isSelected,articleSelected});
		this.props.getDetail();
	}
	render(){
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
								
							{this.props.articles ? this.props.articles.map((article, index) => (
									<tr key={index} onClick={(e)=> {e.preventDefault(); this.handlArticle(article.CODIC);}}>
										<td>{article.CODIC}</td>
										<td>{article.NAMECP}</td>
										<td>{article.MARQUE}</td>
										<td>{article.FAMILY}</td>
									</tr>))
								:
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

//const mapStateToProps = ({userArticles})=> ({userArticles});
//const mapDispatchtoProps={getArticleByCodic}
//export default connect(null,mapDispatchtoProps)(HomeView);
export default HomeView;
