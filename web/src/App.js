import React, { Component } from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CriptoMonedas from './components/cripto.js';
import Home from './components/acercamio.js';
import reducers from './reducers/reducer.js';

import './App.css';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({ baseURL:'https://api.coinmarketcap.com/v1',responseType: 'json'});

let store = createStore(reducers, applyMiddleware(axiosMiddleware(client)))


class App extends Component {
 constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
            <Navbar color="faded" light>
           
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
             <NavbarBrand href="/" className="mr-auto">AlejandroZapeta Prueba</NavbarBrand>
            <Collapse isOpen={!this.state.collapsed} navbar>
              <Nav navbar>
                <NavItem>
                 <Link to="/">Acerca de mi</Link>
                </NavItem>
                <NavItem>
                   <Link to="/criptomonedas">CriptoMonedas</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <div>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/criptomonedas" component={CriptoMonedas} />
          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
