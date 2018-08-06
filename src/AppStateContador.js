//Seccion 3, clase 16 - Gestión del State de ReactJS

import React , { Component } from 'react'

/*
class Contador extends Component{
  constructor(){
    //super(), ejecuta el metodo constructor de la clase que extendemo, en este caso, el constructor de Component
    super()
    //Iniciamos el STATE del componente, para ello utilizamos THIS, que es el CONTEXTO del COMPONENTE
    //Le pasamos un OBJ con el estado inicial del componente
    this.state = { contador: 1 }

  }
  render(){
    const contador = 0
    // return <span>Contador: { contador } </span> //Esto devuelve 0
    return <span>Contador: { this.state.contador } </span>  //Esto devuelve 1
  }
}
*/


//Seccion 3, practica - Otra forma de inicializar el state de tu componente (State sin Constructor)
// Leer: http://aprendiendoreact.com/post/como-inicializar-el-state-de-un-componente-con-class-properties/
class Contador extends Component {
  // Una nueva funcionalidad que está proxima a agregarse a JS (Class Field), 
  // es la posibilidad de declarar el STATE sin necesidad de hacerlo dentro del CONSTRUCTOR.  
  state = {
      contador: 1
  }

  
  render() {
    const contador = 0
    // return <span>Contador: { contador } </span> //Esto devuelve 0
    return <span > Contador: { this.state.contador } </span>  // Esto devuelve 1
  }
}





class AppStateContador extends Component{
  render(){
    return(
      < div className = "AppStateContador">
        <p>Primer componente con state</p>
        <Contador />
      </div>
    )
  }
}

export default AppStateContador