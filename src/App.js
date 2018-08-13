import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OtraApp from './OtraApp';  // Seccion 3, Clase 15: .defaultProps
import AppStateContador from './AppStateContador'; // Seccion 3, Clase 16: Gestión de State
import AppStateContadorConSetState from './AppStateContadorClase17'; // Seccion 3, Clase 17: Actualizacion de State con setState()
import AppStateContadorConPropagacion from './AppStateContadorClase18'; // Seccion 3, Clase 17: Actualizacion de State con setState()
import LeerJSON from './LeerJSON';  // Leer JSON
import ConditionalSection from './sections/conditional'
import TrabajandoListas from './SeccionCondicional'; // Seccion 4 - Clase 24, 25



/* Metodo 1 - Esta funcion es un COMPONENTE de nombre Hello ( <Hello /> ) 
*****************************************************************/
/* function Hello(props) {
  return <h2>{props.title}</h2>
}*/

/* Metodo 2 - Esto es lo mismo, pero con Arrow Function
******************************************************************/
/*const Hello = (props) => < h2 > {  props.title } < /h2> */

/* Metodo 3
******************************************************************/
class Hello extends Component{
  render(){
    /*No es valido recibir los 'props' desde render(), por ello utilizamos this.props
    */
    return <h2>{this.props.title}</h2>
  }
}


class Text extends Component{
  render(){
    // Destructuracion de Props
    const {  
      arrayOfNumbers , 
      estaActivado ,
      multiplicar ,
      objectWithInfo ,
      title
    } = this.props

    const textoSegunBooleano = this.props.boolean ? 'Cierto':'Falso'
    const textoSegunBooleano2 = estaActivado ? 'Esta Activado' : 'No Esta Activado'
    const mappedNumbers = arrayOfNumbers.map( n => n * 2 )
    const mappedNumbersMultiplicar = arrayOfNumbers.map( multiplicar )

    return (
      <div>
        <p>text:{this.props.text}</p>
        <p>number:{this.props.number}</p>
        <p>booleano:{textoSegunBooleano}</p>
        <p>estaActivado:{textoSegunBooleano2}</p>
        <p>arrayOfNumbers: {arrayOfNumbers}</p>
        <p>arrayOfNumbers.join:{arrayOfNumbers.join(',')}</p>
        <p>mappedNumbers: {mappedNumbers.join(',')}</p>
        <p>Objeto.key1: {objectWithInfo.key1} </p>
        <p>mappedNumbersMultiplicar Con Funcion: {mappedNumbersMultiplicar.join(',')}</p>
        
        {/* Para que REACT evalue una VAR, tiene que estar entre {} */}
        {title}


      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Hello title="Hola, soy un props" />
        </header>

        {/* Si pasamos una variable Booleana, por defecto devolvera TRUE*/}
        {/* Esto lo comenté par apoder leer el JSON */}
        {/* <Text 
          arrayOfNumbers={[2,3,10]}
          boolean={true} 
          estaActivado
          multiplicar = {(numero)=> numero * 4  }
          number={2} 
          objectWithInfo = { { key1 : 'Primer Valor', key2 : 'otro valor' } }
          text='Texto en string/'  
          title={<h1>Este es el titulo</h1>}
        />         
        <hr/>
        <OtraApp />
        < hr / >
        <AppStateContador />
        <AppStateContadorConSetState/>
        < AppStateContadorConPropagacion / > */}
        <hr/>
        < LeerJSON / >
        <hr />
        <TrabajandoListas/>
        
        <ConditionalSection/> {/* Clase 20 */}
      </div>
    );
  }
}

export default App;
