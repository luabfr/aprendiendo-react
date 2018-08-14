import React, { Component } from 'react'

class MiComponentDidMount extends Component{

	constructor( props ){
		super( props )
		this.state = {
			scroll:0
		}
	}




	//Se ejecuta ANTES del Render
	componentWillMount() {
		console.log("componentWillMount");
		
		//DEBUGGER: sirve para ver en el navegador, paso a paso lo que va sucediendo. (Pausa la carga, y tiene un botn PLAY para seguir)
		//debugger


	}




	//Se ejecuta DESPUES del Render
	componentDidMount(){
		console.log("componentDidMount");	

		//Si ejecutamos un setState(), el render() se volvera a ejecutar
		//this.setState({ cualquierState : "algo"	})

		document.addEventListener('scroll' , () => {
			console.log( window.scrollY );
			this.setState({
				scroll: window.scrollY
			})
		})
	}





	render(){
		console.log("render");
		
		return (
			<div>
				<div>Scroll: {this.state.scroll}</div>
				<div>Div 2</div>
				<div>Div 3</div>
				<div>Div 4</div>
			</div>
		)
	}
}

export default MiComponentDidMount
