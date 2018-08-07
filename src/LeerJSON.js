//Leer un JSON
import React, { Component } from 'react'
import peliculas from './data.json'

//Esto sirve para acceder ASSETS ubicados en el directorio: 'public'.
// https://stackoverflow.com/questions/44154939/load-local-images-in-react-js
var directorioPublico = process.env.PUBLIC_URL


class LeerJSON extends Component {
  render() {
    return ( 
      <ul> {
        peliculas.map(function (miPelicula) {
          return <li > { miPelicula.id } - { miPelicula.title } </li>;
        })
      } 
      <li> 
        <img src = { directorioPublico + '/test.jpg' }  alt = "logo" /> </li>
      </ul>
    );
  }
}

export default LeerJSON;