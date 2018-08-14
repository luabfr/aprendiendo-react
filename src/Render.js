import React ,{Component} from 'react'

class MiRender extends Component{

	constructor( props ){
		super( props )
		this.state = {
			mensaje: "mensaje inicial"
		}
	}

	render(){
		// Esto solo se renderizara si existe el state de valor 'mensaje inicial'
		// return this.state.mensaje === 'mensaje inicial' ? 'si!' : null

		// Renderizando FRAGMENTOS: Mediante un ARRAY (con KEY)
		return[
			<h1 key="a">soy item 1</h1>,
			<p key="b">Soy item 2</p>,
			<em key="c">Item 3</em>,
			// <ElementoFicticioOKitem4 key="d"/>
			<strong key="e">Item 5</strong>
		]
	}
}

export default MiRender
