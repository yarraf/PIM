import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import HomeView from "./Components/home/HomeView";
import DetailInfoArticle from './Components/DetailInfoArticle/DetaiInfoArticle';

function App(props) {


  return (
    <div>
      <HomeView />
    </div>
  );
}


export default App;
