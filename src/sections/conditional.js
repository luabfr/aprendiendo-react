//hay que importar react, y su MODULO Component (va entre {})
import React , {Component} from 'react'


// Componente A
class LoginButton extends Component{
  render(){
    return <button> Iniciar Sesion</button>
  }
}
// Componente B
class LogoutButton extends Component {
  render() {
    return (
      <div > 
        <p>Bienvenido, usuairo!</p>
        <button>Cerrar sesión</button>
      </div>
    )
  }
}

// Funcion condicional
function usarConditionalRendering(mostrarA){
  if (mostrarA){
    return <LoginButton />
  }else{
    return <LogoutButton />
  }
}



export default class ConditionalSection extends Component{
  constructor(){
    //inicializamos y declaramos un STATE que usamos para evaluar el condicional
    super()
    this.state = { isUserLogged: false}
  }
  render(){
    // Condicional mediante llamada a funcion
    // const conditionalComponent = usarConditionalRendering(this.state.isUserLogged)
    
    // Condicional mediante ternaria
    const miConditionalComponent = this.state.isUserLogged ? <LoginButton/> : <LogoutButton/>
    return(
      < div >
        < h4 > Conditional Rendering </h4>

        {/* Esto renderiza en base a un condicional */}
        { miConditionalComponent }



        </div>
    )
  }
  
}