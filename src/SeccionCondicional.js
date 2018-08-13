import React , {Component} from 'react'
import JSONpeliculas from './json/peliculas.json'




class ItemDelJSON extends Component{
  render(){
    const { propPelicula } = this.props

    return(
      <li>
        ID: {propPelicula.id} - Titulo: {propPelicula.titulo} 
      </li>
    )
  }
}

class TrabajandoListas extends Component{

  render(){
    const numeros = [ 1,1,3,4,5]
    return(
      <div className="TrabajandoListas"> 

        {/* ---------------------------------------------------- */}
        <h4>Trabajando con listas</h4>
        <ul>
          {numeros.map( (elNumero , indice) => {
            return <li key={indice} > Soy el numero {elNumero} </li>
            
          })}
        </ul>

        {/* ---------------------------------------------------- */}
        <h4>Transformando cada OBJETO de un JSON en un un LI</h4>
        <ul>
          { JSONpeliculas.map( (cadaPelicula, indice) => {
              //return <li key={indice}> Objeto {indice}: {cadaPelicula.titulo} </li>
            return <ItemDelJSON key={cadaPelicula.id} propPelicula={ cadaPelicula }/>
          })}
        </ul>

      </div>
    )
  }

}

export default TrabajandoListas