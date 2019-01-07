import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,CardTitle, CardSubtitle } from 'reactstrap';

export default class Home extends React.Component {
  render() {
    const img1 = {width: "185px", height: "150px"};
    return (
     <div>
      <Card>
      <CardBody>
          <CardTitle><h1>Juan Alejandro Zapeta Pérez</h1></CardTitle>
          <CardSubtitle>¡Bienvenido a mi prueba!</CardSubtitle>
        </CardBody>
       <center>
        <CardImg top 
        style={img1}
        src="https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/28467784_1900045070070896_458026677493707270_n.jpg?_nc_cat=104&_nc_ht=scontent.fgua3-2.fna&oh=43d2f1efd6f3dd1671e6c8cb848a625a&oe=5CD6F8A6"
         alt="Alejo Zapeta" />
       </center>
        <CardBody>
          <CardText>
            Me llamo Juan Alejandro, tengo 26 años. Me encanta programar en Python :)
            He programado en PythonWeb con tornado, python desktop con Tkinter. y demás 
            Te recomiendo pasar a checkar una app destkop que desarrollé en Python, es como un PostMan lite ;).
            También pasar por un convertidor Web escrito en Tornado, y el frontEnd con BulmaCss y VueJs (verás que la carga inicial es muy muy rápida)
          </CardText>
           <CardLink href="mailto:alejandrozapeta@gmail.com">Mi email: alejandrozapeta@gmail.com</CardLink>
           <CardLink target="_blank" href="https://github.com/zapetin52/apieasy/blob/master/apieasy">"PostMan" Lite</CardLink>
           <CardLink target="_blank" href="https://myplaylist-youtubemp3.com/">Convertidor Listas Online</CardLink>
        </CardBody>
      </Card>
    </div>
    );
  }
}