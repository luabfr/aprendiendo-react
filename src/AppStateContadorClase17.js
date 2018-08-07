//Seccion 3, clase 17 - State II Actualizar estado mediante setState()

import React , { Component } from 'react'



//Seccion 3, Tarea II - Otra forma de inicializar el state de tu componente (State sin Constructor)
// Leer: http://aprendiendoreact.com/post/como-inicializar-el-state-de-un-componente-con-class-properties/
class ContadorConSetState extends Component {
  // Una nueva funcionalidad que está proxima a agregarse a JS (Class Field), 
  // es la posibilidad de declarar el STATE sin necesidad de hacerlo dentro del CONSTRUCTOR.  
  // DECLARAMOS EL STATE
  constructor(){
    super()
    this.state = {
      contador: 1
    }
    // Actualiza el State de contador cada 1 Segundo.
    setInterval(() => {
      this.setState( {contador: this.state.contador + 1})
    }, 1000)
  }
  


  render() {
    return <p > ContadorConSetState: { this.state.contador } </p>  
  }
}





class AppStateContadorConSetState extends Component{
  render(){
    return(
      < div className = "AppStateContadorConSetState" >
        <p>Primer componente con setState()</p>
        <ContadorConSetState />
      </div>
    )
  }
}

export default AppStateContadorConSetState