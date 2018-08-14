/*
	Este ejemplo utiliza una API de la cotizacion del BITCOIN en Dolares, Euro, etc.


*/

import React ,{Component} from 'react'


class FetchEjemplo extends Component{

	// en 'bpi' guardaremos la respuesta del fetch() 
	state ={
		bpi:{}
	}


	
	//Se ejecuta luego del render. Cuando el componente ya està montado.
	componentDidMount(){
		//console.log("FetchEjemplo / componentDidMount")
		

		// Fetch, devolvera una PROMESA que tendra la respuesta de la peticion.
		// Es una serie de metodos que sirve para parsearla en el tipo de datos que queremos.
		// Fetch es algo propio de JS, y no solo de REACT. (Ver: https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Utilizando_Fetch)
		fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
			// Obtenemos la respuesta, en forma de un objeto JSON.
			.then( respuesta => respuesta.json() )
			//	Guardamos el objeto JSON en una variable
			.then( elObjeto => {
				//mediante desestructuralizacion, obtenemos el valor de 'bpi' de la API
				const{ bpi } = elObjeto
				//establecemos el nuevo Estado de 'bpi'
				this.setState({ bpi })
			})

		
	}

	// Currencies = Monedas
	_renderizarMonedas(){
		console.log(this.state.bpi)
		const { bpi } = this.state

		//Esto nos devolvera un Array con las KEYs de CADA Objeto
		const monedas = Object.keys( bpi ) // [ 'EUR' , 'GBP' , 'USD' ]
		
		return monedas.map( cadaMoneda  => 	(
				<div key={ cadaMoneda } > 													
						1 BTC es: 
						{ /* Accedo a la KEY 'rate', del OBJETO 'cadaMoneda' guardado en el ARRAY 'bpi', indicandole el indice ('cadaMoneda') */ }
						<em>{ bpi[ cadaMoneda ].rate } 	 </em>									
					<strong> { cadaMoneda }</strong> 
				</div>
		))
	} 


	render(){
		return(
			<div>
				<h4>Fetch Ejemplo / Precio del Bitcoin</h4>
				{this._renderizarMonedas() }
			</div>
		)
	}
}


class MiFetchAPI extends Component{
	//console.log("MiFetchAPI")
	
	render(){
		return(
			<div className="miAPI">
				<FetchEjemplo />
			</div>
		)
	}
}

export default MiFetchAPI
