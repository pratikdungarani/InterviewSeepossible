import {useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Routers from './routes'


function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
