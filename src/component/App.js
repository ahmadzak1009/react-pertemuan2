import React, { Component } from 'react';
import logo from '../logo/indihome.png';
import '../App.css';
import Grid from './Grid';
import Home from './Home/Home'
import { BrowserRouter as Router, Link } from "react-router-dom";
import '../style/style.css';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <nav className=" navbar navbar-expand-lg navbar-light bg-danger warna">
            <div className="container warna">
              <Link to="navbar-brand" to="#"><img className="logo" src={require('../logo/indihome.png')} alt="logo" /></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>


              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                  <li className="nav-item dropdown">
                    <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      PROMO<span></span></Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="" className="dropdown-item" href="#">PROMO</Link>
                      <Link to="" className="dropdown-item" href="#">Partnership</Link>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown</Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link to="" className="dropdown-item" href="#">Action</Link>
                      <Link to="" className="dropdown-item" href="#">Another action</Link>
                      <div className="dropdown-divider"></div>
                      <Link to="" className="dropdown-item" href="#">Something else here</Link>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">Pusat Bantuan</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="">
            <Home />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
