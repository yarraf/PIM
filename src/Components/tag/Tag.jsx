import React from 'react';
import Attribut from '../attribut/Attribut';
import { Row, Container, Col, Image, Card, Button, Form } from 'react-bootstrap';

export default class Tag extends React.Component {

    constructor(props) {
        super(props);
        
    }
    
    render() {
 
        return <div className="Content-card shadow p-3 mb-5">
                   <span>{this.props.Name}  </span>
                   <span>{this.props.Id}</span>
                </div>

                      }
                    }