import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";


function App()  {
  const players = [
    {position: "Forward", Name: "lebton", Team: "lacker"},
    {position: "rock", Name: "kkkk", Team: "lacker"},
    {position: "gkl", Name: "gtp", Team: "olm"},
    {position: "nex", Name: "alex", Team: "luvk"},
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

  return (
    <div className="App">
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

  );}

export default App;
