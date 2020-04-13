import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {Container, Row , Col } from 'reactstrap';
import data from './Data.json'

class OverView extends React.Component {
  constructor(){
    super()
    this.state={
      items:null,
      loading:true
    }
  }
  componentDidMount (){
    this.setState({items:data,loading:false})
    
  }
   renderData() {
     console.log(this.state.loading)
     if(!this.state.loading){
       console.log(this.state.items.LISTARTICLE)
       return this.state.items.LISTARTICLE.map((item,i)=>{
        return (
          <tr>
            <td>{item.BARNEGATIVE}</td>
            <td>{item.BARPOSITIVE}</td>
            <td>{item.CODIC}</td>
            <td>{item.CREATIONDATE}</td>
            <td>{item.DISPLAYPROGRESSATTRIBUTE}</td>
            <td>{item.FAMILY}</td>
            <td>{item.FNACSKU}</td>
            <td>{item.MARQUE}</td>
            <td>{item.NAMECP}</td>
            <td>{item.URL}</td>
            <td>{item.VISIBILTYINFOFNAC}</td>
          </tr>
        )
      })
     } else{
      return 
     }
   
}
      render (){
        // console.log(this.state.items[0])
      return( 
        
           <div className="OverView">
             <h1 align='center'> Liste d'article  </h1> 
            <ReactBootStrap.Table  className="table1" variant="dark">
          <thead>
            <tr>
              <th>BARNEGATIVE</th>
              <th>BARPOSITIVE</th>
              <th>CODIC</th>
              <th>CREATIONDATE</th>
              <th><div data-toggle="tooltip" data-placement="right" title="DISPLAY PROGRESS ATTRIBUTE">DPA</div></th>
              <th>FAMILY</th>
              <th>FNACSKU</th>
              <th>MARQUE</th>
              <th>NAMECP</th>
              <th>URL</th>
              <th><div data-toggle="tooltip" data-placement="left" title="VISIBILTY INFOFNAC">VISIBILITY</div></th>
            </tr>
          </thead>
          <tbody>
            {this.renderData()}
          </tbody>
        </ReactBootStrap.Table>
                      
        </div>
        
      );
      }


}

export default OverView;