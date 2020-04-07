import React from 'react';
import * as ReactBootStrap from "react-bootstrap";


class OverView extends React.Component {
      render (){
     const players = [
         {position: "Forward", Name: "lebron", Team: "lacker"},
         {position: "Guard", Name: "Russel WestBrook", Team: "Rockets"},
         {position: "Guard", Name: "jamesHarden", Team: "Rockets"},
         {position: "Forward", Name: "luckadominic", Team: "Havrelicks"},
     ]

     const renderPlayer = (player, index) => {
         return (
             <tr key ={index}>
               <td>{player.position}</td>
               <td>{player.name}</td>
               <td>{player.team}</td>
             </tr>
         )
     }

      return( 
          
           <div className="OverView">
          <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </ReactBootStrap.Table>
        </div>
      );
      }
    
    }

  

  export default OverView;