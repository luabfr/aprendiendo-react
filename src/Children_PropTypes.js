import  React, {Component} from 'react'
import PropTypes from 'prop-types'



class Caja extends Component{
	render (){
		return (
			<div 
				style={{ border: '1px solid LightSlateGray', margin:5, padding:5, backgroundColor: 'LightBlue'}} >
				{this.props.children}
			</div>
		)
	}
} 



// Ejemplo: creamos un articulo como si tuviesemos un blog.
class Articulo extends Component{
	// PROPTYPES - Metodo 2
	static propTypes = {
		autor: PropTypes.string.isRequired
	}
	render(){
		// Desesctrunturando para evitar tener q escribir el 'this.prop'
		const{ autor, fecha, children, titulo} = this.props

		return(
			<section>
				<hr/>
				<h2>{titulo}</h2>
				{/* Condicional '&&': si existe Autor, renderiza el <p> */}
				{ autor && <p>Escrito por: <em> {autor} </em></p>}


				<Caja>{fecha}</Caja>
				<article>
					{children}
				</article>
			</section>
		)
	}
}

// PROPTYPES - Metodo 1
// El valor será un OBJETO donde cada KEY será el valor que queramos revisar.
/*
Articulo.propTypes ={
	autor: PropTypes.string
}
*/



class AprendiendoChildren extends Component{
	render(){
		return(
			<div>
				<h4>Trabajando Children prop</h4>	
				{ /* Children es un PROP ESPECIAL que nos devuelve  el contenido que se encuentra dentro de nuestras etiquetas de apertura y cierre. */ }
				<Articulo 
					autor="Roberto"
					fecha={ new Date().toLocaleDateString() }
					titulo="Mirá este nuevo Articulo del Blog!">
					<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste assumenda odio hic fugit aut quod aliquid neque dignissimos tempora autem molestias ducimus nihil dolorem, earum quam laudantium veritatis amet sequi?</p>
				</Articulo>
				< Articulo
					autor = {true} /*Esto  hace que tire error el isRequire del PropTypes*/
					fecha = {new Date().toLocaleDateString()	}
					titulo = "TITULO del 2do articulo !" >
					<	p > Otro articulo bla bla bla bla Lorem ipsum dolor sit amet. </p> 
					</Articulo>
			</div>
			
		)
	}


}

export default AprendiendoChildren