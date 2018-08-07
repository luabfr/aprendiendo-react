//Seccion 3, clase 18 - State III Propagacion de estado del componente
//Seccion 3, clase 19 - State IV Iniciar state con props
import React , { Component } from 'react'





// Este COMPONENTE actualiza su contador cada 1 seg.
class ContadorConPropagacion extends Component {
  // Cuando utilizamos un constructor personalizado y queremos utilizar props ne nuestros componentes
  // debemos llamar al constructor de la clase que extendemos, pasandole las props que queremos recibir.
  // Estas, son recibidas en el constructor
  constructor(props){
    super( props )
    console.log()
    this.state = {
      // Iniciando STATE mediante PROPS
      contador: this.props.contadorInicial
    }
    setInterval(() => {
      this.setState( {contador: this.state.contador + 1 })
    }, 1000)
  }
  
  render() {
    return <ContadorNumero numero={ this.state.contador } />  
  }
}

// Declaramos el prop por default
ContadorConPropagacion.defaultProps ={
  contadorInicial : 0
}



class ContadorNumero extends Component{
  render(){
    console.log("ContadorNumero render()")
    return <span> {this.props.numero}</span>
  }

}




class AppStateContadorConPropagacion extends Component{
  render(){
    return(
      < div className = "AppStateContadorConPropagacion" >
        Primer componente con Propagacion y State Inicial mediante Props:
        <ContadorConPropagacion  contadorInicial={2500}/>
      </div>
    )
  }
}

export default AppStateContadorConPropagacion