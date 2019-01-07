import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { connect } from 'react-redux';

function criptomonedas1() {
  return {
    "types": ['LOAD','AWESOME','OH_NO'],
    "payload": {"request":{url:'/ticker/?limit=10'}}
  }
}

class CriptoMonedas extends React.Component {

  componentDidMount() {
     this.props.criptomonedas1();
  }

  render() {
    var cripto1 = this.props.criptoz;
    if(cripto1.loading === true)  return (<h1>OBTENIENDO LAS CRIPTOMONEDAS :) </h1>);
    
    return (
      <ListGroup>{cripto1.criptxo.map(cripto => <ListGroupItem>{cripto.name} -  <Badge  color="success" pill>USD {cripto.price_usd}</Badge></ListGroupItem>)}</ListGroup>
    )
  }
}

const mapStateToProps = state => {return {"criptoz": state};};
const mapDispatchToProps = {criptomonedas1};

export default connect(mapStateToProps, mapDispatchToProps)(CriptoMonedas);