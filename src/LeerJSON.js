//Leer un JSON
import React, { Component } from 'react'
// Levanto el archivo JSON
import nombres from './json/nombres.json'
import peliculas from './json/peliculas.json'
import peliculas2 from './json/peliculas2.json'


/* Escritura de JSON
*********************************************************/
// Instale una librería de NODE llamada "write-json-file" --- no me anda
// Instale una libreria llamada: "jsonfile" (npm install --save jsonfile) --- no me anda




//Esto sirve para acceder ASSETS ubicados en el directorio: 'public'.
// https://stackoverflow.com/questions/44154939/load-local-images-in-react-js




// genero un OBJETO Js
let miEstado = {
  name: "Example",
  age: "21",
  description: "Some text here."
}
console.log("Objeto Js");
console.log(miEstado);
// Convierot el Objeto Js a JSON
console.log("Objeto JSON");
console.log(JSON.stringify(miEstado));





/*class EscribirJSON extends Component {
  render() {
    return (
      <span> EscribirJSON </span>
    )
  }
}*/
console.log("------------------------------");
console.log("JSON nombres");
console.log(nombres);
console.log("JSON peliculas2");
console.log(peliculas2);
console.log("------------------------------");





function actualizame( mensaje ){
  console.log(mensaje);
}






class LeerJSON extends Component {


 

  constructor() {
    //inicializamos y declaramos un STATE que usamos para evaluar el condicional
    super()
    this.state = {
      nombreState: nombres.nombre1
    }
  }
   //Manejo de evento onClcik
  handleClick=( ) => {

    // Actualizo el State de this.nombreState
     this.setState({
       nombreState: "Luciano"
     })
  }



  render() {
    return ( 
      // Imprimo en pantalla una lista con las propiedades del objeto
      <div id="miWrapper">
      <h6>Lista de ITEMS leidos de un JSON</h6>
        <ul> {
          peliculas2.map(function (miPelicula) {
            return <li key={ miPelicula.id }> { miPelicula.id } - { miPelicula.title }  </li>;
          })
        }         
        </ul>
        
        
        {/* <EscribirJSON /> */}

        {/* Anda OK */}
        <h6>Modificando el valor de un STATE que toma su VALOR INICIAL de un JSON</h6>

        <button onClick={ this.handleClick }>Cambiar valor</button>
        <span> JSON/State: {this.state.nombreState} </span>
        
      </div>
    );
  }
}

export default LeerJSON;