import React , {Component} from 'react'

class BotonEvento extends Component {
	// Inicializamos STATES
	constructor(){
		super()
		this.state = {
			mouseX : 0,
			mouseY : 0 
		}

		/* Como el EVENTO del MOUSE es un evento del NAVEGADOR, es necesario enlazar el THIS, para que el contexto sea el apropiado. (esto esta redactado para la mierda).
		*/
		// BIND: Esto sirve para que el THIs, haga bien SU referencia. 
		// this.manejadorDelMouseMove = this.manejadorDelMouseMove.bind( this )
		// La mejor alternativa es hacerlo con ARROW FUNCTION, y sin necesidad de DECLARAR esta linea.
		
	}


	//Metodo de la clase
	manejarClick(e){
		console.log("Evento Sintetico:");
		
		// EVENTO SINTETICO ------------------------------------------
		/* en Js el evento "onclick" es un evento NATIVO del navegador pero en REACT, es un evento ESPECIAL	llamado "SINTETIC EVENT". Este Evento SINTETICO envuelve el Evento nativo para hacer que sea compatible con todos los navbegadores que soporta REACT.
		Básicamente, sirve para manejar la compatibilidad entre navegadores.
		*/
		console.log(e)

		// Para acceder directamente al EVENTO NATIVO se puede utilizar la propiedad 'e.nativeEvent.
		console.log("Evento Nativo");
		console.log(e.nativeEvent);
		
		alert("hola click!")
	}


	// Funcion normal
	//manejadorDelMouseMove( e ){
	// Arrow Function
	manejadorDelMouseMove = ( e ) => {
		const { clientX , clientY } = e
		console.log("MouseMove");
		
		this.setState({ mouseX: clientX , mouseY: clientY })
		
	}


	render(){
		return(
			<div>
					<h4>Eventos</h4>
					<button onClick={ this.manejarClick }> Hola che!</button>
					<div 
						onMouseMove={this.manejadorDelMouseMove}
						style={{ border: '1px solid #666', marginTop: 10, padding: 10 }}>
						Mové el mouse dentro de este DIV.
						<p>{this.state.mouseX} , {this.state.mouseY} </p>
					</div>
			</div>
		)
	}
}

export default BotonEvento