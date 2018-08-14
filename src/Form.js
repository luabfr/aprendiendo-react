import React , {Component} from 'react'

class MiFormulario extends Component {

	constructor(){
		super()
		this.state = {
			inputNombre : "seu nome",
			inputApellido : "@",
			inputTerminos : true

		}
	}


	//manejadorDeClick = (e) => {
	manejadorDeSubmit = ( e ) => {
		// En HTML, si no hay boton de submit, el ULTIMO boton que se encuentre en el formulario, automaticamente funcionara como SUBMIT. 
		// Para que esto no pase, utilizamos e.preventDefault() 
		e.preventDefault()
		console.log(this.state);
		
		// Metodo A
		//const nombreConRef = this.inputNombre.value
		// Metodo B
		//const nombre = document.getElementById("nombre").value
		//const apellido = document.getElementById("apellido").value

		
		//console.log({ nombreConRef , apellido });
	
		
	}
	manejadorDeOnChange = ( e ) => {
		console.log("onChange");
		// Nos muestra en consola, cada vez que cambiamos el valor del CHECKBOX
		console.log( e.target.checked );
		this.setState({ inputTerminos : e.target.checked })
		
	}
	

	render(){
		return(
			<div>
				<h4>Formulario</h4>
				<form onSubmit={ this.manejadorDeSubmit }>
					<p>
						{/* Este 'for' está mal escrito. Lo correcto es 'htmlFor' */}
						< label htmlFor = "nombre" > Nombre: </label>
						<input
							id="nombre"
							name="userNombre"
							onChange={ e => this.setState({ inputNombre: e.target.value })}
							placeholder="Ingresar nombre"
							// El atributo REF acepta una funcion que tiene como parametro la referencia del elemnto
							ref={inputElement => this.inputNombre = inputElement}
							value={this.state.inputNombre}
							/>
					</p>
					<p>
						<label htmlFor="apellido">Apellido:</label>
						<input
							id="apellido"
							name="userApellido"
							onChange={ e => this.setState({ inputApellido: e.target.value })}
							placeholder="Ingresar apellido"
							value={this.state.inputApellido}
							/>
					</p>
					<p>
						<label>
							<input
								checked={this.state.inputTerminos} 
								onChange={this.manejadorDeOnChange} 
								type ="checkbox"/>
							Aceptar terminos
						</label>
					</p>

					<button > Enviar </button>	
					
				</form>
			</div>
		)
	}
}

export default MiFormulario